import { Outlet } from 'react-router-dom';
import CartDrawer from '../cart/CartDrawer';
import Footer from './Footer';
import Header from './Header';
import ScrollManager from './ScrollManager';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
