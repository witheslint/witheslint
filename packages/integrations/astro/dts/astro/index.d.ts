import type { NoConflictSetDirectivesRuleOptions } from './rules/no-conflict-set-directives'
import type { NoDeprecatedAstroCanonicalurlRuleOptions } from './rules/no-deprecated-astro-canonicalurl'
import type { NoDeprecatedAstroFetchcontentRuleOptions } from './rules/no-deprecated-astro-fetchcontent'
import type { NoDeprecatedAstroResolveRuleOptions } from './rules/no-deprecated-astro-resolve'
import type { NoDeprecatedGetentrybyslugRuleOptions } from './rules/no-deprecated-getentrybyslug'
import type { NoSetHtmlDirectiveRuleOptions } from './rules/no-set-html-directive'
import type { NoSetTextDirectiveRuleOptions } from './rules/no-set-text-directive'
import type { NoUnusedCssSelectorRuleOptions } from './rules/no-unused-css-selector'
import type { NoUnusedDefineVarsInStyleRuleOptions } from './rules/no-unused-define-vars-in-style'
import type { PreferClassListDirectiveRuleOptions } from './rules/prefer-class-list-directive'
import type { PreferObjectClassListRuleOptions } from './rules/prefer-object-class-list'
import type { PreferSplitClassListRuleOptions } from './rules/prefer-split-class-list'
import type { SemiRuleOptions } from './rules/semi'
import type { ValidCompileRuleOptions } from './rules/valid-compile'

export interface RuleOptions {
  /**
   * disallow conflicting set directives and child contents
   *
   * @see [no-conflict-set-directives](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/)
   */
  'astro/no-conflict-set-directives': NoConflictSetDirectivesRuleOptions

  /**
   * disallow using deprecated `Astro.canonicalURL`
   *
   * @see [no-deprecated-astro-canonicalurl](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/)
   */
  'astro/no-deprecated-astro-canonicalurl': NoDeprecatedAstroCanonicalurlRuleOptions

  /**
   * disallow using deprecated `Astro.fetchContent()`
   *
   * @see [no-deprecated-astro-fetchcontent](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/)
   */
  'astro/no-deprecated-astro-fetchcontent': NoDeprecatedAstroFetchcontentRuleOptions

  /**
   * disallow using deprecated `Astro.resolve()`
   *
   * @see [no-deprecated-astro-resolve](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/)
   */
  'astro/no-deprecated-astro-resolve': NoDeprecatedAstroResolveRuleOptions

  /**
   * disallow using deprecated `getEntryBySlug()`
   *
   * @see [no-deprecated-getentrybyslug](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/)
   */
  'astro/no-deprecated-getentrybyslug': NoDeprecatedGetentrybyslugRuleOptions

  /**
   * disallow use of `set:html` to prevent XSS attack
   *
   * @see [no-set-html-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/)
   */
  'astro/no-set-html-directive': NoSetHtmlDirectiveRuleOptions

  /**
   * disallow use of `set:text`
   *
   * @see [no-set-text-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/)
   */
  'astro/no-set-text-directive': NoSetTextDirectiveRuleOptions

  /**
   * disallow selectors defined in `style` tag that don't use in HTML
   *
   * @see [no-unused-css-selector](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/)
   */
  'astro/no-unused-css-selector': NoUnusedCssSelectorRuleOptions

  /**
   * disallow unused `define:vars={...}` in `style` tag
   *
   * @see [no-unused-define-vars-in-style](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/)
   */
  'astro/no-unused-define-vars-in-style': NoUnusedDefineVarsInStyleRuleOptions

  /**
   * require `class:list` directives instead of `class` with expressions
   *
   * @see [prefer-class-list-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/)
   */
  'astro/prefer-class-list-directive': PreferClassListDirectiveRuleOptions

  /**
   * require use object instead of ternary expression in `class:list`
   *
   * @see [prefer-object-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/)
   */
  'astro/prefer-object-class-list': PreferObjectClassListRuleOptions

  /**
   * require use split array elements in `class:list`
   *
   * @see [prefer-split-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/)
   */
  'astro/prefer-split-class-list': PreferSplitClassListRuleOptions

  /**
   * Require or disallow semicolons instead of ASI
   *
   * @see [semi](https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/)
   */
  'astro/semi': SemiRuleOptions

  /**
   * disallow warnings when compiling.
   *
   * @see [valid-compile](https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/)
   */
  'astro/valid-compile': ValidCompileRuleOptions

}
