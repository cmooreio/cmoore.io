import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

declare const __GIT_COMMIT__: string

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h('div', { class: 'commit-hash' }, `Build: ${__GIT_COMMIT__}`)
    })
  }
}
