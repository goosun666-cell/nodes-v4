import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          matrix: resolve(__dirname, 'matrix.html'),
          thinkTank: resolve(__dirname, 'experts.html'),
          awakening: resolve(__dirname, 'awakening.html'),
          privacy: resolve(__dirname, 'privacy.html'),
          terms: resolve(__dirname, 'terms.html'),
          rateRadar: resolve(__dirname, 'rate-radar.html'),
          litepaper: resolve(__dirname, 'litepaper.html'),
          disclaimer: resolve(__dirname, 'disclaimer.html'),
          about: resolve(__dirname, 'about.html'),
          insights: resolve(__dirname, 'insights.html'),
          articleAeaZkvc: resolve(__dirname, 'article-aea-zkvc.html'),
          articleHqc: resolve(__dirname, 'article-hqc.html'),
          articlePoe: resolve(__dirname, 'article-poe.html'),
          articleOmnichainFuture: resolve(__dirname, 'article-omnichain-future.html'),
          web3: resolve(__dirname, 'web3.html'),
          downloadConfirm: resolve(__dirname, 'download-confirm.html'),
          radarShare: resolve(__dirname, 'radar-share.html'),
          technicalDocumentation: resolve(__dirname, 'technical-documentation.html'),
          articleAea: resolve(__dirname, 'article-aea.html'),
          articleZkvc: resolve(__dirname, 'article-zkvc.html'),
          articleClaudeCodeLeak: resolve(__dirname, 'article-claude-code-leak.html'),
          openclawAiNodeGuide: resolve(__dirname, 'openclaw-ai-node-guide.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
