import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import svg from 'rollup-plugin-vue-inline-svg'

export default [resolve(), common(), vue({ needMap: false }), svg()]
