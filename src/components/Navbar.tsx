import { useState, useEffect, useRef } from 'react';
import { WhatsAppIcon, CloseIcon } from './Icons';
import { getWhatsAppUrl, WA_MESSAGES } from '../data/content';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Trap focus inside drawer when open
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const focusableEls = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Precios', href: '#precios' },
    { label: 'Empresas', href: '#empresas' },
    { label: 'Cotizar', href: '#cotizar' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 transition-all">
        <div className="max-w-[1920px] mx-auto px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between">
          {/* Wordmark (izquierda) */}
          <a
            href="#inicio"
            aria-label="Aseo Industrial Capital, inicio"
            className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-lg"
          >
            <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none text-black">
              Aseo
            </span>
            <span className="text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none -mt-1 text-black">
              Capital
            </span>
            <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-widest mt-0.5">
              lavado de alfombras · ñuñoa
            </span>
          </a>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-5">
            <span className="text-sm font-semibold text-neutral-800">
              Emergencias por WhatsApp
            </span>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="navigation-drawer"
              aria-label="Abrir menú de navegación"
              className="px-5 py-2.5 rounded-full border border-black text-sm font-semibold text-black bg-white hover:bg-black hover:text-white transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Menú
            </button>

            <a
              href={getWhatsAppUrl(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="navbar-desktop"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:scale-105 active:scale-95 transition-transform duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger (40x40px, 3 lines transitioning to X) */}
          <div className="flex md:hidden items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="navigation-drawer"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="relative w-10 h-10 rounded-full flex flex-col justify-center items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <span
                className={`w-6 h-[2px] bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  isOpen ? 'scale-x-0 opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-black transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer & Backdrop */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm cursor-pointer"
        />

        {/* Panel lateral derecho */}
        <div
          ref={drawerRef}
          id="navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[384px] bg-white shadow-2xl p-6 md:p-8 flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header del drawer con botón cerrar */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
            <div className="flex flex-col">
              <span className="text-lg font-extrabold uppercase tracking-tight text-black leading-none">
                Aseo Capital
              </span>
              <span className="text-[9px] font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                Ñuñoa · Santiago
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar panel de navegación"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-200 text-black hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links con escalonamiento */}
          <nav className="flex flex-col gap-4 py-8 overflow-y-auto">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  transitionDelay: `${isOpen ? 100 + i * 60 : 0}ms`,
                }}
                className={`text-3xl md:text-4xl font-bold tracking-tight text-black hover:text-neutral-500 transition-all duration-300 transform ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg py-1`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Footer del drawer */}
          <div
            style={{
              transitionDelay: `${isOpen ? 450 : 0}ms`,
            }}
            className={`pt-6 border-t border-neutral-200 transition-all duration-300 transform ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xs font-semibold text-neutral-600 mb-4 leading-relaxed">
              Lun–Vie 9:00–18:00
              <br />
              <span className="text-black">Emergencias por WhatsApp</span>
            </p>

            <a
              href={getWhatsAppUrl(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="drawer-whatsapp"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
