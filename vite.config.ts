import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/theDeep_artStudios/', // Replace <REPO> with your GitHub repo name if needed
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
