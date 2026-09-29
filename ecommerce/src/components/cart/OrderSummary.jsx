import useCart from '../../hooks/useCart';
import { FREE_SHIPPING_THRESHOLD } from '../../utils/cart';
import { formatPrice } from '../../utils/formatPrice';

export default function OrderSummary({ children }) {
  const { subtotal, shipping, total } = useCart();
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <div className="space-y-3 text-sm">
      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt className="text-slate-600">Subtotal</dt>
          <dd className="font-medium text-slate-900">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-slate-600">Shipping</dt>
          <dd className="font-medium text-slate-900">
            {shipping === 0 ? <span className="text-emerald-700">Free</span> : formatPrice(shipping)}
          </dd>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-3 text-base">
          <dt className="font-semibold text-slate-900">Total</dt>
          <dd className="font-bold text-slate-900">{formatPrice(total)}</dd>
        </div>
      </dl>
      {remaining > 0 && subtotal > 0 && (
        <p className="rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-800">
          Add {formatPrice(remaining)} more for free delivery.
        </p>
      )}
      {children}
    </div>
  );
}
