import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'dts',
  plugins: [
    {
      name: 'svelte',
      module: 'eslint-plugin-svelte',
    },
  ],
}).catch((error) => {
  console.error(error.message)
  process.exit(1)
})
