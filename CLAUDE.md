# Garnicsoft — sitio web (Expo)

Antes de cualquier cambio en este repo, carga la skill **`garnicsoft-web`** (`.claude/skills/garnicsoft-web/SKILL.md`): define marca, contenido, estructura, verificación y despliegue. Las reglas de Expo están en `AGENTS.md`.

Resumen rápido:
- Tokens en `src/constants/brand.ts`, textos en `src/content/site.ts`, componentes base en `src/components/ui.tsx`.
- Verificar con `npx tsc --noEmit` y `npx expo export --platform web`.
- Push a `master` = producción en Vercel. Trabajar en ramas.
