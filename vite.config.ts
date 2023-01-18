import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
const env = loadEnv('', process.cwd(), '');
const PORT = (env.VITE_PORT||3368) as number;
console.log('env: '+process.env.VITE_API_URL);
export default defineConfig({
      plugins: [react()],
      server: {
        port: PORT,
      },
      define:{
        'process.env': {
          'API_URL': env.VITE_API_URL,
        }
      }

})