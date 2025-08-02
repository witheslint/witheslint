<!-- Badges -->
[src-version]: https://img.shields.io/npm/v/@witheslint/preset-astro?style=flat&color=444&label=version
[src-download]: https://img.shields.io/npm/dm/@witheslint/preset-astro?style=flat&color=444&label=download
[href-npm]: https://npmjs.com/package/@witheslint/preset-astro

<img src="https://github.com/witheslint/static/raw/main/icons/witheslint.svg" alt="witheslint" align="right" width="140" height="140">

[![version][src-version]][href-npm]
[![downloads][src-download]][href-npm]

✨ The astro preset for `witheslint`.

## Usage

We recommend using the main [`witheslint`](../../witheslint) package, which is easier to configure and get started with.

> Please refer to the [`wiki`](https://deepwiki.com/witheslint/witheslint) for more details.

## Included Plugins

| Prefix        | Plugin & Parser                                                          | Description                    |
|---------------|--------------------------------------------------------------------------|--------------------------------|
| `astro/*`     | [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)  | Core Astro linting rules       |
| `–`           | [astro-eslint-parser](https://github.com/ota-meshi/astro-eslint-parser)  | Parser for `.astro` files      |
