---
layout: home

hero:
  name: "cmoore.io"
  tagline: k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation
---

<script setup>
import NetworkTopology from './components/NetworkTopology.vue'
import FeatureCards from './components/FeatureCards.vue'
</script>

<div class="mobile-nav">
  <a href="/architecture/">Architecture</a>
  <a href="/components/">Software</a>
  <a href="/hardware/">Hardware</a>
</div>

<div class="hero-showcase">
  <div class="showcase-photo">
    <a href="/hardware/">
      <img src="/homelab.jpeg" alt="Homelab rack with Raspberry Pi cluster, networking gear, and AI nodes" />
    </a>
  </div>
  <div class="showcase-topology">
    <NetworkTopology />
  </div>
</div>

<FeatureCards />
