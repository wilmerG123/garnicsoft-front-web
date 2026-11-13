import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Body, Button, Container, Eyebrow, H1, H2, H3, Square, isHovered } from '@/components/ui';
import { colors, fonts, radius, space } from '@/constants/brand';
import { about, company, contact, method, type Service } from '@/content/site';
import { useIsDesktop } from '@/hooks/use-is-desktop';

export type SectionId = 'nosotros' | 'publico' | 'privado' | 'metodologia' | 'contacto';

const NAV: { id: SectionId; label: string }[] = [
  { id: 'publico', label: 'Sector público' },
  { id: 'privado', label: 'Sector privado' },
  { id: 'metodologia', label: 'Metodología' },
  { id: 'nosotros', label: 'Nosotros' },
];

export function SiteHeader({ onNavigate }: { onNavigate: (id: SectionId) => void }) {
  const desktop = useIsDesktop();
  return (
    <View style={styles.header}>
      <Container style={styles.headerInner}>
        <Image
          source={require('@/assets/images/logo-color.png')}
          style={{ width: 150, height: 42 }}
          contentFit="contain"
          accessibilityLabel="Garnicsoft"
        />
        <View style={styles.nav}>
          {desktop &&
            NAV.map((n) => (
              <Pressable key={n.id} onPress={() => onNavigate(n.id)} role="link" style={styles.navItem}>
                {(state) => (
                  <Text style={[styles.navLabel, isHovered(state) && { color: colors.olive }]}>{n.label}</Text>
                )}
              </Pressable>
            ))}
          <Button label="Contacto" onPress={() => onNavigate('contacto')} />
        </View>
      </Container>
    </View>
  );
}

/** Portada: mitad lima (marca + título) y franja carbón, igual que el brochure. */
export function Hero({ onNavigate }: { onNavigate: (id: SectionId) => void }) {
  const desktop = useIsDesktop();
  return (
    <View>
      <View style={{ backgroundColor: colors.lime, paddingVertical: desktop ? 112 : 64 }}>
        <Container style={{ gap: space.lg }}>
          <Eyebrow style={{ color: colors.ink }}>Consultoría de software · {company.country}</Eyebrow>
          <H1 style={{ fontSize: desktop ? 64 : 40, lineHeight: desktop ? 72 : 46, maxWidth: 820 }}>{company.tagline}</H1>
          <Body style={{ color: '#2A3011', fontSize: desktop ? 20 : 17, maxWidth: 620 }}>{company.summary}</Body>
          <View style={styles.row}>
            <Button label="Hablemos de su proyecto" onPress={() => onNavigate('contacto')} />
            <Button label="Ver servicios" variant="outline" onPress={() => onNavigate('publico')} />
          </View>
        </Container>
      </View>
      <View style={{ backgroundColor: colors.ink, paddingVertical: space.lg }}>
        <Container style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
          <Text style={styles.strip}>Sector público · Sector privado</Text>
          <Text style={[styles.strip, { color: colors.lime }]}>Desde {company.since}</Text>
        </Container>
      </View>
    </View>
  );
}

export function ServicesSection({ eyebrow, title, services, tinted }: { eyebrow: string; title: string; services: Service[]; tinted?: boolean }) {
  const desktop = useIsDesktop();
  return (
    <View style={[styles.section, tinted && { backgroundColor: colors.paper }]}>
      <Container style={{ gap: space.xl }}>
        <View style={{ gap: space.sm }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <H2>{title}</H2>
        </View>
        <View style={[styles.grid, { gap: space.md }]}>
          {services.map((s) => (
            <View key={s.title} style={[styles.card, { flexBasis: desktop ? '31%' : '100%' }]}>
              <Square color={colors.lime} size={12} />
              <H3>{s.title}</H3>
              <Body style={{ fontSize: 16, lineHeight: 24 }}>{s.text}</Body>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}

export function MethodSection() {
  const desktop = useIsDesktop();
  return (
    <View style={styles.section}>
      <Container style={{ gap: space.xl }}>
        <View style={{ gap: space.sm }}>
          <Eyebrow>{method.eyebrow}</Eyebrow>
          <H2>{method.title}</H2>
        </View>
        <View style={[styles.grid, { gap: space.lg }]}>
          {method.steps.map((s, i) => (
            <View key={s.title} style={{ flexBasis: desktop ? '22%' : '100%', flexGrow: 1, gap: space.sm }}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepNumber}>{i + 1}</Text>
              </View>
              <H3>{s.title}</H3>
              <Body style={{ fontSize: 16, lineHeight: 24 }}>{s.text}</Body>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}

export function AboutSection() {
  const desktop = useIsDesktop();
  return (
    <View style={[styles.section, { backgroundColor: colors.paper }]}>
      <Container style={{ flexDirection: desktop ? 'row' : 'column', gap: space.xl }}>
        <View style={{ flex: 1, gap: space.md }}>
          <Eyebrow>Quiénes somos</Eyebrow>
          <H2>{about.title}</H2>
          <Body>{about.body}</Body>
        </View>
        <View style={{ flex: 1, gap: space.md, paddingTop: desktop ? space.xl : 0 }}>
          <Eyebrow style={{ color: colors.muted }}>Por qué elegirnos</Eyebrow>
          {about.reasons.map((r) => (
            <View key={r.title} style={{ flexDirection: 'row', gap: space.md }}>
              <Square />
              <Body style={{ flex: 1, color: colors.ink }}>
                <Text style={{ fontFamily: fonts.bodySemi }}>{r.title}</Text> {r.text}
              </Body>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}

export function ContactSection() {
  const desktop = useIsDesktop();
  const rows: [string, string | null][] = [
    ['Teléfono / WhatsApp', contact.phone],
    ['Correo', contact.email],
    ['Web', contact.web],
    ['Oficina', contact.office],
  ];
  return (
    <View style={[styles.section, { backgroundColor: colors.ink }]}>
      <Container style={{ flexDirection: desktop ? 'row' : 'column', gap: space.xl }}>
        <View style={{ flex: 1, gap: space.md }}>
          <Eyebrow onDark>Contacto</Eyebrow>
          <H2 style={{ color: colors.white }}>Hablemos de su proyecto</H2>
          <Body style={{ color: colors.mutedOnDark }}>La primera reunión de diagnóstico no tiene costo.</Body>
        </View>
        <View style={{ flex: 1, gap: space.lg }}>
          {rows.map(([label, value]) => (
            <View key={label} style={{ gap: 2 }}>
              <Text style={styles.contactLabel}>{label}</Text>
              <Text style={[styles.contactValue, !value && { color: '#9CA3AF' }]}>{value ?? 'Disponible pronto'}</Text>
            </View>
          ))}
        </View>
      </Container>
    </View>
  );
}

export function SiteFooter() {
  return (
    <View style={{ backgroundColor: colors.ink, borderTopWidth: 1, borderTopColor: '#2A2D35', paddingVertical: space.lg }}>
      <Container style={[styles.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
        <Image source={require('@/assets/images/logo-negativo.png')} style={{ width: 128, height: 36 }} contentFit="contain" accessibilityLabel="Garnicsoft" />
        <Text style={{ fontFamily: fonts.body, fontSize: 14, color: colors.mutedOnDark }}>
          © {new Date().getFullYear()} {company.legalName}
          {contact.nit ? ` · NIT ${contact.nit}` : ''}
        </Text>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: colors.white, borderBottomWidth: 1, borderBottomColor: colors.line, paddingVertical: 12 },
  headerInner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  nav: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  navItem: { paddingHorizontal: 12, paddingVertical: 10 },
  navLabel: { fontFamily: fonts.bodyMedium, fontSize: 15, color: colors.ink },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: space.md },
  strip: { fontFamily: fonts.bodySemi, fontSize: 13, letterSpacing: 1.8, textTransform: 'uppercase', color: colors.mutedOnDark },
  section: { paddingVertical: space.section, backgroundColor: colors.white },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  card: { flexGrow: 1, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, padding: space.lg, gap: space.sm },
  stepBadge: { width: 40, height: 40, borderRadius: radius.sm, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center' },
  stepNumber: { fontFamily: fonts.mono, fontSize: 18, color: colors.ink },
  contactLabel: { fontFamily: fonts.bodySemi, fontSize: 12, letterSpacing: 1.4, textTransform: 'uppercase', color: '#9CA3AF' },
  contactValue: { fontFamily: fonts.bodyMedium, fontSize: 18, color: colors.white },
});
