import type { RuleOptions as VueRules } from '../shims/vue'

declare module '@witheslint/core' {
  interface Rules extends VueRules {}
}
