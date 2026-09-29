import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, products } from '../data/products';

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Top rated' },
  { value: 'name', label: 'Name: A to Z' },
];

const sorters = {
  featured: (a, b) => a.id - b.id,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
  name: (a, b) => a.name.localeCompare(b.name),
};

// Shop filters live in the URL (?q=&category=&sort=&stock=in&sale=1) so they are shareable.
export default function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';
  const categoryParam = searchParams.get('category');
  const category = categories.includes(categoryParam) ? categoryParam : null;
  const sortParam = searchParams.get('sort');
  const sort = Object.hasOwn(sorters, sortParam ?? '') ? sortParam : 'featured';
  const inStockOnly = searchParams.get('stock') === 'in';
  const onSaleOnly = searchParams.get('sale') === '1';

  const setParam = (key, value) => {
    setSearchParams(
      (params) => {
        const next = new URLSearchParams(params);
        if (value) next.set(key, value);
        else next.delete(key);
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
  };

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products
      .filter((product) => !category || product.category === category)
      .filter((product) => !inStockOnly || product.stock > 0)
      .filter((product) => !onSaleOnly || product.oldPrice > product.price)
      .filter(
        (product) =>
          !term ||
          product.name.toLowerCase().includes(term) ||
          product.brand.toLowerCase().includes(term),
      )
      .sort(sorters[sort]);
  }, [query, category, inStockOnly, onSaleOnly, sort]);

  return {
    products: filtered,
    query,
    category,
    sort,
    inStockOnly,
    onSaleOnly,
    hasActiveFilters: Boolean(query || category || inStockOnly || onSaleOnly),
    setQuery: (value) => setParam('q', value),
    setCategory: (value) => setParam('category', value),
    setSort: (value) => setParam('sort', value === 'featured' ? null : value),
    setInStockOnly: (value) => setParam('stock', value ? 'in' : null),
    setOnSaleOnly: (value) => setParam('sale', value ? '1' : null),
    resetFilters: () => setSearchParams({}, { replace: true, preventScrollReset: true }),
  };
}
