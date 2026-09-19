# Casa El Abrazo — sitio web

Sitio de Casa El Abrazo, la cabaña de alquiler de fin de semana en Subachoque, Cundinamarca. Estático, hecho con
Astro, publicado gratis en GitHub Pages con despliegue automático en `casaelabrazo.com`.

Estas instrucciones aplican a cualquier IA que trabaje en este repositorio.

Las reglas del negocio viven en el vault de Obsidian: `10 CASA EL ABRAZO/CLAUDE.md` y, para el estado del trabajo,
`10 CASA EL ABRAZO/ESTADO DEL TRABAJO.md`. Ante una discrepancia, manda el vault.

---

## Cómo se actualiza el sitio

El contenido no está en el código: vive en archivos Markdown con encabezado. Quien administra el sitio describe
lo que quiere, el agente escribe el archivo que corresponde y hace `git push`. El sitio se publica solo.

---

## Qué es Casa El Abrazo, y qué no

Cabaña campestre de alquiler de fin de semana en Subachoque. La construyó Sergio, orfebre, en estructura metálica.
Es de Sergio y Alexandra.

**La capacidad es una pareja con un niño.** No se alquila para grupos ni para fiestas, y el texto no debe sugerir
lo contrario en ningún lado.

**El oficio tiene un solo espacio.** Desde el 2026-09-19, por decisión de Sergio, que la casa la haya hecho un
orfebre deja de encabezar el sitio. Se menciona solo en la sección "Quién la hizo" de la portada, que enlaza a
SUMA (`site.suma`, https://sumaensubachoque.com). En el resto de páginas no se habla de orfebre, soldadura pieza
por pieza ni de "la construyó su dueño": se describe la casa.

**A diferencia de la web de SUMA, aquí el fin de semana es el producto**, no una ruta de entrada. En SUMA se
promociona sin encabezar la identidad; aquí va al frente.

**La reserva es directa: WhatsApp y el formulario de la web.** No hay plataformas de intermediación y no se
mencionan: nada de "también nos encuentras en Airbnb" ni de precios de plataforma.

---

## Reglas de redacción

**Nunca la construcción "no es X, sino Y".** Es la regla de estilo más estricta del proyecto.

**Excepción aprobada por Sergio el 2026-09-19:** en `la-casa.md`, la frase "No es una casa de grupos ni de
fiestas: es un lugar para descansar" se queda tal cual. No se reescribe.

**La reserva entra por WhatsApp y por correo.** El correo es `hola@sumaensubachoque.com`, el de SUMA, y vive en
`site.correo`. Más adelante habrá uno propio de la cabaña, del tipo `estadia@sumaensubachoque.com`; cuando exista
se cambia solo esa línea.

**Nada de superlativos de turismo masivo**: "experiencia inolvidable", "paraíso escondido", "desconéctate del
mundo". El tono es el de los volantes de la marca: calma, sin promesas infladas.

**No prometer lo que no está confirmado.** Wifi, desayuno, piscina, chimenea, mascotas: si no está verificado con
Sergio, no se escribe ni en positivo ni como "próximamente".

**Tuteo** al dirigirse al lector: tienes, quieres, puedes, escríbenos. **Nunca voseo**: nada de tenés, querés,
podés, escribinos.

**El texto es de Sergio y Alexandra.** Se propone y se corrige con ellos; no se reescribe su voz por iniciativa
propia.

Todo en español. Fechas en formato ISO `AAAA-MM-DD`.

---

## Los precios viven en un solo lugar

`src/precios.ts`. Aparecen en la portada y en la página de tarifas, y se traen desde ahí.

```astro
import { tarifas, dosNoches, peso } from '../precios';
```

**La cifra se escribe solo en `src/precios.ts`; en el texto de las páginas va la referencia, nunca el número
suelto.** Cambiar una tarifa es cambiar una línea.

Si una tarifa todavía no está definida, se dice que está por definir, y se pregunta antes de publicar.

---

## Estructura del contenido

| Qué | Dónde | URL |
| --- | --- | --- |
| Páginas fijas de prosa | `src/content/paginas/<nombre>.md` | `/<nombre>/` |
| Portada | `src/pages/index.astro` | `/` |
| Tarifas | `src/pages/tarifas.astro` | `/tarifas/` |
| Reservar, con el formulario | `src/pages/reservar.astro` | `/reservar/` |
| Plantilla de las páginas fijas | `src/pages/[pagina].astro` | — |

Los campos de la colección `paginas` están definidos en `src/content.config.ts`: `title`, `descripcion`,
`imagen`, `orden`. Un campo mal escrito rompe la compilación antes de publicar, y eso es a propósito.

---

## Datos que se repiten

`src/site.ts`: nombre, etiqueta, WhatsApp, Instagram, lugar, el menú y el pie, y la capacidad. El número de
WhatsApp se escribe una sola vez ahí.

El formulario de reserva no manda nada a ningún servidor: arma el mensaje con los datos del huésped y abre
WhatsApp con él escrito. **No agregar servicios de formularios de terceros ni analítica sin hablarlo antes.**

---

## Imágenes

Van en `public/fotos/<sección>/` y se referencian con ruta absoluta: `/fotos/casa/terraza.jpg`.

**Hay que reducirlas antes de guardarlas.** Lado largo de 1600 px para fotos de contenido y 2400 px para las de
encabezado, JPEG de calidad 80, progresivo. Eso deja archivos de 150 a 400 KB. Los originales de cámara pesan
entre 2 y 4 MB y no se suben: mucha gente abre esto desde el celular con datos móviles.

Los originales viven fuera del repositorio, en `F:\OneDrive\El Abrazo\`.

---

## Comandos

- `npm run dev` — servidor local en localhost:4321
- `npm run build` — compila a `dist/`
- `npm run preview` — previsualiza la compilación
- `npm run astro check` — valida tipos y contenido

## Publicar

```bash
cd /c/Users/USUARIO/casaelabrazo-web
npm run build
git status --short
git add <archivos>
git commit -m "<mensaje>"
git push origin main
```

`git push` a `main` dispara GitHub Actions, que compila y publica en GitHub Pages. El dominio se resuelve con
`public/CNAME`.

El run tarda entre 30 y 100 segundos. Verificar con `gh run list -R sergiof2u/casaelabrazo-web --limit 2` y
`curl -s -o /dev/null -w "%{http_code}\n" https://casaelabrazo.com/<ruta>/`.

**El navegador miente después de un despliegue**: sigue sirviendo de caché el HTML y el CSS anteriores y parece
que el cambio no se publicó. Comprobar con `curl`, no con la vista.

---

## Trampas conocidas

- **El DNS del operador sumidera dominios.** El resolutor del router devuelve `0.0.0.0` para algunos dominios
  propios. Si alguien dice que el sitio está caído, comprobar primero con `nslookup casaelabrazo.com 1.1.1.1`
  contra `nslookup casaelabrazo.com 192.168.1.1` antes de tocar el repositorio.
- Nunca tocar `dist/` ni `node_modules/`.
- Sin comentarios en el código salvo que se pidan.

---

## Convenciones de maquetación

- Contenedor de 1080 px (`.container`); el texto de las páginas de contenido va en `.article`, de 820 px, con el
  `h1` dentro de esa misma columna.
- Las tablas de datos son `<table>` reales con `.meta-table`.
- La paleta y las clases están en `src/styles/global.css`, en un solo archivo: crema, rosa empolvado y terracota,
  tomadas de los volantes de la marca. Tipografías: Cormorant Garamond para títulos, Jost para el texto.
