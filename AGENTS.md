# AGENTS.md

Single-page static CV (Spanish) with no package manager, build step, tests, or CI. Files are served as-is from the repo root; `prompts.md` is empty and there is no README.

## Run and verify

- There are no install/build/lint/test commands. Verify changes manually in a browser at desktop and mobile widths, with the console open.
- Asset URLs are root-absolute (`/publico/...`). Serve the repo root over HTTP rather than opening via `file://`. Python and Node/npm are not installed here, so `python -m http.server` and `npx serve` will not work.
- Git is installed but not on `PATH`; call `& 'C:\Program Files\Git\cmd\git.exe' ...`. Branch is `main`; `origin` is `https://github.com/Santiago-Rodriguez-Alvarado/Cv.git`.

## Wiring gotchas

- `index.html` loads `css/styles.css` (the canonical, redesigned stylesheet) and `js/interactions.js` (the canonical interactive script). The root-level `styles.css` and `interactions.js` are legacy copies and are not loaded; do not edit them for visual changes.
- `js/js.txt` is a byte-identical duplicate of the legacy root `interactions.js`; do not edit it.
- Project and gallery images are placeholder SVGs under `publico/img/muestras/`; replace them with real screenshots using the same filenames. The legacy stylesheet still references `banner.svg`, but the active stylesheet does not.
- `.gitignore` is UTF-16LE with a BOM (most tools read it as binary). Leave its encoding alone unless deliberately fixing it.
- Page copy is Mexican Spanish; keep new copy in Spanish. Files are UTF-8 (`.gitignore` excepted) with CRLF line endings.

## Known breakage (as of the initial commit)

The handwritten code contains syntax errors that can mask your changes:

- JS: the active `js/interactions.js` is fixed; the legacy root `interactions.js` and `js/js.txt` still listen for `'button'` instead of `'click'`.
- CSS: the root `styles.css` still has the old syntax errors (`font-family;`, `hegiht`, `front-size`, `padding: 8px:`, malformed `@media`); the active `css/styles.css` is clean.
- HTML: `<body>` opens inside `<header>`, `<h1>` sits outside `<main>`, and `aria-labelledby="expericence-title"` does not match `id="experience-title"`.

## Reglas del curso

1. Clases en inglés, en minúsculas y con guiones.
2. Texto visible en español.
3. Cada receta es un `<article>` con su `<h2>`.
4. Nada de estilos en línea.
