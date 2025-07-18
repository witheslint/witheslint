<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/@witheslint/core?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/@witheslint/core?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/@witheslint/core

<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

✨ Core ESLint configuration foundation for [witheslint](https://github.com/witheslint/witheslint).

## Usage

1. install deps

```zsh
pnpm i -D eslint @witheslint/core
```

2. create `eslint.config.mjs` in your project root

```js
import { defineConfig } from '@witheslint/core'

export default defineConfig()
```

## Configuration

```js
import { defineConfig } from '@witheslint/core'

export default defineConfig({
  // Specify file patterns to exclude from linting
  ignores: [
    'custom-dist/**', 
    'generated/**'
  ],
  // Controls which feature modules are enabled
  features: {
    // typescript: false,      // Disable TypeScript even if detected
    // stylistic: 'prettier',  // Use Prettier mode
    // sorting: false          // Disable sorting rules
  },
  // Add custom presets
  presets: [],
  // Extend with custom rules
  extends: [
    {
      name: 'custom-rules',
      rules: {
        'no-console': 'error',
        'prefer-const': 'warn'
      }
    }
  ]
})
```

## Support

- 🐛 [Report Issues](https://github.com/witheslint/witheslint/issues)
- 💬 [Ask Questions](https://deepwiki.com/witheslint/witheslint)

## Included Plugins

Some plugins have been renamed to provide a more unified naming convention and a better developer experience.

| Prefix      | Plugin & Parser                                                                | Description                                    |
|-------------|--------------------------------------------------------------------------------|------------------------------------------------|
| `style/*`   | [@stylistic/eslint-plugin](https://eslint.style)                               | Stylistic formatting rules                     |
| `ts/*`      | [@typescript-eslint/eslint-plugin](https://typescript-eslint.io)               | TypeScript-specific linting rules              |
| `-`         | [@typescript-eslint/parser](https://typescript-eslint.io)                      | Parser for TypeScript code                      |
| `antfu/*`   | [eslint-plugin-antfu](https://github.com/antfu/eslint-plugin-antfu)            | Opinionated lint rules from Anthony Fu         |
| `import/*`  | [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x)      | Enhanced import/export rule handling           |
| `jsdoc/*`   | [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)            | Enforces rules for JSDoc comments              |
| `sorting/*` | [eslint-plugin-perfectionist](https://eslint-plugin-perfectionist.azat.io)     | Enforces consistent sorting and organization   |
| `prettier/*`| [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)   | Integrates Prettier formatting into ESLint     |
| `unicorn/*` | [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) | Adds a wide set of additional best practice rules |

