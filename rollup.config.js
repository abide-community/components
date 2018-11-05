import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

function defineOutput(output) {
  return {
    input: 'src/index.js',
    output,
    external: ['react'],
    plugins: [resolve(), babel()],
  }
}

export default [
  defineOutput({
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'AbideComponents',
    globals: { react: 'React' },
  }),
  defineOutput({
    file: 'dist/index.esm.js',
    format: 'esm',
  }),
]
