import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'dts',
  plugins: [
    {
      name: 'js',
      module: 'eslint',
    },
    {
      name: 'ts',
      module: '@typescript-eslint/eslint-plugin',
    },
    {
      name: 'import',
      module: 'eslint-plugin-i',
    },
    {
      name: 'jsdoc',
      module: 'eslint-plugin-jsdoc',
    },
    {
      name: 'perfectionist',
      module: 'eslint-plugin-perfectionist',
    },
    {
      name: 'unicorn',
      module: 'eslint-plugin-unicorn',
    },
    {
      name: 'unused-imports',
      module: 'eslint-plugin-unused-imports',
    },
    {
      name: 'style',
      module: '@stylistic/eslint-plugin',
    },
  ],
}).catch((error) => {
  console.error(error.message)
  process.exit(1)
})
