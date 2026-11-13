import { useWindowDimensions } from 'react-native';

import { layout } from '@/constants/brand';

/** true cuando el ancho alcanza el punto de quiebre de escritorio. Mobile-first: todo diseño parte de móvil. */
export function useIsDesktop() {
  const { width } = useWindowDimensions();
  return width >= layout.desktop;
}
