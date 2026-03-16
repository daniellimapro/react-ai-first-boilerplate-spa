# Testing

## Stack

- **Vitest** — test runner, native to Vite, Jest-compatible API
- **Testing Library** — behavior-driven tests
- **MSW** — API mocking at the network layer

## Running Tests

```bash
npm run test           # watch mode
npm run test:coverage  # coverage report
```

## Test Location

Tests live in `src/test/` for shared tests, or colocated with features:

```
src/
├── test/
│   ├── setup.ts
│   └── home-form.test.tsx
└── features/
    └── checkout/
        └── checkout-form.test.tsx
```

## Writing Tests

Test behavior, not implementation:

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('shows error when name is too short', async () => {
  render(<ExampleForm />)

  await userEvent.type(screen.getByLabelText(/name/i), 'a')
  await userEvent.click(screen.getByRole('button', { name: /submit/i }))

  expect(screen.getByText(/at least 2 characters/i)).toBeInTheDocument()
})
```

## MSW Handlers

Add request handlers in `src/shared/mocks/handlers.ts`:

```ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([{ id: '1', name: 'Alice' }])
  }),
]
```

MSW intercepts real fetch calls — no need to mock `fetch` or `axios`. Your production code runs unchanged in tests.
