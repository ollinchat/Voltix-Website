import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** https://voltix-website-psi.vercel.app/ — see VITE_SITE_URL in .env.production */
export default defineConfig({
  plugins: [react()],
  base: '/',
});
