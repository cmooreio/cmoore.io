/**
 * Public-site cluster facts. Keep in sync with
 * ansible/inventory/hosts.yml and docs/architecture/nodes.md in the homelab repo.
 * Homelab `just test-architecture` checks k3sVersion and piCount against inventory.
 */

export const k3sVersion = 'v1.36.3+k3s1'
export const piCount = 7
export const aiCount = 2
export const hostCount = 9
export const longhornReplicas = 2
export const argocdSyncInterval = '10 minutes'
export const prometheusScrapeInterval = '30 seconds'
export const prometheusEvaluationInterval = '60 seconds'

export type NodeCategory = 'control' | 'worker' | 'ai'

export type ClusterNode = {
  id: string
  hostname: string
  subtitle: string
  roleSummary: string
  taint: string
  category: NodeCategory
  kubectlRoles: string
}

export const nodes: ClusterNode[] = [
  {
    id: 'rpi1',
    hostname: 'psyk3s1',
    subtitle: 'control-plane + Omada',
    roleSummary: 'Control plane + Omada Controller',
    taint: 'network-controller-host=true:NoSchedule',
    category: 'control',
    kubectlRoles: 'control-plane,master',
  },
  {
    id: 'rpi2',
    hostname: 'psyk3s2',
    subtitle: 'control-plane',
    roleSummary: 'Control plane (etcd, general workloads)',
    taint: 'None',
    category: 'control',
    kubectlRoles: 'control-plane,master',
  },
  {
    id: 'rpi3',
    hostname: 'psyk3s3',
    subtitle: 'control-plane + Semaphore',
    roleSummary: 'Control plane + Semaphore',
    taint: 'node-management=true:NoSchedule',
    category: 'control',
    kubectlRoles: 'control-plane,master',
  },
  {
    id: 'rpi5',
    hostname: 'psyk3s5',
    subtitle: 'worker',
    roleSummary: 'General workloads',
    taint: 'None',
    category: 'worker',
    kubectlRoles: '<none>',
  },
  {
    id: 'rpi6',
    hostname: 'psyk3s6',
    subtitle: 'worker',
    roleSummary: 'General workloads',
    taint: 'None',
    category: 'worker',
    kubectlRoles: '<none>',
  },
  {
    id: 'rpi7',
    hostname: 'psyk3s7',
    subtitle: 'UniFi',
    roleSummary: 'UniFi Controller',
    taint: 'network-controller-host=true:NoSchedule',
    category: 'worker',
    kubectlRoles: '<none>',
  },
  {
    id: 'rpi8',
    hostname: 'psyk3s8',
    subtitle: 'worker',
    roleSummary: 'General workloads',
    taint: 'None',
    category: 'worker',
    kubectlRoles: '<none>',
  },
  {
    id: 'aimax',
    hostname: 'psyaimax',
    subtitle: 'ROCm (worker)',
    roleSummary: 'ROCm AI inference + Observium (worker)',
    taint: 'rocm-inference=true:NoSchedule',
    category: 'ai',
    kubectlRoles: '<none>',
  },
  {
    id: 'thor',
    hostname: 'psythor',
    subtitle: 'CUDA / NVIDIA',
    roleSummary: 'CUDA AI inference',
    taint: 'cuda-inference=true:NoSchedule',
    category: 'ai',
    kubectlRoles: '<none>',
  },
]

export function kubectlNodesOutput(): string {
  const nameWidth = Math.max(...nodes.map((n) => n.id.length), 4)
  const roleWidth = Math.max(...nodes.map((n) => n.kubectlRoles.length), 5)
  const header =
    'NAME'.padEnd(nameWidth) +
    '   STATUS   ' +
    'ROLES'.padEnd(roleWidth) +
    '   VERSION'
  const rows = nodes.map((n) => {
    return (
      n.id.padEnd(nameWidth) +
      '   Ready    ' +
      n.kubectlRoles.padEnd(roleWidth) +
      '   ' +
      k3sVersion
    )
  })
  return [header, ...rows].join('\n')
}
