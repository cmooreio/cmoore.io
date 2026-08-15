<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { VueFlow, useVueFlow, Handle, Position } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { nodes as clusterNodes } from '../data/cluster'

const { fitView } = useVueFlow()
const reduceMotion = ref(false)
let motionQuery

const positions = {
  rpi1: { x: 100, y: 250 },
  rpi2: { x: 350, y: 250 },
  rpi3: { x: 600, y: 250 },
  rpi5: { x: 80, y: 400 },
  rpi6: { x: 220, y: 400 },
  rpi7: { x: 360, y: 400 },
  rpi8: { x: 500, y: 400 },
  aimax: { x: 220, y: 550 },
  thor: { x: 480, y: 550 },
}

const nodes = computed(() => [
  {
    id: 'internet',
    type: 'custom',
    position: { x: 400, y: 0 },
    data: { label: 'Internet', category: 'external' },
    draggable: false,
    selectable: false,
    connectable: false,
  },
  {
    id: 'cloudflare',
    type: 'custom',
    position: { x: 250, y: 100 },
    data: { label: 'Cloudflare Tunnel', subtitle: 'Public HTTPS', category: 'edge' },
    draggable: false,
    selectable: false,
    connectable: false,
  },
  {
    id: 'traefik',
    type: 'custom',
    position: { x: 500, y: 100 },
    data: { label: 'Traefik', subtitle: 'Ingress (public + LAN)', category: 'edge' },
    draggable: false,
    selectable: false,
    connectable: false,
  },
  ...clusterNodes.map((node) => ({
    id: node.id,
    type: 'custom',
    position: positions[node.id],
    data: { label: node.id, subtitle: node.subtitle, category: node.category },
    draggable: false,
    selectable: false,
    connectable: false,
  })),
  {
    id: 'longhorn',
    type: 'custom',
    position: { x: 350, y: 680 },
    data: { label: 'Longhorn', subtitle: 'Block storage on Pi NVMe', category: 'storage' },
    draggable: false,
    selectable: false,
    connectable: false,
  },
])

const edges = computed(() => {
  const motion = !reduceMotion.value
  return [
    { id: 'e-inet-cf', source: 'internet', target: 'cloudflare', animated: motion, style: { stroke: '#6366f1' } },
    { id: 'e-cf-traefik', source: 'cloudflare', target: 'traefik', animated: motion, style: { stroke: '#6366f1' } },
    { id: 'e-traefik-cp1', source: 'traefik', target: 'rpi1', style: { stroke: '#8b5cf6' } },
    { id: 'e-traefik-cp2', source: 'traefik', target: 'rpi2', style: { stroke: '#8b5cf6' } },
    { id: 'e-traefik-cp3', source: 'traefik', target: 'rpi3', style: { stroke: '#8b5cf6' } },
    { id: 'e-cp1-w5', source: 'rpi1', target: 'rpi5', style: { stroke: '#22c55e', strokeWidth: 1 } },
    { id: 'e-cp2-w6', source: 'rpi2', target: 'rpi6', style: { stroke: '#22c55e', strokeWidth: 1 } },
    { id: 'e-cp3-w7', source: 'rpi3', target: 'rpi7', style: { stroke: '#22c55e', strokeWidth: 1 } },
    { id: 'e-cp2-w8', source: 'rpi2', target: 'rpi8', style: { stroke: '#22c55e', strokeWidth: 1 } },
    { id: 'e-cp2-aimax', source: 'rpi2', target: 'aimax', style: { stroke: '#f43f5e', strokeWidth: 2 } },
    { id: 'e-cp3-thor', source: 'rpi3', target: 'thor', style: { stroke: '#f43f5e', strokeWidth: 2 } },
    { id: 'e-storage-w5', source: 'longhorn', target: 'rpi5', sourceHandle: 'top', targetHandle: 'target-bottom', animated: motion, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
    { id: 'e-storage-w6', source: 'longhorn', target: 'rpi6', sourceHandle: 'top', targetHandle: 'target-bottom', animated: motion, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
    { id: 'e-storage-w7', source: 'longhorn', target: 'rpi7', sourceHandle: 'top', targetHandle: 'target-bottom', animated: motion, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
    { id: 'e-storage-w8', source: 'longhorn', target: 'rpi8', sourceHandle: 'top', targetHandle: 'target-bottom', animated: motion, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  ]
})

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = motionQuery.matches
  const onMotion = (event) => {
    reduceMotion.value = event.matches
  }
  motionQuery.addEventListener('change', onMotion)
  motionQuery._onMotion = onMotion
  setTimeout(() => fitView({ padding: 0.2 }), 100)
})

onUnmounted(() => {
  if (motionQuery?._onMotion) {
    motionQuery.removeEventListener('change', motionQuery._onMotion)
  }
})
</script>

<template>
  <div class="network-topology">
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :default-viewport="{ zoom: 0.8 }"
      :min-zoom="0.3"
      :max-zoom="1.5"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :elements-selectable="false"
      :delete-key-code="null"
      :selection-key-code="null"
      :pan-on-drag="true"
      :zoom-on-scroll="true"
      fit-view-on-init
    >
      <Background pattern-color="#94a3b8" :gap="20" />
      <Controls :show-interactive="false" />

      <template #node-custom="{ data }">
        <div :class="['topology-node', `node-${data.category}`]">
          <Handle type="target" :position="Position.Top" />
          <Handle type="source" :position="Position.Bottom" id="bottom" />
          <Handle type="target" :position="Position.Bottom" id="target-bottom" />
          <Handle type="source" :position="Position.Top" id="top" />
          <div class="node-content">
            <div class="node-label">{{ data.label }}</div>
            <div v-if="data.subtitle" class="node-subtitle">{{ data.subtitle }}</div>
          </div>
        </div>
      </template>
    </VueFlow>

    <div class="topology-legend">
      <div class="legend-item"><span class="legend-color edge"></span> Edge</div>
      <div class="legend-item"><span class="legend-color control"></span> Control plane</div>
      <div class="legend-item"><span class="legend-color worker"></span> Workers</div>
      <div class="legend-item"><span class="legend-color ai"></span> AI inference</div>
      <div class="legend-item"><span class="legend-color storage"></span> Storage</div>
    </div>
    <p class="topology-caption">Schematic of roles and ingress — not a live map or packet path. GPU models use hostPath, not Longhorn.</p>
  </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import '@vue-flow/controls/dist/style.css';

.network-topology {
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft, #0f172a);
  border: 1px solid var(--vp-c-divider, #334155);
}

.vue-flow {
  background: transparent;
}

.topology-node {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 10px;
  background: var(--vp-c-bg, #1e293b);
  border: 2px solid var(--vp-c-divider, #475569);
  min-width: 120px;
}

.node-external { border-color: #3b82f6; }
.node-edge { border-color: #6366f1; }
.node-control { border-color: #8b5cf6; }
.node-worker { border-color: #22c55e; }
.node-ai { border-color: #f43f5e; }
.node-storage { border-color: #f59e0b; }

.node-content {
  flex: 1;
}

.node-label {
  font-weight: 600;
  font-size: 13px;
  color: var(--vp-c-text-1, #f1f5f9);
  white-space: nowrap;
}

.node-subtitle {
  font-size: 10px;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 2px;
}

.topology-legend {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  padding: 10px 16px;
  background: var(--vp-c-bg, rgba(15, 23, 42, 0.9));
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider, #334155);
  font-size: 11px;
  color: var(--vp-c-text-2, #94a3b8);
  z-index: 10;
}

.topology-caption {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 10px;
  margin: 0;
  font-size: 11px;
  line-height: 1.4;
  color: var(--vp-c-text-3, #94a3b8);
  text-align: center;
  z-index: 10;
  pointer-events: none;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

.legend-color.edge { background: #6366f1; }
.legend-color.control { background: #8b5cf6; }
.legend-color.worker { background: #22c55e; }
.legend-color.ai { background: #f43f5e; }
.legend-color.storage { background: #f59e0b; }

.vue-flow__edge-path {
  stroke-width: 2;
}

.vue-flow__controls {
  background: var(--vp-c-bg-soft, #1e293b);
  border: 1px solid var(--vp-c-divider, #334155);
  border-radius: 8px;
}

.vue-flow__controls-button {
  background: var(--vp-c-bg-alt, #334155);
  border-color: var(--vp-c-divider, #475569);
  color: var(--vp-c-text-1, #e2e8f0);
}

.vue-flow__controls-button:hover {
  background: var(--vp-c-gray-3, #475569);
}

.vue-flow__handle {
  opacity: 0;
  width: 1px;
  height: 1px;
}

@media (max-width: 768px) {
  .network-topology {
    height: 500px;
  }

  .topology-legend {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 10px;
  }

  .topology-node {
    padding: 8px 12px;
    min-width: 100px;
  }

  .node-label {
    font-size: 11px;
  }

  .topology-caption {
    font-size: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vue-flow__edge.animated {
    animation: none;
  }
}
</style>
