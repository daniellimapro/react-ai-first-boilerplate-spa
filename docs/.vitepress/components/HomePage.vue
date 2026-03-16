<template>
  <div class="home-page" :class="{ 'is-dark': isDark }">
    <section class="hero">
      <div class="hero__grid" aria-hidden="true" />
      <div class="container hero__container">
        <!-- Left -->
        <div class="hero__left">
          <div class="hero__badge">
            <span class="hero__badge-dot" />
            AI-First · Open Source
          </div>
          <h1 class="hero__title">
            The React Boilerplate<br>
            <span class="gradient-text">For Developers</span>
          </h1>
          <p class="hero__description">{{ t.hero.description }}</p>
          <div class="hero__actions">
            <a :href="startLink" class="btn btn--primary">
              {{ t.hero.cta }} <span>→</span>
            </a>
            <a href="https://github.com/daniellimapro/react-ai-first-boilerplate-spa" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">
              GitHub
            </a>
          </div>
        </div>

        <!-- Right: Code Editor -->
        <div class="hero__right">
          <div class="code-editor">
            <div class="code-editor__header">
              <div class="code-editor__dots">
                <span class="code-editor__dot code-editor__dot--red" />
                <span class="code-editor__dot code-editor__dot--yellow" />
                <span class="code-editor__dot code-editor__dot--green" />
              </div>
              <div class="code-editor__tabs">
                <span
                  v-for="(tab, i) in editorTabs"
                  :key="tab"
                  class="code-editor__tab"
                  :class="{ 'code-editor__tab--active': activeTabIndex === i }"
                >{{ tab }}</span>
              </div>
            </div>
            <div class="code-editor__body">
              <div
                v-for="(line, i) in displayedLines"
                :key="i"
                class="code-line"
              >
                <span class="code-line__num">{{ i + 1 }}</span>
                <span class="code-line__content" v-html="line ? applySyntax(line) : '&nbsp;'" />
                <span
                  v-if="i === displayedLines.length - 1"
                  class="code-line__cursor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="install">
      <div class="container">
        <div class="terminal">
          <div class="terminal__header">
            <span class="terminal__dot terminal__dot--red" />
            <span class="terminal__dot terminal__dot--yellow" />
            <span class="terminal__dot terminal__dot--green" />
            <span class="terminal__title">bash</span>
            <button class="terminal__copy" :class="{ 'terminal__copy--copied': copied }" @click="copyInstall" :aria-label="copied ? 'Copied' : 'Copy'">
              <svg v-if="!copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </button>
          </div>
          <div class="terminal__body">
            <p class="terminal__line">
              <span class="terminal__prompt">$</span>
              <span class="terminal__cmd">pnpm dlx degit daniellimapro/react-ai-first-boilerplate-spa my-app</span>
            </p>
            <p class="terminal__line">
              <span class="terminal__prompt">$</span>
              <span class="terminal__cmd">cd my-app && pnpm install</span>
            </p>
            <p class="terminal__line">
              <span class="terminal__prompt">$</span>
              <span class="terminal__cmd">pnpm dev</span>
            </p>
            <p class="terminal__line terminal__line--output">
              <span class="terminal__output">➜  Local:   </span>
              <span class="terminal__url">http://localhost:5173/</span>
              <span class="terminal__cursor" />
            </p>
          </div>
        </div>
        <p class="install__alt">
          {{ t.install.alt }}
          <code class="install__code">npx degit daniellimapro/react-ai-first-boilerplate-spa my-app</code>
        </p>
      </div>
    </section>

    <section class="features" ref="featuresRef">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t.features.title }}</h2>
          <p class="section-subtitle">{{ t.features.subtitle }}</p>
        </div>
        <div class="features__grid">
          <div
            v-for="(f, i) in features"
            :key="f.icon"
            class="feature-card"
            :class="{ 'is-visible': featuresVisible }"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <div class="feature-card__icon-wrap">
              <span class="feature-card__icon">{{ f.icon }}</span>
            </div>
            <h3 class="feature-card__title">{{ f.title }}</h3>
            <p class="feature-card__desc">{{ f.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="ai-section" ref="aiRef">
      <div class="container ai-section__inner">
        <div class="ai-section__text" :class="{ 'is-visible': aiVisible }">
          <div class="ai-section__badge">{{ t.ai.badge }}</div>
          <h2 class="ai-section__title">{{ t.ai.title }}</h2>
          <p class="ai-section__desc">{{ t.ai.description }}</p>
          <ul class="ai-section__list">
            <li v-for="item in t.ai.items" :key="item" class="ai-section__item">
              <span class="ai-section__check">✓</span>
              {{ item }}
            </li>
          </ul>
          <a :href="philosophyLink" class="ai-section__link">
            {{ t.ai.readMore }}
            <span>→</span>
          </a>
        </div>
        <div class="ai-section__editor" :class="{ 'is-visible': aiVisible }">
          <div class="editor">
            <div class="editor__header">
              <div class="editor__dots">
                <span class="editor__dot editor__dot--red" />
                <span class="editor__dot editor__dot--yellow" />
                <span class="editor__dot editor__dot--green" />
              </div>
              <div class="editor__tab">CLAUDE.md</div>
              <div class="editor__spacer" />
            </div>
            <pre class="editor__code"><code><span class="code-comment">## Stack</span>
<span class="code-key">- Build:</span> <span class="code-val">Vite + React 19 + TypeScript</span>
<span class="code-key">- Routing:</span> <span class="code-val">TanStack Router (file-based)</span>
<span class="code-key">- State:</span> <span class="code-val">React Query + Zustand</span>
<span class="code-key">- Forms:</span> <span class="code-val">React Hook Form + Zod</span>
<span class="code-key">- Style:</span> <span class="code-val">Tailwind CSS 4 + Shadcn/UI</span>

<span class="code-comment">## Folder Rule</span>
<span class="code-text">Code lives next to where it's used.</span>
<span class="code-text">Only promote to shared/ when 2+</span>
<span class="code-text">features need it.</span>

<span class="code-comment">## /figma</span>
<span class="code-text">Reads Figma design → implements</span>
<span class="code-text">pixel-perfect with Shadcn + Tailwind</span>

<span class="code-comment">## /commit</span>
<span class="code-text">Generates conventional commit</span>
<span class="code-text">and creates it automatically</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="stack-section" ref="stackRef">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t.stack.title }}</h2>
          <p class="section-subtitle">{{ t.stack.subtitle }}</p>
        </div>
        <div class="stack__grid" :class="{ 'is-visible': stackVisible }">
          <div v-for="item in stackItems" :key="item.name" class="stack-item">
            <span class="stack-item__name">{{ item.name }}</span>
            <span class="stack-item__desc">{{ item.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-section__inner">
          <div class="cta-section__glow" aria-hidden="true" />
          <h2 class="cta-section__title">{{ t.cta.title }}</h2>
          <p class="cta-section__desc">{{ t.cta.description }}</p>
          <div class="cta-section__actions">
            <a :href="startLink" class="btn btn--primary btn--lg">
              {{ t.cta.button }}
              <span class="btn__arrow">→</span>
            </a>
            <a
              href="https://github.com/daniellimapro/react-ai-first-boilerplate-spa"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--ghost btn--lg"
            >
              {{ t.cta.github }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const isEn = computed(() => lang.value === 'en-US')

const startLink = computed(() =>
  isEn.value
    ? '/react-ai-first-boilerplate-spa/en/guide/getting-started'
    : '/react-ai-first-boilerplate-spa/guide/getting-started'
)

const philosophyLink = computed(() =>
  isEn.value
    ? '/react-ai-first-boilerplate-spa/en/guide/philosophy'
    : '/react-ai-first-boilerplate-spa/guide/philosophy'
)

const editorTabs = ['route.tsx', 'use-auth.ts']
const activeTabIndex = ref(0)
const activeTab = computed(() => editorTabs[activeTabIndex.value])

const codeSnippets: Record<string, string[]> = {
  'route.tsx': [
    `import { createFileRoute } from '@tanstack/react-router'`,
    `import { useAuthStore } from '@/shared/stores/auth.store'`,
    ``,
    `export const Route = createFileRoute('/dashboard')({`,
    `  beforeLoad: () => {`,
    `    const { isAuthenticated } = useAuthStore.getState()`,
    `    if (!isAuthenticated) throw redirect({ to: '/' })`,
    `  },`,
    `  component: DashboardPage,`,
    `})`,
  ],
'use-auth.ts': [
    `import { useAuthStore } from '@/shared/stores/auth.store'`,
    ``,
    `export function useAuth() {`,
    `  const { user, token, isAuthenticated, clearAuth }`,
    `    = useAuthStore()`,
    ``,
    `  function logout() {`,
    `    clearAuth()`,
    `  }`,
    ``,
    `  return { user, token, isAuthenticated, logout }`,
    `}`,
  ],
}

const MAX_LINES = Math.max(...Object.values(codeSnippets).map((s) => s.length))

function emptyLines(): string[] {
  return Array(MAX_LINES).fill('')
}

const displayedLines = ref<string[]>(emptyLines())
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)

function getTabLines() {
  return codeSnippets[activeTab.value] ?? []
}

function applySyntax(line: string): string {
  if (!line) return '&nbsp;'
  return line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="cs">$1</span>')
    .replace(/\b(import|export|from|const|function|if|return|throw|async|await)\b/g, '<span class="ck">$1</span>')
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="cn">$1</span>')
    .replace(/(@[\w/.-]+)/g, '<span class="cp">$1</span>')
}

let typingTimer: ReturnType<typeof setTimeout> | null = null

function typeNextChar() {
  const lines = getTabLines()

  if (currentLineIndex.value >= lines.length) {
    typingTimer = setTimeout(() => {
      activeTabIndex.value = (activeTabIndex.value + 1) % editorTabs.length
      displayedLines.value = emptyLines()
      currentLineIndex.value = 0
      currentCharIndex.value = 0
      typingTimer = setTimeout(typeNextChar, 400)
    }, 2000)
    return
  }

  const currentLine = lines[currentLineIndex.value]

  if (currentCharIndex.value <= currentLine.length) {
    const partial = currentLine.slice(0, currentCharIndex.value)
    displayedLines.value[currentLineIndex.value] = partial
    currentCharIndex.value++
    typingTimer = setTimeout(typeNextChar, currentLine === '' ? 30 : 18)
  } else {
    currentLineIndex.value++
    currentCharIndex.value = 0
    typingTimer = setTimeout(typeNextChar, 60)
  }
}

const translations = {
  'pt-BR': {
    hero: {
      description:
        'A primeira base React projetada para desenvolvimento com IA. Clone, abra no seu assistente de IA e comece a construir com consistência.',
      cta: 'Começar agora',
    },
    install: {
      alt: 'Ou com npm:',
    },
    features: {
      title: 'Tudo que você precisa',
      subtitle: 'Uma stack moderna e opinada, pronta para produção desde o primeiro dia.',
    },
    ai: {
      badge: 'AI-First',
      title: 'Desenvolvido para IA',
      description:
        'O arquivo CLAUDE.md instrui seu assistente de IA com todas as convenções do projeto. Sem repetição, sem inconsistências.',
      items: [
        'Stack e convenções documentadas para a IA',
        'Estrutura de pastas com regra de colocalização',
        'Padrões de componente, hook, store e service',
        'Comandos /figma e /commit integrados',
      ],
      readMore: 'Ler sobre a filosofia AI-First',
    },
    stack: {
      title: 'Stack moderna e opinada',
      subtitle: 'Cada ferramenta foi escolhida com propósito.',
    },
    cta: {
      title: 'Pronto para começar?',
      description:
        'Clone o projeto, abra no seu assistente de IA e comece a construir features em minutos.',
      button: 'Ver documentação',
      github: 'Ver no GitHub',
    },
  },
  'en-US': {
    hero: {
      description:
        'The first React foundation designed for AI-driven development. Clone it, open in your AI assistant and start building consistently.',
      cta: 'Get started',
    },
    install: {
      alt: 'Or with npm:',
    },
    features: {
      title: 'Everything you need',
      subtitle: 'A modern, opinionated stack ready for production from day one.',
    },
    ai: {
      badge: 'AI-First',
      title: 'Built for AI',
      description:
        'The CLAUDE.md file instructs your AI assistant with all project conventions. No repetition, no inconsistencies.',
      items: [
        'Stack and conventions documented for the AI',
        'Folder structure with colocation rule',
        'Component, hook, store and service patterns',
        'Built-in /figma and /commit commands',
      ],
      readMore: 'Read about the AI-First philosophy',
    },
    stack: {
      title: 'Modern, opinionated stack',
      subtitle: 'Every tool was chosen with purpose.',
    },
    cta: {
      title: 'Ready to start?',
      description:
        'Clone the project, open in your AI assistant and start building features in minutes.',
      button: 'View documentation',
      github: 'View on GitHub',
    },
  },
}

const t = computed(
  () =>
    translations[lang.value as keyof typeof translations] ?? translations['en-US']
)

const featuresPtBR = [
  {
    icon: '🤖',
    title: 'AI-First por design',
    description:
      'CLAUDE.md com convenções completas para seu assistente de IA trabalhar com autonomia e consistência.',
  },
  {
    icon: '⚡',
    title: 'Vite + React 19',
    description:
      'Build ultra-rápido com Vite, React 19 com concurrent features e TypeScript strict em todo lugar.',
  },
  {
    icon: '🗂️',
    title: 'TanStack Router',
    description:
      'Roteamento file-based com type safety completo. Rotas, params e queries tipados de ponta a ponta.',
  },
  {
    icon: '🔄',
    title: 'React Query + Zustand',
    description:
      'Server state e client state separados pelas ferramentas certas. Sem Redux, sem boilerplate.',
  },
  {
    icon: '🎨',
    title: 'Tailwind 4 + Shadcn/UI',
    description:
      'CSS utility-first moderno com biblioteca de componentes que você possui. Zero overhead de runtime.',
  },
  {
    icon: '🧪',
    title: 'Vitest + MSW',
    description:
      'Test runner nativo do Vite, Testing Library para testes de comportamento e MSW para mock realista de APIs.',
  },
  {
    icon: '🔐',
    title: 'Auth Slot',
    description:
      'Estrutura de autenticação pronta. Conecte Keycloak, Auth0, Clerk ou qualquer provider sem mudar o restante.',
  },
  {
    icon: '🌍',
    title: 'i18n + Dark Mode',
    description:
      'Suporte multilíngue com detecção automática e dark/light mode com sync de preferência do sistema.',
  },
]

const featuresEn = [
  {
    icon: '🤖',
    title: 'AI-First by design',
    description:
      'CLAUDE.md with full conventions for your AI assistant to work with autonomy and consistency.',
  },
  {
    icon: '⚡',
    title: 'Vite + React 19',
    description:
      'Ultra-fast builds with Vite, React 19 with concurrent features and TypeScript strict everywhere.',
  },
  {
    icon: '🗂️',
    title: 'TanStack Router',
    description:
      'File-based routing with full type safety. Routes, params and queries typed end-to-end.',
  },
  {
    icon: '🔄',
    title: 'React Query + Zustand',
    description:
      'Server state and client state handled by the right tools. No Redux, no boilerplate.',
  },
  {
    icon: '🎨',
    title: 'Tailwind 4 + Shadcn/UI',
    description:
      'Modern utility-first CSS with a component library you own. Zero runtime overhead.',
  },
  {
    icon: '🧪',
    title: 'Vitest + MSW',
    description:
      'Vite-native test runner, Testing Library for behavior tests and MSW for realistic API mocking.',
  },
  {
    icon: '🔐',
    title: 'Auth Slot',
    description:
      'Auth structure ready. Plug in Keycloak, Auth0, Clerk or any provider without changing the rest.',
  },
  {
    icon: '🌍',
    title: 'i18n + Dark Mode',
    description:
      'Multi-language support with auto-detection and dark/light mode with system preference sync.',
  },
]

const features = computed(() => (isEn.value ? featuresEn : featuresPtBR))

const stackItems = [
  { name: 'Vite', desc: 'Build tool' },
  { name: 'React 19', desc: 'UI Library' },
  { name: 'TypeScript', desc: 'Strict typing' },
  { name: 'TanStack Router', desc: 'File-based routing' },
  { name: 'TanStack Query', desc: 'Server state' },
  { name: 'Zustand', desc: 'Client state' },
  { name: 'React Hook Form', desc: 'Forms' },
  { name: 'Zod', desc: 'Validation' },
  { name: 'Tailwind CSS 4', desc: 'Styling' },
  { name: 'Shadcn/UI', desc: 'Components' },
  { name: 'i18next', desc: 'i18n' },
  { name: 'next-themes', desc: 'Dark mode' },
  { name: 'Vitest', desc: 'Testing' },
  { name: 'MSW', desc: 'API mocking' },
  { name: 'ESLint + Prettier', desc: 'Code quality' },
  { name: 'GitHub Actions', desc: 'CI/CD' },
]

const copied = ref(false)
let copyTimer: ReturnType<typeof setTimeout> | null = null

function copyInstall() {
  navigator.clipboard.writeText('pnpm dlx degit daniellimapro/react-ai-first-boilerplate-spa my-app')
  copied.value = true
  if (copyTimer) clearTimeout(copyTimer)
  copyTimer = setTimeout(() => { copied.value = false }, 2000)
}

const featuresRef = ref<HTMLElement>()
const featuresVisible = ref(false)
const aiRef = ref<HTMLElement>()
const aiVisible = ref(false)
const stackRef = ref<HTMLElement>()
const stackVisible = ref(false)

onMounted(() => {
  typingTimer = setTimeout(typeNextChar, 600)

  const observe = (el: HTMLElement | undefined, setter: (v: boolean) => void) => {
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setter(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
  }

  observe(featuresRef.value, (v) => (featuresVisible.value = v))
  observe(aiRef.value, (v) => (aiVisible.value = v))
  observe(stackRef.value, (v) => (stackVisible.value = v))
})

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer)
  if (copyTimer) clearTimeout(copyTimer)
})
</script>

<style scoped>
.home-page {
  --hp-bg: #ffffff;
  --hp-bg-secondary: #f8f9fa;
  --hp-text: #0a0a0a;
  --hp-text-muted: #6b7280;
  --hp-border: rgba(0, 0, 0, 0.08);
  --hp-card-bg: rgba(0, 0, 0, 0.02);
  --hp-brand: #1a1a1a;
  --hp-brand-2: #555555;
  --hp-brand-3: #888888;
  --hp-brand-soft: rgba(0, 0, 0, 0.05);
  --hp-grid-line: rgba(0, 0, 0, 0.06);
  --hp-glow: rgba(0, 0, 0, 0.06);
  --hp-terminal-bg: #111111;
  --hp-terminal-text: #e2e8f0;
  --hp-radius: 12px;
  /* code editor */
  --hp-editor-bg: #f6f8fa;
  --hp-editor-header: #f0f2f5;
  --hp-code-default: #24292f;
  font-family: var(--vp-font-family-base);
  overflow: hidden;
}

html.dark .home-page {
  --hp-bg: #0a0a0a;
  --hp-bg-secondary: #111111;
  --hp-text: #fafafa;
  --hp-text-muted: #9ca3af;
  --hp-border: rgba(255, 255, 255, 0.08);
  --hp-card-bg: rgba(255, 255, 255, 0.03);
  --hp-brand: #e8e8e8;
  --hp-brand-2: #aaaaaa;
  --hp-brand-3: #666666;
  --hp-brand-soft: rgba(255, 255, 255, 0.06);
  --hp-grid-line: rgba(255, 255, 255, 0.04);
  --hp-glow: rgba(255, 255, 255, 0.04);
  --hp-terminal-bg: #0d0d0d;
  /* code editor */
  --hp-editor-bg: #101010;
  --hp-editor-header: rgba(255, 255, 255, 0.03);
  --hp-code-default: #cccccc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--hp-bg);
}

.hero__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--hp-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--hp-grid-line) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
}

.hero__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
}

.hero__left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border: 1px solid var(--hp-border);
  border-radius: 20px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--hp-text-muted);
  width: fit-content;
}

.hero__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
  50% { opacity: 0.8; box-shadow: 0 0 0 4px rgba(34,197,94,0); }
}

.hero__title {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--hp-text);
  margin: 0;
}

.gradient-text {
  color: var(--hp-text-muted);
}

.hero__description {
  font-size: 14px;
  line-height: 1.7;
  color: var(--hp-text-muted);
  max-width: 420px;
  margin: 0;
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ===== CODE EDITOR ===== */
.hero__right {
  position: relative;
  align-self: start;
  flex-shrink: 0;
}

.code-editor {
  background: var(--hp-editor-bg);
  border: 1px solid var(--hp-border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.4);
}

.code-editor__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--hp-border);
  background: var(--hp-editor-header);
}

.code-editor__dots {
  display: flex;
  gap: 6px;
}

.code-editor__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.code-editor__dot--red    { background: #ff5f57; }
.code-editor__dot--yellow { background: #febc2e; }
.code-editor__dot--green  { background: #28c840; }

.code-editor__tabs {
  display: flex;
  gap: 2px;
}

.code-editor__tab {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  color: var(--hp-text-muted);
  background: transparent;
  transition: all 0.15s ease;
}

.code-editor__tab--active {
  color: var(--hp-text);
  background: var(--hp-border);
  border-bottom: 1px solid var(--vp-c-brand-1);
}

.code-editor__body {
  padding: 12px 0;
  overflow: hidden;
  height: 312px;
  flex-shrink: 0;
}

.code-line {
  display: flex;
  align-items: baseline;
  padding: 1px 16px;
  min-height: 22px;
  transition: background 0.1s;
}

.code-line--highlighted {
  background: rgba(124, 58, 237, 0.12);
  border-left: 2px solid var(--vp-c-brand-1);
  padding-left: 14px;
}

.code-line__num {
  min-width: 28px;
  font-size: 11px;
  color: var(--hp-text-muted);
  opacity: 0.4;
  user-select: none;
  text-align: right;
  margin-right: 16px;
  font-family: 'JetBrains Mono', monospace;
}

.code-line__content {
  font-size: 12.5px;
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.6;
  white-space: pre;
  color: var(--hp-code-default);
}

.code-line__cursor {
  display: inline-block;
  width: 7px;
  height: 14px;
  background: var(--vp-c-brand-1);
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: blink-cursor 0.8s step-end infinite;
}

@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Syntax token colors — Zed Vesper theme — :deep() required for v-html content */
.code-line__content :deep(.ck) { color: #ffc799; } /* keywords */
.code-line__content :deep(.cs) { color: #80ffea; } /* strings */
.code-line__content :deep(.cn) { color: #d4a574; } /* booleans/null */
.code-line__content :deep(.cp) { color: #888888; } /* paths/@/ */
.code-line__content :deep(.ct) { color: #b5b5ff; } /* types */
.code-line__content :deep(.cf) { color: #ffc799; } /* functions */
.code-line__content :deep(.co) { color: #666666; } /* operators */
.code-line__content :deep(.cv) { color: #cccccc; } /* variables */

/* ===== BUTTONS ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn--primary {
  background: var(--hp-text);
  color: var(--hp-bg);
  box-shadow: none;
}

.btn--primary:hover {
  background: var(--hp-brand-2);
  color: var(--hp-bg);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.btn--secondary {
  background: var(--hp-card-bg);
  color: var(--hp-text);
  border: 1px solid var(--hp-border);
}

.btn--secondary:hover {
  background: var(--hp-brand-soft);
  border-color: var(--hp-brand);
  color: var(--hp-brand);
  transform: translateY(-1px);
}

.btn--ghost {
  background: transparent;
  color: var(--hp-text-muted);
  border: 1px solid var(--hp-border);
}

.btn--ghost:hover {
  color: var(--hp-text);
  border-color: var(--hp-text-muted);
}

.btn--lg {
  padding: 16px 32px;
  font-size: 16px;
}

.btn__arrow {
  transition: transform 0.2s ease;
}

.btn:hover .btn__arrow {
  transform: translateX(3px);
}

.btn__icon {
  width: 18px;
  height: 18px;
}

.install {
  background: var(--hp-bg-secondary);
  padding: 80px 0;
  border-top: 1px solid var(--hp-border);
  border-bottom: 1px solid var(--hp-border);
}

.terminal {
  background: var(--hp-terminal-bg);
  border-radius: var(--hp-radius);
  overflow: hidden;
  max-width: 680px;
  margin: 0 auto 24px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 24px 48px rgba(0, 0, 0, 0.4);
}

.terminal__header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.terminal__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal__dot--red { background: #ff5f57; }
.terminal__dot--yellow { background: #febc2e; }
.terminal__dot--green { background: #28c840; }

.terminal__title {
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  font-family: var(--vp-font-family-mono);
}

.terminal__copy {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  border-radius: 4px;
  padding: 0;
  transition: color 0.15s ease, background 0.15s ease;
  flex-shrink: 0;
}

.terminal__copy:hover {
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
}

.terminal__copy--copied {
  color: #28c840;
}

.terminal__body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terminal__line {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.6;
}

.terminal__prompt {
  color: #28c840;
  user-select: none;
  flex-shrink: 0;
}

.terminal__cmd {
  color: #e2e8f0;
}

.terminal__line--output {
  margin-top: 4px;
}

.terminal__output {
  color: rgba(255, 255, 255, 0.4);
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
}

.terminal__url {
  color: var(--hp-brand-3);
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
}

.terminal__cursor {
  display: inline-block;
  width: 2px;
  height: 16px;
  background: #e2e8f0;
  margin-left: 2px;
  vertical-align: middle;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.install__alt {
  text-align: center;
  color: var(--hp-text-muted);
  font-size: 14px;
  margin: 0;
}

.install__code {
  font-family: var(--vp-font-family-mono);
  background: var(--hp-border);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--hp-text);
}

.features {
  padding: 100px 0;
  background: var(--hp-bg);
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: var(--hp-text);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 16px;
  color: var(--hp-text-muted);
  margin: 0;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.feature-card {
  background: var(--hp-card-bg);
  border: 1px solid var(--hp-border);
  border-radius: var(--hp-radius);
  padding: 28px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  cursor: default;
}

.feature-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--hp-brand);
  box-shadow: 0 0 24px var(--hp-brand-soft), 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-card__icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--hp-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 22px;
}

.feature-card__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--hp-text);
  margin: 0 0 8px;
}

.feature-card__desc {
  font-size: 14px;
  color: var(--hp-text-muted);
  line-height: 1.6;
  margin: 0;
}

.ai-section {
  padding: 100px 0;
  background: var(--hp-bg-secondary);
  border-top: 1px solid var(--hp-border);
  border-bottom: 1px solid var(--hp-border);
}

.ai-section__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.ai-section__text {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.5s ease;
}

.ai-section__text.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.ai-section__badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 100px;
  background: var(--hp-brand-soft);
  color: var(--hp-brand);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
}

.ai-section__title {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  color: var(--hp-text);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.ai-section__desc {
  font-size: 16px;
  color: var(--hp-text-muted);
  line-height: 1.7;
  margin: 0 0 24px;
}

.ai-section__list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ai-section__item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  color: var(--hp-text);
  line-height: 1.5;
}

.ai-section__check {
  color: var(--hp-brand);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}

.ai-section__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--hp-brand);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: gap 0.2s ease;
}

.ai-section__link:hover {
  gap: 10px;
}

.ai-section__editor {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s ease 0.1s;
}

.ai-section__editor.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.editor {
  background: #0d1117;
  border-radius: var(--hp-radius);
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 24px 48px rgba(0, 0, 0, 0.5);
}

.editor__header {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  gap: 8px;
}

.editor__dots {
  display: flex;
  gap: 6px;
}

.editor__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.editor__dot--red { background: #ff5f57; }
.editor__dot--yellow { background: #febc2e; }
.editor__dot--green { background: #28c840; }

.editor__tab {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.06);
  padding: 3px 12px;
  border-radius: 4px;
}

.editor__spacer {
  flex: 1;
}

.editor__code {
  padding: 20px 24px;
  margin: 0;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.8;
  overflow-x: auto;
}

.code-comment { color: #6a9955; }
.code-key { color: #9cdcfe; }
.code-val { color: #ce9178; }
.code-text { color: #d4d4d4; }

.stack-section {
  padding: 100px 0;
  background: var(--hp-bg);
}

.stack__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  border: 1px solid var(--hp-border);
  border-radius: var(--hp-radius);
  overflow: hidden;
  opacity: 0;
  transform: translateY(16px);
  transition: all 0.4s ease;
}

.stack__grid.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.stack-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 24px;
  background: var(--hp-card-bg);
  border-right: 1px solid var(--hp-border);
  border-bottom: 1px solid var(--hp-border);
  transition: background 0.2s ease;
}

.stack-item:hover {
  background: var(--hp-brand-soft);
}

.stack-item__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--hp-text);
  font-family: var(--vp-font-family-mono);
}

.stack-item__desc {
  font-size: 12px;
  color: var(--hp-text-muted);
}

.cta-section {
  padding: 100px 0;
  background: var(--hp-bg-secondary);
  border-top: 1px solid var(--hp-border);
}

.cta-section__inner {
  position: relative;
  text-align: center;
  padding: 80px 40px;
  border: 1px solid var(--hp-border);
  border-radius: 16px;
  background: var(--hp-card-bg);
  overflow: hidden;
}

.cta-section__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  background: radial-gradient(ellipse, var(--hp-glow) 0%, transparent 70%);
  pointer-events: none;
}

.cta-section__title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: var(--hp-text);
  margin: 0 0 16px;
  position: relative;
  letter-spacing: -0.02em;
}

.cta-section__desc {
  font-size: 16px;
  color: var(--hp-text-muted);
  max-width: 480px;
  margin: 0 auto 40px;
  line-height: 1.6;
  position: relative;
}

.cta-section__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
}

@media (max-width: 960px) {
  .ai-section__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .ai-section__text,
  .ai-section__editor {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr;
  }

  .hero__right {
    display: none;
  }

  .stack__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features__grid {
    grid-template-columns: 1fr;
  }

  .cta-section__inner {
    padding: 48px 24px;
  }
}

@media (max-width: 480px) {
  .stack__grid {
    grid-template-columns: 1fr;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    justify-content: center;
  }
}
</style>
