import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'dts',
  plugins: [
    {
      name: 'solid',
      module: 'eslint-plugin-solid',
    },
  ],
}).catch((error) => {
  console.error(error.message)
  process.exit(1)
})
