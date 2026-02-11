# Trilolabs Next.js Conversion

This project wraps the existing static `index.html` exported from Framer in a modern Next.js application.

## Structure

- `index.html` – original static Framer export (kept as the single source of truth)
- `app/layout.js` – Next.js root layout; reads the `<head>` content from `index.html` (meta, styles, etc.)
- `app/page.js` – Next.js home page; reads the `<body>` content from `index.html` and renders it
- `next.config.mjs` – basic Next.js configuration
- `package.json` – Next.js/React dependencies and scripts

Both `layout.js` and `page.js` parse `index.html` at build/runtime using Node's `fs` and `path` modules. Inline `<script>` tags from the original file are intentionally stripped out to avoid conflicts with the React/Next.js runtime; the visual layout and CSS from Framer are preserved.

## Getting Started

From the `trilolabs` directory (where this file lives), run:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser to see the site rendered via Next.js.

