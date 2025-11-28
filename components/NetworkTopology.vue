<script setup>
import { ref, onMounted } from 'vue'
import { VueFlow, useVueFlow, Handle, Position } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'

const { fitView } = useVueFlow()

const nodes = ref([
  // Internet
  {
    id: 'internet',
    type: 'custom',
    position: { x: 400, y: 0 },
    data: { label: 'Internet', icon: '🌐', category: 'external' }
  },
  // Edge Layer
  {
    id: 'cloudflare',
    type: 'custom',
    position: { x: 250, y: 100 },
    data: { label: 'Cloudflare Tunnel', subtitle: 'Zero Trust Access', icon: '🛡️', category: 'edge' }
  },
  {
    id: 'traefik',
    type: 'custom',
    position: { x: 500, y: 100 },
    data: { label: 'Traefik', subtitle: 'Ingress Controller', icon: '🔀', category: 'edge' }
  },
  // Control Plane
  {
    id: 'rpi1',
    type: 'custom',
    position: { x: 100, y: 250 },
    data: { label: 'rpi1', subtitle: 'control-plane', icon: '🎛️', category: 'control' }
  },
  {
    id: 'rpi2',
    type: 'custom',
    position: { x: 350, y: 250 },
    data: { label: 'rpi2', subtitle: 'control-plane', icon: '🎛️', category: 'control' }
  },
  {
    id: 'rpi3',
    type: 'custom',
    position: { x: 600, y: 250 },
    data: { label: 'rpi3', subtitle: 'control-plane', icon: '🎛️', category: 'control' }
  },
  // Workers
  {
    id: 'rpi4',
    type: 'custom',
    position: { x: 0, y: 400 },
    data: { label: 'rpi4', subtitle: 'worker', icon: '🖥️', category: 'worker' }
  },
  {
    id: 'rpi5',
    type: 'custom',
    position: { x: 150, y: 400 },
    data: { label: 'rpi5', subtitle: 'worker', icon: '🖥️', category: 'worker' }
  },
  {
    id: 'rpi6',
    type: 'custom',
    position: { x: 300, y: 400 },
    data: { label: 'rpi6', subtitle: 'worker', icon: '🖥️', category: 'worker' }
  },
  {
    id: 'rpi7',
    type: 'custom',
    position: { x: 450, y: 400 },
    data: { label: 'rpi7', subtitle: 'worker', icon: '🖥️', category: 'worker' }
  },
  {
    id: 'rpi8',
    type: 'custom',
    position: { x: 600, y: 400 },
    data: { label: 'rpi8', subtitle: 'worker', icon: '🖥️', category: 'worker' }
  },
  // AI Nodes
  {
    id: 'aimax',
    type: 'custom',
    position: { x: 200, y: 550 },
    data: { label: 'aimax', subtitle: 'ROCm / AMD GPU', icon: '🔴', category: 'ai' }
  },
  {
    id: 'thor',
    type: 'custom',
    position: { x: 500, y: 550 },
    data: { label: 'thor', subtitle: 'CUDA / NVIDIA', icon: '🟢', category: 'ai' }
  },
  // Storage
  {
    id: 'longhorn',
    type: 'custom',
    position: { x: 350, y: 700 },
    data: { label: 'Longhorn', subtitle: 'Distributed Storage', icon: '💾', category: 'storage' }
  }
])

const edges = ref([
  // Internet to Edge
  { id: 'e-inet-cf', source: 'internet', target: 'cloudflare', animated: true, style: { stroke: '#6366f1' } },
  { id: 'e-cf-traefik', source: 'cloudflare', target: 'traefik', animated: true, style: { stroke: '#6366f1' } },
  // Edge to Control Plane
  { id: 'e-traefik-cp1', source: 'traefik', target: 'rpi1', style: { stroke: '#8b5cf6' } },
  { id: 'e-traefik-cp2', source: 'traefik', target: 'rpi2', style: { stroke: '#8b5cf6' } },
  { id: 'e-traefik-cp3', source: 'traefik', target: 'rpi3', style: { stroke: '#8b5cf6' } },
  // Control Plane to Workers
  { id: 'e-cp1-w4', source: 'rpi1', target: 'rpi4', style: { stroke: '#22c55e', strokeWidth: 1 } },
  { id: 'e-cp1-w5', source: 'rpi1', target: 'rpi5', style: { stroke: '#22c55e', strokeWidth: 1 } },
  { id: 'e-cp2-w6', source: 'rpi2', target: 'rpi6', style: { stroke: '#22c55e', strokeWidth: 1 } },
  { id: 'e-cp2-w7', source: 'rpi2', target: 'rpi7', style: { stroke: '#22c55e', strokeWidth: 1 } },
  { id: 'e-cp3-w8', source: 'rpi3', target: 'rpi8', style: { stroke: '#22c55e', strokeWidth: 1 } },
  // Control Plane to AI
  { id: 'e-cp1-ai1', source: 'rpi1', target: 'aimax', style: { stroke: '#f43f5e', strokeWidth: 2 } },
  { id: 'e-cp3-ai2', source: 'rpi3', target: 'thor', style: { stroke: '#f43f5e', strokeWidth: 2 } },
  // Storage to Workers (animated upward)
  { id: 'e-storage-w4', source: 'longhorn', target: 'rpi4', sourceHandle: 'top', targetHandle: 'target-bottom', animated: true, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e-storage-w5', source: 'longhorn', target: 'rpi5', sourceHandle: 'top', targetHandle: 'target-bottom', animated: true, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e-storage-w6', source: 'longhorn', target: 'rpi6', sourceHandle: 'top', targetHandle: 'target-bottom', animated: true, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e-storage-w7', source: 'longhorn', target: 'rpi7', sourceHandle: 'top', targetHandle: 'target-bottom', animated: true, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e-storage-w8', source: 'longhorn', target: 'rpi8', sourceHandle: 'top', targetHandle: 'target-bottom', animated: true, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  // Storage to AI (animated upward)
  { id: 'e-storage-ai1', source: 'longhorn', target: 'aimax', sourceHandle: 'top', targetHandle: 'target-bottom', animated: true, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
  { id: 'e-storage-ai2', source: 'longhorn', target: 'thor', sourceHandle: 'top', targetHandle: 'target-bottom', animated: true, style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
])

onMounted(() => {
  setTimeout(() => fitView({ padding: 0.2 }), 100)
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
      fit-view-on-init
    >
      <Background pattern-color="#374151" :gap="20" />
      <Controls />

      <template #node-custom="{ data }">
        <div :class="['topology-node', `node-${data.category}`]">
          <Handle type="target" :position="Position.Top" />
          <Handle type="source" :position="Position.Bottom" id="bottom" />
          <Handle type="target" :position="Position.Bottom" id="target-bottom" />
          <Handle type="source" :position="Position.Top" id="top" />
          <div class="node-icon">{{ data.icon }}</div>
          <div class="node-content">
            <div class="node-label">{{ data.label }}</div>
            <div v-if="data.subtitle" class="node-subtitle">{{ data.subtitle }}</div>
          </div>
        </div>
      </template>
    </VueFlow>

    <div class="topology-legend">
      <div class="legend-item"><span class="legend-color edge"></span> Edge Layer</div>
      <div class="legend-item"><span class="legend-color control"></span> Control Plane</div>
      <div class="legend-item"><span class="legend-color worker"></span> Workers</div>
      <div class="legend-item"><span class="legend-color ai"></span> AI Inference</div>
      <div class="legend-item"><span class="legend-color storage"></span> Storage</div>
    </div>
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
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 1px solid #334155;
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
  background: #1e293b;
  border: 2px solid #475569;
  min-width: 120px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.topology-node:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.node-external {
  background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%);
  border-color: #3b82f6;
}

.node-edge {
  background: linear-gradient(135deg, #312e81 0%, #1e1b4b 100%);
  border-color: #6366f1;
}

.node-control {
  background: linear-gradient(135deg, #4c1d95 0%, #2e1065 100%);
  border-color: #8b5cf6;
}

.node-worker {
  background: linear-gradient(135deg, #14532d 0%, #052e16 100%);
  border-color: #22c55e;
}

.node-ai {
  background: linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%);
  border-color: #f43f5e;
}

.node-storage {
  background: linear-gradient(135deg, #78350f 0%, #451a03 100%);
  border-color: #f59e0b;
}

.node-icon {
  font-size: 24px;
  line-height: 1;
}

.node-content {
  flex: 1;
}

.node-label {
  font-weight: 600;
  font-size: 13px;
  color: #f1f5f9;
  white-space: nowrap;
}

.node-subtitle {
  font-size: 10px;
  color: #94a3b8;
  margin-top: 2px;
}

.node-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #4ade80;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.topology-legend {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  padding: 10px 16px;
  background: rgba(15, 23, 42, 0.9);
  border-radius: 8px;
  border: 1px solid #334155;
  font-size: 11px;
  color: #94a3b8;
  z-index: 10;
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

/* Vue Flow overrides */
.vue-flow__edge-path {
  stroke-width: 2;
}

.vue-flow__controls {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
}

.vue-flow__controls-button {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.vue-flow__controls-button:hover {
  background: #475569;
}

/* Hide handle dots */
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

  .node-icon {
    font-size: 18px;
  }

  .node-label {
    font-size: 11px;
  }
}
</style>
