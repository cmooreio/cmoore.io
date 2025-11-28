---
layout: home

hero:
  name: "cmoore.io"
  tagline: k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const command = 'kubectl get nodes'
  const output = `NAME        STATUS   ROLES                  VERSION
psyk3s1     Ready    control-plane,master   v1.31.2+k3s1
psyk3s2     Ready    control-plane,master   v1.31.2+k3s1
psyk3s3     Ready    control-plane,master   v1.31.2+k3s1
psyk3s4     Ready    <none>                 v1.31.2+k3s1
psyk3s5     Ready    <none>                 v1.31.2+k3s1
psyk3s6     Ready    <none>                 v1.31.2+k3s1
psyk3s7     Ready    <none>                 v1.31.2+k3s1
psyk3s8     Ready    <none>                 v1.31.2+k3s1
psyaimax    Ready    rocm-inference         v1.31.2+k3s1
psythor     Ready    cuda-inference         v1.31.2+k3s1`

  // Move terminal into hero container on desktop
  const terminalWrapper = document.querySelector('.hero-with-terminal')
  const heroContainer = document.querySelector('.VPHero .container')

  if (terminalWrapper && heroContainer && window.innerWidth >= 960) {
    const terminal = terminalWrapper.querySelector('.terminal')
    if (terminal) {
      const clone = terminal.cloneNode(true)
      clone.classList.add('hero-terminal-inline')
      heroContainer.appendChild(clone)
      // Update references to cloned elements
      startTyping(
        clone.querySelector('.typed-text'),
        clone.querySelector('.cursor'),
        clone.querySelector('.terminal-output'),
        command,
        output
      )
      return
    }
  }

  // Fallback for mobile or if injection fails
  const typedText = document.querySelector('.typed-text')
  const cursor = document.querySelector('.cursor')
  const outputEl = document.querySelector('.terminal-output')
  if (typedText && cursor && outputEl) {
    startTyping(typedText, cursor, outputEl, command, output)
  }

  function startTyping(typedText, cursor, outputEl, command, output) {
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

<div class="hero-with-terminal">
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
