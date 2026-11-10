# AGENTS.md

Single-page static CV (Spanish) with no package manager, build step, tests, or CI. Files are served as-is from the repo root; `prompts.md` is empty and there is no README.

## Run and verify

- There are no install/build/lint/test commands. Verify changes manually in a browser at desktop and mobile widths, with the console open.
- Asset URLs are root-absolute (`/publico/...`). Serve the repo root over HTTP rather than opening via `file://`. Python and Node/npm are not installed here, so `python -m http.server` and `npx serve` will not work.
- Git is installed but not on `PATH`; call `& 'C:\Program Files\Git\cmd\git.exe' ...`. Branch is `main`; `origin` is `https://github.com/Santiago-Rodriguez-Alvarado/Cv.git`.

## Wiring gotchas

- `index.html` loads `css/styles.css` and `js/interactions.js`, but neither file exists. The real tracked sources are the root-level `cssstyles.css` and `jsinteractions.js`. CSS/JS edits are invisible until you reconcile the `<link>`/`<script>` paths or move the files.
- `js/js.txt` is a byte-identical duplicate of `jsinteractions.js`; do not edit it.
- Every `/publico/img/muestras/*.svg` reference is missing from the repo (`banner.svg`, `thumb-cv.svg`, `thumb-store.svg`, `article-html.svg`, `article-flexbox.svg`, `article-accessibility.svg`). The about banner, project thumbnails, and skills gallery are broken until those assets are added under `publico/img/muestras/`.
- `.gitignore` is UTF-16LE with a BOM (most tools read it as binary). Leave its encoding alone unless deliberately fixing it.
- Page copy is Mexican Spanish; keep new copy in Spanish. Files are UTF-8 (`.gitignore` excepted) with CRLF line endings.

## Known breakage (as of the initial commit)

The handwritten code contains syntax errors that can mask your changes:

- JS: the "Más sobre mí" toggle listens for `'button'` instead of `'click'`.
- CSS: `font-family;` is missing its value, `hegiht`/`front-size` are typos, `padding: 8px:` uses a colon, and the `@media (max-width: 600px)` block is malformed.
- HTML: `<body>` opens inside `<header>`, `<h1>` sits outside `<main>`, and `aria-labelledby="expericence-title"` does not match `id="experience-title"`.

## Reglas del curso

1. Clases en inglés, en minúsculas y con guiones.
2. Texto visible en español.
3. Cada receta es un `<article>` con su `<h2>`.
4. Nada de estilos en línea.
