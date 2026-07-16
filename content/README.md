# Content folder

Edit English content in `content/en/*.json`.

Then run:

```bash
npm run translate
```

The Azure translation script will generate matching files in:

- `content/fr`
- `content/es`
- `content/pt`
- `content/ar`

The script uses `.translation-cache.json` to skip files that have not changed.
