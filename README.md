# Garnicsoft · sitio web

Sitio corporativo de Garnicsoft — consultoría y desarrollo de software para el sector público y privado en Colombia.

Un solo código con **Expo + Expo Router**: web (export estático), iOS y Android. En escritorio se instala como PWA.

## Desarrollo

```bash
npm install
npx expo start            # w = web, i = iOS, a = Android
npx tsc --noEmit          # chequeo de tipos
npx expo export -p web    # build estático en dist/
```

## Despliegue

Vercel, conectado a este repositorio. **Cada push a `master` publica en producción**; las demás ramas generan URL de vista previa. Configuración en `vercel.json`.

## Convenciones

Ver la skill del proyecto en [`.claude/skills/garnicsoft-web/SKILL.md`](.claude/skills/garnicsoft-web/SKILL.md) (marca, contenido, estructura, verificación) y [`AGENTS.md`](AGENTS.md) (reglas de Expo).
