---
prev:
  text: 'Home'
  link: '/'
next:
  text: 'Software'
  link: '/components/'
---

# Architecture Overview

The homelab is designed around a few core principles:

1. **GitOps-first** - All configuration lives in Git, ArgoCD deploys everything
2. **High availability** - Critical services run replicated across nodes
3. **Resource efficiency** - ARM-based nodes keep power consumption low
4. **Separation of concerns** - Dedicated nodes for specialized workloads

## Network Topology

<script setup>
import NetworkTopology from '../components/NetworkTopology.vue'
</script>

<ClientOnly>
  <NetworkTopology />
</ClientOnly>

## Node Roles

Each node has a specific purpose, controlled through Kubernetes taints and tolerations:

| Node | Role | Taint |
|------|------|-------|
| **rpi1** | Control plane + Omada Controller | `network-controller-host=true:NoSchedule` |
| **rpi2** | Control plane (etcd, general workloads) | None |
| **rpi3** | Control plane + Semaphore (Ansible UI) | `node-management=true:NoSchedule` |
| **rpi5, rpi6, rpi8** | General workloads | None |
| **rpi7** | UniFi Controller | `network-controller-host=true:NoSchedule` |
| **aimax** | ROCm AI inference + Observium (worker) | `rocm-inference=true:NoSchedule` |
| **thor** | CUDA AI inference | `cuda-inference=true:NoSchedule` |

## Storage Architecture

Longhorn provides distributed block storage with:

- **2x replication** for volume data
- **NVMe-backed** storage on each Pi
- **Automatic snapshots** and backup to S3
- **RWO volumes** for most workloads

## GitOps Flow

All changes flow through Git:

1. **Edit** - Modify Helm values or manifests locally
2. **Commit** - Pre-commit hooks validate YAML, Helm charts, and scan for secrets
3. **Push** - Push to GitHub repository
4. **Detect** - ArgoCD detects changes (10-minute sync interval)
5. **Deploy** - Changes automatically applied to cluster
