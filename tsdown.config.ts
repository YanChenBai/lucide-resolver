import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    'index': './src/index.ts',
    'vue': './src/vue.ts',
    'react': './src/react.ts',
    'svelte': './src/svelte.ts',
    'solid': './src/solid.ts',
    'react-native': './src/react-native.ts',
    'angular': './src/angular.ts',
    'preact': './src/preact.ts',
    'astro': './src/astro.ts',
  },
  platform: 'node',
  dts: true,
  exports: true,
})
