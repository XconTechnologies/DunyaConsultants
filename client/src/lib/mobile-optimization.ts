/**
 * Mobile Performance Optimization Utilities
 * Provides helpers for mobile-specific performance improvements
 */

/**
 * Detects if the current device is mobile based on viewport width
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Detects if the connection is slow (3G or slower)
 */
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }
  const conn = (navigator as any).connection;
  return conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g' || conn?.effectiveType === '3g';
};

/**
 * Creates an Intersection Observer for lazy loading images
 */
export const createImageObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const options = {
    root: null,
    rootMargin: isMobileDevice() ? '50px' : '100px', // Smaller margin on mobile
    threshold: 0.01
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, options);
};

/**
 * Optimizes image loading based on device and connection
 */
export const getOptimizedImageAttributes = () => {
  const mobile = isMobileDevice();
  const slowConn = isSlowConnection();

  return {
    loading: mobile && slowConn ? 'lazy' as const : 'lazy' as const,
    decoding: 'async' as const,
    // Reduce quality on slow connections
    quality: slowConn ? 'low' : 'high'
  };
};

/**
 * Defers execution of non-critical code on mobile
 */
export const deferOnMobile = (fn: () => void, delay = 100) => {
  if (!isMobileDevice()) {
    fn();
    return;
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(fn, { timeout: delay * 2 });
  } else {
    setTimeout(fn, delay);
  }
};

/**
 * Reduces animations on mobile for better performance
 */
export const shouldReduceAnimations = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check user preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return true;
  
  // Reduce animations on mobile with slow connections
  return isMobileDevice() && isSlowConnection();
};
