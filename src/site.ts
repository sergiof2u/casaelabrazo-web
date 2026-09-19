// Datos del sitio. Todo lo que se repite en varias páginas vive acá y en
// ningún otro lugar. Ver AGENTS.md.

export const site = {
  nombre: 'Casa El Abrazo',
  etiqueta: 'Cabaña campestre',
  tagline: 'Cabaña de alquiler de fin de semana en Subachoque',
  descripcion:
    'Cabaña campestre de alquiler de fin de semana en Subachoque, Cundinamarca. Para una pareja con un niño. La construyó un orfebre, en estructura metálica. Reserva directa por WhatsApp.',

  // Contacto: la reserva es directa, sin plataformas de intermediación.
  whatsapp: '573164142904',
  whatsappVisible: '316 414 2904',
  instagram: 'casaelabrazo',

  lugar: 'Subachoque, Cundinamarca',
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;

// Menú principal. Primero lo que decide la reserva (la casa, las tarifas),
// después el resto.
export const nav = [
  { href: '/la-casa/', label: 'La casa' },
  { href: '/fotos/', label: 'Fotos' },
  { href: '/la-experiencia/', label: 'La experiencia' },
  { href: '/tarifas/', label: 'Tarifas' },
  { href: '/como-llegar/', label: 'Cómo llegar' },
] as const;

// Enlaces del pie.
export const navPie = [
  { href: '/reservar/', label: 'Reservar' },
] as const;

// Hechos que se repiten en varias páginas. Si cambian, se cambian acá.
export const capacidad = 'una pareja con un niño';
