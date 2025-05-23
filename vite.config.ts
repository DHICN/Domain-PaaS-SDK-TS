import dts from 'vite-plugin-dts'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        main: path.resolve(__dirname, 'src/main.ts'),
        'sdk-helper': path.resolve(__dirname, 'src/sdk-helper.ts'),
        'identity-service': path.resolve(__dirname, 'src/identity-service/index.ts'),
        'scenario-service': path.resolve(__dirname, 'src/scenario-service/index.ts'),
        'scenario-calculate': path.resolve(__dirname, 'src/scenario-calculate/index.ts'),
        'model-configuration': path.resolve(__dirname, 'src/model-configuration/index.ts'),
        'model-information': path.resolve(__dirname, 'src/model-information/index.ts'),
        'result-service': path.resolve(__dirname, 'src/result-service/index.ts'),
        'iot-service': path.resolve(__dirname, 'src/iot-service/index.ts'),
        'wd-domain': path.resolve(__dirname, 'src/wd-domain-service/index.ts'),
        'wwtp-domain': path.resolve(__dirname, 'src/wwtp-domain-main-bus-service/index.ts'),
        'wwtp-infrastructure': path.resolve(
          __dirname,
          'src/wwtp-domain-infrastructure-service/index.ts',
        ),
        'model-driver-service': path.resolve(__dirname, 'src/model-driver-service/index.ts'),
        'digital-twin-service': path.resolve(__dirname, 'src/digital-twin-service/index.ts'),
        'accident-service': path.resolve(__dirname, 'src/accident-service/index.ts'),
        'compute-service': path.resolve(__dirname, 'src/compute-service/index.ts'),
        'log-service': path.resolve(__dirname, 'src/log-service/index.ts'),
        'data-center-service': path.resolve(__dirname, 'src/data-center-service/index.ts'),
        'plugin-service': path.resolve(__dirname, 'src/plugin-service/index.ts'),
        'file-service': path.resolve(__dirname, 'src/file-service/index.ts'),
        'gis-service': path.resolve(__dirname, 'src/gis-service/index.ts'),
      },
      name: 'dhicn-domian-paas-client-ts-sdk',
      formats: ['es'],
      fileName: (format, entryName) => {
        switch (entryName) {
          case 'main':
            return `dhicn-domian-paas-client-ts-sdk.${format}.js`
          default:
            console.log('vite build lib :>> ', format, entryName, `${entryName}.${format}.js`)
            return `${entryName}.${format}.js`
        }
      },
    },
    sourcemap: true,
  },
  plugins: [dts()],
})
