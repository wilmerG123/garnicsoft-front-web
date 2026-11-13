/**
 * Tokens de marca Garnicsoft (opción «Código»).
 * Fuente de verdad: .claude/skills/garnicsoft-web/SKILL.md — no inventar colores ni fuentes fuera de aquí.
 */
export const colors = {
  ink: '#16181D', // carbón: texto principal y fondos oscuros
  lime: '#C6F432', // acento: solo sobre carbón o como fondo de bloque (nunca texto sobre blanco)
  olive: '#4D7C0F', // acento legible sobre blanco/gris (etiquetas, viñetas, enlaces)
  white: '#FFFFFF',
  paper: '#F3F4F6', // fondo alterno de secciones
  muted: '#4B5563', // texto secundario sobre claro
  mutedOnDark: '#D1D5DB', // texto secundario sobre carbón
  line: '#E5E7EB', // bordes y divisores
} as const;

export const fonts = {
  mono: 'JetBrainsMono_700Bold', // títulos y logotipo
  monoRegular: 'JetBrainsMono_400Regular',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemi: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
} as const;

export const space = { xs: 4, sm: 8, md: 16, lg: 24, xl: 40, xxl: 64, section: 96 } as const;

export const radius = { sm: 6, md: 10, lg: 16 } as const;

/** Ancho máximo del contenido y punto de quiebre a escritorio. */
export const layout = { maxWidth: 1120, desktop: 900, gutter: 20 } as const;
