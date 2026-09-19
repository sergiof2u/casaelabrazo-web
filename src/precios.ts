// Las tarifas del sitio viven solo acá. En el texto de las páginas se importa
// tarifas y se imprime el campo; nunca se escribe la cifra suelta.
// El negocio las tiene en el vault, `10 CASA EL ABRAZO/ESTADO DEL TRABAJO.md`.

export const tarifas = {
  // Noche de fin de semana: viernes, sábado o domingo.
  finDeSemana: 350000,
  // Promoción: dos noches o más, por noche.
  promocionDosNoches: 290000,
  // Lunes a jueves: 10 % de descuento sobre la tarifa de una noche.
  entreSemana: 315000,
} as const;

export const dosNoches = tarifas.promocionDosNoches * 2;

export const peso = (valor: number) => `$${valor.toLocaleString('es-CO')}`;
