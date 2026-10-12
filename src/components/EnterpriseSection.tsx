import { CheckIcon } from './Icons';
import { useStaggeredReveal } from '../hooks/useStaggeredReveal';
import {
  DECORATIVE_RUGS,
  WASHING_PROCESS,
  ENTERPRISE_FEATURES,
  getWhatsAppUrl,
  WA_MESSAGES,
} from '../data/content';

export function EnterpriseSection() {
  const { containerRef, getAnimStyle } = useStaggeredReveal(3, 0.1);

  // Repetir la lista de alfombras decorativas para que el marquee sea infinito y continuo
  const marqueeItems = [...DECORATIVE_RUGS, ...DECORATIVE_RUGS, ...DECORATIVE_RUGS];

  return (
    <section
      id="empresas"
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="relative w-full min-h-screen md:h-screen flex flex-col pt-1.5 md:pt-2 px-1.5 md:px-2.5 pb-1.5 md:pb-2.5 gap-1.5 md:gap-2 select-none scroll-mt-20"
    >
      {/* Barra Superior de Ancho Completo — Marquee de Alfombras Decorativas */}
      <div
        style={getAnimStyle(0)}
        className="w-full h-12 md:h-16 bg-[#FAFAF9] rounded-xl md:rounded-2xl border border-black/5 flex items-center px-4 md:px-6 overflow-hidden shrink-0"
      >
        <span className="font-bold text-xs md:text-sm text-black uppercase tracking-wider shrink-0 mr-4 pr-4 border-r border-neutral-300">
          Alfombras decorativas:
        </span>

        {/* Accessible screen reader text */}
        <span className="sr-only">
          Lavamos alfombras decorativas: {DECORATIVE_RUGS.join(', ')}.
        </span>

        {/* Marquee visual continuo */}
        <div className="overflow-hidden flex-1 relative" aria-hidden="true">
          <div className="animate-marquee gap-6 text-xs md:text-sm font-semibold text-neutral-700">
            {marqueeItems.map((rug, idx) => (
              <span key={`${rug}-${idx}`} className="flex items-center gap-6 whitespace-nowrap">
                <span>{rug}</span>
                <span className="text-neutral-400">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Grilla Principal de 2 Columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2 flex-1 min-h-0">
        {/* Columna Izquierda: Así lavamos tus alfombras */}
        <div
          style={getAnimStyle(1)}
          className="flex flex-col gap-1.5 md:gap-2 flex-1 min-h-0"
        >
          {/* Tarjeta de Título Proceso */}
          <div className="bg-[#FAFAF9] rounded-xl md:rounded-2xl p-5 md:p-6 border border-black/5 shrink-0">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
              Metodología de 4 pasos
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-tight mt-1">
              Así lavamos tus alfombras
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 mt-1 font-medium">
              Detergentes y desinfectantes que eliminan ácaros, hongos y bacterias.
            </p>
          </div>

          {/* Grilla 2x2 de los 4 pasos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2 flex-1 min-h-0">
            {WASHING_PROCESS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`rounded-xl md:rounded-2xl p-5 flex flex-col justify-between border ${
                    isEven
                      ? 'bg-white border-neutral-200 shadow-2xs'
                      : 'bg-[#FAFAF9] border-zinc-200'
                  }`}
                >
                  <span className="text-4xl md:text-5xl font-extrabold text-neutral-300 leading-none tracking-tighter">
                    {step.number}
                  </span>
                  <div className="mt-4">
                    <h3 className="text-base md:text-lg font-bold text-black tracking-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Columna Derecha: Tarjeta NEGRA de Empresas */}
        <div
          style={getAnimStyle(2)}
          className="bg-black text-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-black flex flex-col justify-between flex-1 min-h-0 shadow-xl"
        >
          <div>
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Empresas e instituciones
            </span>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold text-white tracking-tight leading-[0.92] mt-2 mb-6">
              Aseo de oficinas
              <br />
              en manos
              <br />
              profesionales
            </h2>

            {/* Lista de 6 ítems verificados con Check SVG */}
            <ul className="space-y-3 md:space-y-3.5 my-4">
              {ENTERPRISE_FEATURES.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs md:text-[13px] lg:text-sm text-neutral-200 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
            {/* Chips de Mercado Público y Webpay */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] md:text-xs font-semibold text-white border border-white/20">
                Proveedor en Mercado Público
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] md:text-xs font-semibold text-white border border-white/20">
                Pago en cuotas con Webpay
              </span>
            </div>

            {/* Pill Blanco: Presupuesto para empresas */}
            <a
              href={getWhatsAppUrl(WA_MESSAGES.empresas)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="empresas-whatsapp"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:scale-105 active:scale-95 transition-transform duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Presupuesto para empresas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
