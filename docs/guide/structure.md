# Project Structure

This project follows **feature-based colocation**: code lives next to where it's used, not in global folders.

## Directory Layout

```
src/
├── app/
│   ├── routes/              # TanStack Router file-based routes
│   │   ├── __root.tsx       # Root layout (header, nav, outlet)
│   │   ├── index.tsx        # / — home page
│   │   ├── about.tsx        # /about
│   │   └── dashboard.tsx    # /dashboard — protected route example
│   ├── providers.tsx        # Composes all providers in correct order
│   └── router.tsx           # Router instance and type registration
│
├── features/                # One folder per feature (empty by default)
│   └── checkout/            # Example: checkout feature
│       ├── components/      # Components used only in checkout
│       ├── hooks/           # Hooks used only in checkout
│       └── index.tsx
│
├── shared/                  # Truly shared code
│   ├── components/
│   │   ├── ui/              # Shadcn/UI components (you own these files)
│   │   ├── error-boundary.tsx
│   │   ├── theme-toggle.tsx
│   │   └── language-selector.tsx
│   ├── hooks/
│   │   └── use-auth.ts      # Auth hook (reads auth.store)
│   ├── lib/
│   │   ├── api.ts           # Fetch wrapper with Bearer token injection
│   │   ├── env.ts           # Env var validation with Zod
│   │   ├── i18n.ts          # i18next configuration
│   │   ├── msw.ts           # MSW setup
│   │   ├── query-client.ts  # React Query client instance
│   │   └── utils.ts         # cn() and general utilities
│   ├── locales/
│   │   ├── en/common.json
│   │   └── pt-BR/common.json
│   ├── mocks/
│   │   ├── browser.ts       # MSW browser worker
│   │   └── handlers.ts      # MSW request handlers
│   ├── stores/
│   │   ├── auth.store.ts    # Global auth state
│   │   └── example.store.ts # Counter example (demonstrates pattern)
│   └── types/
│       └── index.ts         # Shared TypeScript types
│
├── test/
│   ├── setup.ts             # Vitest + Testing Library setup
│   └── *.test.tsx           # Test files
│
├── main.tsx                 # App entry point
└── index.css                # Global styles + Tailwind + CSS variables
```

## The Colocation Rule

> If something is only used within one feature, it stays inside that feature's folder.

**Wrong:**
```
src/components/CheckoutAddressForm.tsx  ← used only in checkout
```

**Right:**
```
src/features/checkout/components/AddressForm.tsx
```

Only promote to `shared/` when two or more distinct features need it.

## Adding a New Feature

1. Create `src/features/your-feature/`
2. Add components, hooks, and utils inside it
3. Create a route in `src/app/routes/your-feature.tsx`
4. Only extract to `shared/` if another feature needs the same thing
