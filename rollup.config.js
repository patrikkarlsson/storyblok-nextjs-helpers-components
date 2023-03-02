import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'

import packageJson from './package.json' assert { type: "json" };
export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        minifyInternalExports: true,
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
    ],
    external: ['react', 'react-dom', 'next']
  }
]