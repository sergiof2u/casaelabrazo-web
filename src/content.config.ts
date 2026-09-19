import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// El texto de las páginas fijas. Separa la prosa de la maquetación: se puede
// reescribir una página entera sin tocar código.
const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    title: z.string(),
    descripcion: z.string().optional(),
    imagen: z.string().optional(),
    orden: z.number().default(0),
  }),
});

export const collections = { paginas };
