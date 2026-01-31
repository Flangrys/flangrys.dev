import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    base: "https://flangrys.github.io/flangrys.dev",
    plugins: [
        react(),
        tailwindcss(),
        svgr(),
    ],
})
