import type { RuleOptions as AstroRules } from '../dts/astro'

declare module '@witheslint/core' {
  interface Rules extends AstroRules {}
}
