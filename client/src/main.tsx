import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize comprehensive Core Web Vitals monitoring
if (typeof window !== 'undefined') {
  // Track FCP (First Contentful Paint) - target <1.8s - MUST BE FIRST
  const fcpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log('✓ FCP:', Math.round(entry.startTime) + 'ms', entry.startTime < 1800 ? '✅ GOOD' : entry.startTime < 3000 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
      }
    }
  });
  
  // Track LCP (Largest Contentful Paint) - target <2s
  const lcpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('✓ LCP:', Math.round(entry.startTime) + 'ms', entry.startTime < 2000 ? '✅ GOOD' : entry.startTime < 3000 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
    }
  });
  
  // Track INP (Interaction to Next Paint) - target <200ms
  const inpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 0) {
        console.log('✓ INP:', Math.round(entry.duration) + 'ms', entry.duration < 200 ? '✅ GOOD' : entry.duration < 500 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
      }
    }
  });
  
  try {
    fcpObserver.observe({ type: 'paint', buffered: true });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    inpObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    // Observer not supported
  }
  
  // Track TTFB (Time to First Byte) using Navigation Timing
  window.addEventListener('load', () => {
    const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navTiming) {
      const ttfb = navTiming.responseStart - navTiming.requestStart;
      console.log('✓ TTFB:', Math.round(ttfb) + 'ms', ttfb < 800 ? '✅ GOOD' : ttfb < 1800 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
    }
    
    // Fallback: Check performance timeline for FCP if observer didn't catch it
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry && !window.__fcpLogged) {
      console.log('✓ FCP (fallback):', Math.round(fcpEntry.startTime) + 'ms', fcpEntry.startTime < 1800 ? '✅ GOOD' : fcpEntry.startTime < 3000 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
      (window as any).__fcpLogged = true;
    }
  });
}

// Log script loaded for debugging
console.log('script loaded');

createRoot(document.getElementById("root")!).render(<App />);
