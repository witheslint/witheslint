import type { ExhaustiveDepsRuleOptions } from './rules/exhaustive-deps'
import type { RulesOfHooksRuleOptions } from './rules/rules-of-hooks'

export interface RuleOptions {
  /**
   * enforces the Rules of Hooks
   *
   * @see [rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
   */
  'react-hooks/rules-of-hooks': RulesOfHooksRuleOptions

  /**
   * verifies the list of dependencies for Hooks like useEffect and similar
   *
   * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
   */
  'react-hooks/exhaustive-deps': ExhaustiveDepsRuleOptions

}
