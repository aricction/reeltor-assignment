import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssTailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
export default defineConfig({
  plugins: [react()],
  css: {
   postcss: {
      plugins: [postcssTailwind(), autoprefixer()],
    },
  },
});
