import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableStateCallbackType,
  type TextProps,
  type ViewProps,
} from 'react-native';

/** `hovered` solo existe en react-native-web; en nativo siempre es false. */
export const isHovered = (state: PressableStateCallbackType) => Boolean((state as { hovered?: boolean }).hovered);

import { colors, fonts, layout, radius, space } from '@/constants/brand';

/** Centra el contenido con ancho máximo y márgenes laterales. */
export function Container({ style, ...rest }: ViewProps) {
  return <View style={[styles.container, style]} {...rest} />;
}

/** Etiqueta pequeña en mayúsculas sobre los títulos. */
export function Eyebrow({ onDark, style, ...rest }: TextProps & { onDark?: boolean }) {
  return <Text style={[styles.eyebrow, { color: onDark ? colors.lime : colors.olive }, style]} {...rest} />;
}

export function H1({ style, ...rest }: TextProps) {
  return <Text role="heading" aria-level={1} style={[styles.h1, style]} {...rest} />;
}

export function H2({ style, ...rest }: TextProps) {
  return <Text role="heading" aria-level={2} style={[styles.h2, style]} {...rest} />;
}

export function H3({ style, ...rest }: TextProps) {
  return <Text role="heading" aria-level={3} style={[styles.h3, style]} {...rest} />;
}

export function Body({ style, ...rest }: TextProps) {
  return <Text style={[styles.body, style]} {...rest} />;
}

type ButtonProps = { label: string; onPress?: () => void; variant?: 'primary' | 'outline' | 'lime' };

/** Botón de marca. primary = carbón, lime = sobre fondos oscuros, outline = secundario. */
export function Button({ label, onPress, variant = 'primary' }: ButtonProps) {
  const v = buttonVariants[variant];
  return (
    <Pressable
      role="button"
      onPress={onPress}
      style={(state) => [styles.button, v.box, (isHovered(state) || state.pressed) && { opacity: 0.85 }]}>
      <Text style={[styles.buttonLabel, { color: v.text }]}>{label}</Text>
    </Pressable>
  );
}

/** Viñeta cuadrada (motivo de marca). */
export function Square({ color = colors.olive, size = 8 }: { color?: string; size?: number }) {
  return <View style={{ width: size, height: size, borderRadius: 2, backgroundColor: color, marginTop: 7 }} />;
}

const buttonVariants = {
  primary: { box: { backgroundColor: colors.ink }, text: colors.white },
  lime: { box: { backgroundColor: colors.lime }, text: colors.ink },
  outline: { box: { borderWidth: 1.5, borderColor: colors.ink }, text: colors.ink },
} as const;

const styles = StyleSheet.create({
  container: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center', paddingHorizontal: layout.gutter },
  eyebrow: { fontFamily: fonts.bodySemi, fontSize: 13, letterSpacing: 1.8, textTransform: 'uppercase' },
  h1: { fontFamily: fonts.mono, fontSize: 40, lineHeight: 46, letterSpacing: -1, color: colors.ink },
  h2: { fontFamily: fonts.mono, fontSize: 30, lineHeight: 36, letterSpacing: -0.8, color: colors.ink },
  h3: { fontFamily: fonts.bodySemi, fontSize: 18, lineHeight: 24, color: colors.ink },
  body: { fontFamily: fonts.body, fontSize: 17, lineHeight: 27, color: colors.muted },
  button: { minHeight: 48, paddingHorizontal: space.lg, borderRadius: radius.md, alignItems: 'center', justifyContent: 'center' },
  buttonLabel: { fontFamily: fonts.bodySemi, fontSize: 16 },
});
