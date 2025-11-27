---
layout: home

hero:
  name: "cmoore.io"
  text: "Homelab Infrastructure"
  tagline: K3s on Raspberry Pi 5 cluster with GitOps, AI inference, and home automation
  image:
    src: /hero-cluster.svg
    alt: Homelab Cluster
  actions:
    - theme: brand
      text: View Architecture
      link: /architecture/
    - theme: alt
      text: Components
      link: /components/

features:
  - icon: 🍇
    title: Raspberry Pi 5 Cluster
    details: 8-node K3s cluster running on Raspberry Pi 5 boards with NVMe storage and PoE+ power delivery.

  - icon: 🤖
    title: AI Inference Nodes
    details: Dedicated GPU nodes for local LLM inference - AMD RX 7900 XTX (ROCm) and NVIDIA RTX 4090 (CUDA).

  - icon: 🔄
    title: GitOps with ArgoCD
    details: Declarative infrastructure managed through Git. Push to deploy with automatic sync and self-healing.

  - icon: 💾
    title: Distributed Storage
    details: Longhorn provides replicated block storage across cluster nodes with automated snapshots and backups.

  - icon: 📊
    title: Full Observability
    details: Prometheus metrics, Grafana dashboards, and Loki log aggregation for complete cluster visibility.

  - icon: 🏠
    title: Home Automation
    details: Home Assistant integration with Zigbee devices, voice control, and intelligent automations.
---

## Cluster Overview

This homelab runs a production-grade Kubernetes environment on commodity hardware, demonstrating that enterprise patterns can be applied at home scale.

### Hardware

| Role | Nodes | Hardware |
|------|-------|----------|
| Control Plane | 3 | Raspberry Pi 5 8GB + NVMe |
| Workers | 5 | Raspberry Pi 5 8GB + NVMe |
| AI (ROCm) | 1 | AMD Ryzen + RX 7900 XTX |
| AI (CUDA) | 1 | Intel + RTX 4090 |

### Key Technologies

- **K3s** - Lightweight Kubernetes distribution
- **Longhorn** - Cloud-native distributed storage
- **ArgoCD** - GitOps continuous delivery
- **Traefik** - Ingress controller with automatic TLS
- **Prometheus Stack** - Metrics, alerting, and dashboards
