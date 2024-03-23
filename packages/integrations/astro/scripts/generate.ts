import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'shims',
  plugins: [
    {
      name: 'astro',
      module: 'eslint-plugin-astro',
    },
  ],
}).catch((error) => {
  console.error(error.message)
  process.exit(1)
})
