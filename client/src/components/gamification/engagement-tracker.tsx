import { useEffect, useRef, useCallback } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import type { InsertUserEngagement, UserStats, Achievement } from '@shared/schema';

interface EngagementTrackerProps {
  children: React.ReactNode;
}

// Generate or get session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('user_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('user_session_id', sessionId);
  }
  return sessionId;
};

export default function EngagementTracker({ children }: EngagementTrackerProps) {
  const queryClient = useQueryClient();
  const sessionId = getSessionId();
  const currentPath = useRef(window.location.pathname);
  const lastInvalidation = useRef(0);
  const pendingEngagements = useRef<InsertUserEngagement[]>([]);

  // Debounced function to invalidate queries (max once every 5 seconds)
  const debouncedInvalidateQueries = useCallback(() => {
    const now = Date.now();
    if (now - lastInvalidation.current > 5000) { // 5 seconds
      lastInvalidation.current = now;
      queryClient.invalidateQueries({ queryKey: ['user-stats', sessionId] });
      queryClient.invalidateQueries({ queryKey: ['user-achievements', sessionId] });
    }
  }, [queryClient, sessionId]);

  // Track engagement mutation (optimized)
  const trackEngagementMutation = useMutation({
    mutationFn: async (data: InsertUserEngagement) => {
      const res = await apiRequest('POST', '/api/engagement/track', data);
      return res.json();
    },
    onSuccess: () => {
      // Debounced query invalidation
      debouncedInvalidateQueries();
    }
  });

  // Get user stats
  const { data: userStats } = useQuery({
    queryKey: ['user-stats', sessionId],
    queryFn: () => apiRequest('GET', `/api/engagement/stats/${sessionId}`),
  });

  // Get user achievements
  const { data: achievements } = useQuery({
    queryKey: ['user-achievements', sessionId],
    queryFn: () => apiRequest('GET', `/api/engagement/achievements/${sessionId}`),
  });

  // Track page views
  useEffect(() => {
    const trackPageView = () => {
      const newPath = window.location.pathname;
      if (newPath !== currentPath.current) {
        currentPath.current = newPath;
        trackEngagementMutation.mutate({
          sessionId,
          action: 'page_view',
          category: 'navigation',
          details: JSON.stringify({ path: newPath }),
          points: 5,
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Track route changes
    const handlePopState = () => trackPageView();
    window.addEventListener('popstate', handlePopState);

    // Track programmatic navigation
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(trackPageView, 0);
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      setTimeout(trackPageView, 0);
    };

    return () => {
      window.removeEventListener('popstate', handlePopState);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [sessionId]);

  // Debounced tracking function
  const debouncedTrackEngagement = useCallback((
    action: string, 
    category: string, 
    details?: any, 
    points: number = 0
  ) => {
    const key = `${action}-${category}`;
    clearTimeout((window as any)[`trackTimeout_${key}`]);
    (window as any)[`trackTimeout_${key}`] = setTimeout(() => {
      trackEngagementMutation.mutate({
        sessionId,
        action,
        category,
        details: details ? JSON.stringify(details) : undefined,
        points,
      });
    }, 1000); // 1 second debounce
  }, [sessionId, trackEngagementMutation]);

  // Expose tracking functions globally
  useEffect(() => {
    (window as any).trackEngagement = debouncedTrackEngagement;

    // Track clicks on important elements (debounced)
    const trackClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Track CTA button clicks
      if (target.closest('[data-track="cta"]')) {
        debouncedTrackEngagement(
          'cta_click',
          'interaction',
          { 
            element: target.textContent,
            path: window.location.pathname 
          },
          10
        );
      }

      // Track form submissions (immediate, no debounce for conversions)
      if (target.closest('form')) {
        const form = target.closest('form');
        if (target.type === 'submit') {
          trackEngagementMutation.mutate({
            sessionId,
            action: 'form_submit',
            category: 'conversion',
            details: JSON.stringify({ 
              formId: form?.id,
              path: window.location.pathname 
            }),
            points: 25,
          });
        }
      }

      // Track tool usage
      if (target.closest('[data-track="tool"]')) {
        const tool = target.closest('[data-track="tool"]');
        debouncedTrackEngagement(
          'tool_use',
          'interaction',
          { 
            tool: tool?.getAttribute('data-tool-name'),
            path: window.location.pathname 
          },
          15
        );
      }
    };

    document.addEventListener('click', trackClicks);

    return () => {
      document.removeEventListener('click', trackClicks);
      delete (window as any).trackEngagement;
    };
  }, [sessionId]);

  return <>{children}</>;
}

export { getSessionId };