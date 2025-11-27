# Architecture Overview

The homelab is designed around a few core principles:

1. **GitOps-first** - All configuration lives in Git, ArgoCD deploys everything
2. **High availability** - Critical services run replicated across nodes
3. **Resource efficiency** - ARM-based nodes keep power consumption low
4. **Separation of concerns** - Dedicated nodes for specialized workloads

## Network Topology

```mermaid
flowchart TB
    subgraph Internet
        inet((Internet))
    end

    subgraph Edge["Edge Layer"]
        cf[Cloudflare Tunnel<br/>Zero Trust Access]
        traefik[Traefik Ingress<br/>TLS termination & routing]
    end

    subgraph Cluster["K3s Cluster"]
        subgraph ControlPlane["Control Plane + etcd"]
            m1[psyk3s1<br/>master]
            m2[psyk3s2<br/>master]
            m3[psyk3s3<br/>master]
        end

        subgraph Workers["Worker Nodes"]
            w1[psyk3s4]
            w2[psyk3s5]
            w3[psyk3s6]
            w4[psyk3s7]
            w5[psyk3s8]
        end

        subgraph AI["AI Inference Nodes"]
            ai1[psyaimax<br/>ROCm / AMD GPU]
            ai2[psy4090<br/>CUDA / NVIDIA]
        end
    end

    subgraph Storage["Storage Layer"]
        longhorn[(Longhorn<br/>Distributed Storage)]
    end

    inet --> cf
    cf --> traefik
    traefik --> ControlPlane
    ControlPlane --> Workers
    ControlPlane --> AI
    Workers --> longhorn
    AI --> longhorn
```

## Node Roles

Each node has a specific purpose, controlled through Kubernetes taints and tolerations:

| Node | Role | Taint |
|------|------|-------|
| **psyk3s1** | Omada Controller | `network-controller-host=true:NoSchedule` |
| **psyk3s2** | Unifi Controller | `network-controller-host=true:NoSchedule` |
| **psyk3s3** | Semaphore (Ansible UI) | `node-management=true:NoSchedule` |
| **psyk3s4-8** | General workloads | None |
| **psyaimax** | ROCm AI inference | `rocm-inference=true:NoSchedule` |
| **psy4090** | CUDA AI inference | `cuda-inference=true:NoSchedule` |

## Storage Architecture

Longhorn provides distributed block storage with:

- **3x replication** for critical data
- **NVMe-backed** storage on each Pi
- **Automatic snapshots** and backup to S3
- **RWO volumes** for most workloads


## GitOps Flow

```mermaid
flowchart LR
    edit[Edit<br/>values.yaml] --> commit[Commit<br/>locally]
    commit --> push[Push to<br/>GitHub]
    push --> argocd[ArgoCD<br/>detects]
    argocd --> sync[Sync<br/>app]
    sync --> deploy[Deployed<br/>to cluster]
```
