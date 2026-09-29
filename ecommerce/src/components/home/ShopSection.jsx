import { categories } from '../../data/products';
import useProductFilters, { sortOptions } from '../../hooks/useProductFilters';
import ProductGrid from '../product/ProductGrid';
import Button from '../ui/Button';
import { SearchIcon } from '../ui/Icons';

const chipClass = (active) =>
  `rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset transition-colors ${
    active
      ? 'bg-blue-600 text-white ring-blue-600'
      : 'bg-white text-slate-700 ring-slate-300 hover:bg-slate-50'
  }`;

const Toggle = ({ id, checked, onChange, children }) => (
  <label htmlFor={id} className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-700">
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      className="size-4 rounded border-slate-300 accent-blue-600"
    />
    {children}
  </label>
);

export default function ShopSection() {
  const filters = useProductFilters();
  const { products, category } = filters;

  return (
    <section
      id="shop"
      aria-labelledby="shop-title"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 lg:px-8"
    >
      <h2 id="shop-title" className="text-3xl font-bold tracking-tight text-slate-900">
        {category ?? 'All products'}
      </h2>
      <p className="mt-1 text-slate-600" aria-live="polite">
        {products.length} {products.length === 1 ? 'product' : 'products'} found
      </p>

      <div className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <label htmlFor="shop-search" className="sr-only">
              Search products
            </label>
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-slate-400" />
            <input
              id="shop-search"
              type="search"
              value={filters.query}
              onChange={(event) => filters.setQuery(event.target.value)}
              placeholder="Search by name or brand…"
              className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pr-3 pl-10 text-sm placeholder:text-slate-400 focus:border-blue-600"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="shop-sort" className="text-sm whitespace-nowrap text-slate-600">
              Sort by
            </label>
            <select
              id="shop-sort"
              value={filters.sort}
              onChange={(event) => filters.setSort(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm md:w-auto"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={!category}
              onClick={() => filters.setCategory(null)}
              className={chipClass(!category)}
            >
              All
            </button>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => filters.setCategory(item)}
                className={chipClass(category === item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Toggle id="in-stock" checked={filters.inStockOnly} onChange={filters.setInStockOnly}>
              In stock only
            </Toggle>
            <Toggle id="on-sale" checked={filters.onSaleOnly} onChange={filters.setOnSaleOnly}>
              On sale
            </Toggle>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <SearchIcon className="size-7" />
            </span>
            <div>
              <p className="text-lg font-semibold text-slate-900">No products match your filters</p>
              <p className="mt-1 text-sm text-slate-600">
                Try a different search term or clear the filters.
              </p>
            </div>
            {filters.hasActiveFilters && (
              <Button variant="secondary" onClick={filters.resetFilters}>
                Clear filters
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
