/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NVIDIA_API_KEY?: string;
  readonly NVIDIA_API_URL?: string;
  readonly NVIDIA_MODEL?: string;
  readonly DEEPSEEK_API_KEY?: string;
  readonly DEEPSEEK_API_URL?: string;
  readonly DEEPSEEK_MODEL?: string;
  readonly CHAT_UPSTREAM_MS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
