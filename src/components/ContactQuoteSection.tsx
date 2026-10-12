import { useState, useId } from 'react';
import {
  WhatsAppIcon,
  PhoneIcon,
  LocationIcon,
  ClockIcon,
  MailIcon,
  ChevronDownIcon,
} from './Icons';
import { useStaggeredReveal } from '../hooks/useStaggeredReveal';
import {
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  ADDRESS_TEXT,
  SCHEDULE_TEXT,
  EMERGENCIES_TEXT,
  COMMUNES,
  FAQS,
  getWhatsAppUrl,
  getTelUrl,
  WA_MESSAGES,
} from '../data/content';

const QUOTE_SERVICES = [
  'Lavado de alfombras muro a muro',
  'Lavado de alfombras para oficinas',
  'Aseo de oficinas',
  'Aseo profundo de inmuebles',
  'Servicio de pintura',
  'Decapado de piso flotante',
  'Vidrios y tapices',
  'Gasfitería a domicilio',
];

const CARPET_SIZES = [
  '1 dorm',
  '2 dorm',
  '3 dorm',
  'Living/comedor',
  'Otro',
];

export function ContactQuoteSection() {
  const [selectedService, setSelectedService] = useState<string>('Lavado de alfombras muro a muro');
  const [selectedCommune, setSelectedCommune] = useState<string>('Ñuñoa');
  const [selectedSize, setSelectedSize] = useState<string>('1 dorm');
  const [selectedFurnished, setSelectedFurnished] = useState<string>('Amoblado');
  const [clientName, setClientName] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const nameInputId = useId();
  const communeSelectId = useId();

  const { containerRef, getAnimStyle } = useStaggeredReveal(4, 0.1);

  const isCarpetService =
    selectedService === 'Lavado de alfombras muro a muro' ||
    selectedService === 'Lavado de alfombras para oficinas';

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      setErrorMsg('Por favor selecciona un servicio.');
      return;
    }
    setErrorMsg('');

    // Armar mensaje omitiendo partes vacías
    let message = 'Hola';
    if (clientName.trim()) {
      message += `, soy ${clientName.trim()}`;
    }
    message += `. Quiero cotizar ${selectedService} en ${selectedCommune}.`;

    if (isCarpetService) {
      if (selectedSize) {
        message += ` Tamaño: ${selectedSize}.`;
      }
      if (selectedFurnished) {
        message += ` Espacio: ${selectedFurnished}.`;
      }
    }

    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="cotizar"
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className="relative w-full min-h-screen flex flex-col pt-1.5 md:pt-2 px-1.5 md:px-2.5 pb-1.5 md:pb-2.5 gap-1.5 md:gap-2 select-none scroll-mt-20"
    >
      {/* Grilla Superior de 2 Columnas (Cotizador & Contacto/Mapa) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 md:gap-2">
        {/* Columna Izquierda — Cotizador en Stone-50 */}
        <div
          style={getAnimStyle(0)}
          className="bg-[#FAFAF9] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-black/5 flex flex-col justify-between shadow-2xs"
        >
          <div>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
              Presupuesto Express
            </span>
            <h2 className="text-[clamp(2.3rem,4.8vw,4rem)] font-extrabold text-black tracking-tight leading-[0.92] mt-1 mb-6">
              Cotiza en
              <br />
              30 segundos
            </h2>

            <form onSubmit={handleSendQuote} className="space-y-6">
              {/* 1. Servicio: Chips */}
              <fieldset>
                <legend className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2.5 block">
                  1. Servicio <span className="text-neutral-500 font-normal">(obligatorio)</span>
                </legend>
                <div className="flex flex-wrap gap-2">
                  {QUOTE_SERVICES.map((srv) => {
                    const isSelected = selectedService === srv;
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => {
                          setSelectedService(srv);
                          setErrorMsg('');
                        }}
                        className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-black text-white shadow-xs'
                            : 'bg-white text-neutral-800 border border-neutral-300 hover:border-black'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
                {errorMsg && (
                  <p className="text-xs text-red-600 mt-2 font-medium" role="alert">
                    {errorMsg}
                  </p>
                )}
              </fieldset>

              {/* 2. Comuna: Select */}
              <div>
                <label
                  htmlFor={communeSelectId}
                  className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2 block"
                >
                  2. Comuna
                </label>
                <div className="relative">
                  <select
                    id={communeSelectId}
                    value={selectedCommune}
                    onChange={(e) => setSelectedCommune(e.target.value)}
                    className="w-full appearance-none bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer pr-10"
                  >
                    {COMMUNES.map((com) => (
                      <option key={com} value={com}>
                        {com}
                      </option>
                    ))}
                    <option value="Otra comuna de Santiago">Otra comuna de Santiago</option>
                  </select>
                  <ChevronDownIcon className="w-4 h-4 text-neutral-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 3. Tamaño y Amoblado (Solo si es servicio de alfombras) */}
              {isCarpetService && (
                <div className="space-y-4 pt-2 border-t border-neutral-200">
                  <fieldset>
                    <legend className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2 block">
                      3. Tamaño o superficie
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {CARPET_SIZES.map((sz) => {
                        const isSelected = selectedSize === sz;
                        return (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setSelectedSize(sz)}
                            className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-black text-white'
                                : 'bg-white text-neutral-800 border border-neutral-300 hover:border-black'
                            }`}
                          >
                            {sz}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2 block">
                      ¿Amoblado o no amoblado?
                    </legend>
                    <div className="flex gap-2">
                      {['Amoblado', 'Desocupado / No amoblado'].map((state) => {
                        const isSelected = selectedFurnished === state;
                        return (
                          <button
                            key={state}
                            type="button"
                            onClick={() => setSelectedFurnished(state)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-black text-white'
                                : 'bg-white text-neutral-800 border border-neutral-300 hover:border-black'
                            }`}
                          >
                            {state}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              )}

              {/* 4. Nombre (Opcional) */}
              <div>
                <label
                  htmlFor={nameInputId}
                  className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2 block"
                >
                  Tu nombre <span className="text-neutral-500 font-normal">(opcional)</span>
                </label>
                <input
                  id={nameInputId}
                  type="text"
                  placeholder="Ej. Pedro Reyes"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Botón enviar por WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  data-cta="cotizador-submit-whatsapp"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-black text-white text-sm md:text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Enviar por WhatsApp</span>
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-2">
                  Se abrirá WhatsApp con el mensaje estructurado listo para enviar.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Columna Derecha — Contacto & Mapa */}
        <div id="contacto" className="flex flex-col gap-1.5 md:gap-2 scroll-mt-20">
          {/* Tarjeta de Contacto en Zinc-200 */}
          <div
            style={getAnimStyle(1)}
            className="bg-[#E4E4E7] rounded-xl md:rounded-2xl p-6 md:p-8 border border-black/5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold text-neutral-600 uppercase tracking-widest">
                Atención directa
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-black tracking-tight leading-[0.92] mt-1 mb-5">
                Hablemos
                <br />
                de tu espacio
              </h2>

              <address className="not-italic space-y-3.5 text-xs md:text-sm text-neutral-800">
                <div className="flex items-center gap-3">
                  <LocationIcon className="w-4 h-4 text-black shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-4 h-4 text-black shrink-0" />
                  <span>{SCHEDULE_TEXT}</span>
                </div>
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-4 h-4 text-black shrink-0" color="#000000" />
                  <span className="font-bold">{EMERGENCIES_TEXT}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MailIcon className="w-4 h-4 text-black shrink-0" />
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="hover:underline font-medium text-black"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </address>
            </div>

            {/* Acciones de Contacto */}
            <div className="pt-6 border-t border-neutral-300 mt-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <a
                  href={getWhatsAppUrl(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="contacto-whatsapp"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs md:text-sm font-bold hover:scale-105 active:scale-95 transition-transform"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={getTelUrl()}
                  data-cta="contacto-llamar"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black border border-black text-xs md:text-sm font-bold hover:bg-neutral-100 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-black" />
                  <span>Llamar {PHONE_NUMBER}</span>
                </a>
              </div>

              {/* Chips de Cobertura */}
              <div>
                <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider block mb-2">
                  Comunas de cobertura principal:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {COMMUNES.map((com) => (
                    <span
                      key={com}
                      className="px-2.5 py-1 rounded-md bg-white/70 text-[11px] font-semibold text-neutral-800"
                    >
                      {com}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded-md bg-neutral-300/80 text-[11px] font-semibold text-neutral-700">
                    Otras comunas: consulta
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta del Mapa con filtro Grayscale 100% */}
          <div
            style={getAnimStyle(2)}
            className="rounded-xl md:rounded-2xl overflow-hidden border border-black/5 min-h-[220px] md:min-h-[260px] relative bg-neutral-200"
          >
            <iframe
              title="Ubicación de Aseo Industrial Capital en Ñuñoa, Santiago"
              src="https://maps.google.com/maps?q=Jorge%20Washington%20249%20%C3%91u%C3%B1oa%20Santiago&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[220px] md:min-h-[260px] border-0 filter grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Tarjeta de FAQ: Acordeón ancho completo con details/summary */}
      <div
        style={getAnimStyle(3)}
        className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-neutral-200 shadow-2xs"
      >
        <div className="mb-6">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            Respuestas directas
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight mt-1">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="divide-y divide-neutral-200">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group py-4 transition-colors focus-within:outline-none"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm md:text-base text-black group-hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm pr-2">
                <span>{faq.question}</span>
                <span className="w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200">
                  <ChevronDownIcon className="w-3.5 h-3.5 text-black" />
                </span>
              </summary>
              <div className="mt-3 text-xs md:text-sm text-neutral-700 leading-relaxed pr-8">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
