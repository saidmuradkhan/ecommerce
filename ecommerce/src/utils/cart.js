export const FREE_SHIPPING_THRESHOLD = 200;
export const SHIPPING_FEE = 10;

export const getShipping = (subtotal) =>
  subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
