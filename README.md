<br>

<p align="center">
  <img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="center" width="33%" height="33%" />
</p>

<p align="center">Implementing a standardized ESLint configuration across all your projects.</p>

<br>

## Features

- Auto fix for formatting
- Single quotes, no semicolons
- Sorted imports, dangling commas for cleaner commit diff
- Designed to work with `JSX`, `TypeScript` out-of-box
- Support also for `Astro`, `React`, `Svelte`, `Solid`, `Vue`
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Reasonable defaults, best practices, only one-line of config

## Usage

#### install deps

```zsh
pnpm i -D eslint witheslint
```

#### create `eslint.config.mjs` in your project root

```js
import { defineConfig } from 'witheslint'

export default defineConfig()
```

> Please refer to the [documentation](https://witheslint.github.io) for more details.


## Contribution

<details>
  <summary>Local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`

</details>

