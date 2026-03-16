import { createFileRoute, redirect } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/shared/hooks/use-auth'
import { Button } from '@/shared/components/ui/button'
import { useAuthStore } from '@/shared/stores/auth.store'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState()
    if (!isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
  component: DashboardPage,
})

function DashboardPage() {
  const { t } = useTranslation()
  const { user, logout } = useAuth()

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.title')}</h1>
      <p className="text-muted-foreground">{t('dashboard.description')}</p>
      {user && <p className="text-sm">Logged in as: <strong>{user.email}</strong></p>}
      <Button variant="outline" onClick={logout}>Logout</Button>
    </div>
  )
}
