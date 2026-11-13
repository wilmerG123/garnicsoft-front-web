/**
 * Contenido del sitio. Textos alineados con el brochure (brochure/garnicsoft-brochure.html).
 * Regla: no inventar cifras, clientes ni casos de éxito. Datos pendientes = null.
 */
export const company = {
  name: 'Garnicsoft',
  legalName: 'Garnicsoft S.A.S.',
  since: 2017,
  country: 'Colombia',
  tagline: 'Software a la medida de su organización',
  summary: 'Consultoría y desarrollo de software para entidades públicas y empresas privadas.',
};

/** Datos de contacto: completar cuando existan. null = se muestra «Disponible pronto». */
export const contact: Record<'phone' | 'email' | 'web' | 'office' | 'nit', string | null> = {
  phone: null,
  email: null, // p. ej. 'contacto@garnicsoft.com' cuando el dominio esté activo
  web: 'garnicsoft.com',
  office: null,
  nit: null,
};

export const about = {
  title: 'Tecnología con criterio de negocio',
  body:
    'Garnicsoft es una empresa colombiana de consultoría y desarrollo de software. Diseñamos, construimos y acompañamos soluciones digitales que resuelven problemas reales de gestión, para entidades públicas y para empresas.',
  reasons: [
    { title: 'Trato directo', text: 'con los socios que diseñan y construyen su solución.' },
    { title: 'Conocimiento normativo', text: 'del Estado colombiano y de la contratación pública.' },
    { title: 'Código y datos suyos:', text: 'entregamos fuentes y documentación.' },
    { title: 'Soporte local', text: 'después de la entrega.' },
  ],
};

export type Service = { title: string; text: string };

export const publicSector = {
  eyebrow: 'Sector público',
  title: 'Alcaldías, gobernaciones y entidades',
  services: [
    { title: 'Política de Gobierno Digital', text: 'Diagnóstico, PETI y hoja de ruta de transformación digital.' },
    { title: 'Sedes electrónicas y portales', text: 'Accesibilidad y transparencia según la Resolución 1519 de 2020.' },
    { title: 'Trámites en línea', text: 'Digitalización de trámites, PQRSD y ventanilla única.' },
    { title: 'Sistemas de información', text: 'Software a la medida para gestión interna, datos abiertos e interoperabilidad.' },
    { title: 'Seguridad e infraestructura', text: 'MSPI, protección de datos personales y transición a IPv6.' },
  ] satisfies Service[],
};

export const privateSector = {
  eyebrow: 'Sector privado',
  title: 'Empresas que quieren crecer',
  services: [
    { title: 'Desarrollo a la medida', text: 'Aplicaciones web y móviles hechas para su operación.' },
    { title: 'Automatización e integración', text: 'Conectamos sus sistemas, APIs y ERP; eliminamos tareas manuales.' },
    { title: 'Nube y DevOps', text: 'Migración, despliegue automatizado y control de costos.' },
    { title: 'Inteligencia artificial aplicada', text: 'Asistentes, análisis de documentos y reportes inteligentes.' },
    { title: 'Consultoría y soporte', text: 'Arquitectura, auditoría de software y mantenimiento evolutivo.' },
  ] satisfies Service[],
};

export const method = {
  eyebrow: 'Metodología',
  title: 'Cómo trabajamos',
  steps: [
    { title: 'Diagnóstico', text: 'Entendemos sus procesos, sistemas actuales y obligaciones normativas.' },
    { title: 'Propuesta clara', text: 'Alcance, cronograma y presupuesto definidos antes de empezar.' },
    { title: 'Construcción por etapas', text: 'Entregas parciales y demostraciones periódicas para validar avances.' },
    { title: 'Entrega y acompañamiento', text: 'Capacitación, documentación, soporte y mantenimiento.' },
  ],
};
