# Zenvolt: Electronics Store Demo

Zenvolt is a responsive e-commerce front end for a fictional electronics store in Baku. It is built
with React, React Router and Tailwind CSS. Shoppers can browse and filter products, open product
pages, manage a persistent cart and wishlist, and go through a validated checkout. Prices are in
Azerbaijani manat (₼).

> This is a portfolio project. No real orders are placed and no payments are processed.

## Features

- **Product catalogue**: 16 products across 7 categories, each with brand, rating, specs, stock and
  optional sale price
- **Search, filter and sort**: search by name or brand, category chips, sort by price, rating or
  name, plus "in stock only" and "on sale" toggles. Filters live in the URL, so any view can be
  shared or bookmarked
- **Product pages**: large image, specifications table, stock badge, quantity selector and related
  products from the same category
- **Shopping cart**: React Context + `useReducer`, saved to `localStorage`, quantities capped by
  stock, a slide-over mini cart, and subtotal, shipping and total (free delivery over 200 ₼)
- **Wishlist**: save favourites with one click, also kept in `localStorage`
- **Checkout**: client-side validation of name, email, phone, city and address, an order summary,
  and a confirmation screen with an order number
- **Responsive and accessible**: mobile menu, skip link, visible focus states, labelled controls,
  alt text, and a fallback when an image fails to load
- **404 handling** for unknown routes and products

## Tech stack

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Vite 8](https://vite.dev/)
- ESLint with the React Hooks and React Refresh plugins

## Getting started

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open the URL that Vite prints (usually http://localhost:5173).

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build for production into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
src/
├── components/
│   ├── cart/        # CartDrawer, CartLine, OrderSummary
│   ├── home/        # Hero, Features, ShopSection (filters + grid)
│   ├── layout/      # Layout, Header, Footer, Logo, ScrollManager
│   ├── product/     # ProductCard, ProductGrid, ProductImage, badges, rating
│   └── ui/          # Button, QuantitySelector, Icons
├── context/         # Cart and wishlist contexts and providers
├── data/            # Product catalogue and categories
├── hooks/           # useCart, useWishlist, useProductFilters
├── pages/           # Home, Product, Cart, Checkout, Wishlist, 404
├── utils/           # formatPrice, storage, cart, product and checkout helpers
├── App.jsx          # Routes
└── main.jsx         # Entry point with router and providers
```

## Notes

- Product images are loaded from [Unsplash](https://unsplash.com/).
- The app uses client-side routing. When you deploy it to a static host, set up a rewrite so every
  path serves `index.html`.

## Author

Said Muradkhan: [github.com/saidmuradkhan](https://github.com/saidmuradkhan)
