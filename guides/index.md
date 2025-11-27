# Guides

Practical guides for working with the homelab infrastructure.

## Getting Started

If you're new to this homelab setup, start here:

1. **Understand the architecture** - Read the [Architecture Overview](/architecture/)
2. **Learn the GitOps workflow** - See [GitOps Workflow](/architecture/gitops)
3. **Explore the components** - Browse [Components](/components/)

## Common Tasks

### Deploying a New Application

See [Adding a New App](/guides/new-app) for the complete workflow.

Quick overview:
1. Create Helm chart in `kubernetes/charts/<app-name>/`
2. Create ArgoCD Application in `kubernetes/argocd/applications/`
3. Commit and push - ArgoCD handles the rest

### Managing Secrets

All secrets must be encrypted using Sealed Secrets. See [Sealed Secrets Guide](/guides/sealed-secrets).

```bash
# Create a sealed secret
kubeseal --format yaml < secret.yaml > sealed-secret.yaml
```

### Backup and Recovery

Regular backups are automated. See [Backup & Recovery](/guides/backup-recovery) for:
- etcd snapshots
- Longhorn volume backups
- Application data exports

## Troubleshooting

### Pod Won't Schedule

Check for taints and tolerations:
```bash
kubectl describe node <node-name> | grep Taint
kubectl describe pod <pod-name> | grep -A5 Tolerations
```

### ArgoCD Sync Issues

```bash
# Check app status
argocd app get <app-name>

# View diff
argocd app diff <app-name>

# Force refresh
argocd app get <app-name> --refresh
```

### Storage Issues

```bash
# Check Longhorn UI
kubectl -n longhorn-system port-forward svc/longhorn-frontend 8080:80

# Check volume status
kubectl get pv,pvc -A
```
