---
prev:
  text: 'Architecture'
  link: '/architecture/'
next:
  text: 'Infrastructure'
  link: '/components/infrastructure'
---

# Software Overview

The homelab runs a variety of infrastructure components and applications, all managed through GitOps with ArgoCD.

## Infrastructure Layer

These components form the foundation of the cluster. See the [Infrastructure](/components/infrastructure) page for details.

| Component | Purpose |
|-----------|---------|
| **K3s** | Lightweight Kubernetes distribution optimized for edge and IoT |
| **Longhorn** | Cloud-native distributed block storage for Kubernetes |
| **Traefik** | Modern reverse proxy and ingress controller with automatic TLS |
| **ArgoCD** | Declarative GitOps continuous delivery for Kubernetes |
| **cert-manager** | Automatic TLS certificate provisioning via Let's Encrypt |
| **Sealed Secrets** | Encrypted secret storage safe for Git repositories |

## Observability Stack

Full-stack monitoring and alerting. See the [Observability](/components/observability) page for details.

| Component | Description |
|-----------|-------------|
| **Prometheus** | Time-series metrics collection with 60-second scrape intervals and persistent storage |
| **Grafana** | Visualization platform with pre-built dashboards for cluster monitoring |
| **Loki** | Log aggregation system using label-based querying similar to Prometheus |
| **Alertmanager** | Alert routing and notification management with Discord integration |
| **Observium** | SNMP-based network monitoring for switches and infrastructure devices |

## AI Inference

Local LLM and generative AI serving. See the [AI Inference](/components/ai-inference) page for details.

| Component | Description |
|-----------|-------------|
| **llama.cpp** | LLM inference engine with ROCm GPU acceleration |
| **vLLM** | High-throughput model serving on CUDA |
| **LiteLLM** | Unified OpenAI-compatible API gateway for all models |
| **Open WebUI** | ChatGPT-style web interface for local models |
| **ComfyUI** | Node-based image generation workflows |
| **Speaches** | Text-to-speech and audio transcription |

## Applications

| Application | Description |
|-------------|-------------|
| **Home Assistant** | Smart home automation platform with Zigbee device support and voice control |
| **Omada Controller** | TP-Link network management for switches and access points |
| **Unifi Controller** | Ubiquiti network management running on a dedicated node |
| **Semaphore** | Web-based UI for running Ansible playbooks and managing automation jobs |
| **Kiwix** | Offline content server for Wikipedia and other reference material |

::: info Deployment Patterns
- **Deployment + Recreate**: Apps with RWO PVCs (prevents Multi-Attach errors)
- **StatefulSet**: Databases (MongoDB, PostgreSQL, MariaDB, Prometheus)
- **CronJob**: Backup jobs (etcd, MongoDB, PostgreSQL)
- **Java apps** (Omada/Unifi): Need 2000m CPU at startup, use `hostNetwork=true`
:::
