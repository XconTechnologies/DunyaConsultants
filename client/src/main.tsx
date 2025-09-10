import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize performance monitoring in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // Simple performance monitoring without external dependencies
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime + 'ms');
      }
    }
  });
  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Observer not supported
  }
}

// Preload critical font
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

createRoot(document.getElementById("root")!).render(<App />);
