import { useEffect, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UseMutationResult } from "@tanstack/react-query";

// TypeScript declaration for Facebook Pixel
declare global {
  interface Window {
    fbq?: (
      command: 'track' | 'trackCustom',
      eventName: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

interface EventRegisterButtonProps {
  registerMutation: UseMutationResult<any, any, any, any>;
  event?: {
    id?: number;
    title?: string;
    slug?: string;
  };
}

// Manual fallback function with automatic retry (Production only)
function trackRegisterFallback(eventData?: { id?: number; title?: string }) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    const isProd = window.location.hostname === 'dunyaconsultants.com' || 
                   window.location.hostname === 'www.dunyaconsultants.com';
    
    if (!isProd) {
      console.log('[Dev Mode] Facebook Pixel tracking skipped - not on production domain');
      return;
    }
    
    try {
      window.fbq('track', 'Lead', {
        event_name: 'EventRegistration',
        content_name: eventData?.title || 'Register Button Fallback',
        content_category: 'Event',
        event_id: eventData?.id,
        source: 'Dunya Consultants Events Page',
        trigger: 'Manual Fallback',
      });
      console.log('✅ Fallback: Facebook Pixel Lead event fired manually', {
        event_name: eventData?.title || 'Event',
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('❌ Fallback Pixel error:', error);
    }
  } else {
    console.warn('⚠️ fbq not defined, retrying in 2 seconds...');
    // Automatic retry after 2 seconds
    setTimeout(() => trackRegisterFallback(eventData), 2000);
  }
}

export default function EventRegisterButton({ 
  registerMutation, 
  event 
}: EventRegisterButtonProps) {
  
  // Enhanced tracking function with fallback support (Production only)
  const trackRegisterClick = useCallback(() => {
    // Check if Facebook Pixel is loaded
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      const isProd = window.location.hostname === 'dunyaconsultants.com' || 
                     window.location.hostname === 'www.dunyaconsultants.com';
      
      if (!isProd) {
        console.log('[Dev Mode] Facebook Pixel tracking skipped - not on production domain');
        return;
      }
      
      try {
        // Fire Lead event immediately
        window.fbq('track', 'Lead', {
          event_name: 'EventRegistration',
          content_name: event?.title || 'Event Registration',
          content_category: 'Event',
          event_id: event?.id,
          source: 'Dunya Consultants Events Page',
        });
        
        // Console confirmation
        console.log('✅ Facebook Pixel: Lead event fired', {
          event_name: event?.title || 'Event',
          timestamp: new Date().toISOString(),
        });
      } catch (error) {
        console.error('❌ Facebook Pixel error:', error);
        // Try fallback on error
        trackRegisterFallback(event);
      }
    } else {
      // Manual fallback if fbq not available
      console.warn('⚠️ fbq not found – triggering manual fallback with retry...');
      trackRegisterFallback(event);
    }
  }, [event]);

  // Set up event listener with proper cleanup
  useEffect(() => {
    const button = document.getElementById('event-register-button');
    
    if (button) {
      button.addEventListener('click', trackRegisterClick);
      
      // Cleanup function
      return () => {
        button.removeEventListener('click', trackRegisterClick);
      };
    }
    
    // If button not found, return empty cleanup
    return () => {};
  }, [trackRegisterClick]);

  return (
    <Button
      type="submit"
      disabled={registerMutation.isPending}
      variant="outline"
      id="event-register-button"
      className="w-full sm:flex-1 py-6 text-lg bg-[#FF6B35] border-2 border-[#FF6B35] text-white hover:bg-transparent hover:text-[#FF6B35] transition-all duration-300 font-semibold fb-event-register"
      data-testid="button-register"
      data-event-name={event?.title || "Event"}
      data-pixel-event="Lead"
      data-fb-event="Lead"
      role="button"
      aria-label={`Register for ${event?.title || 'event'}`}
    >
      {registerMutation.isPending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Registering...
        </>
      ) : (
        "Register Now"
      )}
    </Button>
  );
}
