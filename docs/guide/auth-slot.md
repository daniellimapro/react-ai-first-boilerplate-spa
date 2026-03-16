# Auth Slot

Authentication is a project-specific decision. This boilerplate provides the structure without coupling you to any provider.

## What's included

### Auth Store (`shared/stores/auth.store.ts`)

Holds the authentication state globally:

```ts
interface AuthState {
  token: string | null
  user: User | null
  isAuthenticated: boolean
  setAuth: (token: string, user: User) => void
  clearAuth: () => void
}
```

### useAuth Hook (`shared/hooks/use-auth.ts`)

Exposes auth state and actions to components:

```ts
const { user, token, isAuthenticated, login, logout } = useAuth()
```

`login()` and `logout()` are stubs. Implement them with your provider.

### API Wrapper (`shared/lib/api.ts`)

Automatically injects `Authorization: Bearer {token}` from the store:

```ts
const data = await api<User[]>('/users')
```

### Protected Routes

Routes use `beforeLoad` to check `isAuthenticated`:

```ts
export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()
    if (!isAuthenticated) throw redirect({ to: '/' })
  },
})
```

## Integrating a Provider

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
// In use-auth.ts login():
function login() {
  keycloak.login()
}
```

### Auth0

```ts
// In use-auth.ts login():
function login() {
  auth0.loginWithRedirect()
}
```

### Clerk

```ts
// Replace useAuth with Clerk's useUser and useAuth hooks
// Update auth.store with Clerk session data
```

The pattern is always the same: populate `auth.store` with `setAuth()`, clear it with `clearAuth()`.
