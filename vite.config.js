import mkcert from "vite-plugin-mkcert"
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


// vite.config.js
export default {
  plugins: [],
  server: {
    port: 3000,
    strictPort: true,
  },
};
