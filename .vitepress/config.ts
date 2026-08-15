import { defineConfig } from 'vitepress'

const description = 'k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation'

export default defineConfig({
  title: 'cmoore.io',
  description,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://cmoore.io',
  },

  vite: {
    define: {
      __GIT_COMMIT__: JSON.stringify(process.env.VITE_GIT_COMMIT || 'dev'),
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'canonical', href: 'https://cmoore.io/' }],
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'cmoore.io' }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: 'https://cmoore.io/homelab.jpeg' }],
    ['meta', { property: 'og:url', content: 'https://cmoore.io/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'cmoore.io' }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: 'https://cmoore.io/homelab.jpeg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Software', link: '/components/' },
      { text: 'Hardware', link: '/hardware/' },
      { text: 'Status', link: 'https://status.cmoore.io' },
    ],

    sidebar: {
      '/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'Overview', link: '/architecture/' },
            { text: 'Software', link: '/components/' },
            { text: 'Hardware', link: '/hardware/' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Software',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Infrastructure', link: '/components/infrastructure' },
            { text: 'Observability', link: '/components/observability' },
            { text: 'AI Inference', link: '/components/ai-inference' },
          ]
        }
      ],
      '/hardware/': [
        {
          text: 'Hardware',
          items: [
            { text: 'Overview', link: '/hardware/' },
            { text: 'Architecture', link: '/architecture/' },
            { text: 'AI Inference', link: '/components/ai-inference' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmoore1776/homelab' }
    ],

    footer: {
      message: 'Homelab Infrastructure',
      copyright: 'cmoore.io'
    },
  },
})
