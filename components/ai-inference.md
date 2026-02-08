---
prev:
  text: 'Observability'
  link: '/components/observability'
next:
  text: 'Hardware'
  link: '/hardware/'
---

# AI Inference

Local LLM inference using a multi-pod architecture with dedicated GPU nodes for both AMD ROCm and NVIDIA CUDA workloads.

## Architecture

The AI server uses a multi-pod design where each component runs as a separate deployment, all sharing model files via `hostPath` mounts to `/data/ai-models`.

| Pod | Node | Purpose |
|-----|------|---------|
| **ROCm** | aimax | llama.cpp with AMD ROCm GPU |
| **Thor** | thor | vLLM, ComfyUI, Speaches TTS |
| **LiteLLM** | any | OpenAI-compatible API gateway |
| **Open WebUI** | any | Chat interface (sidecar to LiteLLM) |

## ROCm Pod

Runs [llama.cpp](https://github.com/ggerganov/llama.cpp) with ROCm GPU acceleration on the Minisforum MS-S1 Max (Ryzen AI Max+ 395). This node handles the bulk of LLM inference with 128GB of unified memory.

| Setting | Value |
|---------|-------|
| **Node** | aimax |
| **Taint** | `rocm-inference=true:NoSchedule` |
| **GPU** | AMD Radeon integrated (ROCm) |
| **Models** | Served from `/data/ai-models` hostPath |

## Thor Pod

Runs on the NVIDIA AGX Thor Jetson node with CUDA acceleration:

- **[vLLM](https://docs.vllm.ai/)** - High-throughput LLM serving
- **[ComfyUI](https://github.com/comfyanonymous/ComfyUI)** - Image generation workflows
- **[Speaches](https://github.com/speaches-ai/speaches)** - Text-to-speech and transcription

| Setting | Value |
|---------|-------|
| **Node** | thor |
| **Taint** | `cuda-inference=true:NoSchedule` |
| **GPU** | NVIDIA Blackwell (CUDA) |
| **Memory** | 128GB |

## LiteLLM

[LiteLLM](https://litellm.ai/) acts as a unified API gateway, exposing all models from both ROCm and CUDA backends through a single **OpenAI-compatible API** endpoint. Applications can switch between models and backends without changing API calls.

## Open WebUI

[Open WebUI](https://openwebui.com/) provides a ChatGPT-style web interface for interacting with local models. It runs as a sidecar alongside LiteLLM, connecting through the local API gateway.
