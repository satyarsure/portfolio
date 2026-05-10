# Satya Sure — Portfolio

[![Live site](https://img.shields.io/badge/live-satyarsure.github.io%2Fportfolio-c2410c?style=flat-square)](https://satyarsure.github.io/portfolio/)
[![Built with](https://img.shields.io/badge/built_with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-1a1a1a?style=flat-square)](#)
[![No framework](https://img.shields.io/badge/no-framework-52525b?style=flat-square)](#)

A single-page portfolio for **Satya Sure** — Senior Solution Architect & Data / AI Director.

**Live:** https://satyarsure.github.io/portfolio/

![Portfolio preview](og-image.png)

## Stack

- Plain HTML5, CSS, and vanilla JavaScript — no build step, no framework, no dependencies.
- System fonts (no web font downloads).
- Light + dark mode with manual toggle (defaults to system preference).
- Fully responsive, WCAG-AA contrast, keyboard-navigable, `prefers-reduced-motion` aware.
- Total page weight under 100 KB on first load.

## Structure

```
.
├── index.html       semantic single-page site
├── styles.css       theme tokens + responsive layout
├── script.js        theme toggle, mobile nav, year stamp
├── resume.pdf       downloadable CV (add manually before deploy)
├── favicon.svg      monogram favicon (adapts to dark mode)
├── og-image.svg     social-share source
├── og-image.png     social-share PNG (generate from SVG — see below)
├── robots.txt       SEO
├── sitemap.xml      SEO
└── README.md
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Generating the OG image PNG

Most social platforms require PNG/JPG for share previews. Convert the SVG with any of:

```bash
# Option 1 — rsvg-convert (brew install librsvg)
rsvg-convert -w 1200 -h 630 og-image.svg -o og-image.png

# Option 2 — ImageMagick (brew install imagemagick)
magick -background none -size 1200x630 og-image.svg og-image.png

# Option 3 — online: drag og-image.svg into https://svgtopng.com/
```

## Deployment

Hosted on **GitHub Pages**:

1. Push to `main`.
2. In GitHub → Settings → Pages → Source: **Deploy from a branch** → Branch: **main** → Folder: **/ (root)** → **Save**.
3. Wait ~1 minute, then visit https://satyarsure.github.io/portfolio/.

## License

Content © Satya Sure. Markup and styles available for reference.
