export { isPackageExists } from 'local-pkg'

export function interopDefault<T>(module: T): T extends { default: infer U } ? U : T {
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

export function combineRules(configs: { rules?: Record<string, any> }[]) {
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
    process.env.GIT_PARAMS
    || process.env.VSCODE_GIT_COMMAND
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
