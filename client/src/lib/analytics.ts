// Google Analytics integration for Dunya Consultants
// Based on javascript_google_analytics blueprint

// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    // Google Analytics is optional - silently skip if not configured
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);

  if (import.meta.env.DEV) {
    console.log('Google Analytics initialized with ID:', measurementId);
  }
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return;
  
  // Ensure dataLayer exists
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  // Track to Google Tag Manager
  window.dataLayer.push({
    event: 'page_view',
    page_path: url,
    page_title: document.title
  });
  
  // Also track to Google Analytics if gtag is available
  if (window.gtag) {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_path: url
      });
    }
  }
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track consultation bookings
export const trackConsultationBooking = () => {
  trackEvent('consultation_booking', 'conversion', 'consultation_form');
};

// Track contact form submissions
export const trackContactForm = () => {
  trackEvent('contact_form', 'engagement', 'contact_page');
};

// Track blog post views
export const trackBlogView = (blogTitle: string) => {
  trackEvent('blog_view', 'content', blogTitle);
};

// Track Google Ads conversion for form submissions
export const trackAdConversion = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Google Ads conversion tracking
  window.gtag('config', 'AW-11367448924');
  
  // Track as a conversion event
  window.gtag('event', 'conversion', {
    'send_to': 'AW-11367448924/YOUR_CONVERSION_LABEL'
  });
  
  if (import.meta.env.DEV) {
    console.log('Google Ads conversion tracked');
  }
};