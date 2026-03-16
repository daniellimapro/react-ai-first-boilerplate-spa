import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: [/^http:\/\/localhost/],
  title: 'React AI First Boilerplate',
  description: 'A modern React SPA foundation built for AI-driven development',
  base: '/react-ai-first-boilerplate-spa/',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Stack', link: '/guide/stack' },
      {
        text: 'GitHub',
        link: 'https://github.com/daniellimapro/react-ai-first-boilerplate-spa',
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is this?', link: '/guide/what-is-this' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'AI-First Philosophy', link: '/guide/philosophy' },
          { text: 'Stack', link: '/guide/stack' },
          { text: 'Project Structure', link: '/guide/structure' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Auth Slot', link: '/guide/auth-slot' },
          { text: 'AI Commands', link: '/guide/ai-commands' },
          { text: 'Testing', link: '/guide/testing' },
          { text: 'CI/CD', link: '/guide/ci-cd' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/daniellimapro/react-ai-first-boilerplate-spa' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Daniel Lima',
    },
    search: {
      provider: 'local',
    },
  },
  head: [
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'React AI First Boilerplate SPA' }],
    ['meta', { name: 'og:description', content: 'A modern React SPA foundation built for AI-driven development' }],
  ],
})
