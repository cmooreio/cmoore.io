import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'cmoore.io',
    description: 'Homelab Infrastructure Documentation & Showcase',

    vite: {
      define: {
        __GIT_COMMIT__: JSON.stringify(process.env.VITE_GIT_COMMIT || 'dev'),
      },
    },

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'theme-color', content: '#646cff' }],
      // Preload feature card images to prevent pop-in on mobile
      ['link', { rel: 'preload', href: '/raspberry-pi-5.jpg', as: 'image' }],
      ['link', { rel: 'preload', href: '/nvidia-jetson-agx-thor.jpg', as: 'image' }],
      ['link', { rel: 'preload', href: '/ansible-argocd.jpg', as: 'image' }],
      ['link', { rel: 'preload', href: '/kubernetes.jpg', as: 'image' }],
      ['link', { rel: 'preload', href: '/prometheus-grafana.jpg', as: 'image' }],
      ['link', { rel: 'preload', href: '/home-assistant-philips-hue.jpg', as: 'image' }],
    ],

    themeConfig: {
      logo: '/logo.svg',

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Architecture', link: '/architecture/' },
        { text: 'Software', link: '/components/' },
        { text: 'Hardware', link: '/hardware/' },
      ],

      sidebar: {
        '/architecture/': [
          {
            text: 'Architecture',
            items: [
              { text: 'Overview', link: '/architecture/' },
            ]
          },
          {
            text: 'Links',
            items: [
              { text: 'Cloudflare', link: 'https://www.cloudflare.com/' },
              { text: 'K3s', link: 'https://k3s.io/' },
              { text: 'Traefik', link: 'https://traefik.io/' },
              { text: 'Longhorn', link: 'https://longhorn.io/' },
            ]
          }
        ],
        '/components/': [
          {
            text: 'Software',
            items: [
              { text: 'Overview', link: '/components/' },
            ]
          },
          {
            text: 'Links',
            items: [
              { text: 'ArgoCD', link: 'https://argo-cd.readthedocs.io/' },
              { text: 'Prometheus', link: 'https://prometheus.io/' },
              { text: 'Grafana', link: 'https://grafana.com/' },
              { text: 'Loki', link: 'https://grafana.com/oss/loki/' },
              { text: 'Home Assistant', link: 'https://www.home-assistant.io/' },
              { text: 'llama.cpp', link: 'https://github.com/ggerganov/llama.cpp' },
              { text: 'Semaphore', link: 'https://semaphoreui.com/' },
            ]
          }
        ],
        '/hardware/': [
          {
            text: 'Hardware',
            items: [
              { text: 'Overview', link: '/hardware/' },
            ]
          },
          {
            text: 'Links',
            items: [
              { text: 'GeeekPi', link: 'https://www.amazon.com/stores/GeeekPi/page/1CDF6E25-6910-4A03-AACE-7DF3D0A99884' },
              { text: 'Raspberry Pi', link: 'https://www.raspberrypi.com/' },
              { text: 'TP-Link Omada', link: 'https://www.omadanetworks.com/us/business-networking/omada-switch-access-pro/' },
              { text: 'QNAP', link: 'https://www.qnap.com/en-us/product/compare-switches?conditions=link_speed-10gbe_sfp,link_speed-10gbe_base_t_rj45' },
              { text: 'Firewalla', link: 'https://firewalla.com/collections/firewalla-products' },
              { text: 'Minisforum', link: 'https://www.minisforum.com/' },
              { text: 'NVIDIA', link: 'https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/' },
            ]
          }
        ],
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/cmooreio' }
      ],

      footer: {
        message: 'Homelab Infrastructure',
        copyright: 'cmoore.io'
      },
    },

    mermaid: {
      theme: 'dark'
    }
  })
)
