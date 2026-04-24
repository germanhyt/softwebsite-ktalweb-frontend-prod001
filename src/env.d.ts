/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DEEPSEEK_API_KEY: string;
  /** Por defecto: https://api.deepseek.com/chat/completions */
  readonly DEEPSEEK_API_URL?: string;
  /** Por defecto: deepseek-chat */
  readonly DEEPSEEK_MODEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
