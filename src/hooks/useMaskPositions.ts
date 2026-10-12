import { useState, useEffect, useCallback, RefObject } from 'react';

export interface CardMaskPosition {
  x: number;
  y: number;
  sw: number;
  sh: number;
}

export function useMaskPositions(
  sectionRef: RefObject<HTMLElement | null>,
  cardRefs: (RefObject<HTMLElement | null> | HTMLElement | null)[]
): (CardMaskPosition | undefined)[] {
  const [positions, setPositions] = useState<(CardMaskPosition | undefined)[]>([]);

  const calculatePositions = useCallback(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const sectionRect = sectionEl.getBoundingClientRect();
    const sw = sectionRect.width;
    const sh = sectionRect.height;

    if (sw === 0 || sh === 0) return;

    const newPositions: (CardMaskPosition | undefined)[] = cardRefs.map((ref) => {
      const cardEl = ref && 'current' in ref ? ref.current : ref;
      if (!cardEl) return undefined;

      const cardRect = cardEl.getBoundingClientRect();
      const x = cardRect.left - sectionRect.left;
      const y = cardRect.top - sectionRect.top;

      return { x, y, sw, sh };
    });

    setPositions(newPositions);
  }, [sectionRef, cardRefs]);

  useEffect(() => {
    let animationFrameId: number;

    const handleUpdate = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        calculatePositions();
      });
    };

    handleUpdate();

    // ResizeObserver on section
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && sectionRef.current) {
      resizeObserver = new ResizeObserver(() => {
        handleUpdate();
      });
      resizeObserver.observe(sectionRef.current);
    }

    // Window resize
    window.addEventListener('resize', handleUpdate);

    // Font readiness check
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleUpdate).catch(() => {});
    }

    // Delayed checks for initial layout stabilization
    const timer1 = setTimeout(handleUpdate, 100);
    const timer2 = setTimeout(handleUpdate, 500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', handleUpdate);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [calculatePositions, sectionRef]);

  return positions;
}
