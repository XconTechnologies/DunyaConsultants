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

// Log script loaded for debugging
console.log('script loaded');

createRoot(document.getElementById("root")!).render(<App />);
