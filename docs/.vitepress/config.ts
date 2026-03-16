import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: [/^http:\/\/localhost/],
  appearance: true,
  base: '/react-ai-first-boilerplate-spa/',

  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      title: 'React AI First Boilerplate',
      description: 'A base React moderna construída para desenvolvimento com IA',
      themeConfig: {
        nav: [
          { text: 'Guia', link: '/guide/getting-started' },
          { text: 'Stack', link: '/guide/stack' },
          {
            text: 'GitHub',
            link: 'https://github.com/daniellimapro/react-ai-first-boilerplate-spa',
          },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Introdução',
              items: [
                { text: 'O que é isso?', link: '/guide/what-is-this' },
                { text: 'Como começar', link: '/guide/getting-started' },
              ],
            },
            {
              text: 'Conceitos',
              items: [
                { text: 'Filosofia AI-First', link: '/guide/philosophy' },
                { text: 'Stack', link: '/guide/stack' },
                { text: 'Estrutura do projeto', link: '/guide/structure' },
              ],
            },
            {
              text: 'Features',
              items: [
                { text: 'Auth Slot', link: '/guide/auth-slot' },
                { text: 'Comandos de IA', link: '/guide/ai-commands' },
                { text: 'Testes', link: '/guide/testing' },
                { text: 'CI/CD', link: '/guide/ci-cd' },
              ],
            },
          ],
        },
        outline: { label: 'Nesta página' },
        lastUpdated: { text: 'Atualizado em' },
        docFooter: { prev: 'Anterior', next: 'Próxima' },
        darkModeSwitchLabel: 'Tema',
        lightModeSwitchTitle: 'Mudar para claro',
        darkModeSwitchTitle: 'Mudar para escuro',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Voltar ao topo',
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'React AI First Boilerplate',
      description: 'A modern React foundation built for AI-driven development',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'Stack', link: '/en/guide/stack' },
          {
            text: 'GitHub',
            link: 'https://github.com/daniellimapro/react-ai-first-boilerplate-spa',
          },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'What is this?', link: '/en/guide/what-is-this' },
                { text: 'Getting Started', link: '/en/guide/getting-started' },
              ],
            },
            {
              text: 'Core Concepts',
              items: [
                { text: 'AI-First Philosophy', link: '/en/guide/philosophy' },
                { text: 'Stack', link: '/en/guide/stack' },
                { text: 'Project Structure', link: '/en/guide/structure' },
              ],
            },
            {
              text: 'Features',
              items: [
                { text: 'Auth Slot', link: '/en/guide/auth-slot' },
                { text: 'AI Commands', link: '/en/guide/ai-commands' },
                { text: 'Testing', link: '/en/guide/testing' },
                { text: 'CI/CD', link: '/en/guide/ci-cd' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/daniellimapro/react-ai-first-boilerplate-spa',
      },
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2025 Daniel Lima',
    },
  },

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'React AI First Boilerplate SPA' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'A modern React foundation built for AI-driven development',
      },
    ],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap' }],
  ],
})
