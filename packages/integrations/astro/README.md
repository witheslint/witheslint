<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/@witheslint/preset-astro?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/@witheslint/preset-astro?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/@witheslint/preset-astro

<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

✨ The astro preset for [witheslint](https://github.com/witheslint/witheslint).

## Usage

1. install the preset along with the core package:

```zsh
pnpm i -D eslint @witheslint/core @witheslint/preset-astro
```

2. create `eslint.config.mjs` in your project root:

```js
import { defineConfig } from '@witheslint/core'
import { presetAstro } from '@witheslint/preset-astro'

export default defineConfig({
  presets: [presetAstro()]
})
```

> [!TIP]
> Or use with the main **witheslint** package:
> ```zsh
> pnpm i -D eslint witheslint
> ```
> ```js
> import { defineConfig, presetAstro } from 'witheslint'
>
> export default defineConfig({
>   presets: [presetAstro()]
> })
> ```

## Support

- 🐛 [Report Issues](https://github.com/witheslint/witheslint/issues)
- 💬 [Ask Questions](https://deepwiki.com/witheslint/witheslint)

## Included Plugins

| Prefix        | Plugin & Parser                                                          | Description                    |
|---------------|--------------------------------------------------------------------------|--------------------------------|
| `astro/*`     | [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)  | Core Astro linting rules       |
| `–`           | [astro-eslint-parser](https://github.com/ota-meshi/astro-eslint-parser)  | Parser for `.astro` files      |
