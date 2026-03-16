# Getting Started

## Prerequisites

- Node.js 20+
- pnpm 10+ (`npm install -g pnpm`)
- Git

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

Open `http://localhost:5173` in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors automatically |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run tests with Vitest |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm docs:dev` | Start docs dev server |
| `pnpm docs:build` | Build documentation |

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Variables are validated at startup with Zod. If a required variable is missing, the app will throw a descriptive error before rendering anything.
