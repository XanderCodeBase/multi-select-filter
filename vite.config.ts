import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-expect-error accept that there is any type in this public
import eslint from 'vite-plugin-eslint'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        eslint(),
        svgr({
            svgrOptions: {
                svgo: true,
            },
            include: '**/*.svg',
        }),
    ],
})
