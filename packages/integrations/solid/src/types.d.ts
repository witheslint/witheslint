import type { RuleOptions as SolidRules } from '../dts/solid'

declare module '@witheslint/core' {
  interface Rules extends SolidRules {}
}
