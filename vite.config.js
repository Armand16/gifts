import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: '0.0.0.0', // Change this to a valid IP address if needed
    port: 5173, // Optional otherwise your app will start on default port
  },
})
