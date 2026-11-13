import { Link } from 'expo-router';
import { View } from 'react-native';

import { Body, Container, Eyebrow, H1 } from '@/components/ui';
import { colors, space } from '@/constants/brand';

export default function NotFound() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
      <Container style={{ gap: space.md }}>
        <Eyebrow>Error 404</Eyebrow>
        <H1>Página no encontrada</H1>
        <Link href="/">
          <Body style={{ color: colors.olive }}>Volver al inicio</Body>
        </Link>
      </Container>
    </View>
  );
}
