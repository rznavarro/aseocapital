import {
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  ADDRESS_TEXT,
  SCHEDULE_TEXT,
  getTelUrl,
} from '../data/content';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full px-1.5 md:px-2.5 pb-20 md:pb-2.5 pt-1.5 md:pt-2">
      <div className="bg-black text-white rounded-xl md:rounded-2xl p-6 md:p-10 border border-black shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Wordmark & Descripción */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-3">
              <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-none text-white">
                Aseo
              </span>
              <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-none -mt-1 text-white">
                Capital
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-400 max-w-md leading-relaxed">
              Lavado de alfombras, aseo profundo y mantención integral en Ñuñoa y Santiago.
              Especialistas en devolver la habitabilidad, limpieza e higiene profunda a tus espacios.
            </p>
            <p className="text-[11px] text-neutral-500 mt-2">
              Responsable: Pedro Reyes, CEO.
            </p>
          </div>

          {/* Columna 2: Navegación interna */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#inicio" className="text-neutral-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-neutral-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#precios" className="text-neutral-300 hover:text-white transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#empresas" className="text-neutral-300 hover:text-white transition-colors">
                  Empresas
                </a>
              </li>
              <li>
                <a href="#cotizar" className="text-neutral-300 hover:text-white transition-colors">
                  Cotizar
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-neutral-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto & Enlaces externos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Contacto & Redes
            </h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <p>
                <a href={getTelUrl()} className="hover:text-white font-medium">
                  {PHONE_NUMBER}
                </a>
              </p>
              <p>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">
                  {EMAIL_ADDRESS}
                </a>
              </p>
              <p className="text-neutral-400">{ADDRESS_TEXT}</p>
              <p className="text-neutral-500">{SCHEDULE_TEXT}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 flex flex-col gap-1 text-xs text-neutral-400">
              <a
                href="https://aseoindustrialcapital.cl/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Blog Oficial
              </a>
              <a
                href="https://www.facebook.com/limpiezaDeAlfombrasChile/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Fila inferior de créditos */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-2">
          <p>© {currentYear} Aseo Industrial Capital. Todos los derechos reservados.</p>
          <p>Ñuñoa, Región Metropolitana, Chile.</p>
        </div>
      </div>
    </footer>
  );
}
