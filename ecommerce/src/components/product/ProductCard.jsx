import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { getDiscountPercent } from '../../utils/product';
import Button from '../ui/Button';
import { CartIcon } from '../ui/Icons';
import PriceTag from './PriceTag';
import ProductImage from './ProductImage';
import RatingStars from './RatingStars';
import StockBadge from './StockBadge';
import WishlistButton from './WishlistButton';

export default function ProductCard({ product }) {
  const { addItem, getQuantity } = useCart();
  const discount = getDiscountPercent(product);
  const inCart = getQuantity(product.id);
  const canAdd = product.stock > 0 && inCart < product.stock;

  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="size-full transition-transform duration-500 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white">
            −{discount}%
          </span>
        )}
        <WishlistButton product={product} className="absolute top-3 right-3 z-10" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2 text-xs font-medium tracking-wide text-slate-500 uppercase">
          <span>{product.brand}</span>
          <span>{product.category}</span>
        </div>

        <h3 className="text-base leading-snug font-semibold text-slate-900">
          <Link
            to={`/product/${product.id}`}
            className="after:absolute after:inset-0 after:content-[''] hover:text-blue-700"
          >
            {product.name}
          </Link>
        </h3>

        <RatingStars rating={product.rating} reviews={product.reviews} />

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <PriceTag price={product.price} oldPrice={product.oldPrice} />
          <StockBadge stock={product.stock} />
        </div>

        <Button
          onClick={() => addItem(product.id)}
          disabled={!canAdd}
          className="relative z-10 w-full"
        >
          <CartIcon className="size-4" />
          {product.stock === 0 ? 'Out of stock' : canAdd ? 'Add to cart' : 'Max in cart'}
        </Button>
      </div>
    </article>
  );
}
