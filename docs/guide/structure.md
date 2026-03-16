# Estrutura do Projeto

Este projeto segue a **colocação baseada em features**: o código fica próximo de onde é usado, não em pastas globais.

## Layout de Diretórios

```
src/
├── app/
│   ├── routes/              # Rotas baseadas em arquivo do TanStack Router
│   │   ├── __root.tsx       # Layout raiz (header, nav, outlet)
│   │   ├── index.tsx        # / — página inicial
│   │   ├── about.tsx        # /about
│   │   └── dashboard.tsx    # /dashboard — exemplo de rota protegida
│   ├── providers.tsx        # Compõe todos os providers na ordem correta
│   └── router.tsx           # Instância do router e registro de tipos
│
├── features/                # Uma pasta por feature (vazia por padrão)
│   └── checkout/            # Exemplo: feature de checkout
│       ├── components/      # Componentes usados apenas no checkout
│       ├── hooks/           # Hooks usados apenas no checkout
│       └── index.tsx
│
├── shared/                  # Código verdadeiramente compartilhado
│   ├── components/
│   │   ├── ui/              # Componentes do Shadcn/UI (você é dono desses arquivos)
│   │   ├── error-boundary.tsx
│   │   ├── theme-toggle.tsx
│   │   └── language-selector.tsx
│   ├── hooks/
│   │   └── use-auth.ts      # Hook de auth (lê auth.store)
│   ├── lib/
│   │   ├── api.ts           # Wrapper de fetch com injeção de token Bearer
│   │   ├── env.ts           # Validação de variáveis de ambiente com Zod
│   │   ├── i18n.ts          # Configuração do i18next
│   │   ├── msw.ts           # Setup do MSW
│   │   ├── query-client.ts  # Instância do cliente React Query
│   │   └── utils.ts         # cn() e utilitários gerais
│   ├── locales/
│   │   ├── en/common.json
│   │   └── pt-BR/common.json
│   ├── mocks/
│   │   ├── browser.ts       # Worker do MSW para o navegador
│   │   └── handlers.ts      # Handlers de requisição do MSW
│   ├── stores/
│   │   ├── auth.store.ts    # Estado global de autenticação
│   │   └── example.store.ts # Exemplo de contador (demonstra o padrão)
│   └── types/
│       └── index.ts         # Tipos TypeScript compartilhados
│
├── test/
│   ├── setup.ts             # Setup do Vitest + Testing Library
│   └── *.test.tsx           # Arquivos de teste
│
├── main.tsx                 # Ponto de entrada da aplicação
└── index.css                # Estilos globais + Tailwind + variáveis CSS
```

## A Regra de Colocação

> Se algo é usado apenas dentro de uma feature, ele fica dentro da pasta dessa feature.

**Errado:**
```
src/components/CheckoutAddressForm.tsx  ← usado apenas no checkout
```

**Certo:**
```
src/features/checkout/components/AddressForm.tsx
```

Só promova para `shared/` quando duas ou mais features distintas precisarem do mesmo código.

## Adicionando uma Nova Feature

1. Crie `src/features/sua-feature/`
2. Adicione componentes, hooks e utilitários dentro dela
3. Crie uma rota em `src/app/routes/sua-feature.tsx`
4. Só extraia para `shared/` se outra feature precisar da mesma coisa
