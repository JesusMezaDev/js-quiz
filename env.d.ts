/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly Q_SERVER: string,
    readonly Q_PORT: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}