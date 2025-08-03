<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

<p>
  <a href="https://deepwiki.com/witheslint/witheslint"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
  <a href="https://npmjs.com/package/witheslint"><img src="https://img.shields.io/npm/v/witheslint?style=flat&colorA=0B0B0B&colorB=1FA669&label=version" alt="Version"></a>
  <a href="https://github.com/witheslint/witheslint/blob/main/LICENSE"><img src="https://img.shields.io/github/license/witheslint/witheslint.svg?style=flat&colorA=0B0B0B&colorB=1FA669&label=license" alt="License"></a>
</p>

✨ Implementing a standardized ESLint configuration across all your projects.

## Features

- One-line configuration reusable across projects.
- Designed to work with `JSX`, `TypeScript` out-of-box.
- Reasonable defaults: best practices, with better code quality.
- Opinionated defaults: single quotes, no semicolons, sorted imports.
- Auto-fix formatting for consistent code style.
- Utilizes ESLint's new flat config format for easy composition.
- Support also for `Astro`, `React`, `Svelte`, `Solid`, `Vue`.
- Auto-completion and type-checking for ESLint rules configuration.

![](https://github.com/witheslint/static/raw/main/images/type-checking.png)

## Usage

To get started with **WithESLint**, first install the package in your project:

```zsh
pnpm i -D eslint witheslint
```

Next, in your project root, create a file named `eslint.config.js` or `eslint.config.ts`  *— that's where you'll define your ESLint settings go!*

Depending on your project’s complexity, **WithESLint** can be used in several ways:

### Basic

**Best for**: most JavaScript or TypeScript projects with zero config.

This single line gives you a fully functional ESLint setup:

```js
import { defineConfig } from 'witheslint'

export default defineConfig()
```

### Framework-Specific

**Best for**: framework-specific setups (Astro, React, Vue, etc.).

Apply framework-aware presets for better integration:

```js
import { defineConfig, presetAstro } from 'witheslint'

export default defineConfig({
  presets: [
    presetAstro()
  ]
})
```

Other available presets include: `presetReact`, `presetSvelte`, `presetVue`, `presetSolid`, etc.

### Advanced

**Best for**: complex projects that need rule customization or conditional behavior.

```js
import { defineConfig, presetAstro } from 'witheslint'

export default defineConfig({
  // Glob patterns for files to exclude from linting
  ignores: [
    'generated/**'
  ],
  // Controls built-in preset activation
  features: {
    // typescript: false,      // Disable TypeScript even if detected
    // stylistic: 'prettier',  // Use Prettier mode
    // sorting: false          // Disable sorting rules
  },
  // Additional user-provided presets
  presets: [
    presetAstro(),
    // presetReact(),
    // presetSolid(),
    // presetSvelte(),
    // presetVue()
  ],
  // Raw ESLint configurations to append
  extends: [
    {
      name: 'custom-rules',
      rules: {
        'no-console': 'error',
      }
    }
  ]
})
```

That's it! You can now run ESLint in your project!

```zsh
pnpm eslint .
```

## Visualizing

Launch a visual inspector for your ESLint setup and see all active rules in action: 

```zsh
npx @eslint/config-inspector@latest
```

Visit http://localhost:7777 to view and play with your ESLint config. Changes to the config file will be updated automatically.

![](https://github.com/witheslint/static/raw/main/images/config-inspect.png)

That's it *— a quick way to explore your ESLint config visually*.
