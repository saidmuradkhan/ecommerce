import { Link } from 'react-router-dom';
import { categories } from '../../data/products';
import { GitHubIcon } from '../ui/Icons';
import Logo from './Logo';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <Logo inverted />
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            Zenvolt is a demo electronics store with hand-picked headphones, laptops, wearables and
            gaming gear, fast delivery across Baku and an official warranty on every product.
          </p>
          <a
            href="https://github.com/saidmuradkhan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white"
          >
            <GitHubIcon />
            github.com/saidmuradkhan
          </a>
        </div>

        <nav aria-labelledby="footer-shop">
          <h2 id="footer-shop" className="text-sm font-semibold tracking-wide text-white uppercase">
            Shop
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm md:grid-cols-1">
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/?category=${category}#shop`} className="rounded hover:text-white">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Customer care</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Free delivery in Baku over 200 ₼</li>
            <li>12-month official warranty</li>
            <li>14-day hassle-free returns</li>
            <li>
              <Link to="/cart" className="rounded hover:text-white">
                Your cart
              </Link>
              {' · '}
              <Link to="/wishlist" className="rounded hover:text-white">
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {CURRENT_YEAR} Zenvolt. All rights reserved.</p>
          <p>Portfolio project: no real orders or payments are processed.</p>
        </div>
      </div>
    </footer>
  );
}
