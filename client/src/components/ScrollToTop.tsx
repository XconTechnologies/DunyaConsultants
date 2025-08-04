import { useScrollToTop } from '@/hooks/useScrollToTop';

/**
 * Component that automatically scrolls to top when route changes
 */
export default function ScrollToTop() {
  useScrollToTop();
  return null;
}