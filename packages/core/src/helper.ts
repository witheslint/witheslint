const typeOf = (value: unknown) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
export const isArray = <T>(value: unknown): value is T[] => typeOf(value) === 'array'
export const isFunction = <T extends (...args: unknown[]) => unknown>(value: unknown): value is T => typeof value === 'function'
export const isObject = <T extends object>(value: unknown): value is T => typeOf(value) === 'object'
export const isKeyOf = <T extends object>(object: T, key: keyof any): key is keyof T => key in object

export function arrayify<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export function pick<T extends object, TKeys extends keyof T>(obj: T, keys: TKeys[]): Pick<T, TKeys> {
  if (!obj) return {} as Pick<T, TKeys>
  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) acc[key] = obj[key]
    return acc
  }, {} as Pick<T, TKeys>)
}

export function uniqueBy<T>(array: readonly T[], equalFn: (a: T, b: T) => boolean): T[] {
  return array.reduce((acc: T[], cur: T) => {
    const index = acc.findIndex((item: T) => equalFn(cur, item))
    if (index === -1) acc.push(cur)
    return acc
  }, [])
}

type InteropDefault<T> = T extends { default: infer U } ? U : T
export function interopDefault<T>(module: T): InteropDefault<T> {
  return (module as any).default || module
}

export function renameRules(rules: Record<string, any>, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from)) return [to + key.slice(from.length), value]
        return [key, value]
      }),
  )
}

interface Config { rules?: Record<string, any> }
export function combineRules(configs: Config[]) {
  return Object.fromEntries(
    configs.flatMap(
      obj => obj.rules
        ? Object.entries(obj.rules)
        : [],
    ),
  )
}

function isInGitHooks(): boolean {
  return !!(
    process.env.GIT_PARAMS || process.env.VSCODE_GIT_COMMAND
  )
}

export function isInEditorEnv(): boolean {
  if (process.env.CI) return false
  if (isInGitHooks()) return false
  return !!(
    process.env.VSCODE_PID
    || process.env.VSCODE_CWD
    || process.env.JETBRAINS_IDE
    || process.env.VIM
    || process.env.NVIM
  )
}
