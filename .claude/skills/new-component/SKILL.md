---
name: new-component
description: Create a React component or SVG icon under src/components/ following this repo's atomic-design conventions (folder layout, Oc prefix, Tailwind + clsx variants, dark mode, i18n). Use when adding or restructuring a component.
---

# New component

1. **Reuse first.** List `src/components/` and check whether an existing component (or a new prop on one) already covers the need.

2. **Pick the level:**
    - `atoms/`: smallest pieces with no project components inside (`card`, `logo`, `image-responsive`, icons in `atoms/icon/<name>/`).
    - `molecules/`: small compositions (`button`, `badge`, `card-project`, `footer`).
    - `organisms/`: page sections (`app-bar`, `main-menu`, `modal`, `projects`).
    - `templates/`: larger compositions (`image-gallery`, `research`).
    - `layouts/` and `providers/`: base layout and context providers only.

3. **File:** `src/components/<level>/<kebab-name>/index.tsx`, default export named `Oc<PascalName>`. Import it elsewhere as `@/components/<level>/<kebab-name>`.

4. **Shape** (see `src/components/molecules/badge/index.tsx`):
    - A `<Name>Props` type above the component; defaults set in the destructuring.
    - `const OcName = ({ ... }: NameProps) => { ... };` then `export default OcName;`
    - Add `'use client'` only when the component needs state, effects, event handlers or browser APIs.

5. **Styling:**
    - Tailwind utilities only. Build variants with a `clsx` object keyed by a prop, usually `color?: 'primary' | 'secondary' | 'white'`.
    - Accept an optional `className` and append it last.
    - Use theme tokens (`primary-10` … `primary-900`) from `src/app/globals.css`.
    - Every color needs a `dark:` variant. Reuse the existing dark palette instead of inventing values: `#293b54` (dark surfaces), `#95add9` and `#a0b8e3` (text/fill), e.g. `dark:bg-[#293b54] dark:text-[#95add9]`.

6. **Text:** no hardcoded user-facing strings. Add keys to both `messages/es.json` and `messages/en.json` under the same namespace, and read them with `useTranslations('<Namespace>')`.

7. **Links:** `import { Link } from '@/i18n/navigation';` (never `next/link`).

8. **Icons:** copy `src/components/atoms/icon/menu/index.tsx` as the template. Keep the `size` (default 24), `color` and `changePrimary` props and the `fill-*` + `dark:fill-*` mapping, and replace the `<path>`. Name it `OcIcon<PascalName>`. Don't copy the `styles.module.css` import from `icon/close` (that file doesn't exist).

9. **Verify:** `npx eslint <file>` and `npx tsc --noEmit`.
