import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { HeartIcon } from '../components/ui/Icons';
import { getProductById } from '../data/products';
import useWishlist from '../hooks/useWishlist';

export default function WishlistPage() {
  const { ids } = useWishlist();
  const saved = ids.map(getProductById).filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <title>Wishlist · Zenvolt</title>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Wishlist</h1>

      {saved.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-rose-50 text-rose-500">
            <HeartIcon className="size-8" />
          </span>
          <p className="text-lg font-semibold text-slate-900">No saved products yet</p>
          <p className="text-sm text-slate-600">Tap the heart on any product to save it for later.</p>
          <Button to="/" size="lg">
            Browse products
          </Button>
        </div>
      ) : (
        <div className="mt-8">
          <ProductGrid products={saved} />
        </div>
      )}
    </div>
  );
}
