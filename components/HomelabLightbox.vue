<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const open = defineModel({ type: Boolean, default: false })
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
})

function close() {
  open.value = false
}

function onKey(event) {
  if (event.key === 'Escape') close()
}

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="alt"
      @click="close"
    >
      <button type="button" class="lightbox-close" aria-label="Close photo" @click.stop="close">
        Close
      </button>
      <img :src="src" :alt="alt" @click.stop />
    </div>
  </Teleport>
</template>
