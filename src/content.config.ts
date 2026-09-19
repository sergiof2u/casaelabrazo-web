import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// El texto de las páginas fijas. Separa la prosa de la maquetación: se puede
// reescribir una página entera sin tocar código.
// El nombre del archivo es la URL: la-casa.md publica en /la-casa/.
const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    title: z.string(),
    // Una línea grande bajo el título, la que abre la página.
    entrada: z.string().optional(),
    descripcion: z.string().optional(),
    imagen: z.string().optional(),
  }),
});

export const collections = { paginas };
