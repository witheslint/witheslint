import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/'],
  clean: true,
  declaration: true,
  failOnWarn: true,
})
