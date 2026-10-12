import React, { forwardRef } from 'react';
import { CardMaskPosition } from '../hooks/useMaskPositions';

export interface MaskedCardProps {
  bgImage: string;
  position?: CardMaskPosition;
  aspectRatio?: number; // naturalWidth / naturalHeight
  focalX?: number; // 0 to 1
  focalY?: number; // 0 to 1
  className?: string;
  style?: React.CSSProperties;
  role?: string;
  'aria-label'?: string;
  children?: React.ReactNode;
}

export const MaskedCard = forwardRef<HTMLDivElement, MaskedCardProps>(function MaskedCard(
  {
    bgImage,
    position,
    aspectRatio = 1376 / 768, // Default natural aspect ratio of the 16:9 images
    focalX = 0.5,
    focalY = 0.5,
    className = '',
    style = {},
    role,
    'aria-label': ariaLabel,
    children,
  },
  ref
) {
  const sw = position?.sw || 0;
  const sh = position?.sh || 0;
  const x = position?.x || 0;
  const y = position?.y || 0;

  let renderedWidth = sw;
  let renderedHeight = sh;
  let offsetX = 0;
  let offsetY = 0;

  if (sw > 0 && sh > 0) {
    const sectionAspect = sw / sh;
    if (sectionAspect > aspectRatio) {
      // Screen is wider than the image: scale by width so it reaches 100% width with ZERO white gap
      renderedWidth = sw;
      renderedHeight = sw / aspectRatio;
      const overflowY = renderedHeight - sh;
      offsetY = overflowY * focalY;
      offsetX = 0;
    } else {
      // Screen is taller than the image: scale by height so it reaches 100% height with ZERO white gap
      renderedHeight = sh;
      renderedWidth = sh * aspectRatio;
      const overflowX = renderedWidth - sw;
      offsetX = overflowX * focalX;
      offsetY = 0;
    }
  }

  const hasValidMask = sw > 0 && sh > 0;

  const maskStyle: React.CSSProperties = hasValidMask
    ? {
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: `${Math.round(renderedWidth)}px ${Math.round(renderedHeight)}px`,
        backgroundPosition: `-${Math.round(x + offsetX)}px -${Math.round(y + offsetY)}px`,
        backgroundRepeat: 'no-repeat',
      }
    : {
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FAFAF9',
      };

  return (
    <div
      ref={ref}
      role={role}
      aria-label={ariaLabel}
      className={`relative overflow-hidden rounded-xl md:rounded-2xl transition-[background-position,background-size] duration-75 ${className}`}
      style={{
        ...maskStyle,
        ...style,
      }}
    >
      {children}
    </div>
  );
});
