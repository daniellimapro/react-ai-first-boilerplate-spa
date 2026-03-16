# React AI First Boilerplate SPA

[![CI](https://github.com/daniellimapro/react-ai-first-boilerplate-spa/actions/workflows/ci.yml/badge.svg)](https://github.com/daniellimapro/react-ai-first-boilerplate-spa/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> The first React boilerplate designed for AI-driven development.

Traditional boilerplates give you code to copy. This one gives the AI everything it needs to build your project — consistently, correctly, without repeating yourself.

**[Documentation](https://daniellimapro.github.io/react-ai-first-boilerplate-spa/)**

---

## Why AI-First?

When you open this project in any AI assistant, the `CLAUDE.md` file tells it:
- Your complete stack and conventions
- Where every type of file belongs
- How to structure components, hooks, stores, and services
- How to add routes, features, and API integrations

The AI builds like a team member who already knows your codebase.

---

## Stack

- **Vite** — build tool
- **React 19 + TypeScript** — UI and strict typing
- **TanStack Router** — file-based routing, fully typed
- **TanStack Query** — server state management
- **Zustand** — client state management
- **React Hook Form + Zod** — forms and validation
- **Tailwind CSS 4 + Shadcn/UI** — styling and components
- **i18next** — internationalization (pt-BR + en)
- **next-themes** — dark/light mode
- **Vitest + Testing Library + MSW** — testing
- **ESLint + Prettier + Husky** — code quality
- **GitHub Actions** — CI/CD

---

## Quick Start

```bash
# with pnpm (recommended)
pnpm dlx degit daniellimapro/react-ai-first-boilerplate-spa my-project
cd my-project
pnpm install
cp .env.example .env
pnpm dev
```

```bash
# with npm
git clone https://github.com/daniellimapro/react-ai-first-boilerplate-spa.git my-project
cd my-project
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Using with AI Assistants

This project ships with a `CLAUDE.md` file — a structured context file that any AI assistant (Claude, Cursor, Copilot, etc.) can read to understand your stack and conventions.

Open the project in your AI assistant of choice and the AI will:
- Know which libraries are in use and why
- Know where each type of file belongs
- Follow the established patterns for components, hooks, stores, and services

### Available AI Commands

| Command | Description |
|---|---|
| `/figma <url> <task>` | Implement a Figma design pixel-perfect |
| `/commit` | Generate and create a conventional commit |

---

## Auth Slot

Authentication structure is ready — no provider is coupled. Implement your own:

1. Add your provider SDK
2. Implement `login()` and `logout()` in `src/shared/hooks/use-auth.ts`
3. Create an `AuthProvider` that calls `setAuth()` from `auth.store`
4. Add it to `src/app/providers.tsx`

Works with Keycloak, Auth0, Clerk, Firebase Auth, or any other provider.

---

## Contributing

1. Fork this repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit following Conventional Commits
4. Open a Pull Request

---

## License

MIT © [Daniel Lima](https://github.com/daniellimapro)
