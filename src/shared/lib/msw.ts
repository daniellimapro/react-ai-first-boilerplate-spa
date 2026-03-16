export async function initMsw() {
  if (import.meta.env.DEV) {
    const { worker } = await import('@/shared/mocks/browser')
    await worker.start({ onUnhandledRequest: 'bypass' })
  }
}
