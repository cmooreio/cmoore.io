---
layout: home

hero:
  name: "cmoore.io"
  tagline: k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation
---

<script setup>
import { onMounted } from 'vue'
import NetworkTopology from './components/NetworkTopology.vue'

onMounted(() => {
  const command = 'kubectl get nodes'
  const output = `NAME    STATUS   ROLES                  VERSION
rpi1    Ready    control-plane,master   v1.31.2+k3s1
rpi2    Ready    control-plane,master   v1.31.2+k3s1
rpi3    Ready    control-plane,master   v1.31.2+k3s1
rpi4    Ready    <none>                 v1.31.2+k3s1
rpi5    Ready    <none>                 v1.31.2+k3s1
rpi6    Ready    <none>                 v1.31.2+k3s1
rpi7    Ready    <none>                 v1.31.2+k3s1
rpi8    Ready    <none>                 v1.31.2+k3s1
aimax   Ready    rocm-inference         v1.31.2+k3s1
thor    Ready    cuda-inference         v1.31.2+k3s1`

  const typedText = document.querySelector('.typed-text')
  const cursor = document.querySelector('.cursor')
  const outputEl = document.querySelector('.terminal-output')

  if (typedText && cursor && outputEl) {
    let i = 0
    const typeCommand = () => {
      if (i < command.length) {
        typedText.textContent += command[i]
        i++
        setTimeout(typeCommand, 80 + Math.random() * 40)
      } else {
        cursor.style.display = 'none'
        setTimeout(() => {
          let j = 0
          const lines = output.split('\n')
          const showLine = () => {
            if (j < lines.length) {
              outputEl.textContent += lines[j] + '\n'
              j++
              setTimeout(showLine, 50)
            }
          }
          showLine()
        }, 300)
      }
    }
    setTimeout(typeCommand, 800)
  }
})
</script>

<div class="mobile-nav">
  <a href="/architecture/">Architecture</a>
  <a href="/components/">Software</a>
  <a href="/hardware/">Hardware</a>
</div>

<div class="hero-showcase">
  <div class="showcase-terminal">
    <div class="terminal">
      <div class="terminal-header">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yellow"></span>
        <span class="terminal-dot green"></span>
        <span class="terminal-title">kubectl</span>
      </div>
      <div class="terminal-body">
        <div class="terminal-line command">
          <span class="prompt">$</span>
          <span class="typed-text"></span>
          <span class="cursor">▋</span>
        </div>
        <pre class="terminal-output"></pre>
      </div>
    </div>
  </div>
  <div class="showcase-topology">
    <NetworkTopology />
  </div>
</div>

<div class="feature-cards">
  <a href="/hardware/" class="feature-card">
    <img src="/raspberry-pi-5.jpg" alt="Raspberry Pi 5" loading="eager" decoding="async" />
    <div class="card-overlay">
      <h3>Raspberry Pi 5 Cluster</h3>
    </div>
  </a>

  <a href="/components/#other-applications" class="feature-card">
    <img src="/nvidia-jetson-agx-thor.jpg" alt="NVIDIA GPU" loading="eager" decoding="async" />
    <div class="card-overlay">
      <h3>Local AI Inference</h3>
    </div>
  </a>

  <a href="/architecture/#gitops-flow" class="feature-card">
    <img src="/ansible-argocd.jpg" alt="ArgoCD" loading="eager" decoding="async" />
    <div class="card-overlay">
      <h3>GitOps with ArgoCD</h3>
    </div>
  </a>

  <a href="/architecture/" class="feature-card">
    <img src="/kubernetes.jpg" alt="Kubernetes" loading="eager" decoding="async" />
    <div class="card-overlay">
      <h3>Lightweight Kubernetes</h3>
    </div>
  </a>

  <a href="/components/#observability-stack" class="feature-card">
    <img src="/prometheus-grafana.jpg" alt="Prometheus and Grafana" loading="eager" decoding="async" />
    <div class="card-overlay">
      <h3>Full Observability</h3>
    </div>
  </a>

  <a href="/components/#other-applications" class="feature-card">
    <img src="/home-assistant-philips-hue.jpg" alt="Home Assistant" loading="eager" decoding="async" />
    <div class="card-overlay">
      <h3>Home Automation</h3>
    </div>
  </a>
</div>
