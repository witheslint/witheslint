import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  clean: true,
  dts: true,
  deps: { onlyBundle: [] },
  target: 'node20.20',
})
