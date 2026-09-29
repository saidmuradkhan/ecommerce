import useWishlist from '../../hooks/useWishlist';
import { HeartIcon } from '../ui/Icons';

export default function WishlistButton({ product, className = '' }) {
  const { has, toggle } = useWishlist();
  const saved = has(product.id);

  return (
    <button
      type="button"
      onClick={() => toggle(product.id)}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
      className={`flex size-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur transition-colors hover:bg-white ${
        saved ? 'text-rose-500' : 'text-slate-600 hover:text-rose-500'
      } ${className}`}
    >
      <HeartIcon filled={saved} className="size-5" />
    </button>
  );
}
