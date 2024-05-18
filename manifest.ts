import { defineManifest } from '@crxjs/vite-plugin';
import { version } from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: 'Daisy',
  version,
  action: { default_popup: 'index.html' },
  content_scripts: [
    { js: ['src/coeditor-loader.js'], matches: ['https://playentry.org/ws/*'] },
  ],
});
