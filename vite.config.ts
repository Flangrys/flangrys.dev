import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    /**
     * I will disable this `base` configuration in order to use Cloudflare + Github Pages in the future.
     */
    base: "/flangrys.dev/",
    plugins: [
        react(),
        tailwindcss(),
        svgr(),
    ],
})
