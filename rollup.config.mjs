import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs'; // <--- Importante para traducir CommonJS a ESM

export default {
  input: 'dist/esm/index.js',
  output: [
    {
      file: 'dist/plugin.js',
      format: 'iife',
      name: 'AppsFlyerCapacitorPlugin',
      globals: {
        '@capacitor/core': 'capacitorExports',
      },
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: ['@capacitor/core'],
  plugins: [
    nodeResolve({
      preferBuiltins: false,
    }),
    commonjs(), // <--- Convierte las exportaciones CJS de @appsflyer-sdk/js-core-plugin a ESM
    json(),
  ],
};