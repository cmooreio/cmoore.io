---
prev:
  text: 'Architecture'
  link: '/architecture/'
next:
  text: 'Infrastructure'
  link: '/components/infrastructure'
---

<script setup>
import KubectlNodes from './KubectlNodes.vue'
</script>

<ClientOnly>
  <KubectlNodes />
</ClientOnly>

# Software Overview

The homelab runs infrastructure and applications managed through GitOps with ArgoCD. This page is a catalog, not an operational runbook.

## Infrastructure Layer

These components form the foundation of the cluster. See the [Infrastructure](/components/infrastructure) page for details.

| Component | Purpose |
|-----------|---------|
| **K3s** | Lightweight Kubernetes distribution optimized for edge and IoT |
| **Longhorn** | Cloud-native distributed block storage for Kubernetes |
| **Traefik** | Reverse proxy and ingress controller with automatic TLS |
| **cloudflared** | Cloudflare Tunnel for public HTTPS without inbound port forwards |
| **ArgoCD** | Declarative GitOps continuous delivery for Kubernetes |
| **cert-manager** | Automatic TLS certificate provisioning via Let's Encrypt |
| **Sealed Secrets** | Encrypted secret storage safe for Git repositories |
| **kube-vip** | LoadBalancer IP allocation on the LAN |

## Observability Stack

Full-stack monitoring and alerting. See the [Observability](/components/observability) page for details.

| Component | Description |
|-----------|-------------|
| **Prometheus** | Time-series metrics with a 30-second scrape interval |
| **Grafana** | Dashboards for cluster, node, and application metrics |
| **Loki + Alloy** | Log aggregation; Alloy ships pod logs to Loki |
| **Alertmanager** | Alert routing to [ntfy](https://ntfy.sh/) |
| **Gatus** | Public status page at [status.cmoore.io](https://status.cmoore.io) |
| **Observium** | SNMP-based network monitoring for switches and infrastructure |

## AI Inference

Local LLM and generative AI serving. See the [AI Inference](/components/ai-inference) page for details.

| Component | Description |
|-----------|-------------|
| **llama.cpp** | LLM inference engine with ROCm GPU acceleration on aimax |
| **vLLM** | High-throughput model serving on Thor (CUDA) |
| **LiteLLM** | Unified OpenAI-compatible API gateway |
| **Open WebUI** | ChatGPT-style web interface for local models |
| **ComfyUI** | Node-based image generation workflows |
| **Speaches** | TTS and transcription via a custom Thor image |

## Applications

| Application | Description |
|-------------|-------------|
| **Home Assistant** | Home automation with Zigbee2MQTT, Mosquitto, and Music Assistant |
| **Omada Controller** | TP-Link network management for switches and access points |
| **UniFi Controller** | Ubiquiti network management on a dedicated worker |
| **Semaphore** | Web UI for Ansible playbooks |
| **Kiwix** | Offline Wikipedia and reference material |
| **Homer** | Internal homepage for self-hosted services |
| **IT Tools** | Browser utilities for development and ops |
| **n8n** | Workflow automation |
| **Vaultwarden** | Bitwarden-compatible password manager |
| **ntfy** | Push notifications for cluster alerts |
| **music-server** | Navidrome, Lidarr, Prowlarr, and qBittorrent |

## Backup & storage services

| Component | Description |
|-----------|-------------|
| **MinIO** | S3-compatible object store (NFS-backed) used as the backup hub |
| **Velero** | Daily Kubernetes object backups to MinIO |
| **DB dump CronJobs** | MongoDB (Omada/UniFi) and PostgreSQL backups |

::: info Deployment Patterns
- **Deployment + Recreate**: Apps with RWO PVCs (prevents Multi-Attach errors)
- **StatefulSet**: Databases (MongoDB, PostgreSQL, MariaDB, Prometheus)
- **CronJob**: Backup jobs (etcd, MongoDB, PostgreSQL, Velero)
- **Java apps** (Omada/UniFi): `hostNetwork=true` so devices on other subnets can reach the controllers. Omada is sized up to 2000m CPU; UniFi up to 1000m.
:::
