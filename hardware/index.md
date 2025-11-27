# Hardware

The homelab is built on a mix of ARM and x86 hardware, optimized for power efficiency and performance where needed.

## Rack & Enclosure

| Component | Description |
|-----------|-------------|
| **GeeekPi 10" Mini Rack** | Compact 10-inch rack enclosure for the Pi cluster |
| **GeeekPi 7.8" Rack-Mount LCD** | Built-in display for monitoring without external monitor |

## Compute Nodes

### Raspberry Pi Cluster

| Component | Quantity | Description |
|-----------|----------|-------------|
| **Raspberry Pi 5 8GB** | 8 | Quad-core Arm Cortex-A76 @ 2.4GHz |
| **GeeekPi NVMe Carrier** | 8 | PCIe to NVMe adapter for Pi 5 |
| **Teamgroup MP44L 1TB NVMe** | 8 | PCIe 4.0 NVMe SSD storage |
| **Waveshare PoE+ HAT (F)** | 8 | 802.3at PoE+ power delivery |

### AI Inference Nodes

| Component | Description |
|-----------|-------------|
| **Minisforum MS-S1 Max** | AMD Ryzen AI Max+ 395, integrated Radeon 8060S GPU (ROCm) |
| **NVIDIA Jetson AGX Thor** | NVIDIA Thor SoC with next-gen GPU architecture (CUDA) |

## Networking

| Component | Description |
|-----------|-------------|
| **TP-Link Omada SG2210XMP-M2** | 8-Port 2.5GbE PoE+ switch with 2x 10GbE SFP+ uplinks |
| **QNAP QSW-3216R-8S8T** | 16-Port half-width rackmount 10GbE core switch (8x SFP+, 8x RJ45) |
| **Firewalla Gold Plus** | Multi-gigabit firewall and router with IDS/IPS |

## Power & Cooling

The Raspberry Pi cluster is entirely PoE-powered through the Omada switch, eliminating the need for individual power supplies. The AI nodes use standard ATX/SFX power supplies.

## Specifications Summary

| Role | Nodes | CPU | Memory | Storage |
|------|-------|-----|--------|---------|
| **Control Plane** | 3 | Arm Cortex-A76 @ 2.4GHz | 8GB | 1TB NVMe |
| **Workers** | 5 | Arm Cortex-A76 @ 2.4GHz | 8GB | 1TB NVMe |
| **AI (ROCm)** | 1 | AMD Ryzen AI Max+ 395 | 128GB | 2TB NVMe |
| **AI (CUDA)** | 1 | NVIDIA Thor SoC | 128GB | 2TB NVMe |
