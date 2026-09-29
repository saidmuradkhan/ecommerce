import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useWishlist from '../../hooks/useWishlist';
import { CartIcon, CloseIcon, HeartIcon, MenuIcon } from '../ui/Icons';
import Logo from './Logo';

const navLinks = [
  { label: 'All products', category: null },
  { label: 'Laptops', category: 'Laptops' },
  { label: 'Audio', category: 'Audio' },
  { label: 'Wearables', category: 'Wearables' },
  { label: 'Gaming', category: 'Gaming' },
];

const linkTo = (category) => (category ? `/?category=${category}#shop` : '/#shop');

const CountBadge = ({ count }) =>
  count > 0 ? (
    <span className="absolute -top-1 -right-1 flex min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[11px] leading-5 font-bold text-white ring-2 ring-white">
      {count > 99 ? '99+' : count}
    </span>
  ) : null;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const { count: wishlistCount } = useWishlist();
  const location = useLocation();

  const activeCategory =
    location.pathname === '/' ? new URLSearchParams(location.search).get('category') : undefined;
  // `activeCategory` is undefined outside the shop page, null for "All products".
  const isActive = (category) => activeCategory === category;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo onClick={closeMenu} />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ label, category }) => (
              <li key={label}>
                <Link
                  to={linkTo(category)}
                  aria-current={isActive(category) ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(category)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            to="/wishlist"
            onClick={closeMenu}
            className="relative flex size-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
            aria-label={`Wishlist, ${wishlistCount} ${wishlistCount === 1 ? 'item' : 'items'}`}
          >
            <HeartIcon />
            <CountBadge count={wishlistCount} />
          </Link>
          <button
            type="button"
            onClick={() => {
              closeMenu();
              openDrawer();
            }}
            className="relative flex size-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
            aria-label={`Open cart, ${count} ${count === 1 ? 'item' : 'items'}`}
          >
            <CartIcon />
            <CountBadge count={count} />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-200 bg-white md:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6">
            {navLinks.map(({ label, category }) => (
              <li key={label}>
                <Link
                  to={linkTo(category)}
                  onClick={closeMenu}
                  aria-current={isActive(category) ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive(category) ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/cart"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                Cart ({count})
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
