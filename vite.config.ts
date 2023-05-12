import dts from 'vite-plugin-dts'
import eslintPlugin from 'vite-plugin-eslint'

const path = require('path')
const { defineConfig } = require('vite')
// https://vitejs.dev/config/
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'dhicn-domian-paas-client-ts-sdk',
      fileName: (format) => `dhicn-domian-paas-client-ts-sdk.${format}.js`,
    },
    sourcemap: true,
  },
  plugins: [
    dts(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/*.ts'],
    }),
  ],
})