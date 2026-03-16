# Stack

Every tool in this stack was chosen deliberately. Here's what's included and why.

## Core

| Tool | Version | Purpose |
|---|---|---|
| Vite | 6.x | Build tool — fastest dev experience, native ESM |
| React | 19 | UI library — latest stable with concurrent features |
| TypeScript | 5.x | Language — strict mode, no `any` |

## Routing

| Tool | Purpose |
|---|---|
| TanStack Router | File-based routing with full TypeScript end-to-end. Every route, param, and search query is typed. |

## State Management

| Tool | When to use |
|---|---|
| TanStack Query | Server state — fetching, caching, revalidating, syncing |
| Zustand | Client state — UI state, auth, forms that span multiple components |
| useState | Local state — component-specific, doesn't need to be shared |

## Forms & Validation

| Tool | Purpose |
|---|---|
| React Hook Form | Performant forms with minimal re-renders |
| Zod | Schema validation for forms and runtime data |
| @hookform/resolvers | Connects Zod schemas to React Hook Form |

## Styling

| Tool | Purpose |
|---|---|
| Tailwind CSS 4 | Utility-first CSS — no runtime, full tree-shaking |
| Shadcn/UI | Component library you own — no package dependency |

## Internationalization

| Tool | Purpose |
|---|---|
| i18next | Core i18n framework |
| react-i18next | React integration |
| i18next-browser-languagedetector | Auto-detects browser language |

## Testing

| Tool | Purpose |
|---|---|
| Vitest | Test runner — native Vite integration, Jest-compatible API |
| Testing Library | Behavior-driven tests — tests what users see, not internals |
| MSW | API mocking — intercepts real network requests in tests and dev |

## Quality

| Tool | Purpose |
|---|---|
| ESLint | Static analysis — catches bugs before runtime |
| Prettier | Code formatting — consistent style, no debates |
| Husky | Git hooks — runs lint/tests before commits |
| lint-staged | Runs tools only on staged files — fast pre-commit |
| Commitlint | Validates commit message format (Conventional Commits) |

## CI/CD

| Tool | Purpose |
|---|---|
| GitHub Actions | CI pipeline — lint + test on every PR |
| VitePress + GitHub Pages | Documentation site |
