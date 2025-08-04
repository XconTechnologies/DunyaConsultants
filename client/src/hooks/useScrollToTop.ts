import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook that scrolls to top of the page when the route changes
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}