# Agent Guidelines for marketing-company-page

## Commands
- **Dev**: `pnpm dev` (starts dev server)
- **Build**: `pnpm build` (builds for production)
- **Preview**: `pnpm preview` (preview production build)
- **Tests**: No test suite configured

## Tech Stack
- Framework: Astro 5.16+ with Tailwind CSS 3.4+
- Package Manager: pnpm
- TypeScript: Strict mode (extends astro/tsconfigs/strict)

## Code Style
- **Files**: Use `.astro` for components/pages, `.mjs` for configs
- **Frontmatter**: All Astro components start with `---` block for imports/logic
- **Imports**: Group by type (styles first, then components); use relative paths for local files
- **Styling**: Use Tailwind utility classes; scoped `<style>` blocks for custom animations/keyframes
- **Naming**: PascalCase for components (e.g., `Header.astro`), kebab-case for files in pages
- **Language**: Content is in Spanish (lang="es")
- **Structure**: Components in `src/components/`, layouts in `src/layouts/`, pages in `src/pages/`
- **Comments**: Use HTML comments in markup, JS comments in frontmatter/scripts
- **Responsive**: Mobile-first approach with Tailwind breakpoints (md:, lg:, etc.)
