# Nithin Emmanuel — Portfolio

My personal portfolio website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com) and [Framer Motion](https://www.framer.com/motion/).

**Live site:** https://nithinpolepaka.github.io/portfolio/

## About

Python developer at Solix Technologies, focused on GenAI/LLM applications — RAG pipelines, Text2SQL/NL2SQL, and hybrid retrieval using LangChain, LlamaIndex and Milvus.

## 🖥️ Built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion/)

## ✉️ Contact form

The "Send Message" form opens a pre-filled `mailto:` link using the address configured in `src/data/siteMetaData.mjs` (`email` field). This keeps the site fully static with no backend or server-side secrets required, so it can run on GitHub Pages.

## 🚀 Deployment

Deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy-pages.yml`). Every push to `main` builds a static export (`next build` with `output: "export"`) and publishes the `out/` folder to Pages.

To redeploy manually, run the "Deploy to GitHub Pages" workflow from the **Actions** tab.

## 🌟 Customizable theme

Premade themes are available inside `theme-examples.css`. Copy the styles you want into `globals.css`, or create your own theme by editing the CSS variables there.

Notes:

1. Custom theme CSS variables only take an HSL value separated by spaces.
2. The animated logo's theme color has to be set separately.

## 🛠️ Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## ✨ SEO

Update the Google Search Console verification code in `src/data/siteMetaData.mjs` (`googleSiteVerification`). Create one for free at <https://search.google.com/search-console/welcome>.
