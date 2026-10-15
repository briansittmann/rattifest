# CLAUDE.md

## Proyecto

Landing de **Ratti Fest** (fiestas electrónicas / pool parties en Buenos Aires). Sitio estático en una sola página, implementado a partir de un diseño de Google Stitch, con una capa de animaciones agregada encima.

## Stack y comandos

- Astro 7 + Tailwind CSS 4 vía `@tailwindcss/vite`. Tokens de diseño en el bloque `@theme` de `src/styles/global.css` (no hay `tailwind.config.js`).
- Fuentes con la Fonts API de Astro (`fonts` en `astro.config.mjs`): Space Grotesk (`font-display`) e Inter (`font-body`).
- Íconos: `astro-icon` + `@iconify-json/material-symbols` (`<Icon name="material-symbols:..." />`), renderizados como SVG inline.
- Animaciones: `motion` (API vanilla: `animate`, `inView`, `scroll`, `stagger`) en `src/scripts/motion.ts`, más CSS moderno (scroll-driven animations, `@property`, `::details-content`, popover).
- Node `>=22.12.0`.

```bash
npm run dev       # servidor de desarrollo
npm run build     # build estático a dist/
npm run preview   # sirve dist/ localmente
```

No hay linter ni tests. Para verificar: `npm run build` y revisar en el navegador (desktop y mobile).

## Estructura

- `src/data/site.ts`: todo el contenido (fechas, precios, lineup, FAQ, links). La fecha de `nextEvent.start` alimenta el countdown.
- `src/components/`: una sección por componente, en el orden de `src/pages/index.astro`.
- `src/assets/img/`: imágenes descargadas de Stitch (se optimizan con `<Image>` de `astro:assets`).

## Animaciones: reglas

- Los elementos con `data-reveal`, `data-reveal-clip`, `data-hero-item` y `.line-mask` arrancan ocultos **solo** si `<html>` tiene `motion-ok`, que agrega un script inline en `Layout.astro` cuando no hay `prefers-reduced-motion`. Si `motion.ts` no carga en 3 s, la clase se quita y todo queda visible.
- `data-stagger` en un contenedor anima en cascada sus hijos directos con `data-reveal`.
- `data-parallax` mueve la imagen dentro de su marco con `scroll()`; el marco necesita `overflow-hidden` y la imagen un `scale` mayor a 1.
- Con `clip-path: inset(100% ...)` el elemento no tiene área visible para el IntersectionObserver: observar el contenedor, no el elemento.
- Motion escribe `transform` inline: no usar utilidades de `transform` de Tailwind en elementos que también se animan con `y`.

## Diseño de referencia (Stitch)

`stitch_ratti_fest/` (`code.html`, `DESIGN.md`, `screen.png`) está en `.gitignore`: existe solo en la máquina local. El usuario quiere conservar el diseño tal cual; los cambios visuales se limitan a animaciones y arreglos puntuales.

## Pendientes de contenido

Todo el contenido es placeholder de Stitch: fechas (se movieron a oct/nov 2026 para que el countdown funcione), precios, cupos, número de WhatsApp de mesas, links de redes y legales (`href="#"`), botones de compra de General/VIP (no llevan a ninguna ticketera) y el formulario de newsletter (no envía nada).

## Deploy

- Repo: `git@github.com:briansittmann/rattifest.git`, rama `main`.
- Pedir permiso antes de hacer push.
