<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { kubectlNodesOutput } from '../data/cluster'

const command = 'kubectl get nodes'
const output = kubectlNodesOutput()
const typed = ref('')
const shownOutput = ref('')
const showCursor = ref(true)
let timers = []

function later(fn, ms) {
  const id = setTimeout(fn, ms)
  timers.push(id)
  return id
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typed.value = command
    shownOutput.value = output + '\n'
    showCursor.value = false
    return
  }
  let i = 0
  const typeCommand = () => {
    if (i < command.length) {
      typed.value += command[i]
      i++
      later(typeCommand, 80 + Math.random() * 40)
    } else {
      showCursor.value = false
      later(() => {
        const lines = output.split('\n')
        let j = 0
        const showLine = () => {
          if (j < lines.length) {
            shownOutput.value += lines[j] + '\n'
            j++
            later(showLine, 50)
          }
        }
        showLine()
      }, 300)
    }
  }
  later(typeCommand, 400)
})

onUnmounted(() => {
  timers.forEach(clearTimeout)
})
</script>

<template>
  <div class="software-terminal">
    <div class="terminal" aria-label="Sample kubectl get nodes output">
      <div class="terminal-header">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yellow"></span>
        <span class="terminal-dot green"></span>
        <span class="terminal-title">kubectl</span>
      </div>
      <div class="terminal-body">
        <div class="terminal-line command">
          <span class="prompt">$</span>
          <span class="typed-text">{{ typed }}</span>
          <span v-if="showCursor" class="cursor">▋</span>
        </div>
        <pre class="terminal-output">{{ shownOutput }}</pre>
      </div>
    </div>
    <p class="terminal-caption">
      Illustrative output using public node names. Cluster hostnames are psyk3s1–3, 5–8, psyaimax, and psythor.
    </p>
  </div>
</template>
