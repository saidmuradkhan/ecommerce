import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { CartContext } from './cart-context';
import { getProductById } from '../data/products';
import { getShipping } from '../utils/cart';
import { readStorage, writeStorage } from '../utils/storage';

const STORAGE_KEY = 'zenvolt-cart';

const clampToStock = (id, quantity) => {
  const product = getProductById(id);
  if (!product) return 0;
  return Math.max(0, Math.min(quantity, product.stock));
};

// Drop unknown products and fix quantities that exceed the current stock.
const sanitize = (items) =>
  (Array.isArray(items) ? items : [])
    .map(({ id, quantity }) => ({ id, quantity: clampToStock(id, Number(quantity) || 0) }))
    .filter((item) => item.quantity > 0);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const existing = state.find((item) => item.id === action.id);
      const quantity = clampToStock(action.id, (existing?.quantity ?? 0) + action.quantity);
      if (quantity === 0) return state;
      return existing
        ? state.map((item) => (item.id === action.id ? { ...item, quantity } : item))
        : [...state, { id: action.id, quantity }];
    }
    case 'update': {
      const quantity = clampToStock(action.id, action.quantity);
      return quantity === 0
        ? state.filter((item) => item.id !== action.id)
        : state.map((item) => (item.id === action.id ? { ...item, quantity } : item));
    }
    case 'remove':
      return state.filter((item) => item.id !== action.id);
    case 'clear':
      return [];
    default:
      return state;
  }
};

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, () =>
    sanitize(readStorage(STORAGE_KEY, [])),
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    writeStorage(STORAGE_KEY, state);
  }, [state]);

  const addItem = useCallback((id, quantity = 1) => {
    dispatch({ type: 'add', id, quantity });
    setIsDrawerOpen(true);
  }, []);
  const updateQuantity = useCallback(
    (id, quantity) => dispatch({ type: 'update', id, quantity }),
    [],
  );
  const removeItem = useCallback((id) => dispatch({ type: 'remove', id }), []);
  const clearCart = useCallback(() => dispatch({ type: 'clear' }), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const value = useMemo(() => {
    const items = state.map((item) => ({ ...item, product: getProductById(item.id) }));
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = getShipping(subtotal);

    return {
      items,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      getQuantity: (id) => state.find((item) => item.id === id)?.quantity ?? 0,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
    };
  }, [state, isDrawerOpen, addItem, updateQuantity, removeItem, clearCart, openDrawer, closeDrawer]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
