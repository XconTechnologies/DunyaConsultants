// Performance optimization utilities

// Debounce function to limit expensive operations
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function to limit the rate of execution
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Lazy load images with Intersection Observer
export function createImageObserver(callback: (entry: IntersectionObserverEntry) => void) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      threshold: 0.1,
      rootMargin: '50px'
    }
  );
}

// Preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Web Vitals tracking (placeholder for future implementation)
export function trackWebVitals() {
  // Future: implement with web-vitals library
  console.log('Web Vitals tracking ready');
}

// Image optimization helper
export function getOptimizedImageUrl(url: string, width?: number, quality?: number): string {
  // For production, you'd integrate with a service like Cloudinary or similar
  // For now, return the original URL
  return url;
}

// Memory management for animations
export function cleanupAnimation(animationId: number | null) {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }
}

// Reduce motion check
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}