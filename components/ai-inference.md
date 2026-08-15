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

The AI server uses a multi-pod design where each component runs as a separate deployment. GPU weights are bind-mounted from `/data/ai-models` on the inference nodes (`hostPath`), not from Longhorn.

| Pod | Node | Purpose |
|-----|------|---------|
| **ROCm** | aimax | llama.cpp with AMD ROCm GPU |
| **Thor** | thor | vLLM, ComfyUI, Speaches TTS/STT |
| **LiteLLM + Open WebUI** | aimax | OpenAI-compatible gateway and chat UI |

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
- **Speaches** - Text-to-speech and transcription via a custom `whisper-kokoro-thor-openai` image

| Setting | Value |
|---------|-------|
| **Node** | thor |
| **Taint** | `cuda-inference=true:NoSchedule` |
| **GPU** | NVIDIA Blackwell (CUDA) |
| **Memory** | 128GB |

## LiteLLM

[LiteLLM](https://litellm.ai/) acts as a unified API gateway, exposing all models from both ROCm and CUDA backends through a single **OpenAI-compatible API** endpoint. The APIs pod is pinned to the ROCm node and reaches GPU backends over in-cluster ClusterIP — not localhost.

## Open WebUI

[Open WebUI](https://openwebui.com/) provides a ChatGPT-style web interface for interacting with local models. It runs as a sidecar in the same APIs pod as LiteLLM and talks to the gateway on `localhost:4000`.
