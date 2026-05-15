<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

<p>
  <a href="https://deepwiki.com/witheslint/witheslint"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
  <a href="https://npmjs.com/package/@witheslint/preset-solid"><img src="https://img.shields.io/npm/v/@witheslint/preset-solid?style=flat&colorA=0B0B0B&colorB=1FA669&label=version" alt="Version"></a>
  <a href="https://github.com/witheslint/witheslint/blob/main/LICENSE"><img src="https://img.shields.io/github/license/witheslint/witheslint.svg?style=flat&colorA=0B0B0B&colorB=1FA669&label=license" alt="License"></a>
</p>

✨ The solid preset for `witheslint`.

## Usage

For the easiest setup experience, we recommend using the main [`witheslint`](../../witheslint) package. Alternatively, compose with `@witheslint/core` directly:

```ts
import { defineConfig } from '@witheslint/core'
import { presetSolid } from '@witheslint/preset-solid'

export default defineConfig({ presets: [presetSolid()] })
```

## Included Plugins

| Prefix        | Plugin & Parser                                                                  | Description                    |
|---------------|----------------------------------------------------------------------------------|--------------------------------|
| `solid/*`     | [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid)  | Solid-specific linting rules   |

## Exports

- `presetSolid()` — preset factory

Targets JSX/TSX files via `GLOB_JSX` / `GLOB_TSX` re-exported from `@witheslint/core`.
