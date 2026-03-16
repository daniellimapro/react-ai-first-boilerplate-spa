# Auth Slot

Autenticação é uma decisão específica de cada projeto. Este boilerplate fornece a estrutura sem te acoplar a nenhum provedor.

## O que está incluído

### Auth Store (`shared/stores/auth.store.ts`)

Mantém o estado de autenticação de forma global:

```ts
interface AuthState {
  token: string | null
  user: User | null
  isAuthenticated: boolean
  setAuth: (token: string, user: User) => void
  clearAuth: () => void
}
```

### Hook useAuth (`shared/hooks/use-auth.ts`)

Expõe o estado e as ações de autenticação para os componentes:

```ts
const { user, token, isAuthenticated, login, logout } = useAuth()
```

`login()` e `logout()` são stubs. Implemente-os com seu provedor.

### Wrapper de API (`shared/lib/api.ts`)

Injeta automaticamente `Authorization: Bearer {token}` a partir da store:

```ts
const data = await api<User[]>('/users')
```

### Rotas Protegidas

As rotas usam `beforeLoad` para verificar `isAuthenticated`:

```ts
export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()
    if (!isAuthenticated) throw redirect({ to: '/' })
  },
})
```

## Integrando um Provedor

### Keycloak

```ts
// src/shared/lib/keycloak.ts
import Keycloak from 'keycloak-js'

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
})
```

```ts
// No login() do use-auth.ts:
function login() {
  keycloak.login()
}
```

### Auth0

```ts
// No login() do use-auth.ts:
function login() {
  auth0.loginWithRedirect()
}
```

### Clerk

```ts
// Substitua useAuth pelos hooks useUser e useAuth do Clerk
// Atualize auth.store com os dados da sessão do Clerk
```

O padrão é sempre o mesmo: popule `auth.store` com `setAuth()` e limpe com `clearAuth()`.
