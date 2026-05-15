<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

<p>
  <a href="https://deepwiki.com/witheslint/witheslint"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
  <a href="https://npmjs.com/package/@witheslint/core"><img src="https://img.shields.io/npm/v/@witheslint/core?style=flat&colorA=0B0B0B&colorB=1FA669&label=version" alt="Version"></a>
  <a href="https://github.com/witheslint/witheslint/blob/main/LICENSE"><img src="https://img.shields.io/github/license/witheslint/witheslint.svg?style=flat&colorA=0B0B0B&colorB=1FA669&label=license" alt="License"></a>
</p>

✨ Core ESLint configuration foundation for `witheslint`.

## Usage

For the easiest setup experience, we recommend using the main [`witheslint`](../witheslint) package.

## Built-in Presets

`defineConfig` loads the following presets in order. The first six are always on; the last three are gated by `features` or applied to specific file globs.

| Preset                | Always on | Description                                                           |
|-----------------------|-----------|-----------------------------------------------------------------------|
| `presetIgnores`       | yes       | Common ignore patterns (`node_modules`, `dist`, etc.) plus user-supplied paths |
| `presetJavascript`    | yes       | Built-in ESLint rules and language options (es2026, browser, node globals) |
| `presetJsdoc`         | yes       | JSDoc comment rules, auto-switched to TypeScript mode when detected   |
| `presetUnicorn`       | yes       | `eslint-plugin-unicorn` recommended set plus opinionated tweaks       |
| `presetImports`       | yes       | Import/export consistency rules                                       |
| `presetStylistic`     | yes       | Stylistic rules; mode follows `features.stylistic` (`true` / `false` / `'prettier'`) |
| `presetSorting`       | gated     | Sorted imports/exports; toggled by `features.sorting`                 |
| `presetTypescript`    | gated     | TypeScript parser, plugin, and rules; auto-enabled when TypeScript is detected, override via `features.typescript` |
| `presetDisables`      | yes       | Targeted overrides for `.d.ts`, `.cjs`, and `scripts/**` files        |

Use `definePreset()` to author your own preset and pass it via `defineConfig({ presets: [...] })`.

## Included Plugins

Some plugins have been renamed to provide a more unified naming convention and a better developer experience.

| Prefix      | Plugin & Parser                                                                | Description                                    |
|-------------|--------------------------------------------------------------------------------|------------------------------------------------|
| `style/*`   | [`@stylistic/eslint-plugin`](https://eslint.style)                               | Stylistic formatting rules                     |
| `ts/*`      | [`@typescript-eslint/eslint-plugin`](https://typescript-eslint.io)               | TypeScript-specific linting rules              |
| `-`         | [`@typescript-eslint/parser`](https://typescript-eslint.io)                      | Parser for TypeScript code                      |
| `antfu/*`   | [`eslint-plugin-antfu`](https://github.com/antfu/eslint-plugin-antfu)            | Opinionated lint rules from Anthony Fu         |
| `import/*`  | [`eslint-plugin-import-x`](https://github.com/un-es/eslint-plugin-import-x)      | Enhanced import/export rule handling           |
| `jsdoc/*`   | [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)            | Enforces rules for JSDoc comments              |
| `sorting/*` | [`eslint-plugin-perfectionist`](https://eslint-plugin-perfectionist.azat.io)     | Enforces consistent sorting and organization   |
| `prettier/*`| [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)   | Integrates Prettier formatting into ESLint     |
| `unicorn/*` | [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) | Adds a wide set of additional best practice rules |
