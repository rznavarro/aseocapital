import { useState, useEffect, useRef, CSSProperties, RefObject } from 'react';

export function useStaggeredReveal(
  count: number,
  threshold = 0.1,
  externalRef?: RefObject<HTMLElement | null>,
  isImmediate = false
) {
  const internalRef = useRef<HTMLElement | null>(null);
  const containerRef = externalRef || internalRef;
  const [isVisible, setIsVisible] = useState<boolean>(isImmediate);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches || isImmediate) {
      setIsVisible(true);
      return;
    }

    const element = containerRef.current;
    if (!element) {
      // Fallback: if ref is not attached yet, make visible to avoid blank screen
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(element);

    // Safety fallback: ensure section becomes visible no matter what after 800ms
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, [containerRef, threshold, isImmediate]);

  const getAnimStyle = (index: number): CSSProperties => {
    if (prefersReducedMotion) {
      return {
        opacity: 1,
        transform: 'none',
      };
    }

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: `${index * 100}ms`,
      willChange: 'opacity, transform',
    };
  };

  return { containerRef, isVisible, getAnimStyle };
}
