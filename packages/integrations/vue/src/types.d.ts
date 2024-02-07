import type { RuleOptions as VueRules } from '../dts/vue'

declare module '@witheslint/core' {
  interface Rules extends VueRules {}
}
