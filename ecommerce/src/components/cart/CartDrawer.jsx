import { useEffect, useRef } from 'react';
import useCart from '../../hooks/useCart';
import Button from '../ui/Button';
import { CartIcon, CloseIcon } from '../ui/Icons';
import CartLine from './CartLine';
import OrderSummary from './OrderSummary';

export default function CartDrawer() {
  const { items, count, isDrawerOpen, closeDrawer } = useCart();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isDrawerOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeDrawer();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isDrawerOpen ? '' : 'pointer-events-none'}`}
      inert={!isDrawerOpen}
    >
      <div
        onClick={closeDrawer}
        className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 id="cart-drawer-title" className="text-lg font-semibold text-slate-900">
            Your cart <span className="text-slate-500">({count})</span>
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeDrawer}
            className="flex size-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
            aria-label="Close cart"
          >
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <CartIcon className="size-8" />
            </span>
            <p className="text-slate-600">Your cart is empty.</p>
            <Button variant="secondary" onClick={closeDrawer}>
              Continue shopping
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-slate-200 overflow-y-auto px-5">
              {items.map((item) => (
                <CartLine key={item.id} item={item} compact onNavigate={closeDrawer} />
              ))}
            </ul>
            <div className="space-y-4 border-t border-slate-200 bg-slate-50 px-5 py-5">
              <OrderSummary />
              <div className="grid grid-cols-2 gap-3">
                <Button to="/cart" variant="secondary" onClick={closeDrawer}>
                  View cart
                </Button>
                <Button to="/checkout" onClick={closeDrawer}>
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
