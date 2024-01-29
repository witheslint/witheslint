import { defineConfig } from 'witheslint'

export default defineConfig({
  extends: [
    {
      files: ['**/scripts/*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/src/modules.ts'],
      rules: {
        'import/first': 'off',
        'import/newline-after-import': 'off',
        'sorter/sort-imports': 'off',
      },
    },
  ],
})
