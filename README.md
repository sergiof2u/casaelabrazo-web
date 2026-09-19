# casaelabrazo-web

Sitio de **Casa El Abrazo**, la cabaña de alquiler de fin de semana en Subachoque, Cundinamarca.

Astro estático, publicado en GitHub Pages con despliegue automático en `casaelabrazo.com`.

## Comandos

```bash
npm install
npm run dev      # servidor local en localhost:4321
npm run build    # compila a dist/
npm run preview  # previsualiza la compilación
```

## Estructura

- `src/site.ts` — datos del sitio y menú (WhatsApp, Instagram, capacidad).
- `src/precios.ts` — las tarifas, en un solo lugar.
- `src/content/paginas/` — el texto de las páginas fijas, en Markdown.
- `src/pages/` — portada, tarifas, reservar y la plantilla de páginas.
- `src/styles/global.css` — la hoja de estilo única.
- `public/CNAME` — el dominio.

## Reglas

Las reglas de redacción y de estructura están en `AGENTS.md`. Las del negocio, en el vault de Obsidian:
`10 CASA EL ABRAZO/CLAUDE.md` y `10 CASA EL ABRAZO/ESTADO DEL TRABAJO.md`.

## Pendientes

- La galería de fotos: hay que reducir los originales antes de subirlos.
- Las condiciones que faltan: mascotas, cancelación, horarios de entrada y salida, hasta cuándo vale la promoción
  de dos noches, y si el masaje va incluido o aparte.
- Los textos de las páginas son borrador y están por corregir con Sergio.
