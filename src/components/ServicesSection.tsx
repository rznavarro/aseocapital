import { useState, useRef } from 'react';
import { MaskedCard } from './MaskedCard';
import { ArrowUpRightIcon } from './Icons';
import { useIsMobile } from '../hooks/useIsMobile';
import { useMaskPositions } from '../hooks/useMaskPositions';
import { useStaggeredReveal } from '../hooks/useStaggeredReveal';
import { SERVICES, getWhatsAppUrl, WA_MESSAGES } from '../data/content';

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  const sectionRef = useRef<HTMLElement>(null);
  const cardRef0 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  const positions = useMaskPositions(sectionRef, [cardRef0, cardRef1, cardRef2, cardRef3]);

  const servicesImageSrc = isMobile ? '/images/servicios-1280.webp' : '/images/servicios.webp';
  const aspectRatio = 1376 / 768;

  // Pass sectionRef to useStaggeredReveal so it is observed correctly
  const { getAnimStyle } = useStaggeredReveal(4, 0.1, sectionRef);
  const focalX = isMobile ? 0.6 : 0.8;
  const focalY = 0.5;

  const handleSelectService = (id: string) => {
    if (id === activeServiceId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveServiceId(id);
      setIsTransitioning(false);
    }, 150);

    // En móvil, hacer scroll suave a la tarjeta de detalle si está fuera de pantalla
    if (isMobile && cardRef0.current) {
      const rect = cardRef0.current.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        cardRef0.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative w-full min-h-screen md:h-screen flex flex-col justify-between pt-2.5 px-1.5 md:px-2.5 pb-1.5 md:pb-2.5 gap-1.5 md:gap-2 select-none scroll-mt-20"
    >
      {/* Grilla Superior / Central */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2 flex-1 min-h-0">
        {/* Columna Izquierda en Desktop */}
        <div className="flex flex-col gap-1.5 md:gap-2 flex-1 min-h-0">
          {/* Tarjeta 0 — Detalle del servicio activo */}
          <MaskedCard
            ref={cardRef0}
            bgImage={servicesImageSrc}
            position={positions[0]}
            aspectRatio={aspectRatio}
            focalX={focalX}
            focalY={focalY}
            className="flex-1 min-h-[220px] md:min-h-0 border border-black/5"
            style={getAnimStyle(0)}
          >
            {/* Capa de vidrio casi opaca para máxima legibilidad */}
            <div
              aria-live="polite"
              className={`w-full h-full bg-white/92 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between transition-opacity duration-250 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs md:text-sm font-extrabold text-neutral-400 tracking-wider">
                    SERVICIO {activeService.number}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                    Servicio Integral
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight mb-2">
                  {activeService.name}
                </h3>
                <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-[440px]">
                  {activeService.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-neutral-200/80 mt-auto">
                <a
                  href={getWhatsAppUrl(WA_MESSAGES.byService(activeService.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`servicio-${activeService.id}`}
                  className="inline-flex items-center gap-3 text-sm md:text-base font-bold text-black hover:text-neutral-600 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
                >
                  <span>Cotizar este servicio</span>
                  <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </MaskedCard>

          {/* Tarjeta 2 — Frase "Listo para entregar" */}
          <MaskedCard
            ref={cardRef2}
            bgImage={servicesImageSrc}
            position={positions[2]}
            aspectRatio={aspectRatio}
            focalX={focalX}
            focalY={focalY}
            className="flex-1 min-h-[170px] md:min-h-0 p-6 md:p-8 flex flex-col justify-between border border-black/5"
            style={getAnimStyle(2)}
          >
            {/* Overlay sutil para garantizar contraste sobre la foto */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

            <div className="relative z-10">
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-white/80">
                Mantención & Recuperación
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold text-white tracking-tight leading-[0.88] mt-1">
                Listo para
                <br />
                entregar
              </h2>
            </div>
            <p className="relative z-10 text-xs md:text-sm font-semibold text-white/90">
              Un solo equipo: limpieza profunda, pintura y gasfitería.
            </p>
          </MaskedCard>
        </div>

        {/* Tarjeta 1 — Tres caminos "¿Para quién?" (Columna derecha en Desktop) */}
        <MaskedCard
          ref={cardRef1}
          bgImage={servicesImageSrc}
          position={positions[1]}
          aspectRatio={aspectRatio}
          focalX={focalX}
          focalY={focalY}
          className="min-h-[280px] md:min-h-0 p-6 md:p-8 lg:p-10 flex flex-col justify-between border border-black/5"
          style={getAnimStyle(1)}
        >
          {/* Overlay oscuro para fondo editorial de contraste */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

          <div className="relative z-10">
            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
              Segmentos & Necesidades
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-1">
              ¿Para quién?
            </h3>
          </div>

          <div className="relative z-10 flex flex-col gap-3 my-4">
            {/* Hogares */}
            <a
              href={getWhatsAppUrl(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="camino-hogares"
              className="group flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/20 hover:bg-white/35 backdrop-blur-xl border border-white/30 text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold">Hogares</span>
                <span className="text-xs md:text-sm text-white/80">Entregar, arrendar o vender</span>
              </div>
              <span className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/10">
                <ArrowUpRightIcon className="w-4 h-4 text-white" />
              </span>
            </a>

            {/* Oficinas y empresas */}
            <a
              href="#empresas"
              data-cta="camino-empresas"
              className="group flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/20 hover:bg-white/35 backdrop-blur-xl border border-white/30 text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-white"
            >
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold">Oficinas y empresas</span>
                <span className="text-xs md:text-sm text-white/80">Aseo corporativo & Mercado Público</span>
              </div>
              <span className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/10">
                <ArrowUpRightIcon className="w-4 h-4 text-white" />
              </span>
            </a>

            {/* Corredores */}
            <a
              href={getWhatsAppUrl(WA_MESSAGES.corredores)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="camino-corredores"
              className="group flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/20 hover:bg-white/35 backdrop-blur-xl border border-white/30 text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold">Corredores e inmobiliarias</span>
                <span className="text-xs md:text-sm text-white/80">Entrega impecable de propiedades</span>
              </div>
              <span className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform bg-white/10">
                <ArrowUpRightIcon className="w-4 h-4 text-white" />
              </span>
            </a>
          </div>

          <div className="relative z-10 pt-2 border-t border-white/20">
            <p className="text-[11px] md:text-xs text-white/70">
              También: aseo industrial, pisos duros, alfombras decorativas y urgencias por inundación.
            </p>
          </div>
        </MaskedCard>
      </div>

      {/* Tarjeta 3 — Selector de servicios (Ancho Completo) */}
      <MaskedCard
        ref={cardRef3}
        bgImage={servicesImageSrc}
        position={positions[3]}
        aspectRatio={aspectRatio}
        focalX={focalX}
        focalY={focalY}
        className="p-2 md:p-2.5 border border-black/5 shrink-0"
        style={getAnimStyle(3)}
      >
        <div className="w-full flex gap-1.5 md:gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {SERVICES.map((s) => {
            const isActive = s.id === activeServiceId;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-pressed={isActive}
                onClick={() => handleSelectService(s.id)}
                className={`snap-start flex-1 min-w-[155px] md:min-w-0 p-3.5 md:p-4 rounded-xl flex flex-col justify-between h-24 md:h-28 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer ${
                  isActive
                    ? 'bg-white/95 backdrop-blur-md text-black border-2 border-white shadow-md scale-[1.01]'
                    : 'bg-white/25 hover:bg-white/40 backdrop-blur-xl text-white border border-white/40'
                }`}
              >
                <div className="text-sm md:text-base lg:text-lg font-bold leading-[1.08] tracking-tight">
                  {s.shortName[0]}
                  <br />
                  {s.shortName[1]}
                </div>
                <div className="flex justify-end">
                  <span
                    className={`text-[11px] font-extrabold w-6 h-6 rounded-full flex items-center justify-center border ${
                      isActive
                        ? 'border-black text-black bg-white'
                        : 'border-white/60 text-white bg-black/20'
                    }`}
                  >
                    {s.number}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </MaskedCard>
    </section>
  );
}
