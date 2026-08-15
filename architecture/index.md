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
2. **Control-plane HA** - Three-node etcd quorum. Most applications run a single replica with Recreate + RWO volumes; Longhorn replicates those volumes 2×
3. **Resource efficiency** - ARM-based nodes keep power consumption low
4. **Separation of concerns** - Dedicated nodes for specialized workloads

Pages use short names (`rpi1`, `aimax`, `thor`) for the hosts `psyk3s1`, `psyaimax`, and `psythor`.

## Network Topology

<script setup>
import NetworkTopology from '../components/NetworkTopology.vue'
import NodeRolesTable from '../components/NodeRolesTable.vue'
</script>

<ClientOnly>
  <NetworkTopology />
</ClientOnly>

## Node Roles

Each node has a specific purpose, controlled through Kubernetes taints and tolerations:

<NodeRolesTable />

Nine hosts total: 7× Raspberry Pi 5 plus two AI nodes. `rpi4` / `psyk3s4` is retired.

## Storage Architecture

Longhorn provides distributed block storage with:

- **2x replication** for volume data
- **NVMe-backed** storage on each Pi
- **Automatic snapshots** and backup to MinIO (S3-compatible, NFS-backed)
- **RWO volumes** for most workloads

Cluster object backups use Velero; database dumps (MongoDB, PostgreSQL) and etcd snapshots run as CronJobs. GPU model weights live on `hostPath` (`/data/ai-models`), not Longhorn.

## GitOps Flow

All changes flow through Git:

1. **Edit** - Modify Helm values or manifests locally
2. **Commit** - Pre-commit hooks validate YAML, Helm charts, and scan for secrets
3. **Push** - Push to GitHub repository
4. **Detect** - ArgoCD detects changes (10-minute sync interval)
5. **Deploy** - Changes automatically applied to cluster
