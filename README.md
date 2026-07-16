# AI4PEP Azure Local i18n Website Template

This is a Next.js + Tailwind + next-intl website starter for AI4PEP with **local JSON content** and **Azure Translator API** support.

It does not use Sanity. You edit content manually in JSON files, then run a translation command to generate other language files.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- next-intl multilingual routing
- next-themes dark/light mode
- shadcn-style Button component
- Lucide icons
- Azure Translator script
- Local JSON content files

## Run the website

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/en
```

Other language routes:

```text
http://localhost:3000/fr
http://localhost:3000/es
http://localhost:3000/pt
http://localhost:3000/ar
```

## Add Azure translation keys

```bash
cp .env.example .env.local
```

Fill in:

```env
AZURE_TRANSLATOR_KEY=your_key_here
AZURE_TRANSLATOR_REGION=your_region_here
AZURE_TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com
```

## Edit content

Edit only the English content first:

```text
content/en/home.json
messages/en.json
```

## Translate content

```bash
npm run translate
```

This will generate or update:

```text
content/fr/home.json
content/es/home.json
content/pt/home.json
content/ar/home.json
messages/fr.json
messages/es.json
messages/pt.json
messages/ar.json
```

## Force translation

```bash
npm run translate:force
```

## Important

The script uses `.translation-cache.json` to avoid translating files that have not changed.

Review translated text before publishing, especially technical public-health content.
