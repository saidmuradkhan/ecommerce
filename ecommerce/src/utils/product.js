export const LOW_STOCK_THRESHOLD = 5;

export const getStockStatus = (stock) => {
  if (stock <= 0) return 'out';
  if (stock <= LOW_STOCK_THRESHOLD) return 'low';
  return 'in';
};

export const getDiscountPercent = ({ price, oldPrice }) =>
  oldPrice && oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0;
