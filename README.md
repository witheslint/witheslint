<br>

<p align="center">
  <img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="center" width="33%" height="33%" />
</p>

<p align="center">Implementing a standardized ESLint configuration across all your projects.</p>

<p align="center">
  <a href="https://deepwiki.com/witheslint/witheslint"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</p>

<br>

## Features

- One-line configuration reusable across projects.
- Designed to work with `JSX`, `TypeScript` out-of-box.
- Reasonable defaults: best practices, with better code quality.
- Opinionated defaults: single quotes, no semicolons, sorted imports.
- Auto-fix formatting for consistent code style.
- Utilizes ESLint's new flat config format for easy composition.
- Support also for `Astro`, `React`, `Svelte`, `Solid`, `Vue`.

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


## License

Made with 💖 Published under [MIT License](./LICENSE).
