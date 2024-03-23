import type { RuleOptions as AstroRules } from '../shims/astro'

declare module '@witheslint/core' {
  interface Rules extends AstroRules {}
}
