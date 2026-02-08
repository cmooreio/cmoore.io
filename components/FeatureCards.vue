<template>
  <div class="feature-cards">
    <!-- Raspberry Pi 5 Cluster -->
    <a href="/hardware/" class="feature-card">
      <div class="card-canvas card-canvas--cluster">
        <svg viewBox="0 0 400 200" fill="none">
          <!-- Connection lines -->
          <g stroke="#28ca42" stroke-width="0.5" opacity="0.12">
            <line x1="130" y1="55" x2="80" y2="110" />
            <line x1="130" y1="55" x2="140" y2="110" />
            <line x1="200" y1="55" x2="140" y2="110" />
            <line x1="200" y1="55" x2="200" y2="110" />
            <line x1="200" y1="55" x2="260" y2="110" />
            <line x1="270" y1="55" x2="200" y2="110" />
            <line x1="270" y1="55" x2="260" y2="110" />
            <line x1="270" y1="55" x2="320" y2="110" />
            <line x1="80" y1="110" x2="160" y2="160" />
            <line x1="140" y1="110" x2="160" y2="160" />
            <line x1="200" y1="110" x2="240" y2="160" />
            <line x1="260" y1="110" x2="240" y2="160" />
            <line x1="320" y1="110" x2="240" y2="160" />
          </g>
          <!-- Control plane nodes -->
          <circle cx="130" cy="55" r="6" fill="#7aa2f7" class="node-pulse" style="animation-delay: 0s" />
          <circle cx="200" cy="55" r="6" fill="#7aa2f7" class="node-pulse" style="animation-delay: 0.4s" />
          <circle cx="270" cy="55" r="6" fill="#7aa2f7" class="node-pulse" style="animation-delay: 0.8s" />
          <!-- Worker nodes -->
          <circle cx="80" cy="110" r="5" fill="#28ca42" class="node-pulse" style="animation-delay: 1.2s" />
          <circle cx="140" cy="110" r="5" fill="#28ca42" class="node-pulse" style="animation-delay: 1.5s" />
          <circle cx="200" cy="110" r="5" fill="#28ca42" class="node-pulse" style="animation-delay: 1.8s" />
          <circle cx="260" cy="110" r="5" fill="#28ca42" class="node-pulse" style="animation-delay: 2.1s" />
          <circle cx="320" cy="110" r="5" fill="#28ca42" class="node-pulse" style="animation-delay: 2.4s" />
          <!-- AI nodes -->
          <circle cx="160" cy="160" r="7" fill="#ff7b72" class="node-pulse" style="animation-delay: 2.8s" />
          <circle cx="240" cy="160" r="7" fill="#ff7b72" class="node-pulse" style="animation-delay: 3.2s" />
          <!-- Tiny labels -->
          <g font-size="8" fill="rgba(255,255,255,0.3)" text-anchor="middle" font-family="monospace">
            <text x="200" y="42">control plane</text>
            <text x="200" y="98">workers</text>
            <text x="200" y="185">gpu</text>
          </g>
        </svg>
      </div>
      <div class="card-overlay"><h3>Raspberry Pi 5 Cluster</h3><p class="card-subtitle">8x RPi5 + 2 GPU nodes</p></div>
    </a>

    <!-- Local AI Inference -->
    <a href="/components/ai-inference" class="feature-card">
      <div class="card-canvas card-canvas--neural">
        <svg viewBox="0 0 400 200" fill="none">
          <!-- Connection lines input→hidden -->
          <g stroke="#8b5cf6" stroke-width="0.5" opacity="0.08">
            <line x1="80" y1="50" x2="200" y2="35" /><line x1="80" y1="50" x2="200" y2="78" />
            <line x1="80" y1="50" x2="200" y2="122" /><line x1="80" y1="50" x2="200" y2="165" />
            <line x1="80" y1="100" x2="200" y2="35" /><line x1="80" y1="100" x2="200" y2="78" />
            <line x1="80" y1="100" x2="200" y2="122" /><line x1="80" y1="100" x2="200" y2="165" />
            <line x1="80" y1="150" x2="200" y2="35" /><line x1="80" y1="150" x2="200" y2="78" />
            <line x1="80" y1="150" x2="200" y2="122" /><line x1="80" y1="150" x2="200" y2="165" />
          </g>
          <!-- Connection lines hidden→output -->
          <g stroke="#8b5cf6" stroke-width="0.5" opacity="0.08">
            <line x1="200" y1="35" x2="320" y2="75" /><line x1="200" y1="35" x2="320" y2="125" />
            <line x1="200" y1="78" x2="320" y2="75" /><line x1="200" y1="78" x2="320" y2="125" />
            <line x1="200" y1="122" x2="320" y2="75" /><line x1="200" y1="122" x2="320" y2="125" />
            <line x1="200" y1="165" x2="320" y2="75" /><line x1="200" y1="165" x2="320" y2="125" />
          </g>
          <!-- Input nodes -->
          <circle cx="80" cy="50" r="5" fill="#8b5cf6" opacity="0.5" />
          <circle cx="80" cy="100" r="5" fill="#8b5cf6" opacity="0.5" />
          <circle cx="80" cy="150" r="5" fill="#8b5cf6" opacity="0.5" />
          <!-- Hidden nodes -->
          <circle cx="200" cy="35" r="5" fill="#a78bfa" opacity="0.5" />
          <circle cx="200" cy="78" r="5" fill="#a78bfa" opacity="0.5" />
          <circle cx="200" cy="122" r="5" fill="#a78bfa" opacity="0.5" />
          <circle cx="200" cy="165" r="5" fill="#a78bfa" opacity="0.5" />
          <!-- Output nodes -->
          <circle cx="320" cy="75" r="5" fill="#c4b5fd" opacity="0.5" />
          <circle cx="320" cy="125" r="5" fill="#c4b5fd" opacity="0.5" />
          <!-- Traveling data dots -->
          <g class="nn-dot nn-dot-1"><circle r="2.5" fill="#d8b4fe" /></g>
          <g class="nn-dot nn-dot-2"><circle r="2.5" fill="#d8b4fe" /></g>
          <g class="nn-dot nn-dot-3"><circle r="2.5" fill="#d8b4fe" /></g>
          <g class="nn-dot nn-dot-4"><circle r="2.5" fill="#d8b4fe" /></g>
        </svg>
      </div>
      <div class="card-overlay"><h3>Local AI Inference</h3><p class="card-subtitle">ROCm & CUDA GPU acceleration</p></div>
    </a>

    <!-- GitOps with ArgoCD -->
    <a href="/architecture/#gitops-flow" class="feature-card">
      <div class="card-canvas card-canvas--gitops">
        <svg viewBox="0 0 400 200" fill="none">
          <!-- Stage circles -->
          <circle cx="100" cy="85" r="24" stroke="#58a6ff" fill="none" stroke-width="1" opacity="0.15" />
          <circle cx="200" cy="85" r="24" stroke="#39d353" fill="none" stroke-width="1" opacity="0.15" />
          <circle cx="300" cy="85" r="24" stroke="#f78166" fill="none" stroke-width="1" opacity="0.15" />
          <!-- Connecting arrows -->
          <g stroke="rgba(255,255,255,0.12)" stroke-width="1">
            <line x1="128" y1="85" x2="172" y2="85" />
            <polygon points="172,82 172,88 178,85" fill="rgba(255,255,255,0.12)" />
            <line x1="228" y1="85" x2="272" y2="85" />
            <polygon points="272,82 272,88 278,85" fill="rgba(255,255,255,0.12)" />
          </g>
          <!-- Commit icon -->
          <g class="go-stage go-stage-1">
            <circle cx="100" cy="85" r="4" fill="#58a6ff" />
            <circle cx="100" cy="73" r="2" fill="#58a6ff" opacity="0.5" />
            <line x1="100" y1="75" x2="100" y2="81" stroke="#58a6ff" stroke-width="1" opacity="0.5" />
          </g>
          <!-- Sync icon (rotating arrow) -->
          <g class="go-stage go-stage-2">
            <g class="go-sync-spin">
              <path d="M191,73 A13,13 0 1,1 210,91" stroke="#39d353" fill="none" stroke-width="1.5" stroke-linecap="round" />
              <polygon points="210,88 210,94 215,91" fill="#39d353" />
            </g>
          </g>
          <!-- Deploy checkmark -->
          <g class="go-stage go-stage-3">
            <path d="M291,85 L297,91 L311,77" stroke="#f78166" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <!-- Labels -->
          <g font-size="9" fill="rgba(255,255,255,0.3)" text-anchor="middle" font-family="sans-serif">
            <text x="100" y="122">commit</text>
            <text x="200" y="122">sync</text>
            <text x="300" y="122">deploy</text>
          </g>
        </svg>
      </div>
      <div class="card-overlay"><h3>GitOps with ArgoCD</h3><p class="card-subtitle">Declarative continuous delivery</p></div>
    </a>

    <!-- Lightweight Kubernetes -->
    <a href="/architecture/" class="feature-card">
      <div class="card-canvas card-canvas--k8s">
        <svg viewBox="0 0 400 200" fill="none">
          <g class="k8s-wheel">
            <!-- Heptagon -->
            <polygon points="200,45 243,66 254,112 224,150 176,150 146,112 157,66"
              stroke="#326ce5" fill="none" stroke-width="1.5" opacity="0.35" />
            <!-- Spokes -->
            <g stroke="#326ce5" stroke-width="1" opacity="0.18">
              <line x1="200" y1="100" x2="200" y2="45" />
              <line x1="200" y1="100" x2="243" y2="66" />
              <line x1="200" y1="100" x2="254" y2="112" />
              <line x1="200" y1="100" x2="224" y2="150" />
              <line x1="200" y1="100" x2="176" y2="150" />
              <line x1="200" y1="100" x2="146" y2="112" />
              <line x1="200" y1="100" x2="157" y2="66" />
            </g>
            <!-- Center -->
            <circle cx="200" cy="100" r="8" fill="#326ce5" opacity="0.2" />
            <circle cx="200" cy="100" r="3" fill="#326ce5" opacity="0.5" />
            <!-- Vertex dots -->
            <circle cx="200" cy="45" r="4" fill="#326ce5" opacity="0.4" />
            <circle cx="243" cy="66" r="4" fill="#326ce5" opacity="0.4" />
            <circle cx="254" cy="112" r="4" fill="#326ce5" opacity="0.4" />
            <circle cx="224" cy="150" r="4" fill="#326ce5" opacity="0.4" />
            <circle cx="176" cy="150" r="4" fill="#326ce5" opacity="0.4" />
            <circle cx="146" cy="112" r="4" fill="#326ce5" opacity="0.4" />
            <circle cx="157" cy="66" r="4" fill="#326ce5" opacity="0.4" />
          </g>
          <!-- Pod indicators -->
          <rect x="206" y="36" width="8" height="8" rx="1.5" fill="#326ce5" class="k8s-pod" style="animation-delay: 0s" />
          <rect x="249" y="57" width="8" height="8" rx="1.5" fill="#326ce5" class="k8s-pod" style="animation-delay: 0.8s" />
          <rect x="260" y="104" width="8" height="8" rx="1.5" fill="#326ce5" class="k8s-pod" style="animation-delay: 1.6s" />
          <rect x="229" y="144" width="8" height="8" rx="1.5" fill="#326ce5" class="k8s-pod" style="animation-delay: 2.4s" />
          <rect x="168" y="144" width="8" height="8" rx="1.5" fill="#326ce5" class="k8s-pod" style="animation-delay: 3.2s" />
        </svg>
      </div>
      <div class="card-overlay"><h3>Lightweight Kubernetes</h3><p class="card-subtitle">K3s optimized for ARM & edge</p></div>
    </a>

    <!-- Full Observability -->
    <a href="/components/observability" class="feature-card">
      <div class="card-canvas card-canvas--metrics">
        <svg viewBox="0 0 400 200" fill="none">
          <!-- Background grid -->
          <g stroke="rgba(255,255,255,0.04)" stroke-width="0.5">
            <line x1="40" y1="40" x2="370" y2="40" />
            <line x1="40" y1="80" x2="370" y2="80" />
            <line x1="40" y1="120" x2="370" y2="120" />
            <line x1="40" y1="160" x2="370" y2="160" />
            <line x1="40" y1="30" x2="40" y2="170" />
            <line x1="122" y1="30" x2="122" y2="170" />
            <line x1="205" y1="30" x2="205" y2="170" />
            <line x1="288" y1="30" x2="288" y2="170" />
            <line x1="370" y1="30" x2="370" y2="170" />
          </g>
          <!-- Metric line 1 (orange) -->
          <polyline points="40,140 80,128 120,142 160,95 200,108 240,72 280,82 320,52 360,58"
            stroke="#f0883e" stroke-width="2" class="metric-line metric-line-1" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Metric line 2 (blue) -->
          <polyline points="40,125 80,118 120,128 160,112 200,108 240,96 280,102 320,82 360,88"
            stroke="#58a6ff" stroke-width="1.5" opacity="0.5" class="metric-line metric-line-2" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Metric line 3 (green) -->
          <polyline points="40,155 80,150 120,142 160,148 200,138 240,132 280,122 320,128 360,118"
            stroke="#39d353" stroke-width="1" opacity="0.35" class="metric-line metric-line-3" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Data points on primary -->
          <circle cx="160" cy="95" r="3" fill="#f0883e" class="metric-dot" style="animation-delay: 1.5s" />
          <circle cx="240" cy="72" r="3" fill="#f0883e" class="metric-dot" style="animation-delay: 2s" />
          <circle cx="320" cy="52" r="3" fill="#f0883e" class="metric-dot" style="animation-delay: 2.5s" />
          <!-- Scan line -->
          <line x1="0" y1="30" x2="0" y2="170" stroke="#f0883e" stroke-width="1" opacity="0.15" class="metric-scan" />
        </svg>
      </div>
      <div class="card-overlay"><h3>Full Observability</h3><p class="card-subtitle">Prometheus, Grafana & Loki</p></div>
    </a>

    <!-- Home Automation -->
    <a href="/components/#applications" class="feature-card">
      <div class="card-canvas card-canvas--home">
        <svg viewBox="0 0 400 200" fill="none">
          <!-- House roof -->
          <path d="M200 30 L335 108 L65 108 Z" stroke="#eab308" fill="none" stroke-width="1.5" opacity="0.35" />
          <!-- House body -->
          <rect x="88" y="108" width="224" height="72" stroke="#eab308" fill="none" stroke-width="1.5" opacity="0.35" rx="1" />
          <!-- Door -->
          <rect x="182" y="146" width="36" height="34" stroke="#eab308" fill="none" stroke-width="1" opacity="0.2" rx="1" />
          <circle cx="211" cy="163" r="2" fill="#eab308" opacity="0.15" />
          <!-- Windows -->
          <rect x="108" y="118" width="38" height="22" rx="2" fill="#eab308" class="ha-window" style="animation-delay: 0s" />
          <rect x="254" y="118" width="38" height="22" rx="2" fill="#eab308" class="ha-window" style="animation-delay: 1.5s" />
          <rect x="108" y="150" width="38" height="22" rx="2" fill="#eab308" class="ha-window" style="animation-delay: 3s" />
          <rect x="254" y="150" width="38" height="22" rx="2" fill="#eab308" class="ha-window" style="animation-delay: 4.5s" />
          <!-- WiFi arcs -->
          <path d="M192 28 A10 10 0 0 1 208 28" stroke="#eab308" fill="none" stroke-width="1.2" class="ha-wifi" style="animation-delay: 0s" />
          <path d="M185 21 A18 18 0 0 1 215 21" stroke="#eab308" fill="none" stroke-width="1.2" class="ha-wifi" style="animation-delay: 0.4s" />
          <path d="M178 14 A26 26 0 0 1 222 14" stroke="#eab308" fill="none" stroke-width="1.2" class="ha-wifi" style="animation-delay: 0.8s" />
        </svg>
      </div>
      <div class="card-overlay"><h3>Home Automation</h3><p class="card-subtitle">Home Assistant with Zigbee</p></div>
    </a>
  </div>
</template>

<style scoped>
/* Feature cards grid */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 48px 0;
  padding: 0 24px;
}

/* Card base */
a.feature-card {
  position: relative;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  min-height: 200px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  cursor: pointer;
}

a.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

a.feature-card:focus {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

/* Card canvas - holds SVG animation + background */
.card-canvas {
  position: absolute;
  inset: 0;
}

.card-canvas svg {
  width: 100%;
  height: 100%;
}

/* Card backgrounds: grid pattern + accent gradient */
.card-canvas--cluster {
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 50%, rgba(40, 202, 66, 0.07), #0c1220 70%);
  background-size: 20px 20px, 20px 20px, 100% 100%;
}

.card-canvas--neural {
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.07), #0c1220 70%);
  background-size: 20px 20px, 20px 20px, 100% 100%;
}

.card-canvas--gitops {
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 50%, rgba(88, 166, 255, 0.07), #0c1220 70%);
  background-size: 20px 20px, 20px 20px, 100% 100%;
}

.card-canvas--k8s {
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 50%, rgba(50, 108, 229, 0.07), #0c1220 70%);
  background-size: 20px 20px, 20px 20px, 100% 100%;
}

.card-canvas--metrics {
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 50%, rgba(240, 136, 62, 0.07), #0c1220 70%);
  background-size: 20px 20px, 20px 20px, 100% 100%;
}

.card-canvas--home {
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(ellipse at 50% 50%, rgba(234, 179, 8, 0.07), #0c1220 70%);
  background-size: 20px 20px, 20px 20px, 100% 100%;
}

/* Card overlay */
.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 24px 20px;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
}

.card-overlay h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  text-align: center;
}

.card-subtitle {
  margin: 4px 0 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  text-align: center;
}

/* ========== ANIMATIONS ========== */

/* Cluster: node pulse */
.node-pulse {
  animation: node-pulse 4s ease-in-out infinite;
}

@keyframes node-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.9; }
}

/* Neural network: traveling dots */
.nn-dot { opacity: 0; }

.nn-dot-1 { animation: nn-travel-1 4s ease-in-out infinite; }
.nn-dot-2 { animation: nn-travel-2 4s ease-in-out infinite 0.8s; }
.nn-dot-3 { animation: nn-travel-3 4s ease-in-out infinite 2s; }
.nn-dot-4 { animation: nn-travel-4 4s ease-in-out infinite 2.8s; }

@keyframes nn-travel-1 {
  0% { transform: translate(80px, 50px); opacity: 0; }
  5% { opacity: 0.8; }
  42% { opacity: 0.8; }
  48% { transform: translate(200px, 78px); opacity: 0; }
  100% { opacity: 0; }
}

@keyframes nn-travel-2 {
  0% { transform: translate(80px, 150px); opacity: 0; }
  5% { opacity: 0.8; }
  42% { opacity: 0.8; }
  48% { transform: translate(200px, 35px); opacity: 0; }
  100% { opacity: 0; }
}

@keyframes nn-travel-3 {
  0% { transform: translate(200px, 78px); opacity: 0; }
  5% { opacity: 0.8; }
  42% { opacity: 0.8; }
  48% { transform: translate(320px, 125px); opacity: 0; }
  100% { opacity: 0; }
}

@keyframes nn-travel-4 {
  0% { transform: translate(200px, 165px); opacity: 0; }
  5% { opacity: 0.8; }
  42% { opacity: 0.8; }
  48% { transform: translate(320px, 75px); opacity: 0; }
  100% { opacity: 0; }
}

/* GitOps: stage pulse + sync spin */
.go-stage { opacity: 0.15; }
.go-stage-1 { animation: go-pulse 5s ease-in-out infinite; }
.go-stage-2 { animation: go-pulse 5s ease-in-out infinite 1.6s; }
.go-stage-3 { animation: go-pulse 5s ease-in-out infinite 3.2s; }

@keyframes go-pulse {
  0%, 35%, 100% { opacity: 0.15; }
  17% { opacity: 1; }
}

.go-sync-spin {
  animation: go-spin 5s linear infinite;
  transform-origin: 200px 85px;
}

@keyframes go-spin {
  to { transform: rotate(360deg); }
}

/* K8s: wheel rotation + pod pulse */
.k8s-wheel {
  animation: k8s-rotate 30s linear infinite;
  transform-origin: 200px 100px;
}

@keyframes k8s-rotate {
  to { transform: rotate(360deg); }
}

.k8s-pod {
  animation: k8s-pod-pulse 3.5s ease-in-out infinite;
}

@keyframes k8s-pod-pulse {
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.65; }
}

/* Metrics: line draw + dot fade-in + scan */
.metric-line {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: metric-draw 2.5s ease forwards;
}

.metric-line-1 { animation-delay: 0.3s; }
.metric-line-2 { animation-delay: 0.8s; }
.metric-line-3 { animation-delay: 1.3s; }

@keyframes metric-draw {
  to { stroke-dashoffset: 0; }
}

.metric-dot {
  opacity: 0;
  animation: metric-dot-in 0.5s ease forwards;
}

@keyframes metric-dot-in {
  to { opacity: 0.8; }
}

.metric-scan {
  animation: metric-scan-move 6s ease-in-out infinite 3.5s;
}

@keyframes metric-scan-move {
  0%, 100% { transform: translateX(0); opacity: 0; }
  10% { opacity: 0.2; }
  90% { opacity: 0.2; }
  95% { transform: translateX(370px); opacity: 0; }
}

/* Home: window glow + wifi pulse */
.ha-window {
  animation: ha-window-glow 6s ease-in-out infinite;
}

@keyframes ha-window-glow {
  0%, 30%, 100% { opacity: 0.04; }
  15% { opacity: 0.5; }
}

.ha-wifi {
  animation: ha-wifi-pulse 3s ease-in-out infinite;
}

@keyframes ha-wifi-pulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

/* ========== RESPONSIVE ========== */

@media (max-width: 640px) {
  .feature-cards {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }

  a.feature-card {
    min-height: 180px;
  }
}

/* ========== REDUCED MOTION ========== */

@media (prefers-reduced-motion: reduce) {
  .node-pulse,
  .nn-dot-1, .nn-dot-2, .nn-dot-3, .nn-dot-4,
  .go-stage-1, .go-stage-2, .go-stage-3,
  .go-sync-spin,
  .k8s-wheel,
  .k8s-pod,
  .metric-scan,
  .ha-window,
  .ha-wifi {
    animation: none;
  }

  .node-pulse { opacity: 0.6; }
  .go-stage { opacity: 0.6; }
  .k8s-pod { opacity: 0.4; }
  .ha-window { opacity: 0.25; }
  .ha-wifi { opacity: 0.2; }

  .metric-line {
    animation: metric-draw 0.01s ease forwards;
  }
}
</style>
