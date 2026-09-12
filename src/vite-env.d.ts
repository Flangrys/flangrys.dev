/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_TURNSTILE_SITE_KEY: string;
    readonly VITE_CLOUDFLARE_WORKER_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}