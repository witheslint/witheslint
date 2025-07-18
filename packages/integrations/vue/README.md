<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/@witheslint/preset-vue?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/@witheslint/preset-vue?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/@witheslint/preset-vue

<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

✨ The vue preset for [witheslint](https://github.com/witheslint/witheslint).

## Usage

1. install the preset along with the core package:

```zsh
pnpm i -D eslint @witheslint/core @witheslint/preset-vue
```

2. create `eslint.config.mjs` in your project root:

```js
import { defineConfig } from '@witheslint/core'
import { presetVue } from '@witheslint/preset-vue'

export default defineConfig({
  presets: [presetVue()]
})
```

> [!TIP]
> Or use with the main **witheslint** package:
> ```zsh
> pnpm i -D eslint witheslint
> ```
> ```js
> import { defineConfig, presetVue } from 'witheslint'
>
> export default defineConfig({
>   presets: [presetVue()]
> })
> ```

## Support

- 🐛 [Report Issues](https://github.com/witheslint/witheslint/issues)
- 💬 [Ask Questions](https://deepwiki.com/witheslint/witheslint)

## Included Plugins

| Prefix        | Plugin & Parser                                                  | Description                    |
|---------------|------------------------------------------------------------------|--------------------------------|
| `vue/*`       | [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)  | Core Vue linting rules         |
| `-`           | [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)  | Parser for `.vue` files        |
