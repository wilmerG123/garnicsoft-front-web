---
name: garnicsoft-web
description: Reglas obligatorias para programar el sitio/app de Garnicsoft (Expo + Expo Router, web/iOS/Android). Úsala SIEMPRE antes de crear o cambiar pantallas, componentes, estilos, textos, assets, configuración de Expo o el despliegue en Vercel de este repo — marca (colores, tipografías, logos), tono y reglas de contenido, estructura de carpetas, componentes base, responsive, accesibilidad, verificación y flujo de publicación.
---

# Garnicsoft Web — parámetros del proyecto

Sitio corporativo de **Garnicsoft**, empresa colombiana de consultoría y desarrollo de software para **sector público** (alcaldías, gobernaciones, entidades) y **sector privado**. Un solo código Expo para web (prioridad), iOS y Android; en escritorio se instala como PWA.

## 1. Marca — usar solo estos valores

Los tokens viven en `src/constants/brand.ts`. **Nunca** escribas un color o una fuente a mano en un componente: importa de ahí. Si falta un token, agrégalo en `brand.ts` primero.

| Token | Valor | Uso |
|---|---|---|
| `colors.ink` | `#16181D` | Texto principal, fondos oscuros, botón primario |
| `colors.lime` | `#C6F432` | Acento. **Solo** sobre carbón o como fondo de bloque. **Nunca texto lima sobre blanco/gris** (no se lee) |
| `colors.olive` | `#4D7C0F` | Acento legible sobre claro: etiquetas (eyebrow), viñetas, enlaces, hover |
| `colors.paper` | `#F3F4F6` | Fondo alterno de secciones |
| `colors.muted` / `mutedOnDark` | `#4B5563` / `#D1D5DB` | Texto secundario sobre claro / sobre carbón |
| `colors.line` | `#E5E7EB` | Bordes y divisores |

- **Tipografías:** títulos y logotipo en **JetBrains Mono** (`fonts.mono`, 700); texto en **Inter** (`fonts.body*`). Se cargan en `src/app/_layout.tsx` con `@expo-google-fonts/*`.
- **Logo:** símbolo `</>` (barra «/» lima) en cuadro carbón + palabra **Garnicsoft** (solo la G mayúscula; «Garnic» bold + «soft» regular). PNGs en `assets/images/`:
  - `logo-color.png` → fondos claros · `logo-negativo.png` → fondos carbón · `logo-sobre-lima.png` → fondos lima.
  - Kit completo (una tinta, íconos, favicon) en el repo de administración: `marca/png/opcion-1-codigo/`.
- **Motivos gráficos:** viñeta cuadrada (`<Square />`), bloques planos lima/carbón (como la portada del brochure: lima arriba, franja carbón abajo). Sin degradados, sin sombras pesadas, sin emojis, sin bordes izquierdos de color en tarjetas.
- **Radios:** `radius.sm|md|lg` (6/10/16). **Espaciado:** `space.*`. Secciones con `space.section` vertical.

## 2. Contenido y tono

- Español de Colombia, trato de **usted**, frases cortas y concretas.
- Todo texto vive en `src/content/site.ts` (no en los componentes), alineado con el brochure de la empresa.
- **Prohibido inventar** cifras, clientes, testimonios, certificaciones, premios o casos de éxito. Dato pendiente = `null` en `site.ts` → la UI muestra «Disponible pronto».
- Referencias normativas válidas (ya verificadas): Decreto 767 de 2022 (Gobierno Digital), Resolución 1519 de 2020 MinTIC (sedes electrónicas), Ley 1581 de 2012 (datos personales), Resolución 2710 de 2017 (IPv6). No agregar otras sin verificarlas.
- Nombre: **Garnicsoft** (no «GarnicSoft»). Razón social: Garnicsoft S.A.S.
- **Canales y redes** (`social` en `site.ts`, componentes en `src/components/social.tsx`): WhatsApp **+57 313 485 8016** (activo, `wa.me/573134858016` con mensaje prellenado), Correo, Facebook e Instagram con `url: null` → se muestran como «Próximamente» y no son clicables. Para activar uno, solo poner su URL en `site.ts`. El botón flotante `WhatsAppFab` y el CTA principal de la portada usan WhatsApp; si se quita el número, desaparecen/vuelven a «Hablemos de su proyecto» solos.
- Íconos: `@expo/vector-icons` (FontAwesome). El verde `#25D366` se usa **solo** en el botón flotante de WhatsApp (color reconocible de la marca WhatsApp); fuera de eso, paleta Garnicsoft.

## 3. Estructura y código

```
src/app/            rutas (Expo Router). Solo pantallas y _layout.
src/components/     ui.tsx (Container, Eyebrow, H1–H3, Body, Button, Square, isHovered) · sections.tsx (bloques de la home)
src/constants/      brand.ts (tokens)
src/content/        site.ts (textos y datos)
src/hooks/          use-is-desktop.ts
assets/images/      íconos de app, splash, logos
public/             archivos servidos tal cual en web (manifest.json, íconos PWA)
```

- **Reutiliza** los componentes de `ui.tsx` antes de crear otros. Títulos con `H1/H2/H3` (llevan `role="heading"` y `aria-level`).
- Estilos con `StyleSheet.create` + tokens. Nada de librerías de UI externas sin acordarlo.
- **Mobile-first:** diseña para 390 px y amplía con `useIsDesktop()` (≥ 900 px). Grillas con `flexWrap` y `flexBasis`; nada de anchos fijos que desborden en móvil. Contenido dentro de `<Container>` (máx. 1120 px).
- Hover solo en web: usa `isHovered(state)` en `Pressable` (el tipo `hovered` no existe en nativo).
- **Accesibilidad:** contraste ≥ 4.5:1, objetivos táctiles ≥ 44 px, `accessibilityLabel` en imágenes con significado, `role="button"`/`role="link"` en `Pressable`.
- SEO por pantalla con `expo-router/head` (`<title>`, `<meta name="description">`).

## 4. Expo — reglas que muerden

- SDK **58**. No confíes en la memoria: consulta `AGENTS.md` y la documentación versionada antes de tocar APIs de Expo.
- Instala dependencias **solo** con `npx expo install <paquete>`.
- `app.json` → `web.output: "static"` (export estático para Vercel). No cambiar a `server`.
- **No crear `src/app/+html.tsx`**: en este SDK un `+html` personalizado deja el HTML exportado sin `<script>` ni estilos (página sin estilos). Las etiquetas del `<head>` van con `expo-router/head` en `_layout.tsx`.
- No crear ni editar `ios/` ni `android/` a mano (CNG).

## 5. Verificar antes de dar algo por terminado

```bash
npx tsc --noEmit                       # tipos: debe salir sin errores
npx expo export --platform web         # build estático en dist/ (lo mismo que corre Vercel)
```

Revisión visual del build: servir `dist/` (`python -m http.server 8787 -d dist`) y mirarlo en escritorio (1440 px) y móvil (390 px). Comprobar que el HTML de `dist/index.html` incluya `<script ... src="/_expo/...">` y `<style id="react-native-stylesheet">`.

## 6. Git y despliegue

- Remoto: `https://github.com/wilmerG123/garnicsoft-front-web` · rama de producción: **`master`**.
- **Cada push a `master` se publica en producción** (Vercel, integración Git). Trabaja en ramas `feat/…` o `fix/…`; Vercel genera una URL de vista previa por rama/PR. Fusiona a `master` solo lo verificado.
- Config de Vercel en `vercel.json` (install `npm install`, no `npm ci`: en Vercel `npm ci` falla con el lockfile generado en Windows; build `npx expo export --platform web`, salida `dist`). No subir `dist/`.
- Commits en español, en imperativo y breves: `feat: sección de contacto`, `fix: desborde en móvil`.
- Dominio: **garnicsoft.com** (pendiente de compra). Hasta entonces se usa la URL `*.vercel.app`.
- Nota: el plan Hobby de Vercel es para uso no comercial; para producción comercial evaluar Vercel Pro o un plan gratuito que permita uso comercial (Cloudflare Pages, Netlify). El build es estático y portable.
