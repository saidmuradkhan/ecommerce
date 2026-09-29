import { formatPrice } from '../../utils/formatPrice';

export default function PriceTag({ price, oldPrice, size = 'md' }) {
  const priceClass = size === 'lg' ? 'text-3xl' : 'text-xl';

  return (
    <div className="flex items-baseline gap-2">
      <span className={`font-bold text-slate-900 ${priceClass}`}>{formatPrice(price)}</span>
      {oldPrice > price && (
        <span className="text-sm text-slate-500 line-through">
          <span className="sr-only">Was </span>
          {formatPrice(oldPrice)}
        </span>
      )}
    </div>
  );
}
