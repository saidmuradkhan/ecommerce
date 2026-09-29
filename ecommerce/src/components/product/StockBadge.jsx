import { getStockStatus } from '../../utils/product';

const styles = {
  in: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  low: 'bg-amber-50 text-amber-800 ring-amber-600/20',
  out: 'bg-rose-50 text-rose-700 ring-rose-600/20',
};

const labels = {
  in: () => 'In stock',
  low: (stock) => `Only ${stock} left`,
  out: () => 'Out of stock',
};

export default function StockBadge({ stock }) {
  const status = getStockStatus(stock);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {labels[status](stock)}
    </span>
  );
}
