import { crx } from '@crxjs/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import manifest from './manifest';

export default defineConfig({
  plugins: [tailwindcss(), solid(), crx({ manifest })],
});
