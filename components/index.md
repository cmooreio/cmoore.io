# Software Overview

The homelab runs a variety of infrastructure components and applications, all managed through GitOps.

## Infrastructure Layer

These components form the foundation of the cluster:

| Component | Purpose |
|-----------|---------|
| **K3s** | Lightweight Kubernetes distribution optimized for edge and IoT |
| **Longhorn** | Cloud-native distributed block storage for Kubernetes |
| **Traefik** | Modern reverse proxy and ingress controller with automatic TLS |
| **ArgoCD** | Declarative GitOps continuous delivery for Kubernetes |

## Observability Stack

| Component | Description |
|-----------|-------------|
| **Prometheus** | Time-series metrics collection with 60-second scrape intervals and persistent storage |
| **Grafana** | Visualization platform with pre-built dashboards for cluster monitoring |
| **Loki** | Log aggregation system using label-based querying similar to Prometheus |
| **Alertmanager** | Alert routing and notification management with Discord integration |

## Other Applications

| Application | Description |
|-------------|-------------|
| **Home Assistant** | Smart home automation platform with Zigbee device support and voice control |
| **AI Server** | Local LLM inference using llama.cpp on ROCm and CUDA GPU nodes |
| **Omada Controller** | TP-Link network management for switches and access points |
| **Unifi Controller** | Ubiquiti network management running on a dedicated node |
| **Semaphore** | Web-based UI for running Ansible playbooks and managing automation jobs |
