import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LocationState {
  scrollTo?: string;
  [key: string]: any;
}

export function useScrollToLocation() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState;

    if (state && state.scrollTo) {
      const elementId = state.scrollTo;

      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Initial attempt
      setTimeout(scrollToElement, 100);

      // Retry sequence to catch late layout shifts (e.g. image loading, lazy chunks)
      const timers = [
        setTimeout(scrollToElement, 500),
        setTimeout(scrollToElement, 1000),
        setTimeout(scrollToElement, 2000),
        setTimeout(scrollToElement, 3000)
      ];

      // Clean up history state only after we are likely fully settled
      const cleanupTimer = setTimeout(() => {
        window.history.replaceState({}, '');
      }, 3500);

      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(cleanupTimer);
      };
    } else if (!location.hash) {
      // If no scrollTo state and no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);
}
