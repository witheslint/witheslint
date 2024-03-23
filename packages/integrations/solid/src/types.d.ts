import type { RuleOptions as SolidRules } from '../shims/solid'

declare module '@witheslint/core' {
  interface Rules extends SolidRules {}
}
