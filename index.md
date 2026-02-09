---
layout: home

hero:
  name: "cmoore.io"
  tagline: k3s Raspberry Pi 5 cluster with GitOps, AI inference, and home automation
---

<script setup>
import { onMounted } from 'vue'
import NetworkTopology from './components/NetworkTopology.vue'
import FeatureCards from './components/FeatureCards.vue'

onMounted(() => {
  const command = 'kubectl get nodes'
  const output = `NAME    STATUS   ROLES                  VERSION
rpi1    Ready    control-plane,master   v1.35.0+k3s3
rpi2    Ready    control-plane,master   v1.35.0+k3s3
rpi3    Ready    control-plane,master   v1.35.0+k3s3
rpi4    Ready    <none>                 v1.35.0+k3s3
rpi5    Ready    <none>                 v1.35.0+k3s3
rpi6    Ready    <none>                 v1.35.0+k3s3
rpi7    Ready    <none>                 v1.35.0+k3s3
rpi8    Ready    <none>                 v1.35.0+k3s3
aimax   Ready    rocm-inference         v1.35.0+k3s3
thor    Ready    cuda-inference         v1.35.0+k3s3`

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

<FeatureCards />
