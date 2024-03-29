import { generateRulesDts } from '@witheslint/generate-dts'

await generateRulesDts({
  outDir: 'shims',
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
      module: 'eslint-plugin-import-x',
    },
    {
      name: 'jsdoc',
      module: 'eslint-plugin-jsdoc',
    },
    {
      name: 'sorter',
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
