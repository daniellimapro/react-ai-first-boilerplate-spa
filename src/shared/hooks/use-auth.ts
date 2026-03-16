import { useAuthStore } from '@/shared/stores/auth.store'

export function useAuth() {
  const { user, token, isAuthenticated, clearAuth } = useAuthStore()

  function login() {
    // Replace this with your auth provider's login method
    // e.g., keycloak.login(), auth0.loginWithRedirect(), etc.
    throw new Error('Login not implemented. Replace this with your auth provider.')
  }

  function logout() {
    clearAuth()
    // Add your auth provider's logout method here if needed
  }

  return { user, token, isAuthenticated, login, logout }
}
