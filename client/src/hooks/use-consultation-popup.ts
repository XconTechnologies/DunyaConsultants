import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook to manage consultation popup with URL synchronization
 * 
 * When opened: URL changes to current-path + "/book-consultation"
 * When closed: URL returns to original path
 * 
 * Example:
 * - On "/" → click button → popup opens, URL becomes "/book-consultation"
 * - On "/about" → click button → popup opens, URL becomes "/about/book-consultation"
 */
export function useConsultationPopup() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [originalPath, setOriginalPath] = useState<string>('');

  // Check if current URL ends with /book-consultation
  const isConsultationRoute = location.endsWith('/book-consultation');

  // Open popup and update URL
  const open = useCallback(() => {
    if (!isOpen) {
      // Store the current path before changing
      setOriginalPath(location);
      
      // Update URL to include /book-consultation
      const newPath = location === '/' 
        ? '/book-consultation' 
        : `${location}/book-consultation`;
      
      window.history.pushState({}, '', newPath);
      setIsOpen(true);
    }
  }, [location, isOpen]);

  // Close popup and restore original URL
  const close = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      
      // Go back to original path
      if (originalPath) {
        window.history.pushState({}, '', originalPath);
      } else {
        // Fallback: remove /book-consultation from current path
        const basePath = location.replace(/\/book-consultation$/, '') || '/';
        window.history.pushState({}, '', basePath);
      }
    }
  }, [isOpen, originalPath, location]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      if (currentPath.endsWith('/book-consultation')) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Auto-open if URL already has /book-consultation
  useEffect(() => {
    if (isConsultationRoute && !isOpen) {
      setOriginalPath(location.replace(/\/book-consultation$/, '') || '/');
      setIsOpen(true);
    }
  }, [isConsultationRoute, isOpen, location]);

  return {
    isOpen,
    open,
    close
  };
}
