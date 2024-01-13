import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index'],
  clean: true,
  declaration: true,
  failOnWarn: true,
  externals: ['eslint'],
  rollup: {
    emitCJS: true,
  },
})
