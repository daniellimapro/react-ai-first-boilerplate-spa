import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import GitHubBadge from '../components/GitHubBadge.vue'
import HomePage from '../components/HomePage.vue'
import NavTitle from '../components/NavTitle.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(NavTitle),
      'nav-bar-content-after': () => h(GitHubBadge),
    })
  },
  enhanceApp({ app }: { app: import('vue').App }) {
    app.component('HomePage', HomePage)
  },
}
