<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/@witheslint/preset-svelte?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/@witheslint/preset-svelte?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/@witheslint/preset-svelte

<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

✨ The svelte preset for [witheslint](https://github.com/witheslint/witheslint).

## Usage

1. install the preset along with the core package:

```zsh
pnpm i -D eslint @witheslint/core @witheslint/preset-svelte
```

2. create `eslint.config.mjs` in your project root:

```js
import { defineConfig } from '@witheslint/core'
import { presetSvelte } from '@witheslint/preset-svelte'

export default defineConfig({
  presets: [presetSvelte()]
})
```

> [!TIP]
> Or use with the main **witheslint** package:
> ```zsh
> pnpm i -D eslint witheslint
> ```
> ```js
> import { defineConfig, presetSvelte } from 'witheslint'
>
> export default defineConfig({
>   presets: [presetSvelte()]
> })
> ```

## Support

- 🐛 [Report Issues](https://github.com/witheslint/witheslint/issues)
- 💬 [Ask Questions](https://deepwiki.com/witheslint/witheslint)

## Included Plugins

| Prefix        | Plugin & Parser                                                           | Description                    |
|---------------|---------------------------------------------------------------------------|--------------------------------|
| `svelte/*`    | [eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte)  | Core Svelte linting rules      |
| `-`           | [svelte-eslint-parser](https://github.com/sveltejs/svelte-eslint-parser)  | Parser for `.svelte` files     |


