## Usage

1. install the preset along with the core package:

```zsh
pnpm i -D eslint @witheslint/core @witheslint/preset-solid
```

2. create `eslint.config.mjs` in your project root:

```js
import { defineConfig } from '@witheslint/core'
import { presetSolid } from '@witheslint/preset-solid'

export default defineConfig({
  presets: [presetSolid()]
})
```

> [!TIP]
> Or use with the main **witheslint** package:
> ```zsh
> pnpm i -D eslint witheslint
> ```
> ```js
> import { defineConfig, presetSolid } from 'witheslint'
>
> export default defineConfig({
>   presets: [presetSolid()]
> })
> ```

## Support

- 🐛 [Report Issues](https://github.com/witheslint/witheslint/issues)
- 💬 [Ask Questions](https://deepwiki.com/witheslint/witheslint)

## Included Plugins

| Prefix        | Plugin & Parser                                                                  | Description                    |
|---------------|----------------------------------------------------------------------------------|--------------------------------|
| `solid/*`     | [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid)  | Solid-specific linting rules   |

