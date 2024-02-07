import type { RuleOptions as SvelteRules } from '../dts/svelte'

declare module '@witheslint/core' {
  interface Rules extends SvelteRules {}
}
