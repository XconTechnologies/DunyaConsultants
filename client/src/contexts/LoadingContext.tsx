import { createContext, useContext, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  hideInitialLoader: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  hideInitialLoader: () => {},
});

export const useLoading = () => useContext(LoadingContext);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  useEffect(() => {
    const maxTimer = setTimeout(() => {
      const loader = document.getElementById('root')?.querySelector('.critical-section');
      if (loader && loader.parentElement) {
        loader.remove();
      }
    }, 1000);

    const hideOnReady = () => {
      const loader = document.getElementById('root')?.querySelector('.critical-section');
      if (loader && loader.parentElement) {
        loader.remove();
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(hideOnReady);
    });

    return () => {
      clearTimeout(maxTimer);
    };
  }, []);

  const hideInitialLoader = () => {
    const loader = document.getElementById('root')?.querySelector('.critical-section');
    if (loader && loader.parentElement) {
      loader.remove();
    }
  };

  return (
    <LoadingContext.Provider value={{ hideInitialLoader }}>
      {children}
    </LoadingContext.Provider>
  );
}
