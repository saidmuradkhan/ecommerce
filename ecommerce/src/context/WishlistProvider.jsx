import { useCallback, useEffect, useMemo, useState } from 'react';
import { WishlistContext } from './wishlist-context';
import { getProductById } from '../data/products';
import { readStorage, writeStorage } from '../utils/storage';

const STORAGE_KEY = 'zenvolt-wishlist';

const loadIds = () => {
  const stored = readStorage(STORAGE_KEY, []);
  return Array.isArray(stored) ? stored.filter((id) => getProductById(id)) : [];
};

export default function WishlistProvider({ children }) {
  const [ids, setIds] = useState(loadIds);

  useEffect(() => {
    writeStorage(STORAGE_KEY, ids);
  }, [ids]);

  const toggle = useCallback((id) => {
    setIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }, []);

  const value = useMemo(
    () => ({
      ids,
      count: ids.length,
      has: (id) => ids.includes(id),
      toggle,
    }),
    [ids, toggle],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}
