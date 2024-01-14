import { defineConfig } from 'witheslint'

export default defineConfig({
  extends: [
    {
      files: ['**/dts/**/rules/*.d.ts'],
      rules: {
        'perfectionist/sort-union-types': 'off',
      },
    },
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
        'perfectionist/sort-imports': 'off',
      },
    },
  ],
})
