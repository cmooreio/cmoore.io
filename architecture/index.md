# Architecture Overview

The homelab is designed around a few core principles:

1. **GitOps-first** - All configuration lives in Git, ArgoCD deploys everything
2. **High availability** - Critical services run replicated across nodes
3. **Resource efficiency** - ARM-based nodes keep power consumption low
4. **Separation of concerns** - Dedicated nodes for specialized workloads

## Network Topology

```
                    ┌─────────────────────────────────────────┐
                    │            Internet                      │
                    └─────────────────┬───────────────────────┘
                                      │
                    ┌─────────────────▼───────────────────────┐
                    │         Cloudflare Tunnel                │
                    │         (Zero Trust Access)              │
                    └─────────────────┬───────────────────────┘
                                      │
    ┌─────────────────────────────────▼─────────────────────────────────┐
    │                         Traefik Ingress                            │
    │                    (TLS termination, routing)                      │
    └─────────────────────────────────┬─────────────────────────────────┘
                                      │
    ┌─────────────────────────────────▼─────────────────────────────────┐
    │                         K3s Cluster                                │
    │  ┌──────────┐ ┌──────────┐ ┌──────────┐                          │
    │  │ psyk3s1  │ │ psyk3s2  │ │ psyk3s3  │  Control Plane           │
    │  │ (master) │ │ (master) │ │ (master) │  + etcd                  │
    │  └──────────┘ └──────────┘ └──────────┘                          │
    │                                                                    │
    │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐│
    │  │ psyk3s4  │ │ psyk3s5  │ │ psyk3s6  │ │ psyk3s7  │ │ psyk3s8  ││
    │  │ (worker) │ │ (worker) │ │ (worker) │ │ (worker) │ │ (worker) ││
    │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘│
    │                                                                    │
    │  ┌────────────────┐ ┌────────────────┐                            │
    │  │   psyaimax     │ │    psy4090     │  AI Inference Nodes       │
    │  │ (ROCm/AMD GPU) │ │ (CUDA/NVIDIA)  │                            │
    │  └────────────────┘ └────────────────┘                            │
    └───────────────────────────────────────────────────────────────────┘
                                      │
    ┌─────────────────────────────────▼─────────────────────────────────┐
    │                      Longhorn Storage                              │
    │              (Distributed across all nodes)                        │
    └───────────────────────────────────────────────────────────────────┘
```

## Node Roles

Each node has a specific purpose, controlled through Kubernetes taints and tolerations:

| Node | Role | Taint |
|------|------|-------|
| psyk3s1 | Omada Controller | `network-controller-host=true:NoSchedule` |
| psyk3s2 | Unifi Controller | `network-controller-host=true:NoSchedule` |
| psyk3s3 | Semaphore (Ansible UI) | `node-management=true:NoSchedule` |
| psyk3s4-8 | General workloads | None |
| psyaimax | ROCm AI inference | `rocm-inference=true:NoSchedule` |
| psy4090 | CUDA AI inference | `cuda-inference=true:NoSchedule` |

## Storage Architecture

Longhorn provides distributed block storage with:

- **3x replication** for critical data
- **NVMe-backed** storage on each Pi
- **Automatic snapshots** and backup to S3
- **RWO volumes** for most workloads

See [Storage](/architecture/storage) for details.

## GitOps Flow

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│   Edit     │────▶│   Commit   │────▶│   Push     │
│ values.yaml│     │  locally   │     │ to GitHub  │
└────────────┘     └────────────┘     └─────┬──────┘
                                            │
                                            ▼
┌────────────┐     ┌────────────┐     ┌────────────┐
│  Deployed  │◀────│   Sync     │◀────│  ArgoCD    │
│ to cluster │     │   app      │     │  detects   │
└────────────┘     └────────────┘     └────────────┘
```

See [GitOps Workflow](/architecture/gitops) for the full workflow.
