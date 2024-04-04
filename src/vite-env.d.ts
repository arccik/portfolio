/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}