import type { Rule } from 'eslint'

export type PluginRules = Record<string, Rule.RuleModule>

export interface Plugin {
  name: string
  module: string
  rules?: PluginRules
}
