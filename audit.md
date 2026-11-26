# Sesión 11 · css/generated.css

## Falla 1
- **Principio:** Jerarquía
- **Línea:** `css/generated.css:282`
- **Qué falla:** El párrafo principal de la sección `#about` (`#about .col-1-2:first-of-type p`) tenía `font-size: clamp(1.6rem, 3vw, 2.3rem)` (hasta `36.8px`), superando a los títulos `h3` (`24px`) y compitiendo con los `h2` (`41.6px`).
- **Por qué:** Rompe la escala tipográfica descendente (`h1` > `h2` > `h3` > párrafos), haciendo que un texto de cuerpo llame más la atención que los encabezados de sección.
- **Cómo la corregí:** Cambié manualmente el valor a `font-size: 1.15rem;` (`18.4px`), recargué el navegador y comprobé en DevTools que quedó por debajo de `h3` (`24px`).

## Falla 2
- **Principio:** Tipografía
- **Línea:** `css/generated.css:284`
- **Qué falla:** El mismo párrafo de lectura continua en `#about` tenía un interlineado muy apretado de `line-height: 1.1`.
- **Por qué:** Un interlineado de `1.1` sirve solo para títulos cortos de una línea; en párrafos largos dificulta la lectura fluida, que requiere un valor entre `1.4` y `1.6`.
- **Cómo la corregí:** Ajusté manualmente la propiedad a `line-height: 1.5;`, recargué la página y verifiqué que el alto de línea subió a `27.6px` (`18.4px × 1.5`) mejorando la separación entre renglones.

## Falla 3
- **Principio:** Espacio
- **Línea:** `css/generated.css:389`
- **Qué falla:** El título de cada tarjeta de proyecto (`#projects .col-1-3 h3`) tenía `margin-top: 0.15rem` (`2.4px`), un valor arbitrario fuera de la escala de 8 en 8.
- **Por qué:** Los márgenes deben salir de una escala consistente (múltiplos de `8px` / `0.5rem`) para mantener ritmo visual y relaciones claras de proximidad entre elementos.
- **Cómo la corregí:** Le pedí a `opencode` (en modo *Plan* y luego *Build*) que cambiara únicamente `margin-top: 0.15rem;` a `margin-top: 0.5rem;` (`8px`) en `#projects .col-1-3 h3` sin tocar otras reglas; validé con `git diff` que solo modificó ese renglón y revisé el modelo de caja en DevTools.

## Falla 4
- **Principio:** Color
- **Línea:** `css/generated.css:7`
- **Qué falla:** La variable `--muted: #66736e;` usada en `#projects .col-1-3 p`, `#image-counter` y `footer` no alcanzaba el contraste mínimo de `4.5:1` sobre los fondos `--paper` (`#f4efe5`) y `--surface` (`#fffdf8`).
- **Por qué:** El texto normal necesita una relación de contraste de al menos `4.5:1` frente a su fondo para garantizar legibilidad accesible.
- **Cómo la corregí:** Solicité a `opencode` (en *Plan* y *Build*) un tono oscuro para `--muted` en `:root` que superara `4.5:1` sin modificar nada más; aplicó `#5d6964`, comprobé con `git diff` que fue un único cambio y medí en el selector de color de *Estilos* en DevTools que el *Contrast ratio* superó `4.5:1` con palomita verde.


## Lo que encontró opencode

- **Métrica 1 — Jerarquía (sin fallos):** `opencode` confirmó una escala descendente estricta (`h1` 41.6–76.8px > `h2` 28.8–41.6px > `h3` 24px > `p` 16px) en todo el rango de viewport. Al verificar en DevTools (*Calculado*), **tenía razón** en que los encabezados nunca se igualan ni se invierten.
- **Métrica 2 — Tipografía (`header h1` con `line-height: 0.95`, `h2` con `line-height: 1` y `#projects .col-1-3 img` con `line-height: 1.3`):** `opencode` señaló estos tres valores por salir de los rangos `1.1–1.2` y `1.4–1.65`, aunque validó que las 2 familias tipográficas (`--font-display` y `--font-body`) y el resto de interlineados (`1.45` a `1.65`) cumplen. Al medirlos en DevTools, comprobé que **no tenía razón al marcarlos como fallos (falsos positivos)**: en títulos *display* grandes (`h1` y `h2`), un interlineado compacto (`0.95–1`) mantiene cohesionadas las líneas sin encimarse, y `img` no es texto corrido.
- **Métrica 3 — Espacio (28 declaraciones con `clamp(...)` y ajustes menores como `0.75rem`, `0.85rem`, `0.9rem`):** `opencode` los reportó por no ser múltiplos exactos de `8px`. Al revisar el modelo de caja en DevTools, comprobé que **no tenía razón al tratarlos como errores**: son valores responsivos fluidos (`clamp`) y micro-ajustes ópticos en botones y listas que mantienen intacta la proximidad visual de los títulos con su contenido.
- **Métrica 4 — Color (sin fallos):** `opencode` confirmó que todo el texto supera el contraste mínimo de `4.5:1` (`--muted` `#5d6964` alcanza `4.99:1` sobre `--paper` y `5.63:1` sobre `--surface`; `.contact-float` llega a `4.80:1`; `::selection` a `4.53:1`). Al medirlo en el selector de color de DevTools (*Contrast ratio*), **tenía razón** y todos muestran palomita verde (`✓`).