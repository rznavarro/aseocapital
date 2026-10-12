import { useRef } from 'react';
import { MaskedCard } from './MaskedCard';
import { WhatsAppIcon } from './Icons';
import { useIsMobile } from '../hooks/useIsMobile';
import { useMaskPositions } from '../hooks/useMaskPositions';
import { useStaggeredReveal } from '../hooks/useStaggeredReveal';
import { getWhatsAppUrl, WA_MESSAGES } from '../data/content';

export function HeroSection() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);

  const cardRef0 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  const positions = useMaskPositions(sectionRef, [cardRef0, cardRef1, cardRef2, cardRef3]);

  const heroImageSrc = isMobile ? '/images/hero-1280.webp' : '/images/hero.webp';
  const aspectRatio = 1376 / 768;

  // isImmediate = true so Hero starts appearing immediately on first load without getting stuck
  const { getAnimStyle } = useStaggeredReveal(4, 0.1, sectionRef, true);

  const focalX = isMobile ? 0.65 : 0.75;
  const focalY = 0.5;

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative w-full h-[100svh] min-h-[640px] flex flex-col pt-16 md:pt-20 px-1.5 md:px-2.5 pb-1.5 md:pb-2.5 gap-1.5 md:gap-2 select-none"
    >
      {/* 3 Barras de Atributo */}
      <MaskedCard
        ref={cardRef0}
        bgImage={heroImageSrc}
        position={positions[0]}
        aspectRatio={aspectRatio}
        focalX={focalX}
        focalY={focalY}
        className="h-12 md:h-16 flex items-center justify-center px-4 border border-black/5 shrink-0"
        style={getAnimStyle(0)}
      >
        <span className="relative z-10 text-base sm:text-lg md:text-2xl lg:text-[28px] font-bold text-black tracking-tight text-center drop-shadow-xs">
          Lavado de alfombras muro a muro
        </span>
      </MaskedCard>

      <MaskedCard
        ref={cardRef1}
        bgImage={heroImageSrc}
        position={positions[1]}
        aspectRatio={aspectRatio}
        focalX={focalX}
        focalY={focalY}
        className="h-12 md:h-16 flex items-center justify-center px-4 border border-black/5 shrink-0"
        style={getAnimStyle(1)}
      >
        <span className="relative z-10 text-base sm:text-lg md:text-2xl lg:text-[28px] font-bold text-black tracking-tight text-center drop-shadow-xs">
          Aseo profundo de inmuebles
        </span>
      </MaskedCard>

      <MaskedCard
        ref={cardRef2}
        bgImage={heroImageSrc}
        position={positions[2]}
        aspectRatio={aspectRatio}
        focalX={focalX}
        focalY={focalY}
        className="h-12 md:h-16 flex items-center justify-center px-4 border border-black/5 shrink-0"
        style={getAnimStyle(2)}
      >
        <span className="relative z-10 text-base sm:text-lg md:text-2xl lg:text-[28px] font-bold text-black tracking-tight text-center drop-shadow-xs">
          Pintura y gasfitería, un solo equipo
        </span>
      </MaskedCard>

      {/* Tarjeta Principal */}
      <MaskedCard
        ref={cardRef3}
        role="img"
        aria-label="Living luminoso con alfombra muro a muro recién lavada"
        bgImage={heroImageSrc}
        position={positions[3]}
        aspectRatio={aspectRatio}
        focalX={focalX}
        focalY={focalY}
        className="flex-1 flex flex-col justify-between p-4 md:p-8 lg:p-10 border border-black/5 overflow-hidden"
        style={getAnimStyle(3)}
      >
        {/* Fila Superior */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 z-10">
          {/* Arriba Izquierda */}
          <div className="max-w-[280px] md:max-w-[340px] bg-white/75 md:bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-white/60 shadow-xs">
            <p className="text-xs md:text-sm font-semibold text-black leading-snug">
              Devolvemos la habitabilidad, limpieza e higiene profunda a tus espacios: listos para
              habitar, arrendar o vender.
            </p>
          </div>

          {/* Arriba Derecha (solo desktop) */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black border border-white/60 shadow-xs">
              Pago en cuotas con Webpay
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black border border-white/60 shadow-xs">
              Proveedor en Mercado Público
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black border border-white/60 shadow-xs">
              Garantía 100%
            </span>
          </div>
        </div>

        {/* Fila Inferior */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 z-10 mt-auto">
          {/* Abajo Izquierda: H1 estructurado */}
          <div className="flex flex-col items-start">
            <span className="text-xs md:text-sm font-bold text-neutral-800 uppercase tracking-wider mb-1 bg-white/80 px-2.5 py-0.5 rounded-md backdrop-blur-xs border border-white/60">
              Oficina en Ñuñoa · Santiago
            </span>
            <h1 className="text-black font-extrabold tracking-tight leading-[0.82] flex flex-col">
              <span className="text-[clamp(1.5rem,4vw,3.5rem)]">Lavado de</span>
              <span className="text-[clamp(3.1rem,11vw,9.5rem)] uppercase -my-1 md:-my-2">alfombras</span>
              <span className="text-[clamp(1.5rem,4vw,3.5rem)]">en Ñuñoa</span>
            </h1>
          </div>

          {/* Abajo Derecha: Precio y Botón WhatsApp */}
          <div className="flex flex-col items-start md:items-end gap-2.5 w-full md:w-auto">
            {/* Tag de precio */}
            <div className="bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-bold tabular-nums shadow-sm border border-white/10">
              Desde $35.000 por dormitorio
            </div>

            {/* Pill de WhatsApp */}
            <a
              href={getWhatsAppUrl(WA_MESSAGES.alfombras)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero-whatsapp"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-sm md:text-base font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      </MaskedCard>
    </section>
  );
}
