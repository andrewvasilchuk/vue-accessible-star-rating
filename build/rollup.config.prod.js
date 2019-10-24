import path from 'path'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

import plugins from './base/plugins/index.js'

const name = 'VueAccessibleStarRating'

export default [
  {
    input: path.resolve(__dirname, '../src/index.js'),
    output: [
      {
        file: 'dist/vue-accessible-star-rating.js',
        format: 'umd',
        name,
      },
      {
        file: 'dist/vue-accessible-star-rating.common.js',
        format: 'cjs',
      },
      {
        file: 'dist/vue-accessible-star-rating.esm.js',
        format: 'esm',
      },
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ].concat(plugins),
  },
  {
    input: path.resolve(__dirname, '../src/index.js'),
    output: {
      file: 'dist/vue-accessible-star-rating.min.js',
      format: 'umd',
      name,
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel(),
      terser(),
    ].concat(plugins),
  },
]
