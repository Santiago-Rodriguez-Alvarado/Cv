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