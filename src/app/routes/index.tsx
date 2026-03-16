import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useExampleStore } from '@/shared/stores/example.store'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { t } = useTranslation()
  const { count, increment, decrement, reset } = useExampleStore()
  const [submitted, setSubmitted] = useState(false)

  const formSchema = z.object({
    name: z.string().min(2, t('form.errors.nameMin')),
    email: z.string().email(t('form.errors.emailInvalid')),
  })

  type FormValues = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(_data: FormValues) {
    setSubmitted(true)
    resetForm()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{t('home.title')}</h1>
        <p className="text-muted-foreground">{t('home.description')}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Zustand Counter</CardTitle>
          <CardDescription>Demonstração de client state com Zustand</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={decrement}>-</Button>
          <span className="w-8 text-center font-mono text-2xl font-bold">{count}</span>
          <Button variant="outline" size="sm" onClick={increment}>+</Button>
          <Button variant="ghost" size="sm" onClick={reset}>Reset</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>React Hook Form + Zod</CardTitle>
          <CardDescription>Formulário com validação e i18n</CardDescription>
        </CardHeader>
        <CardContent>
          {submitted && (
            <div className="mb-4 rounded-md bg-primary/10 px-4 py-2 text-sm text-primary">
              {t('form.success')}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">{t('form.name')}</Label>
              <Input
                id="name"
                placeholder={t('form.namePlaceholder')}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">{t('form.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('form.emailPlaceholder')}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">{t('form.submit')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
