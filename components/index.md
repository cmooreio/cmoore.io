# Components Overview

The homelab runs a variety of infrastructure components and applications, all managed through GitOps.

## Infrastructure Layer

These components form the foundation of the cluster:

| Component | Purpose | Deployment |
|-----------|---------|------------|
| [K3s](/components/k3s) | Lightweight Kubernetes | Ansible-managed |
| [Longhorn](/components/longhorn) | Distributed storage | ArgoCD |
| [Traefik](/components/traefik) | Ingress & load balancing | ArgoCD |
| [ArgoCD](/components/argocd) | GitOps controller | Helm |
| [cert-manager](/components/cert-manager) | TLS certificates | ArgoCD |
| [Sealed Secrets](/components/sealed-secrets) | Secret management | ArgoCD |

## Observability Stack

Full visibility into cluster health and performance:

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| [Prometheus](/components/prometheus) | Metrics collection | 60s scrape interval, persistent storage |
| [Grafana](/components/grafana) | Dashboards | Pre-built cluster dashboards |
| [Loki](/components/loki) | Log aggregation | Label-based querying |
| [Alertmanager](/components/alertmanager) | Alert routing | Discord notifications |

## Applications

Services running on the cluster:

| Application | Purpose | Notes |
|-------------|---------|-------|
| [Home Assistant](/components/home-assistant) | Home automation | Zigbee, voice control |
| [AI Server](/components/ai-server) | Local LLM inference | ROCm + CUDA pods |
| [Omada Controller](/components/network-controllers) | TP-Link network management | Dedicated node |
| [Unifi Controller](/components/network-controllers) | Ubiquiti network management | Dedicated node |
| [Semaphore](/components/semaphore) | Ansible UI | Job scheduling |

## Component Status

All components are deployed via ArgoCD and can be viewed in the ArgoCD dashboard:

```bash
# List all applications
argocd app list

# Get status of specific app
argocd app get <app-name>

# Force sync if needed
argocd app sync <app-name>
```
