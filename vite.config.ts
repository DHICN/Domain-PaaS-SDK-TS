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
      formats: ['es'],
      fileName: (format, entryName) => {
        // console.log('vite build lib :>> ', format, entryName)
        return `dhicn-domian-paas-client-ts-sdk.${format}.js`
      },
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        manualChunks(id: string) {
          if (id.includes('scenario-service')) {
            return 'scenario-service'
          } else if (id.includes('identity-service')) {
            return 'identity-service'
          }
        },
        chunkFileNames: (chunkInfo) => {
          // console.log('chunkInfo :>> ', chunkInfo)
          return `${chunkInfo.name}.es.js`
        },
      },
    },
  },
  plugins: [
    dts(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/*.ts'],
    }),
  ],
})
