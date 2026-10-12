import { useState, useEffect } from 'react';

export function Splash() {
  const [shouldRender, setShouldRender] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    // Check reduced motion
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        return;
      }

      // Check session storage
      try {
        const hasVisited = sessionStorage.getItem('capital_visited');
        if (hasVisited) {
          return;
        }
        sessionStorage.setItem('capital_visited', 'true');
      } catch {
        // Storage might be restricted, proceed
      }

      setShouldRender(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowWord(true);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [shouldRender]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
      }, 250);

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 850); // 250ms wait + 600ms fade transition

      return () => {
        clearTimeout(timer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] bg-white flex flex-col justify-end p-6 md:p-10 transition-opacity duration-600 pointer-events-none select-none ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-start">
        <span className="text-[72px] md:text-[128px] font-bold text-black tabular-nums leading-none tracking-tighter">
          {progress}%
        </span>
        <span
          className={`text-sm md:text-base font-semibold text-neutral-500 uppercase tracking-widest mt-2 transition-opacity duration-300 ${
            showWord ? 'opacity-100' : 'opacity-0'
          }`}
        >
          garantizado
        </span>
      </div>
    </div>
  );
}
