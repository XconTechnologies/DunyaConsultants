/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Google Tag Manager dataLayer type declaration
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}