import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'cmoore.io',
  description: 'Homelab Infrastructure Documentation & Showcase',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Components', link: '/components/' },
      { text: 'Guides', link: '/guides/' },
    ],

    sidebar: {
      '/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'Overview', link: '/architecture/' },
            { text: 'Network Topology', link: '/architecture/network' },
            { text: 'Storage', link: '/architecture/storage' },
            { text: 'GitOps Workflow', link: '/architecture/gitops' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Infrastructure',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'K3s Cluster', link: '/components/k3s' },
            { text: 'Longhorn Storage', link: '/components/longhorn' },
            { text: 'Traefik Ingress', link: '/components/traefik' },
            { text: 'ArgoCD', link: '/components/argocd' },
          ]
        },
        {
          text: 'Observability',
          items: [
            { text: 'Prometheus', link: '/components/prometheus' },
            { text: 'Grafana', link: '/components/grafana' },
            { text: 'Loki', link: '/components/loki' },
          ]
        },
        {
          text: 'Applications',
          items: [
            { text: 'Home Assistant', link: '/components/home-assistant' },
            { text: 'AI Server', link: '/components/ai-server' },
            { text: 'Network Controllers', link: '/components/network-controllers' },
          ]
        }
      ],
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting Started', link: '/guides/' },
            { text: 'Adding a New App', link: '/guides/new-app' },
            { text: 'Sealed Secrets', link: '/guides/sealed-secrets' },
            { text: 'Backup & Recovery', link: '/guides/backup-recovery' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmooreio' }
    ],

    footer: {
      message: 'Homelab Infrastructure',
      copyright: 'cmoore.io'
    },

    search: {
      provider: 'local'
    }
  }
})
