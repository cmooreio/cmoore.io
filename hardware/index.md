---
prev:
  text: 'AI Inference'
  link: '/components/ai-inference'
---

# Hardware

The homelab is built on a mix of ARM and x86 hardware, optimized for power efficiency and performance where needed.

## Rack & Enclosure

| Component | Description |
|-----------|-------------|
| **GeeekPi 10" Mini Rack** | Compact 10-inch rack enclosure for the Pi cluster |
| **GeeekPi 7.8" Rack-Mount LCD** | Built-in display for monitoring without external monitor |

## Compute Nodes

### Raspberry Pi Cluster

| Component | Description |
|-----------|-------------|
| **Raspberry Pi 5 16GB** | 7× quad-core Arm Cortex-A76 @ 2.4GHz |
| **GeeekPi NVMe Carrier** | PCIe to NVMe adapter for Pi 5 |
| **Teamgroup MP33 1TB NVMe** | PCIe 3.0 NVMe SSD storage per node |

::: info Cluster Roles
Three Pis run the K3s control plane (`rpi1`, `rpi2`, `rpi3`) for HA etcd. `rpi2` is untainted and also runs general pods. `rpi5`, `rpi6`, and `rpi8` are general workers; `rpi7` is dedicated to UniFi. Omada and Semaphore are pinned to `rpi1` and `rpi3`. A fourth Pi (`rpi4`) is retired.
:::

### AI Inference Nodes

| Component | Description |
|-----------|-------------|
| **Minisforum MS-S1 Max** | 128GB unified memory, 120W Ryzen AI Max+ 395 (ROCm) |
| **NVIDIA AGX Thor** | 128GB, 130W Blackwell GPU (CUDA) |

::: tip
Both AI nodes are workers (not etcd members) and use taints so only inference workloads — plus Observium on aimax — land there. See [AI Inference](/components/ai-inference) for the multi-pod architecture.
:::

## Networking

| Component | Description |
|-----------|-------------|
| **TP-Link Omada SG2210XMP-M2** | 8-Port 2.5GbE PoE+ switch with 2x 10GbE SFP+ uplinks |
| **QNAP QSW-3216R-8S8T** | 16-Port half-width rackmount 10GbE core switch (8x SFP+, 8x RJ45) |
| **Firewalla Gold Plus** | Multi-gigabit firewall and router with IDS/IPS |

## Power

| Component | Description |
|-----------|-------------|
| **CyberPower CP1500PFCLCD** | 1500VA/1000W sine wave UPS with LCD display |
| **Waveshare PoE+ HAT** | 802.3at PoE+ power delivery for Pi cluster |

::: info PoE Power Delivery
All 7 Raspberry Pis are powered via PoE+ from the Omada switch, eliminating individual power adapters and simplifying cable management.
:::
