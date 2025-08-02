<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/witheslint?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/witheslint?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/witheslint

<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

✨ Implementing a standardized ESLint configuration across all your projects.

## Features

- One-line configuration reusable across projects.
- Designed to work with `JSX`, `TypeScript` out-of-box.
- Reasonable defaults: best practices, with better code quality.
- Opinionated defaults: single quotes, no semicolons, sorted imports.
- Auto-fix formatting for consistent code style.
- Utilizes ESLint's new flat config format for easy composition.
- Support also for `Astro`, `React`, `Svelte`, `Solid`, `Vue`.

## Usage

1. install deps:

```zsh
pnpm i -D eslint witheslint
```

2. create `eslint.config.mjs` in your project root:

```js
import { defineConfig } from 'witheslint'

export default defineConfig()
```

That's it! This single line provides a complete ESLint configuration

## Configuration

```js
import { defineConfig, presetAstro } from 'witheslint'

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
  presets: [
    presetAstro(),
    // You can add more presets like:
    // presetReact(),
    // presetSolid(),
    // presetSvelte(),
    // presetVue()
  ],
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

## Architecture

This package serves as a unified interface to the entire witheslint ecosystem:

```zsh
witheslint
  ├── @witheslint/core          (Core ESLint configuration foundation)
  ├── @witheslint/preset-astro  (Astro framework rules)
  ├── @witheslint/preset-react  (React framework rules)
  ├── @witheslint/preset-solid  (Solid framework rules)
  ├── @witheslint/preset-svelte (Svelte framework rules)
  └── @witheslint/preset-vue    (Vue framework rules)
```

When to use which package:

- **`witheslint`** - Use this for most projects. It includes all presets and is the easiest to get started with.
- **`@witheslint/core`** - Use this if you want to build your own configuration or only need specific presets.
- **`@witheslint/preset-*`** - Use these directly with `@witheslint/core` for more granular control.
