import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import dotenv from 'dotenv';

dotenv.config({path: '.env.local'});
dotenv.config();

const SOURCE_LOCALE = 'en';
const TARGET_LOCALES = ['fr', 'es', 'pt', 'ar'];
const ROOTS_TO_TRANSLATE = ['content'];
const MESSAGE_SOURCE_FILE = path.join('messages', `${SOURCE_LOCALE}.json`);
const CACHE_FILE = '.translation-cache.json';
const force = process.argv.includes('--force');

const endpoint =
  process.env.AZURE_TRANSLATOR_ENDPOINT ||
  'https://api.cognitive.microsofttranslator.com';
const key = process.env.AZURE_TRANSLATOR_KEY;
const region = process.env.AZURE_TRANSLATOR_REGION;

if (!key) {
  throw new Error('Missing AZURE_TRANSLATOR_KEY. Add it to .env.local.');
}

if (!region) {
  throw new Error('Missing AZURE_TRANSLATOR_REGION. Add it to .env.local.');
}

const skipKeys = new Set([
  'id',
  '_id',
  'slug',
  'href',
  'url',
  'src',
  'email',
  'phone',
  'image',
  'icon',
  'locale',
  'language'
]);

function readCache() {
  if (!fs.existsSync(CACHE_FILE)) return {};
  return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
}

function writeCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

function hashContent(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

function listJsonFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  const results = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(fullPath);
    }
  }
  return results;
}

function shouldSkipKey(keyPath) {
  const lastKey = keyPath.split('.').at(-1);
  return lastKey ? skipKeys.has(lastKey) : false;
}

function collectStrings(value, keyPath = '', output = []) {
  if (typeof value === 'string') {
    if (!shouldSkipKey(keyPath) && value.trim().length > 0) {
      output.push({keyPath, text: value});
    }
    return output;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${keyPath}.${index}`, output));
    return output;
  }

  if (typeof value === 'object' && value !== null) {
    Object.entries(value).forEach(([key, nestedValue]) => {
      const nextPath = keyPath ? `${keyPath}.${key}` : key;
      collectStrings(nestedValue, nextPath, output);
    });
  }

  return output;
}

function setByPath(object, keyPath, newValue) {
  const parts = keyPath.split('.').filter(Boolean);
  let current = object;

  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const isLast = index === parts.length - 1;
    const key = Array.isArray(current) ? Number(part) : part;

    if (isLast) {
      current[key] = newValue;
    } else {
      current = current[key];
    }
  }
}

async function translateBatch(texts, targetLocale) {
  const url = `${endpoint.replace(/\/$/, '')}/translate?api-version=3.0&from=en&to=${targetLocale}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Ocp-Apim-Subscription-Region': region,
      'Content-Type': 'application/json',
      'X-ClientTraceId': crypto.randomUUID()
    },
    body: JSON.stringify(texts.map((text) => ({Text: text})))
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Azure Translator error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.map((item) => item.translations[0].text);
}

async function translateJsonFile({sourcePath, targetPath, cacheKey, targetLocale, cache}) {
  const raw = fs.readFileSync(sourcePath, 'utf8');
  const sourceHash = hashContent(raw);

  if (!force && cache[cacheKey] === sourceHash && fs.existsSync(targetPath)) {
    console.log(`Skipped ${cacheKey} — no English changes`);
    return;
  }

  const json = JSON.parse(raw);
  const translatedJson = structuredClone(json);
  const strings = collectStrings(json);

  if (strings.length === 0) {
    fs.mkdirSync(path.dirname(targetPath), {recursive: true});
    fs.writeFileSync(targetPath, JSON.stringify(translatedJson, null, 2));
    cache[cacheKey] = sourceHash;
    console.log(`Saved ${targetPath} — no translatable strings`);
    return;
  }

  const batchSize = 50;
  for (let start = 0; start < strings.length; start += batchSize) {
    const batch = strings.slice(start, start + batchSize);
    const translatedTexts = await translateBatch(
      batch.map((item) => item.text),
      targetLocale
    );

    translatedTexts.forEach((translatedText, index) => {
      setByPath(translatedJson, batch[index].keyPath, translatedText);
      console.log(`Translated ${cacheKey}: ${batch[index].keyPath}`);
    });
  }

  fs.mkdirSync(path.dirname(targetPath), {recursive: true});
  fs.writeFileSync(targetPath, JSON.stringify(translatedJson, null, 2));
  cache[cacheKey] = sourceHash;
  console.log(`Saved ${targetPath}`);
}

async function main() {
  const cache = readCache();

  for (const root of ROOTS_TO_TRANSLATE) {
    const sourceDir = path.join(root, SOURCE_LOCALE);
    const sourceFiles = listJsonFiles(sourceDir);

    for (const targetLocale of TARGET_LOCALES) {
      for (const sourcePath of sourceFiles) {
        const relativePath = path.relative(sourceDir, sourcePath);
        await translateJsonFile({
          sourcePath,
          targetPath: path.join(root, targetLocale, relativePath),
          cacheKey: `${root}/${targetLocale}/${relativePath}`,
          targetLocale,
          cache
        });
      }
    }
  }

  if (fs.existsSync(MESSAGE_SOURCE_FILE)) {
    for (const targetLocale of TARGET_LOCALES) {
      await translateJsonFile({
        sourcePath: MESSAGE_SOURCE_FILE,
        targetPath: path.join('messages', `${targetLocale}.json`),
        cacheKey: `messages/${targetLocale}.json`,
        targetLocale,
        cache
      });
    }
  }

  writeCache(cache);
  console.log('Azure translation complete. Review the generated files before publishing.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
