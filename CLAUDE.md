# React AI First Boilerplate SPA — Development Guide

## Stack

- **Build:** Vite + React 19 + TypeScript (strict, no `any`)
- **Routing:** TanStack Router (file-based, `src/app/routes/`)
- **Server state:** TanStack Query
- **Client state:** Zustand
- **Forms:** React Hook Form + Zod
- **Styling:** Tailwind CSS 4 + Shadcn/UI (`src/shared/components/ui/`)
- **i18n:** i18next + react-i18next (namespaces in `src/shared/locales/`)
- **Theme:** next-themes (dark/light, class strategy)
- **Auth:** Slot — `auth.store` + `use-auth` hook (no provider coupled)
- **Tests:** Vitest + Testing Library + MSW
- **Path alias:** `@/` → `src/`

## Code Rules

- Zero comments in code — code must be self-explanatory
- Zero `console.log` or debug statements
- All naming in English
- TypeScript strict: no `any`, no `as` casts without strong justification
- Functional components only, no class components (except ErrorBoundary)
- `interface` for component props and objects; `type` for unions and aliases
- Early returns to reduce nesting
- One component does one thing — split when it grows
- No barrel exports (`index.ts` re-exporting modules) — always import from source file

## State Boundaries

| State type | Tool |
|---|---|
| Component local state | `useState` |
| Shared UI state / forms across components | Zustand |
| Server data (fetching, caching, sync) | React Query |

Never mix these responsibilities.

## Folder Structure — Colocation Rule

Code lives next to where it's used. Only promote to `shared/` when two or more features need it.

```
src/
├── app/routes/          # File-based routes
├── features/            # One folder per feature
│   └── my-feature/
│       ├── components/  # Components only used here
│       ├── hooks/       # Hooks only used here
│       └── index.tsx
├── shared/
│   ├── components/ui/   # Shadcn/UI components
│   ├── hooks/           # Hooks used in 2+ features
│   ├── lib/             # api, env, i18n, query-client, utils
│   ├── locales/         # Translation files
│   ├── mocks/           # MSW handlers and browser worker
│   ├── stores/          # Zustand stores
│   └── types/           # Shared TypeScript types
└── test/                # Shared test files
```

## Adding a New Route

1. Create `src/app/routes/my-page.tsx`
2. Export `Route = createFileRoute('/my-page')({ component: MyPage })`
3. TanStack Router auto-generates the route tree

For protected routes, add `beforeLoad` that checks `useAuthStore.getState().isAuthenticated`.

## Adding a New Feature

1. Create `src/features/my-feature/`
2. Build components, hooks, utils inside the feature folder
3. Add route if needed
4. Only extract to `shared/` if another feature needs it

## API Integration

Before implementing any API integration, map all possible response statuses and **ask the user** how each error case should be handled. Do not implement without this alignment.

Use `api()` from `@/shared/lib/api` — it injects Bearer token automatically.

```ts
const data = await api<User[]>('/users')
```

## Auth Slot

The auth slot is ready. To integrate a provider:

1. Implement `login()` and `logout()` in `use-auth.ts`
2. Create an `AuthProvider` component that calls `setAuth()` and `clearAuth()` from `auth.store`
3. Add the `AuthProvider` to `app/providers.tsx` between `QueryClientProvider` and `RouterProvider`

## Testing Pattern

Test behavior, not implementation:

```tsx
it('shows validation error for short name', async () => {
  render(<MyForm />)
  await userEvent.type(screen.getByLabelText(/name/i), 'a')
  await userEvent.click(screen.getByRole('button', { name: /submit/i }))
  expect(screen.getByText(/at least 2 characters/i)).toBeInTheDocument()
})
```

Add MSW handlers in `src/shared/mocks/handlers.ts` for API mocking.

## i18n

All user-facing strings must use `useTranslation()`. No hardcoded strings in components.

Translation files: `src/shared/locales/{lang}/common.json`

```tsx
const { t } = useTranslation()
return <h1>{t('home.title')}</h1>
```

## Conventions — Don't Break These

- Never auto-commit — commit only when user explicitly asks with `/commit`
- Never run build when finishing a task
- Never hardcode strings — use i18n
- Never use `any` — use `unknown` + type narrowing if needed
- Components ≤ ~50 lines — split if larger
- Shadcn components live in `src/shared/components/ui/` — don't modify elsewhere

---

## /figma

**Trigger:** User runs `/figma <figma-url> <task description>`

**Instructions:**

1. Use the Figma MCP tool (`get_design_context`) with the provided URL to read the design
2. Extract node ID and file key from the URL
3. Analyze which Shadcn/UI components (`src/shared/components/ui/`) map to the design elements
4. Implement the component using Tailwind CSS 4 utility classes
5. Place the component in the correct location:
   - Feature-specific → `src/features/<feature>/components/`
   - Shared across features → `src/shared/components/`
6. Follow all code rules: no comments, no `any`, strict TypeScript, English naming
7. All text strings must use `useTranslation()` — add keys to both locale files
8. Use existing Shadcn components — don't reinvent
9. Report what was created and where

---

## /commit

**Trigger:** User runs `/commit`

**Instructions:**

1. Run `git status` to see changed files
2. Run `git diff` (staged and unstaged) to understand what changed
3. Classify the change type:
   - `feat` — new feature or capability
   - `fix` — bug fix
   - `chore` — tooling, deps, config (no production code)
   - `docs` — documentation only
   - `refactor` — code change without behavior change
   - `test` — adding or fixing tests
   - `style` — formatting, whitespace
   - `ci` — CI/CD configuration
4. Write a concise, descriptive commit message in English
5. Stage the relevant files
6. Create the commit with this format:

```
<type>(<scope>): <description>
```

**Rules:**
- Never use `--no-verify`
- Never skip hooks
- Scope is optional but helps (e.g., `feat(auth):`, `fix(form):`)
- Description is lowercase, imperative mood, no period at end
