import { useState, useEffect } from 'react';

export function useImageWidth(src: string, sectionHeight: number, defaultAspectRatio = 16 / 9): number {
  // Default immediately to the expected aspect ratio so there's zero layout shift and zero blank state
  const [renderWidth, setRenderWidth] = useState<number>(() => {
    return sectionHeight > 0 ? sectionHeight * defaultAspectRatio : 1440 * defaultAspectRatio;
  });

  useEffect(() => {
    if (!src) return;

    let isMounted = true;
    const img = new Image();
    img.src = src;

    const compute = () => {
      if (!isMounted) return;
      const sh = sectionHeight > 0 ? sectionHeight : (typeof window !== 'undefined' ? window.innerHeight : 800);
      if (img.naturalHeight > 0) {
        const computed = img.naturalWidth * (sh / img.naturalHeight);
        setRenderWidth(computed);
      } else {
        setRenderWidth(sh * defaultAspectRatio);
      }
    };

    if (img.complete && img.naturalHeight > 0) {
      compute();
    } else {
      img.onload = compute;
    }

    return () => {
      isMounted = false;
      img.onload = null;
    };
  }, [src, sectionHeight, defaultAspectRatio]);

  return renderWidth;
}
