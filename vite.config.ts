import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
    ],
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', 'css'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'components',
      fileName: (format) => `components.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
  },
})
