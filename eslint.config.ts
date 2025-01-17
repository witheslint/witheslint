import { defineConfig } from 'witheslint'

export default defineConfig({
  extends: [
    {
      files: ['**/src/modules.ts'],
      rules: {
        'import/first': 'off',
        'import/newline-after-import': 'off',
        'sorting/sort-imports': 'off',
      },
    },
  ],
})
