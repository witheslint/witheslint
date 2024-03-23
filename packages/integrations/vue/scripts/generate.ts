import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'shims',
  plugins: [
    {
      name: 'vue',
      module: 'eslint-plugin-vue',
    },
  ],
}).catch((error) => {
  console.error(error.message)
  process.exit(1)
})
