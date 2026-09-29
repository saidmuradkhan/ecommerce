import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PriceTag from '../components/product/PriceTag';
import ProductGrid from '../components/product/ProductGrid';
import ProductImage from '../components/product/ProductImage';
import RatingStars from '../components/product/RatingStars';
import StockBadge from '../components/product/StockBadge';
import WishlistButton from '../components/product/WishlistButton';
import Button from '../components/ui/Button';
import { ArrowLeftIcon, CartIcon, ReturnIcon, ShieldIcon, TruckIcon } from '../components/ui/Icons';
import QuantitySelector from '../components/ui/QuantitySelector';
import { getProductById, products } from '../data/products';
import useCart from '../hooks/useCart';
import { getDiscountPercent } from '../utils/product';
import NotFoundPage from './NotFoundPage';

function ProductDetails({ product }) {
  const { addItem, getQuantity } = useCart();
  const inCart = getQuantity(product.id);
  const available = Math.max(0, product.stock - inCart);
  const [quantity, setQuantity] = useState(1);
  const discount = getDiscountPercent(product);
  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    addItem(product.id, Math.min(quantity, available));
    setQuantity(1);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <title>{`${product.name} · Zenvolt`}</title>

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="inline-flex items-center gap-1 rounded hover:text-blue-700">
              <ArrowLeftIcon className="size-4" />
              Shop
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to={`/?category=${product.category}#shop`} className="rounded hover:text-blue-700">
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-slate-900">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative self-start overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <ProductImage
            src={product.image}
            alt={product.name}
            loading="eager"
            className="aspect-square w-full"
          />
          {discount > 0 && (
            <span className="absolute top-4 left-4 rounded-full bg-rose-600 px-3 py-1 text-sm font-bold text-white">
              −{discount}%
            </span>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase">
              {product.brand} · {product.category}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <RatingStars rating={product.rating} reviews={product.reviews} size="size-5" />
          </div>

          <p className="text-lg leading-relaxed text-slate-600">{product.description}</p>

          <div className="flex flex-wrap items-center gap-4">
            <PriceTag price={product.price} oldPrice={product.oldPrice} size="lg" />
            <StockBadge stock={product.stock} />
          </div>

          <div className="flex flex-wrap items-center gap-3 border-y border-slate-200 py-6">
            {available > 0 && (
              <QuantitySelector
                value={Math.min(quantity, available)}
                max={available}
                onChange={setQuantity}
              />
            )}
            <Button size="lg" onClick={handleAdd} disabled={available === 0} className="flex-1 sm:flex-none">
              <CartIcon />
              {product.stock === 0 ? 'Out of stock' : available === 0 ? 'All stock in cart' : 'Add to cart'}
            </Button>
            <WishlistButton product={product} className="size-12" />
            {inCart > 0 && (
              <p className="w-full text-sm text-slate-600">
                {inCart} already in your cart.{' '}
                <Link to="/cart" className="rounded font-medium text-blue-700 hover:underline">
                  View cart
                </Link>
              </p>
            )}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <TruckIcon className="size-5 text-blue-600" /> Free delivery over 200 ₼
            </li>
            <li className="flex items-center gap-2">
              <ShieldIcon className="size-5 text-blue-600" /> 12-month warranty
            </li>
            <li className="flex items-center gap-2">
              <ReturnIcon className="size-5 text-blue-600" /> 14-day returns
            </li>
          </ul>

          <section aria-labelledby="specs-title">
            <h2 id="specs-title" className="text-lg font-semibold text-slate-900">
              Specifications
            </h2>
            <table className="mt-3 w-full overflow-hidden rounded-xl text-sm ring-1 ring-slate-200">
              <tbody className="divide-y divide-slate-200">
                {Object.entries(product.specs).map(([label, value]) => (
                  <tr key={label} className="odd:bg-slate-50 even:bg-white">
                    <th scope="row" className="w-2/5 px-4 py-3 text-left font-medium text-slate-600">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="mt-20">
          <h2 id="related-title" className="text-2xl font-bold tracking-tight text-slate-900">
            More in {product.category}
          </h2>
          <div className="mt-6">
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <NotFoundPage
        title="Product not found"
        message="This product doesn't exist or is no longer available."
      />
    );
  }

  // Keyed by id so quantity state resets when navigating between products.
  return <ProductDetails key={product.id} product={product} />;
}
