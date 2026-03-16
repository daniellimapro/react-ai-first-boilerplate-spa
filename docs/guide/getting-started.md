# Getting Started

## Prerequisites

- Node.js 20+
- npm 10+
- Git

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/daniellimapro/react-ai-first-boilerplate-spa.git my-project
cd my-project

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests with Vitest |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run docs:dev` | Start docs dev server |
| `npm run docs:build` | Build documentation |

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Variables are validated at startup with Zod. If a required variable is missing, the app will throw a descriptive error before rendering anything.
