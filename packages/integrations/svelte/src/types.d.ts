import type { RuleOptions as SvelteRules } from '../shims/svelte'

declare module '@witheslint/core' {
  interface Rules extends SvelteRules {}
}
