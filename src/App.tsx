import { Splash } from './components/Splash';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { EnterpriseSection } from './components/EnterpriseSection';
import { ContactQuoteSection } from './components/ContactQuoteSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col font-sans">
      {/* Splash "100% garantizado" */}
      <Splash />

      {/* Navbar con Wordmark, botón Menú y panel lateral */}
      <Navbar />

      {/* Contenido principal estructurado */}
      <main className="flex-1 w-full flex flex-col">
        {/* Sección 1 — Hero (#inicio) · Mosaico con IMG_HERO */}
        <HeroSection />

        {/* Sección 2 — Servicios (#servicios) · Mosaico con IMG_SERVICIOS */}
        <ServicesSection />

        {/* Sección 3 — Precios (#precios) · Tarjetas sólidas e imagen de tapiz */}
        <PricingSection />

        {/* Sección 4 — Proceso y empresas (#empresas) */}
        <EnterpriseSection />

        {/* Sección 5 — Cotizar, FAQ y contacto (#cotizar, #contacto) */}
        <ContactQuoteSection />
      </main>

      {/* Footer editorial */}
      <Footer />

      {/* Barra persistente en móvil tras pasar el Hero */}
      <MobileBottomBar />
    </div>
  );
}

export default App;
