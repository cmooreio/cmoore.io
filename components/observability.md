---
prev:
  text: 'Infrastructure'
  link: '/components/infrastructure'
next:
  text: 'AI Inference'
  link: '/components/ai-inference'
---

# Observability

Full-stack monitoring with metrics, logs, alerting, and network monitoring.

## Prometheus

[Prometheus](https://prometheus.io/) collects time-series metrics from all cluster services and nodes. It runs as a **StatefulSet** with persistent storage for metric retention.

| Setting | Value |
|---------|-------|
| **Scrape interval** | 30 seconds |
| **Evaluation interval** | 60 seconds |
| **Storage** | Longhorn PVC |
| **Deployment** | StatefulSet |

::: info Why 60-second evaluation?
Alerting rules evaluate every 60 seconds (not the typical 30s) to avoid slow aggregations on the ARM nodes. Scrapes stay at 30s so dashboards still update quickly.
:::

## Grafana

[Grafana](https://grafana.com/) provides visualization dashboards connected to both Prometheus (metrics) and Loki (logs) as data sources. Pre-built dashboards cover cluster health, node resources, and application-specific metrics.

## Loki

[Loki](https://grafana.com/oss/loki/) aggregates logs from all pods using a label-based indexing approach similar to Prometheus. [Grafana Alloy](https://grafana.com/oss/alloy/) agents ship logs from each node. Grafana is the query UI.

## Alertmanager

[Alertmanager](https://prometheus.io/docs/alerting/alertmanager/) handles alert routing, deduplication, and notification delivery. Prometheus alerts go to **[ntfy](https://ntfy.sh/)** (critical and warning topics). [Gatus](https://status.cmoore.io) is the public endpoint status page.

## Observium

[Observium](https://www.observium.org/) provides SNMP-based network monitoring for switches, routers, and infrastructure devices.

| Setting | Value |
|---------|-------|
| **Node** | aimax (amd64-only image) |
| **Database** | MariaDB (StatefulSet) |
| **SNMP polling** | Uses host IP via flannel masquerade |
| **LoadBalancer IP** | `192.168.64.116` |

::: tip
SNMP polls originate from the pod's host IP due to flannel masquerade. Ensure network devices have SNMP ACLs that permit the node's IP address.
:::
