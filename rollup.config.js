import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

function defineOutput(output) {
  return {
    input: 'src/index.js',
    output: {
      globals: {
        react: 'React',
        'styled-components': 'styled',
        rebass: 'rebass',
        '@rebass/components': 'system',
      },
      ...output,
    },
    external: ['react', 'styled-components', 'rebass', '@rebass/components'],
    plugins: [resolve(), babel()],
  }
}

export default [
  defineOutput({
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'AbideComponents',
  }),
  defineOutput({
    file: 'dist/index.esm.js',
    format: 'esm',
  }),
]
