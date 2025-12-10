// Google Analytics page view tracking hook
// Based on javascript_google_analytics blueprint

import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    // Track initial page view
    trackPageView(location);
    prevLocationRef.current = location;
  }, [location]);
};