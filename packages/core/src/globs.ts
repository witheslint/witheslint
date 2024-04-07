export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_CJS = '**/*.?(c)js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_DTS = '**/*.d.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',

  '**/.idea',
  '**/.cache',
  '**/.output',

  '**/*.min.*',
] as const

export const GLOB_PACKAGE_LOCK = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
] as const
