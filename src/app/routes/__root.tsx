import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from '@/shared/components/theme-toggle'
import { LanguageSelector } from '@/shared/components/language-selector'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})

function RootLayout() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <nav className="flex items-center gap-6">
            <Link to="/" className="font-semibold text-foreground hover:text-primary">
              RAIF
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground [&.active]:font-medium [&.active]:text-foreground"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className="text-sm text-muted-foreground hover:text-foreground [&.active]:font-medium [&.active]:text-foreground"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/dashboard"
              className="text-sm text-muted-foreground hover:text-foreground [&.active]:font-medium [&.active]:text-foreground"
            >
              {t('nav.dashboard')}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">{t('notFound.title')}</h2>
      <p className="mt-2 text-muted-foreground">{t('notFound.description')}</p>
      <a href="/" className="mt-6 text-primary underline">{t('notFound.back')}</a>
    </div>
  )
}
