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
| **Raspberry Pi 5 16GB** | Quad-core Arm Cortex-A76 @ 2.4GHz |
| **GeeekPi NVMe Carrier** | PCIe to NVMe adapter for Pi 5 |
| **Teamgroup MP33 1TB NVMe** | PCIe 3.0 NVMe SSD storage |

### AI Inference Nodes

| Component | Description |
|-----------|-------------|
| **Minisforum MS-S1 Max** | 128GB 120w Ryzen AI Max+ 395 (ROCm) |
| **NVIDIA DGX Spark** | 128GB 130w Blackwell (CUDA) |

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
