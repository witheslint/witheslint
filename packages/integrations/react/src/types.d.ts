import type { RuleOptions as ReactRules } from '../dts/react'
import type { RuleOptions as ReactHooksRules } from '../dts/react-hooks'

declare module '@witheslint/core' {
  interface Rules extends ReactRules, ReactHooksRules {}
}
