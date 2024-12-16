import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';
import litcss from 'vite-plugin-lit-css';

export default defineConfig({
  base: '/bbva-tap-the-mole/',
  plugins: [
    litcss(),
    svelte(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Svelte PWA',
        short_name: 'PWA',
        description: 'A Progressive Web App with Svelte',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#007bff',
        icons: [
          {
            src: '/bbva-tap-the-mole/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/bbva-tap-the-mole/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  test: {
    globals: true, // Permite usar funciones globales como `describe` y `it`
    environment: 'jsdom', // Usa jsdom para simular el navegador
    setupFiles: './test/setup.js', // Archivo de configuración inicial
  },
});