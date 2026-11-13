import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { isHovered } from '@/components/ui';
import { colors, fonts, space } from '@/constants/brand';
import { social, whatsappUrl, type SocialId } from '@/content/site';

const ICONS: Record<SocialId, keyof typeof FontAwesome.glyphMap> = {
  whatsapp: 'whatsapp',
  email: 'envelope',
  facebook: 'facebook',
  instagram: 'instagram',
};

/** Abre enlaces externos: en web en pestaña nueva (salvo mailto/tel), en nativo con la app correspondiente. */
export function openExternal(url: string) {
  if (Platform.OS === 'web' && /^https?:/.test(url)) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  Linking.openURL(url);
}

type Tone = 'dark' | 'light';

/** Fila de íconos de redes. Los que no tienen URL se ven atenuados con la etiqueta «Próximamente». */
export function SocialLinks({ tone = 'dark', showLabels = false }: { tone?: Tone; showLabels?: boolean }) {
  const active = tone === 'dark' ? colors.lime : colors.ink;
  const idle = tone === 'dark' ? '#6B7280' : '#9CA3AF';
  const ring = tone === 'dark' ? '#2A2D35' : colors.line;

  return (
    <View style={[styles.row, showLabels && { gap: space.md }]}>
      {social.map((s) => {
        const enabled = Boolean(s.url);
        const label = enabled ? s.label : `${s.label} (próximamente)`;
        return (
          <Pressable
            key={s.id}
            role="link"
            accessibilityLabel={label}
            accessibilityState={{ disabled: !enabled }}
            disabled={!enabled}
            onPress={() => s.url && openExternal(s.url)}
            style={(state) => [
              styles.item,
              { borderColor: ring },
              enabled && isHovered(state) && { borderColor: active },
              !enabled && { opacity: 0.55 },
            ]}>
            <FontAwesome name={ICONS[s.id]} size={20} color={enabled ? active : idle} />
            {showLabels && (
              <Text style={[styles.label, { color: enabled ? (tone === 'dark' ? colors.white : colors.ink) : idle }]}>
                {enabled ? s.label : 'Próximamente'}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

/** Botón flotante de WhatsApp (abajo a la derecha). No se muestra si no hay número configurado. */
export function WhatsAppFab() {
  const url = whatsappUrl;
  if (!url) return null;
  return (
    <Pressable
      role="link"
      accessibilityLabel="Escríbanos por WhatsApp"
      onPress={() => openExternal(url)}
      style={(state) => [styles.fab, (isHovered(state) || state.pressed) && { transform: [{ scale: 1.06 }] }]}>
      <FontAwesome name="whatsapp" size={30} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  item: {
    minWidth: 44,
    minHeight: 44,
    paddingHorizontal: 11,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.sm,
  },
  label: { fontFamily: fonts.bodyMedium, fontSize: 15 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#25D366', // verde oficial de WhatsApp: el usuario lo reconoce al instante
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
});
