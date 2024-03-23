import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'shims',
  plugins: [
    {
      name: 'react',
      module: 'eslint-plugin-react',
    },
    {
      name: 'react-hooks',
      module: 'eslint-plugin-react-hooks',
    },
  ],
}).catch((error) => {
  console.error(error.message)
  process.exit(1)
})
