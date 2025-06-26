export { isPackageExists } from 'local-pkg'

export async function interopDefault<T>(
  module: T | Promise<T>,
): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await module
  return (resolved as any).default || resolved
}

export function renameRules(
  rules: Record<string, any>,
  from: string,
  to: string,
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from)) return [to + key.slice(from.length), value]
        return [key, value]
      }),
  )
}

export function combineRules(
  configs: { rules?: Record<string, any> }[],
): Record<string, any> {
  return Object.fromEntries(
    configs.flatMap(
      obj => obj.rules
        ? Object.entries(obj.rules)
        : [],
    ),
  )
}
