<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/@witheslint/preset-react?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/@witheslint/preset-react?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/@witheslint/preset-react

<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

✨ The react preset for [witheslint](https://github.com/witheslint/witheslint).

## Usage

1. install the preset along with the core package:

```zsh
pnpm i -D eslint @witheslint/core @witheslint/preset-react
```

2. create `eslint.config.mjs` in your project root:

```js
import { defineConfig } from '@witheslint/core'
import { presetReact } from '@witheslint/preset-react'

export default defineConfig({
  presets: [presetReact()]
})
```

> [!TIP]
> Or use with the main **witheslint** package:
> ```zsh
> pnpm i -D eslint witheslint
> ```
> ```js
> import { defineConfig, presetReact } from 'witheslint'
>
> export default defineConfig({
>   presets: [presetReact()]
> })
> ```

## Support

- 🐛 [Report Issues](https://github.com/witheslint/witheslint/issues)
- 💬 [Ask Questions](https://deepwiki.com/witheslint/witheslint)

## Included Plugins

| Prefix          | Plugin & Parser                                                                      | Description                   |
|-----------------|--------------------------------------------------------------------------------------|-------------------------------|
| `react/*`       | [@eslint-react/eslint-plugin](https://eslint-react.xyz/)                             | Modern React linting rules    |
| `react-hooks/*` | [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | React Hooks specific rules    |


