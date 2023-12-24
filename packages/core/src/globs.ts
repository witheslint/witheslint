export const GLOB_JS = '**/*.?([cm])js' as const
export const GLOB_CJS = '**/*.?(c)js' as const
export const GLOB_JSX = '**/*.?([cm])jsx' as const

export const GLOB_TS = '**/*.?([cm])ts' as const
export const GLOB_DTS = '**/*.d.?([cm])ts' as const
export const GLOB_TSX = '**/*.?([cm])tsx' as const

export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
]
