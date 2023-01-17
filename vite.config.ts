import { defineConfig,loadEnv } from 'vite'
import { fileURLToPath, URL } from "url";
import react from '@vitejs/plugin-react'
const env = loadEnv('', process.cwd(), '');
const PORT = (env.VITE_PORT||3368) as number;
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})