---
prev:
  text: 'Software Overview'
  link: '/components/'
next:
  text: 'Observability'
  link: '/components/observability'
---

# Infrastructure

The cluster's foundation layer handles orchestration, storage, networking, and secrets management.

## K3s

[K3s](https://k3s.io/) is a lightweight, certified Kubernetes distribution built for edge and IoT environments. It packages the entire control plane into a single binary under 100MB.

The cluster has **9 hosts**: 3 control-plane Pis, 4 Pi workers, and 2 AI workers.

::: info Cluster Topology
- **Control plane**: rpi1, rpi2, rpi3 (etcd + API server)
- **General workers**: rpi5, rpi6, rpi8
- **Dedicated UniFi**: rpi7
- **AI inference**: aimax (ROCm worker), thor (CUDA worker)
:::

`rpi2` is an untainted control-plane member, so general pods can land there. `rpi4` is retired.

## Longhorn

[Longhorn](https://longhorn.io/) provides cloud-native distributed block storage with automatic replication across nodes.

| Feature | Configuration |
|---------|---------------|
| **Replication** | 2x default |
| **Storage Backend** | NVMe SSD on each Pi |
| **Snapshots** | Automatic, with backup to MinIO (S3 API) |
| **Volume Mode** | RWO (ReadWriteOnce) |

::: tip Deployment Pattern
Applications with RWO PVCs use `Recreate` strategy instead of `RollingUpdate` to prevent Multi-Attach errors when pods reschedule to different nodes.
:::

## Traefik

[Traefik](https://traefik.io/) serves as the ingress controller and reverse proxy, handling TLS termination and routing for all web-facing services.

- Public HTTPS via Cloudflare Tunnel (`cloudflared`) and Let's Encrypt
- LAN services on Traefik port 8443 (`websecure-local`)
- LoadBalancer IP: `192.168.64.1` via kube-vip

## ArgoCD

[ArgoCD](https://argo-cd.readthedocs.io/) manages all application deployments using the **App-of-Apps** pattern. A single root Application watches the `kubernetes/argocd/applications/` directory and automatically creates child Applications for each service.

| Setting | Value |
|---------|-------|
| **Sync interval** | 10 minutes |
| **Self-heal** | Enabled |
| **LoadBalancer IP** | `192.168.64.120` |

::: warning
Never use `kubectl edit` or `kubectl apply` directly. ArgoCD's self-heal will revert your changes within minutes. Always commit to Git and let ArgoCD sync.
:::

## cert-manager

[cert-manager](https://cert-manager.io/) automates TLS certificate provisioning and renewal using Let's Encrypt. Certificates are issued via Cloudflare DNS-01 challenges and stored as Kubernetes Secrets.

## Sealed Secrets

[Sealed Secrets](https://sealed-secrets.netlify.app/) enables storing encrypted secrets in Git. The controller running in-cluster decrypts them into regular Kubernetes Secrets at deploy time. Only the cluster's private key can decrypt sealed secrets.

::: tip
Never commit plaintext secrets to the repository. Always use `kubeseal` to encrypt them first.
:::

## Network Policies

The CNI (Flannel) is **default-allow**. Explicit `NetworkPolicy` objects exist where they matter — CoreDNS, Traefik, MongoDB, and a few application charts (including AI inference egress restrictions). There is no cluster-wide default-deny.

Host-network controllers (Omada, UniFi) still need LAN reachability for device adoption, which is why a blanket deny-all is not applied.
