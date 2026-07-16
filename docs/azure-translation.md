# Azure translation workflow

This template uses local JSON files and Azure Translator.

## 1. Add Azure keys

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Then fill in:

```env
AZURE_TRANSLATOR_KEY=your_key
AZURE_TRANSLATOR_REGION=your_region
AZURE_TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com
```

## 2. Edit English content

Edit files in:

```text
content/en/
messages/en.json
```

## 3. Translate

Run:

```bash
npm run translate
```

This creates or updates:

```text
content/fr/
content/es/
content/pt/
content/ar/
messages/fr.json
messages/es.json
messages/pt.json
messages/ar.json
```

## 4. Change tracking

The script creates `.translation-cache.json`.

If an English file has not changed, it is skipped.

To force translation again:

```bash
npm run translate:force
```

## 5. Safety

Do not commit `.env.local` to GitHub.
Your Azure key must stay server-side/local only.
