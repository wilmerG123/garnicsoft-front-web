import Head from 'expo-router/head';
import { useRef, type ComponentRef } from 'react';
import { ScrollView, View } from 'react-native';

import {
  AboutSection,
  ContactSection,
  Hero,
  MethodSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  type SectionId,
} from '@/components/sections';
import { WhatsAppFab } from '@/components/social';
import { colors } from '@/constants/brand';
import { company, privateSector, publicSector } from '@/content/site';

export default function Home() {
  const scrollRef = useRef<ComponentRef<typeof ScrollView>>(null);
  const offsets = useRef<Partial<Record<SectionId, number>>>({});

  const register = (id: SectionId) => ({
    onLayout: (e: { nativeEvent: { layout: { y: number } } }) => {
      offsets.current[id] = e.nativeEvent.layout.y;
    },
  });
  const navigate = (id: SectionId) => scrollRef.current?.scrollTo({ y: offsets.current[id] ?? 0, animated: true });

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Head>
        <title>{`${company.name} · ${company.tagline}`}</title>
        <meta name="description" content={company.summary} />
      </Head>
      <SiteHeader onNavigate={navigate} />
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        <Hero onNavigate={navigate} />
        <View {...register('publico')}>
          <ServicesSection {...publicSector} />
        </View>
        <View {...register('privado')}>
          <ServicesSection {...privateSector} tinted />
        </View>
        <View {...register('metodologia')}>
          <MethodSection />
        </View>
        <View {...register('nosotros')}>
          <AboutSection />
        </View>
        <View {...register('contacto')}>
          <ContactSection />
        </View>
        <SiteFooter />
        {/* espacio para que el botón flotante no tape el pie de página en móvil */}
        <View style={{ height: 88, backgroundColor: colors.ink }} />
      </ScrollView>
      <WhatsAppFab />
    </View>
  );
}
