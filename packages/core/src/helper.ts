export function arrayify<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
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
