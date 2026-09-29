import { useState } from 'react';
import ProductImage from '../components/product/ProductImage';
import OrderSummary from '../components/cart/OrderSummary';
import Button from '../components/ui/Button';
import { CheckIcon } from '../components/ui/Icons';
import useCart from '../hooks/useCart';
import { formatPrice } from '../utils/formatPrice';
import validateCheckout, { CITIES } from '../utils/validateCheckout';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  city: 'Baku',
  address: '',
  notes: '',
  payment: 'cash',
};

const inputClass = (hasError) =>
  `mt-1.5 block w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm placeholder:text-slate-400 ${
    hasError ? 'border-rose-500 focus-visible:outline-rose-600' : 'border-slate-300'
  }`;

function Field({ id, label, error, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-700">
          {error}
        </p>
      )}
    </div>
  );
}

function OrderSuccess({ order }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <title>Order confirmed · Zenvolt</title>
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <CheckIcon className="size-8" strokeWidth={2.5} />
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">Thank you for your order!</h1>
      <p className="mt-3 text-slate-600">
        Your order <strong className="text-slate-900">{order.number}</strong> has been placed. A
        confirmation will be sent to <strong className="text-slate-900">{order.email}</strong>.
      </p>
      <dl className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left text-sm">
        <div>
          <dt className="text-slate-500">Items</dt>
          <dd className="font-semibold text-slate-900">{order.count}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Total</dt>
          <dd className="font-semibold text-slate-900">{formatPrice(order.total)}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-slate-500">Delivery to</dt>
          <dd className="font-semibold text-slate-900">{order.city}</dd>
        </div>
      </dl>
      <p className="mt-6 text-xs text-slate-500">
        This is a demo store: no payment was taken and nothing will be shipped.
      </p>
      <Button to="/" size="lg" className="mt-8">
        Continue shopping
      </Button>
    </div>
  );
}

export default function CheckoutPage() {
  const { items, count, total, clearCart } = useCart();
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [order, setOrder] = useState(null);

  if (order) return <OrderSuccess order={order} />;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <title>Checkout · Zenvolt</title>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Your cart is empty</h1>
        <p className="mt-3 text-slate-600">Add a few products before heading to checkout.</p>
        <Button to="/" size="lg" className="mt-8">
          Browse products
        </Button>
      </div>
    );
  }

  const errors = validateCheckout(values);
  const visibleError = (field) => (submitted || touched[field] ? errors[field] : undefined);
  const fieldProps = (field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: (event) => setValues((current) => ({ ...current, [field]: event.target.value })),
    onBlur: () => setTouched((current) => ({ ...current, [field]: true })),
    'aria-invalid': Boolean(visibleError(field)),
    'aria-describedby': visibleError(field) ? `${field}-error` : undefined,
    className: inputClass(Boolean(visibleError(field))),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setOrder({
      number: `ZV-${Date.now().toString(36).toUpperCase().slice(-6)}`,
      email: values.email.trim(),
      city: values.city,
      count,
      total,
    });
    clearCart();
    window.scrollTo(0, 0);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <title>Checkout · Zenvolt</title>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Checkout</h1>

      <form noValidate onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-3">
          <fieldset className="rounded-2xl border border-slate-200 bg-white p-6">
            <legend className="px-1 text-lg font-semibold text-slate-900">Contact details</legend>
            <div className="mt-2 grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name" error={visibleError('name')} className="sm:col-span-2">
                <input type="text" autoComplete="name" placeholder="Aysel Mammadova" {...fieldProps('name')} />
              </Field>
              <Field id="email" label="Email" error={visibleError('email')}>
                <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
              </Field>
              <Field id="phone" label="Phone" error={visibleError('phone')}>
                <input type="tel" autoComplete="tel" placeholder="+994 50 123 45 67" {...fieldProps('phone')} />
              </Field>
            </div>
          </fieldset>

          <fieldset className="rounded-2xl border border-slate-200 bg-white p-6">
            <legend className="px-1 text-lg font-semibold text-slate-900">Delivery</legend>
            <div className="mt-2 grid gap-5 sm:grid-cols-3">
              <Field id="city" label="City" error={visibleError('city')}>
                <select {...fieldProps('city')}>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="address" label="Street address" error={visibleError('address')} className="sm:col-span-2">
                <input
                  type="text"
                  autoComplete="street-address"
                  placeholder="28 May street 12, apt 5"
                  {...fieldProps('address')}
                />
              </Field>
              <Field id="notes" label="Delivery notes (optional)" className="sm:col-span-3">
                <textarea rows={3} placeholder="Floor, entrance, preferred time…" {...fieldProps('notes')} />
              </Field>
            </div>
          </fieldset>

          <fieldset className="rounded-2xl border border-slate-200 bg-white p-6">
            <legend className="px-1 text-lg font-semibold text-slate-900">Payment</legend>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              {[
                { value: 'cash', label: 'Cash on delivery' },
                { value: 'card', label: 'Card on delivery' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-medium ${
                    values.payment === option.value
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={option.value}
                    checked={values.payment === option.value}
                    onChange={(event) => setValues((current) => ({ ...current, payment: event.target.value }))}
                    className="size-4 accent-blue-600"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">Demo store: no real payment is processed.</p>
          </fieldset>
        </div>

        <aside
          aria-labelledby="checkout-summary-title"
          className="h-fit rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24 lg:col-span-2"
        >
          <h2 id="checkout-summary-title" className="text-lg font-semibold text-slate-900">
            Order summary
          </h2>
          <ul className="my-4 divide-y divide-slate-200">
            {items.map(({ id, product, quantity }) => (
              <li key={id} className="flex items-center gap-3 py-3">
                <ProductImage src={product.image} alt="" className="size-14 shrink-0 rounded-lg" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-900">{product.name}</p>
                  <p className="text-xs text-slate-500">Qty {quantity}</p>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {formatPrice(product.price * quantity)}
                </p>
              </li>
            ))}
          </ul>
          <OrderSummary>
            <Button type="submit" size="lg" className="mt-2 w-full">
              Place order · {formatPrice(total)}
            </Button>
          </OrderSummary>
        </aside>
      </form>
    </div>
  );
}
