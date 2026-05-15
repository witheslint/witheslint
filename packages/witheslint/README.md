<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

<p>
  <a href="https://deepwiki.com/witheslint/witheslint"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
  <a href="https://npmjs.com/package/witheslint"><img src="https://img.shields.io/npm/v/witheslint?style=flat&colorA=0B0B0B&colorB=1FA669&label=version" alt="Version"></a>
  <a href="https://github.com/witheslint/witheslint/blob/main/LICENSE"><img src="https://img.shields.io/github/license/witheslint/witheslint.svg?style=flat&colorA=0B0B0B&colorB=1FA669&label=license" alt="License"></a>
</p>

✨ A standardized ESLint configuration that works across all your projects.

## Features

- One-line configuration reusable across projects.
- Designed to work with `JSX`, `TypeScript` out-of-box.
- Reasonable defaults: best practices, with better code quality.
- Opinionated defaults: single quotes, no semicolons, sorted imports.
- Auto-fix formatting for consistent code style.
- Utilizes ESLint's new flat config format for easy composition.
- Support also for `Astro`, `React`, `Svelte`, `Solid`, `Vue`.
- Auto-completion and type-checking for ESLint rules configuration.

![Inline type completion for ESLint rule names in editor](https://github.com/witheslint/static/raw/main/images/type-checking.png)

## Usage

> **Requires:** Node.js ≥ 20.19 and ESLint ≥ 10.

To get started with **WithESLint**, first install the package in your project:

```bash
pnpm i -D eslint witheslint
```

Next, in your project root, create a file named `eslint.config.js` or `eslint.config.ts` *— that's where you'll define your ESLint settings go!*

> If you use `eslint.config.ts`, also install `jiti` (`pnpm add -D jiti`) so ESLint can load the TypeScript config file.

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

The remaining presets are: `presetReact`, `presetSolid`, `presetSvelte`, `presetVue`.

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

```bash
npx eslint .
```

## Supports

### IDE Integration

Needs IDE support? Let's configure your editor:

<details>
<summary><em>VS Code</em></summary>

1. Install [*VS Code ESLint extension*](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  

2. Add the following settings to your project setting:
```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    // Let eslint-plugin-perfectionist own import sorting instead of TS' organize-imports
    "source.organizeImports": "never"
  },
  "eslint.runtime": "node",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    // Uncomment the ones you use:
    // "astro",
    // "svelte",
    // "vue",
  ]
}
```

</details>

<details>
<summary><em>JetBrains IDEs</em></summary>

1. Open the Settings dialog

2. Go to `Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint`

3. Select the `Run eslint --fix on save` checkbox.

</details>

### Git Hooks

Format and lint the staged files before committing or pushing:

<details>
<summary><em>Lefthook</em></summary>
<br>

*[Lefthook](https://github.com/evilmartians/lefthook) provides a fast, cross-platform, and dependency-free hook manager.*

1. Install `lefthook` as a dev dependency:
```bash
pnpm add -D lefthook
```

2. Create a `lefthook.yaml` file in your project root with the following content:
```yaml
pre-commit:
  commands:
    eslint:
      glob: '*.{js,jsx,ts,tsx,vue,svelte,astro}'
      run: pnpm eslint --fix {staged_files}
      stage_fixed: true
```

3. Once configured, run the following command to set up the hooks:
```bash
pnpm lefthook install
```

</details>

## Visualizing

Launch a visual inspector for your ESLint setup and see all active rules in action:

```bash
npx @eslint/config-inspector@latest
```

Visit http://localhost:7777 to view and play with your ESLint config. Changes to the config file will be updated automatically.

![Browser-based config inspector showing all active ESLint rules](https://github.com/witheslint/static/raw/main/images/config-inspect.png)

That's it *— a quick way to explore your ESLint config visually*.
