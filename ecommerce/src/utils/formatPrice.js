const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const formatPrice = (value) => `${formatter.format(value)} ₼`;
