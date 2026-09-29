import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';
import ProductImage from '../product/ProductImage';
import { TrashIcon } from '../ui/Icons';
import QuantitySelector from '../ui/QuantitySelector';

export default function CartLine({ item, compact = false, onNavigate }) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <li className="flex gap-4 py-4">
      <Link
        to={`/product/${product.id}`}
        onClick={onNavigate}
        className={`shrink-0 overflow-hidden rounded-xl bg-slate-100 ${compact ? 'size-20' : 'size-24 sm:size-28'}`}
      >
        <ProductImage src={product.image} alt={product.name} className="size-full" />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/product/${product.id}`}
              onClick={onNavigate}
              className="line-clamp-2 rounded text-sm font-semibold text-slate-900 hover:text-blue-700"
            >
              {product.name}
            </Link>
            <p className="mt-0.5 text-xs text-slate-500">
              {formatPrice(product.price)} each
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-slate-900">
            {formatPrice(product.price * quantity)}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <QuantitySelector
            size="sm"
            value={quantity}
            max={product.stock}
            onChange={(next) => updateQuantity(product.id, next)}
            label={`Quantity of ${product.name}`}
          />
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-slate-500 hover:bg-rose-50 hover:text-rose-700"
            aria-label={`Remove ${product.name} from cart`}
          >
            <TrashIcon className="size-4" />
            {!compact && 'Remove'}
          </button>
        </div>
      </div>
    </li>
  );
}
