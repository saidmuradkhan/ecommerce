import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top on page changes and to `#anchor` targets on hash links.
export default function ScrollManager() {
  const { key, pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
    } else if (previousPathname.current !== pathname) {
      window.scrollTo(0, 0);
    }
    previousPathname.current = pathname;
  }, [key, pathname, hash]);

  return null;
}
