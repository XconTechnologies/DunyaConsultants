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

export default function EventRegisterButton({ 
  registerMutation, 
  event 
}: EventRegisterButtonProps) {
  
  // Memoized tracking function to prevent recreation on each render
  const trackRegisterClick = useCallback(() => {
    // Check if Facebook Pixel is loaded
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      try {
        // Fire Lead event
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
      }
    } else {
      console.warn('⚠️ fbq not found – Pixel may not be initialized.');
      console.warn('Make sure Facebook Pixel base code is loaded in client/index.html');
    }
  }, [event?.id, event?.title]);

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
