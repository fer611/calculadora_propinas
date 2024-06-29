/**
 * Formatea una cantidad como moneda en Bolivianos (Bs).
 *
 * @param quantity - La cantidad a formatear.
 * @returns La cantidad formateada como una cadena en Bolivianos (Bs).
 */
export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("es-BO", {
    style: "currency",
    currency: "BOB",
  }).format(quantity);
}
