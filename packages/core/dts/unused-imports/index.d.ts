import type { NoUnusedImportsRuleOptions } from './rules/no-unused-imports'
import type { NoUnusedImportsTsRuleOptions } from './rules/no-unused-imports-ts'
import type { NoUnusedVarsRuleOptions } from './rules/no-unused-vars'
import type { NoUnusedVarsTsRuleOptions } from './rules/no-unused-vars-ts'

export interface RuleOptions {
  /**
   * Disallow unused variables
   *
   * @see [no-unused-vars](https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md)
   */
  'unused-imports/no-unused-vars': NoUnusedVarsRuleOptions

  /**
   * Disallow unused variables
   *
   * @see [no-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md)
   */
  'unused-imports/no-unused-imports': NoUnusedImportsRuleOptions

  /**
   * Disallow unused variables
   *
   * @see [no-unused-vars-ts](https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md)
   */
  'unused-imports/no-unused-vars-ts': NoUnusedVarsTsRuleOptions

  /**
   * Disallow unused variables
   *
   * @see [no-unused-imports-ts](https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md)
   */
  'unused-imports/no-unused-imports-ts': NoUnusedImportsTsRuleOptions

}
