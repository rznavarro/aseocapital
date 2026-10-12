import { useState, useEffect } from 'react';
import { WhatsAppIcon, PhoneIcon } from './Icons';
import { getWhatsAppUrl, getTelUrl, WA_MESSAGES } from '../data/content';

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar una vez que el usuario ha scrolleado más allá de 260px del hero
      if (window.scrollY > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Acciones rápidas de contacto"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/92 backdrop-blur-md border-t border-black/10 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] transition-all duration-300 shadow-2xl animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Botón WhatsApp 50% */}
        <a
          href={getWhatsAppUrl(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="mobile-bar-whatsapp"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-black text-white text-xs font-bold active:scale-95 transition-transform shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Botón Llamar 50% */}
        <a
          href={getTelUrl()}
          data-cta="mobile-bar-llamar"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-white text-black border border-black text-xs font-bold active:scale-95 transition-transform hover:bg-neutral-50 shadow-xs"
        >
          <PhoneIcon className="w-4 h-4 text-black" />
          <span>Llamar</span>
        </a>
      </div>
    </aside>
  );
}
