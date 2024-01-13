export interface Entry {
  name: string
  plugin: string
}

export interface PluginDtsOptions {
  entries: Entry[]
  outDir?: string
}

export interface ESLintDtsOptions {
  outDir?: string
}
