---
layout: home

hero:
  name: "cmoore.io"
  tagline: k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation
  actions:
    - theme: brand
      text: Architecture
      link: /architecture/
    - theme: alt
      text: Software
      link: /components/
    - theme: alt
      text: Hardware
      link: /hardware/
---

<script setup>
import { ref } from 'vue'
import NetworkTopology from './components/NetworkTopology.vue'
import FeatureCards from './components/FeatureCards.vue'
import HomelabLightbox from './components/HomelabLightbox.vue'

const lightboxOpen = ref(false)
</script>

<div class="hero-showcase">
  <div class="showcase-photo">
    <button type="button" class="photo-trigger" aria-haspopup="dialog" @click="lightboxOpen = true">
      <img src="/homelab.jpeg" alt="Homelab rack with Raspberry Pi cluster, networking gear, and AI nodes" />
    </button>
  </div>
  <div class="showcase-topology">
    <ClientOnly>
      <NetworkTopology />
    </ClientOnly>
  </div>
</div>

<FeatureCards />

<HomelabLightbox v-model="lightboxOpen" src="/homelab.jpeg" alt="Homelab rack with Raspberry Pi cluster, networking gear, and AI nodes" />
