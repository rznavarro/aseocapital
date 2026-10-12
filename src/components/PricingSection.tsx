import { ArrowUpRightIcon } from './Icons';
import { useStaggeredReveal } from '../hooks/useStaggeredReveal';
import { CARPET_PRICES, UPHOLSTERY_PRICES, getWhatsAppUrl, WA_MESSAGES } from '../data/content';

export function PricingSection() {
  const { containerRef, getAnimStyle } = useStaggeredReveal(4, 0.1);

  return (
    <section
      id="precios"
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="relative w-full min-h-screen md:h-screen flex flex-col pt-1.5 md:pt-2 px-1.5 md:px-2.5 pb-1.5 md:pb-2.5 gap-1.5 md:gap-2 select-none scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2 flex-1 min-h-0">
        {/* Columna Izquierda */}
        <div className="flex flex-col gap-1.5 md:gap-2 flex-1 min-h-0">
          {/* Tarjeta 1: Stone-50 Precios de Alfombras */}
          <div
            style={getAnimStyle(0)}
            className="flex-[1.3] bg-[#FAFAF9] rounded-xl md:rounded-2xl p-5 md:p-7 border border-black/5 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                  Valores de referencia
                </span>
                <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold text-black tracking-tight leading-[0.92]">
                  Precios
                  <br />
                  claros
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-neutral-200/70 text-xs font-bold text-neutral-800">
                Alfombras muro a muro
              </span>
            </div>

            {/* Lista de precios con tabular-nums */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2 py-1">
              {CARPET_PRICES.map((item) => (
                <div
                  key={item.concept}
                  className="flex items-center justify-between py-1.5 border-b border-neutral-200/80 text-sm md:text-[15px]"
                >
                  <span className="text-neutral-800 font-medium">{item.concept}</span>
                  <span className="font-bold text-black tabular-nums">{item.price}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-neutral-500 pt-2">
              * Valores para superficies residenciales estándar. Horarios acordados con cada cliente.
            </p>
          </div>

          {/* Tarjeta 2: Dos fotos de detalle lado a lado */}
          <div
            style={getAnimStyle(1)}
            className="flex-1 grid grid-cols-2 gap-1.5 md:gap-2 min-h-[140px] md:min-h-0"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-black/5 bg-neutral-100">
              <img
                src="/images/detalle-extraccion-1280.webp"
                alt="Detalle de extracción profunda de alfombra con máquina profesional"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-semibold text-white tracking-wide">
                  Extracción profesional
                </span>
              </div>
            </div>

            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-black/5 bg-neutral-100">
              <img
                src="/images/detalle-textura-1280.webp"
                alt="Textura limpia de fibras de alfombra desinfectada"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
                <span className="text-[11px] font-semibold text-white tracking-wide">
                  Fibras desinfectadas
                </span>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Zinc-200 de Cierre */}
          <div
            style={getAnimStyle(2)}
            className="flex-[0.7] bg-[#E4E4E7] rounded-xl md:rounded-2xl p-5 md:p-6 border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest">
                Valor final
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight leading-tight">
                Se confirma por WhatsApp
              </h3>
              <p className="text-xs text-neutral-600 mt-1 max-w-[340px]">
                Según metraje, estado y si el espacio está amoblado. Horario a convenir.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(WA_MESSAGES.confirmarValor)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="precio-confirmar-valor"
              className="px-5 py-2.5 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:scale-105 active:scale-95 transition-transform duration-200 shadow-xs border border-black/10 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              Confirmar mi valor
            </a>
          </div>
        </div>

        {/* Columna Derecha — Sofá Tapiz con tarjetas superpuestas */}
        <div
          style={getAnimStyle(3)}
          className="relative flex-1 min-h-[460px] md:min-h-0 rounded-xl md:rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between"
        >
          {/* Fondo Sofá Tapiz */}
          <div className="absolute inset-0">
            <img
              src="/images/tapiz-1280.webp"
              alt="Sofá de tres cuerpos tapizado en tela limpia en living luminoso"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            {/* Gradiente sutil para acentuar tarjetas inferiores */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>

          {/* Encabezado superior sobre foto */}
          <div className="relative z-10 p-5 md:p-7 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-xs font-bold text-black border border-white/60">
              Tapicería a Domicilio
            </span>
          </div>

          {/* Dos tarjetas superpuestas abajo */}
          <div className="relative z-10 p-3 md:p-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
            {/* Tarjeta Blanca: Tapices y sillones */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 md:p-5 flex flex-col justify-between shadow-lg border border-white">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-extrabold text-black leading-tight">
                    Tapices
                    <br />
                    y sillones
                  </h3>
                  <a
                    href={getWhatsAppUrl(WA_MESSAGES.tapices)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="precio-tapices-whatsapp"
                    aria-label="Cotizar tapices por WhatsApp"
                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-1.5 text-xs md:text-sm text-neutral-800 tabular-nums">
                  {UPHOLSTERY_PRICES.map((p) => (
                    <div key={p.concept} className="flex justify-between items-center py-0.5 border-b border-neutral-100">
                      <span>{p.concept}</span>
                      <span className="font-bold">{p.price}</span>
                    </div>
                  ))}
                  <p className="text-[11px] text-neutral-500 pt-1 leading-snug">
                    Sobre 8 sillas de oficina, cada silla adicional $2.000.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta Vidrio: Paga en cuotas con Webpay */}
            <div className="bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-xl p-4 md:p-5 flex flex-col justify-between border border-white/40 text-white shadow-lg transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider">
                    Medios de pago
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight mt-1">
                    Paga
                    <br />
                    en cuotas
                  </h3>
                </div>
                <a
                  href="#cotizar"
                  aria-label="Ir a cotizar con Webpay"
                  className="w-8 h-8 rounded-full border border-white/60 text-white flex items-center justify-center bg-white/10 hover:scale-110 transition-transform"
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-black text-xs font-bold">
                  con Webpay
                </span>
                <p className="text-[11px] text-white/80 mt-2">
                  Tarjetas de débito y crédito en las cuotas que prefieras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
