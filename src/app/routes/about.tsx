import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">{t('about.title')}</h1>
      <p className="text-muted-foreground">{t('about.description')}</p>
    </div>
  )
}
