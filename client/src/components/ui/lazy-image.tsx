import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  srcSet?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEuNjY2NjdDNS4zOTc2MyAxLjY2NjY3IDEuNjY2NjcgNS4zOTc2MyAxLjY2NjY3IDEwQzEuNjY2NjcgMTQuNjAyNCA1LjM5NzYzIDE4LjMzMzMgMTAgMTguMzMzM0MxNC42MDI0IDE4LjMzMzMgMTguMzMzMyAxNC42MDI0IDE4LjMzMzMgMTBDMTguMzMzMyA1LjM5NzYzIDE0LjYwMjQgMS42NjY2NyAxMCAxLjY2NjY3WiIgZmlsbD0iI0Y0RjRGNSIvPgo8L3N2Zz4K',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes,
  srcSet,
  onLoad,
  onError,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setInView(true);
      return;
    }

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading]);

  // Set fetchpriority imperatively to avoid React warning
  useEffect(() => {
    if (imgRef.current && fetchPriority && fetchPriority !== 'auto') {
      // Apply fetchpriority for eager images or when in view for lazy images
      if (loading === 'eager' || inView) {
        imgRef.current.setAttribute('fetchpriority', fetchPriority);
      }
    }
  }, [fetchPriority, loading, inView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={inView ? src : placeholder}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        srcSet={inView ? srcSet : undefined}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'filter blur-sm' : ''} ${
          imageClassName || 'w-full h-full object-cover'
        }`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}