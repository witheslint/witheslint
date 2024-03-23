import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'shims',
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
