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
| **Scrape interval** | 60 seconds |
| **Evaluation interval** | 60 seconds |
| **Storage** | Longhorn PVC |
| **Deployment** | StatefulSet |

::: info Why 60-second intervals?
The evaluation interval is set to 60 seconds (not the typical 30s) to prevent slow aggregation queries on the ARM-based nodes. Shorter intervals can cause query timeouts with complex recording rules.
:::

## Grafana

[Grafana](https://grafana.com/) provides visualization dashboards connected to both Prometheus (metrics) and Loki (logs) as data sources. Pre-built dashboards cover cluster health, node resources, and application-specific metrics.

## Loki

[Loki](https://grafana.com/oss/loki/) aggregates logs from all pods using a label-based indexing approach similar to Prometheus. It pairs with Grafana for log exploration and correlation with metrics.

## Alertmanager

[Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/) handles alert routing, deduplication, and notification delivery. Alerts from Prometheus are routed to **Discord** for real-time notifications.

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
