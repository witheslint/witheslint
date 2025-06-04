import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  clean: true,
  dts: true,
  target: 'node18.20',
})
