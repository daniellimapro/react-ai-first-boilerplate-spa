# Testes

## Stack

- **Vitest** — test runner nativo do Vite, API compatível com Jest
- **Testing Library** — testes orientados a comportamento
- **MSW** — mock de API na camada de rede

## Executando os Testes

```bash
npm run test           # modo watch
npm run test:coverage  # relatório de cobertura
```

## Localização dos Testes

Os testes ficam em `src/test/` para testes compartilhados, ou colocados junto às features:

```
src/
├── test/
│   ├── setup.ts
│   └── home-form.test.tsx
└── features/
    └── checkout/
        └── checkout-form.test.tsx
```

## Escrevendo Testes

Teste comportamento, não implementação:

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('exibe erro quando o nome é muito curto', async () => {
  render(<ExampleForm />)

  await userEvent.type(screen.getByLabelText(/name/i), 'a')
  await userEvent.click(screen.getByRole('button', { name: /submit/i }))

  expect(screen.getByText(/at least 2 characters/i)).toBeInTheDocument()
})
```

## Handlers do MSW

Adicione handlers de requisição em `src/shared/mocks/handlers.ts`:

```ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([{ id: '1', name: 'Alice' }])
  }),
]
```

O MSW intercepta chamadas reais de fetch — sem necessidade de mockar `fetch` ou `axios`. Seu código de produção roda sem alterações nos testes.
