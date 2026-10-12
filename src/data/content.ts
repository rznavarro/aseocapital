export const PHONE_NUMBER = '+56 9 9297 6985';
export const PHONE_NUMBER_RAW = '56992976985';
export const EMAIL_ADDRESS = 'aseoindustrialcapital@gmail.com';
export const ADDRESS_TEXT = 'Jorge Washington 249, Depto 302, Ñuñoa, Región Metropolitana';
export const SCHEDULE_TEXT = 'Lunes a viernes 9:00–18:00 · Sábado y domingo cerrado';
export const EMERGENCIES_TEXT = 'Emergencias vía WhatsApp';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(): string {
  return `tel:+${PHONE_NUMBER_RAW}`;
}

export const WA_MESSAGES = {
  general: 'Hola, vengo desde su web y quiero cotizar un servicio.',
  alfombras: 'Hola, vengo desde su web y quiero cotizar lavado de alfombras.',
  empresas: 'Hola, vengo desde su web y necesito un presupuesto de aseo para mi empresa.',
  corredores: 'Hola, soy corredor/inmobiliaria y necesito dejar una propiedad lista para entregar.',
  tapices: 'Hola, vengo desde su web y quiero cotizar: Vidrios y tapices.',
  confirmarValor: 'Hola, vengo desde su web y quiero confirmar el valor para lavado de alfombras.',
  byService: (serviceName: string) => `Hola, vengo desde su web y quiero cotizar: ${serviceName}.`,
};

export const COMMUNES = [
  'Ñuñoa',
  'Providencia',
  'La Reina',
  'Macul',
  'Peñalolén',
  'San Miguel',
  'La Florida',
];

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortName: [string, string];
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'alfombras-muro',
    number: '01',
    name: 'Lavado de alfombras muro a muro',
    shortName: ['Alfombras', 'muro a muro'],
    description: 'Revitaliza y desinfecta todas las áreas alfombradas; elimina manchas persistentes y ácaros.',
  },
  {
    id: 'alfombras-oficinas',
    number: '02',
    name: 'Lavado de alfombras para oficinas',
    shortName: ['Alfombras', 'oficinas'],
    description: 'Aseo corporativo adaptado a los horarios de trabajo.',
  },
  {
    id: 'aseo-profundo',
    number: '03',
    name: 'Aseo profundo de inmuebles',
    shortName: ['Aseo', 'profundo'],
    description: 'Cocinas, baños, pisos y superficies difíciles; sanitización para habitabilidad inmediata.',
  },
  {
    id: 'pintura',
    number: '04',
    name: 'Servicio de pintura',
    shortName: ['Servicio de', 'pintura'],
    description: 'Habitaciones, living y oficinas; ideal antes de la venta o la entrega de un arriendo.',
  },
  {
    id: 'decapado-piso',
    number: '05',
    name: 'Decapado de piso flotante',
    shortName: ['Decapado', 'de piso'],
    description: 'Remueve ceras antiguas y suciedad acumulada, devolviendo el brillo natural sin dañar la superficie.',
  },
  {
    id: 'vidrios-tapices',
    number: '06',
    name: 'Vidrios y tapices',
    shortName: ['Vidrios y', 'tapices'],
    description: 'Ventanas, sillones, sillas y tapizados a domicilio.',
  },
  {
    id: 'gasfiteria',
    number: '07',
    name: 'Gasfitería a domicilio',
    shortName: ['Gasfitería', 'a domicilio'],
    description: 'Filtraciones, griferías e instalaciones sanitarias de emergencia.',
  },
];

export const DECORATIVE_RUGS = [
  'Persas',
  'Belgas',
  'Cuero',
  'Algodón',
  'Sintéticas',
  'Pelo largo',
  'Pelo corto',
  'Turcas',
  'Blancas',
  'Lana',
  'Poliéster',
];

export const CARPET_PRICES = [
  { concept: '1 dormitorio', price: '$35.000' },
  { concept: '2 dormitorios', price: '$50.000' },
  { concept: '3 dormitorios', price: '$65.000' },
  { concept: 'Living y/o comedor', price: '$25.000' },
  { concept: 'Escaleras', price: '$20.000' },
  { concept: 'Walking closet', price: '$10.000' },
  { concept: 'Pasillos', price: '$10.000' },
];

export const UPHOLSTERY_PRICES = [
  { concept: 'Sofá 3 cuerpos', price: '$45.000' },
  { concept: 'Sillón', price: '$25.000' },
  { concept: 'Silla', price: '$7.500' },
  { concept: 'Tapiz silla de oficina', price: '$4.000 c/u' },
];

export const WASHING_PROCESS = [
  {
    number: '01',
    title: 'Pre-inspección',
    description: 'Revisión técnica de la alfombra para definir la estrategia de limpieza adecuada.',
  },
  {
    number: '02',
    title: 'Pre-tratamiento',
    description: 'Aplicación de productos específicos para manchas persistentes y zonas de alto tráfico.',
  },
  {
    number: '03',
    title: 'Lavado profundo',
    description: 'Extracción integral de suciedad acumulada, ácaros y residuos con maquinaria profesional.',
  },
  {
    number: '04',
    title: 'Secado rápido',
    description: 'Extracción de humedad optimizada para volver a habitar y usar el espacio lo antes posible.',
  },
];

export const ENTERPRISE_FEATURES = [
  'Personal capacitado en normas y procedimientos de seguridad, con trato cordial.',
  'Personal uniformado, con equipos y artículos de línea profesional.',
  'Supervisoras y jefas de departamento, con comunicación constante.',
  'Encuesta de servicio mensual si el cliente lo permite.',
  'Procesos estudiados por prevencionistas de riesgo.',
  'Servicio amigable con el medio ambiente.',
];

export const FAQS = [
  {
    question: '¿Cuánto cuesta lavar las alfombras de un departamento?',
    answer:
      'Los precios parten en $35.000 para 1 dormitorio, $50.000 para 2 dormitorios y $65.000 para 3 dormitorios. El valor final se confirma por WhatsApp según metraje, estado y si el espacio está amoblado. Horario a convenir.',
  },
  {
    question: '¿Qué comunas atienden?',
    answer:
      'Nuestras comunas principales son Ñuñoa, Providencia, La Reina, Macul, Peñalolén, San Miguel y La Florida. Para otras comunas de Santiago, consúltanos directamente por WhatsApp.',
  },
  {
    question: '¿Puedo pagar en cuotas?',
    answer: 'Sí, disponemos de pago en cuotas con Webpay.',
  },
  {
    question: '¿Lavan alfombras persas o de lana?',
    answer:
      'Sí. Lavamos alfombras decorativas persas, belgas, cuero, algodón, sintéticas, pelo largo, pelo corto, turcas, blancas, lana y poliéster.',
  },
  {
    question: '¿Atienden urgencias por inundación?',
    answer:
      'Sí, realizamos lavado y extracción de urgencia en alfombras por inundación. Las emergencias se gestionan directamente vía WhatsApp.',
  },
  {
    question: '¿Trabajan con empresas e instituciones públicas?',
    answer:
      'Sí. Atendemos a empresas privadas e instituciones gubernamentales, y prestamos servicios a través de Mercado Público.',
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer:
      'Atendemos de lunes a viernes de 9:00 a 18:00. Sábado y domingo cerrado, con emergencias disponibles vía WhatsApp. Los servicios se realizan en horarios acordados con cada cliente.',
  },
];
