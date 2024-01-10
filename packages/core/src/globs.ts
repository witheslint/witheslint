export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_CJS = '**/*.?(c)js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_DTS = '**/*.d.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',

  '**/bun.lockb',
  '**/package-lock.json',
  '**/pnpm-lock.yaml',
  '**/yarn.lock',

  '**/.astro',
  '**/.nuxt',
  '**/.next',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.vite-inspect',
  '**/.vitepress/cache',

  '**/.cache',
  '**/.output',

  '**/.changeset',
  '**/.idea',

  '**/CHANGELOG*.md',
  '**/LICENSE*',

  '**/*.min.*',
  '**/__snapshots__',
] as const
