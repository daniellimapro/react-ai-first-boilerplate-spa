# Primeiros Passos

## Pré-requisitos

- Node.js 20+
- pnpm 10+ (`npm install -g pnpm`)
- Git

## Início Rápido

```bash
# com pnpm (recomendado)
pnpm dlx degit daniellimapro/react-ai-first-boilerplate-spa my-project
cd my-project
pnpm install
cp .env.example .env
pnpm dev
```

```bash
# com npm
git clone https://github.com/daniellimapro/react-ai-first-boilerplate-spa.git my-project
cd my-project
npm install
cp .env.example .env
npm run dev
```

Abra `http://localhost:5173` no seu navegador.

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera o build de produção |
| `pnpm lint` | Executa o ESLint |
| `pnpm lint:fix` | Corrige erros do ESLint automaticamente |
| `pnpm format` | Formata o código com Prettier |
| `pnpm test` | Executa os testes com Vitest |
| `pnpm test:coverage` | Executa os testes com relatório de cobertura |
| `pnpm docs:dev` | Inicia o servidor de desenvolvimento da documentação |
| `pnpm docs:build` | Gera o build da documentação |

## Variáveis de Ambiente

Copie `.env.example` para `.env` e preencha com seus valores:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

As variáveis são validadas na inicialização com Zod. Se uma variável obrigatória estiver faltando, a aplicação lançará um erro descritivo antes de renderizar qualquer coisa.
