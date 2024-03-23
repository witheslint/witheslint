import type { RuleOptions as ReactRules } from '../shims/react'
import type { RuleOptions as ReactHooksRules } from '../shims/react-hooks'

declare module '@witheslint/core' {
  interface Rules extends ReactRules, ReactHooksRules {}
}
