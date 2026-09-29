import CartLine from '../components/cart/CartLine';
import OrderSummary from '../components/cart/OrderSummary';
import Button from '../components/ui/Button';
import { CartIcon } from '../components/ui/Icons';
import useCart from '../hooks/useCart';

export default function CartPage() {
  const { items, count, clearCart } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <title>Cart · Zenvolt</title>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Shopping cart</h1>

      {items.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <CartIcon className="size-8" />
          </span>
          <p className="text-lg font-semibold text-slate-900">Your cart is empty</p>
          <p className="text-sm text-slate-600">Looks like you haven't added anything yet.</p>
          <Button to="/" size="lg">
            Start shopping
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <section aria-label="Cart items" className="rounded-2xl border border-slate-200 bg-white px-5 lg:col-span-2">
            <ul className="divide-y divide-slate-200">
              {items.map((item) => (
                <CartLine key={item.id} item={item} />
              ))}
            </ul>
            <div className="flex justify-between border-t border-slate-200 py-4">
              <p className="text-sm text-slate-600">
                {count} {count === 1 ? 'item' : 'items'}
              </p>
              <button
                type="button"
                onClick={clearCart}
                className="rounded text-sm font-medium text-rose-700 hover:underline"
              >
                Clear cart
              </button>
            </div>
          </section>

          <aside
            aria-labelledby="summary-title"
            className="h-fit rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24"
          >
            <h2 id="summary-title" className="mb-4 text-lg font-semibold text-slate-900">
              Order summary
            </h2>
            <OrderSummary>
              <Button to="/checkout" size="lg" className="mt-2 w-full">
                Proceed to checkout
              </Button>
              <Button to="/" variant="ghost" className="w-full">
                Continue shopping
              </Button>
            </OrderSummary>
          </aside>
        </div>
      )}
    </div>
  );
}
