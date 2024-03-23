import type { BlockLangRuleOptions } from './rules/block-lang'
import type { ButtonHasTypeRuleOptions } from './rules/button-has-type'
import type { CommentDirectiveRuleOptions } from './rules/comment-directive'
import type { DerivedHasSameInputsOutputsRuleOptions } from './rules/derived-has-same-inputs-outputs'
import type { ExperimentalRequireSlotTypesRuleOptions } from './rules/experimental-require-slot-types'
import type { ExperimentalRequireStrictEventsRuleOptions } from './rules/experimental-require-strict-events'
import type { FirstAttributeLinebreakRuleOptions } from './rules/first-attribute-linebreak'
import type { HtmlClosingBracketSpacingRuleOptions } from './rules/html-closing-bracket-spacing'
import type { HtmlQuotesRuleOptions } from './rules/html-quotes'
import type { HtmlSelfClosingRuleOptions } from './rules/html-self-closing'
import type { IndentRuleOptions } from './rules/indent'
import type { InfiniteReactiveLoopRuleOptions } from './rules/infinite-reactive-loop'
import type { MaxAttributesPerLineRuleOptions } from './rules/max-attributes-per-line'
import type { MustacheSpacingRuleOptions } from './rules/mustache-spacing'
import type { NoAtDebugTagsRuleOptions } from './rules/no-at-debug-tags'
import type { NoAtHtmlTagsRuleOptions } from './rules/no-at-html-tags'
import type { NoDomManipulatingRuleOptions } from './rules/no-dom-manipulating'
import type { NoDupeElseIfBlocksRuleOptions } from './rules/no-dupe-else-if-blocks'
import type { NoDupeOnDirectivesRuleOptions } from './rules/no-dupe-on-directives'
import type { NoDupeStylePropertiesRuleOptions } from './rules/no-dupe-style-properties'
import type { NoDupeUseDirectivesRuleOptions } from './rules/no-dupe-use-directives'
import type { NoDynamicSlotNameRuleOptions } from './rules/no-dynamic-slot-name'
import type { NoExportLoadInSvelteModuleInKitPagesRuleOptions } from './rules/no-export-load-in-svelte-module-in-kit-pages'
import type { NoExtraReactiveCurliesRuleOptions } from './rules/no-extra-reactive-curlies'
import type { NoIgnoredUnsubscribeRuleOptions } from './rules/no-ignored-unsubscribe'
import type { NoImmutableReactiveStatementsRuleOptions } from './rules/no-immutable-reactive-statements'
import type { NoInlineStylesRuleOptions } from './rules/no-inline-styles'
import type { NoInnerDeclarationsRuleOptions } from './rules/no-inner-declarations'
import type { NoNotFunctionHandlerRuleOptions } from './rules/no-not-function-handler'
import type { NoObjectInTextMustachesRuleOptions } from './rules/no-object-in-text-mustaches'
import type { NoReactiveFunctionsRuleOptions } from './rules/no-reactive-functions'
import type { NoReactiveLiteralsRuleOptions } from './rules/no-reactive-literals'
import type { NoReactiveReassignRuleOptions } from './rules/no-reactive-reassign'
import type { NoRestrictedHtmlElementsRuleOptions } from './rules/no-restricted-html-elements'
import type { NoShorthandStylePropertyOverridesRuleOptions } from './rules/no-shorthand-style-property-overrides'
import type { NoSpacesAroundEqualSignsInAttributeRuleOptions } from './rules/no-spaces-around-equal-signs-in-attribute'
import type { NoStoreAsyncRuleOptions } from './rules/no-store-async'
import type { NoTargetBlankRuleOptions } from './rules/no-target-blank'
import type { NoTrailingSpacesRuleOptions } from './rules/no-trailing-spaces'
import type { NoUnknownStyleDirectivePropertyRuleOptions } from './rules/no-unknown-style-directive-property'
import type { NoUnusedClassNameRuleOptions } from './rules/no-unused-class-name'
import type { NoUnusedSvelteIgnoreRuleOptions } from './rules/no-unused-svelte-ignore'
import type { NoUselessMustachesRuleOptions } from './rules/no-useless-mustaches'
import type { PreferClassDirectiveRuleOptions } from './rules/prefer-class-directive'
import type { PreferDestructuredStorePropsRuleOptions } from './rules/prefer-destructured-store-props'
import type { PreferStyleDirectiveRuleOptions } from './rules/prefer-style-directive'
import type { RequireEachKeyRuleOptions } from './rules/require-each-key'
import type { RequireEventDispatcherTypesRuleOptions } from './rules/require-event-dispatcher-types'
import type { RequireOptimizedStyleAttributeRuleOptions } from './rules/require-optimized-style-attribute'
import type { RequireStoreCallbacksUseSetParamRuleOptions } from './rules/require-store-callbacks-use-set-param'
import type { RequireStoreReactiveAccessRuleOptions } from './rules/require-store-reactive-access'
import type { RequireStoresInitRuleOptions } from './rules/require-stores-init'
import type { ShorthandAttributeRuleOptions } from './rules/shorthand-attribute'
import type { ShorthandDirectiveRuleOptions } from './rules/shorthand-directive'
import type { SortAttributesRuleOptions } from './rules/sort-attributes'
import type { SpacedHtmlCommentRuleOptions } from './rules/spaced-html-comment'
import type { SystemRuleOptions } from './rules/system'
import type { ValidCompileRuleOptions } from './rules/valid-compile'
import type { ValidEachKeyRuleOptions } from './rules/valid-each-key'
import type { ValidPropNamesInKitPagesRuleOptions } from './rules/valid-prop-names-in-kit-pages'

export interface RuleOptions {
  /**
   * disallows the use of languages other than those specified in the configuration for the lang attribute of `<script>` and `<style>` blocks.
   *
   * @see [block-lang](https://sveltejs.github.io/eslint-plugin-svelte/rules/block-lang/)
   */
  'svelte/block-lang': BlockLangRuleOptions

  /**
   * disallow usage of button without an explicit type attribute
   *
   * @see [button-has-type](https://sveltejs.github.io/eslint-plugin-svelte/rules/button-has-type/)
   */
  'svelte/button-has-type': ButtonHasTypeRuleOptions

  /**
   * support comment-directives in HTML template
   *
   * @see [comment-directive](https://sveltejs.github.io/eslint-plugin-svelte/rules/comment-directive/)
   */
  'svelte/comment-directive': CommentDirectiveRuleOptions

  /**
   * derived store should use same variable names between values and callback
   *
   * @see [derived-has-same-inputs-outputs](https://sveltejs.github.io/eslint-plugin-svelte/rules/derived-has-same-inputs-outputs/)
   */
  'svelte/derived-has-same-inputs-outputs': DerivedHasSameInputsOutputsRuleOptions

  /**
   * require slot type declaration using the `$$Slots` interface
   *
   * @see [experimental-require-slot-types](https://sveltejs.github.io/eslint-plugin-svelte/rules/experimental-require-slot-types/)
   */
  'svelte/experimental-require-slot-types': ExperimentalRequireSlotTypesRuleOptions

  /**
   * require the strictEvents attribute on `<script>` tags
   *
   * @see [experimental-require-strict-events](https://sveltejs.github.io/eslint-plugin-svelte/rules/experimental-require-strict-events/)
   */
  'svelte/experimental-require-strict-events': ExperimentalRequireStrictEventsRuleOptions

  /**
   * enforce the location of first attribute
   *
   * @see [first-attribute-linebreak](https://sveltejs.github.io/eslint-plugin-svelte/rules/first-attribute-linebreak/)
   */
  'svelte/first-attribute-linebreak': FirstAttributeLinebreakRuleOptions

  /**
   * require or disallow a space before tag's closing brackets
   *
   * @see [html-closing-bracket-spacing](https://sveltejs.github.io/eslint-plugin-svelte/rules/html-closing-bracket-spacing/)
   */
  'svelte/html-closing-bracket-spacing': HtmlClosingBracketSpacingRuleOptions

  /**
   * enforce quotes style of HTML attributes
   *
   * @see [html-quotes](https://sveltejs.github.io/eslint-plugin-svelte/rules/html-quotes/)
   */
  'svelte/html-quotes': HtmlQuotesRuleOptions

  /**
   * enforce self-closing style
   *
   * @see [html-self-closing](https://sveltejs.github.io/eslint-plugin-svelte/rules/html-self-closing/)
   */
  'svelte/html-self-closing': HtmlSelfClosingRuleOptions

  /**
   * enforce consistent indentation
   *
   * @see [indent](https://sveltejs.github.io/eslint-plugin-svelte/rules/indent/)
   */
  'svelte/indent': IndentRuleOptions

  /**
   * Svelte runtime prevents calling the same reactive statement twice in a microtask. But between different microtask, it doesn't prevent.
   *
   * @see [infinite-reactive-loop](https://sveltejs.github.io/eslint-plugin-svelte/rules/infinite-reactive-loop/)
   */
  'svelte/infinite-reactive-loop': InfiniteReactiveLoopRuleOptions

  /**
   * enforce the maximum number of attributes per line
   *
   * @see [max-attributes-per-line](https://sveltejs.github.io/eslint-plugin-svelte/rules/max-attributes-per-line/)
   */
  'svelte/max-attributes-per-line': MaxAttributesPerLineRuleOptions

  /**
   * enforce unified spacing in mustache
   *
   * @see [mustache-spacing](https://sveltejs.github.io/eslint-plugin-svelte/rules/mustache-spacing/)
   */
  'svelte/mustache-spacing': MustacheSpacingRuleOptions

  /**
   * disallow the use of `{@debug}`
   *
   * @see [no-at-debug-tags](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-at-debug-tags/)
   */
  'svelte/no-at-debug-tags': NoAtDebugTagsRuleOptions

  /**
   * disallow use of `{@html}` to prevent XSS attack
   *
   * @see [no-at-html-tags](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-at-html-tags/)
   */
  'svelte/no-at-html-tags': NoAtHtmlTagsRuleOptions

  /**
   * disallow DOM manipulating
   *
   * @see [no-dom-manipulating](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dom-manipulating/)
   */
  'svelte/no-dom-manipulating': NoDomManipulatingRuleOptions

  /**
   * disallow duplicate conditions in `{#if}` / `{:else if}` chains
   *
   * @see [no-dupe-else-if-blocks](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-else-if-blocks/)
   */
  'svelte/no-dupe-else-if-blocks': NoDupeElseIfBlocksRuleOptions

  /**
   * disallow duplicate `on:` directives
   *
   * @see [no-dupe-on-directives](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-on-directives/)
   */
  'svelte/no-dupe-on-directives': NoDupeOnDirectivesRuleOptions

  /**
   * disallow duplicate style properties
   *
   * @see [no-dupe-style-properties](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-style-properties/)
   */
  'svelte/no-dupe-style-properties': NoDupeStylePropertiesRuleOptions

  /**
   * disallow duplicate `use:` directives
   *
   * @see [no-dupe-use-directives](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dupe-use-directives/)
   */
  'svelte/no-dupe-use-directives': NoDupeUseDirectivesRuleOptions

  /**
   * disallow dynamic slot name
   *
   * @see [no-dynamic-slot-name](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-dynamic-slot-name/)
   */
  'svelte/no-dynamic-slot-name': NoDynamicSlotNameRuleOptions

  /**
   * disallow exporting load functions in `*.svelte` module in SvelteKit page components.
   *
   * @see [no-export-load-in-svelte-module-in-kit-pages](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-export-load-in-svelte-module-in-kit-pages/)
   */
  'svelte/no-export-load-in-svelte-module-in-kit-pages': NoExportLoadInSvelteModuleInKitPagesRuleOptions

  /**
   * disallow wrapping single reactive statements in curly braces
   *
   * @see [no-extra-reactive-curlies](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-extra-reactive-curlies/)
   */
  'svelte/no-extra-reactive-curlies': NoExtraReactiveCurliesRuleOptions

  /**
   * disallow ignoring the unsubscribe method returned by the `subscribe()` on Svelte stores.
   *
   * @see [no-ignored-unsubscribe](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-ignored-unsubscribe/)
   */
  'svelte/no-ignored-unsubscribe': NoIgnoredUnsubscribeRuleOptions

  /**
   * disallow reactive statements that don't reference reactive values.
   *
   * @see [no-immutable-reactive-statements](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-immutable-reactive-statements/)
   */
  'svelte/no-immutable-reactive-statements': NoImmutableReactiveStatementsRuleOptions

  /**
   * disallow attributes and directives that produce inline styles
   *
   * @see [no-inline-styles](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-inline-styles/)
   */
  'svelte/no-inline-styles': NoInlineStylesRuleOptions

  /**
   * disallow variable or `function` declarations in nested blocks
   *
   * @see [no-inner-declarations](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-inner-declarations/)
   */
  'svelte/no-inner-declarations': NoInnerDeclarationsRuleOptions

  /**
   * disallow use of not function in event handler
   *
   * @see [no-not-function-handler](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-not-function-handler/)
   */
  'svelte/no-not-function-handler': NoNotFunctionHandlerRuleOptions

  /**
   * disallow objects in text mustache interpolation
   *
   * @see [no-object-in-text-mustaches](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-object-in-text-mustaches/)
   */
  'svelte/no-object-in-text-mustaches': NoObjectInTextMustachesRuleOptions

  /**
   * it's not necessary to define functions in reactive statements
   *
   * @see [no-reactive-functions](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-functions/)
   */
  'svelte/no-reactive-functions': NoReactiveFunctionsRuleOptions

  /**
   * don't assign literal values in reactive statements
   *
   * @see [no-reactive-literals](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-literals/)
   */
  'svelte/no-reactive-literals': NoReactiveLiteralsRuleOptions

  /**
   * disallow reassigning reactive values
   *
   * @see [no-reactive-reassign](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-reactive-reassign/)
   */
  'svelte/no-reactive-reassign': NoReactiveReassignRuleOptions

  /**
   * disallow specific HTML elements
   *
   * @see [no-restricted-html-elements](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-restricted-html-elements/)
   */
  'svelte/no-restricted-html-elements': NoRestrictedHtmlElementsRuleOptions

  /**
   * disallow shorthand style properties that override related longhand properties
   *
   * @see [no-shorthand-style-property-overrides](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-shorthand-style-property-overrides/)
   */
  'svelte/no-shorthand-style-property-overrides': NoShorthandStylePropertyOverridesRuleOptions

  /**
   * disallow spaces around equal signs in attribute
   *
   * @see [no-spaces-around-equal-signs-in-attribute](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-spaces-around-equal-signs-in-attribute/)
   */
  'svelte/no-spaces-around-equal-signs-in-attribute': NoSpacesAroundEqualSignsInAttributeRuleOptions

  /**
   * disallow using async/await inside svelte stores because it causes issues with the auto-unsubscribing features
   *
   * @see [no-store-async](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-store-async/)
   */
  'svelte/no-store-async': NoStoreAsyncRuleOptions

  /**
   * disallow `target="_blank"` attribute without `rel="noopener noreferrer"`
   *
   * @see [no-target-blank](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-target-blank/)
   */
  'svelte/no-target-blank': NoTargetBlankRuleOptions

  /**
   * disallow trailing whitespace at the end of lines
   *
   * @see [no-trailing-spaces](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/)
   */
  'svelte/no-trailing-spaces': NoTrailingSpacesRuleOptions

  /**
   * disallow unknown `style:property`
   *
   * @see [no-unknown-style-directive-property](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unknown-style-directive-property/)
   */
  'svelte/no-unknown-style-directive-property': NoUnknownStyleDirectivePropertyRuleOptions

  /**
   * disallow the use of a class in the template without a corresponding style
   *
   * @see [no-unused-class-name](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unused-class-name/)
   */
  'svelte/no-unused-class-name': NoUnusedClassNameRuleOptions

  /**
   * disallow unused svelte-ignore comments
   *
   * @see [no-unused-svelte-ignore](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-unused-svelte-ignore/)
   */
  'svelte/no-unused-svelte-ignore': NoUnusedSvelteIgnoreRuleOptions

  /**
   * disallow unnecessary mustache interpolations
   *
   * @see [no-useless-mustaches](https://sveltejs.github.io/eslint-plugin-svelte/rules/no-useless-mustaches/)
   */
  'svelte/no-useless-mustaches': NoUselessMustachesRuleOptions

  /**
   * require class directives instead of ternary expressions
   *
   * @see [prefer-class-directive](https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-class-directive/)
   */
  'svelte/prefer-class-directive': PreferClassDirectiveRuleOptions

  /**
   * destructure values from object stores for better change tracking & fewer redraws
   *
   * @see [prefer-destructured-store-props](https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-destructured-store-props/)
   */
  'svelte/prefer-destructured-store-props': PreferDestructuredStorePropsRuleOptions

  /**
   * require style directives instead of style attribute
   *
   * @see [prefer-style-directive](https://sveltejs.github.io/eslint-plugin-svelte/rules/prefer-style-directive/)
   */
  'svelte/prefer-style-directive': PreferStyleDirectiveRuleOptions

  /**
   * require keyed `{#each}` block
   *
   * @see [require-each-key](https://sveltejs.github.io/eslint-plugin-svelte/rules/require-each-key/)
   */
  'svelte/require-each-key': RequireEachKeyRuleOptions

  /**
   * require type parameters for `createEventDispatcher`
   *
   * @see [require-event-dispatcher-types](https://sveltejs.github.io/eslint-plugin-svelte/rules/require-event-dispatcher-types/)
   */
  'svelte/require-event-dispatcher-types': RequireEventDispatcherTypesRuleOptions

  /**
   * require style attributes that can be optimized
   *
   * @see [require-optimized-style-attribute](https://sveltejs.github.io/eslint-plugin-svelte/rules/require-optimized-style-attribute/)
   */
  'svelte/require-optimized-style-attribute': RequireOptimizedStyleAttributeRuleOptions

  /**
   * store callbacks must use `set` param
   *
   * @see [require-store-callbacks-use-set-param](https://sveltejs.github.io/eslint-plugin-svelte/rules/require-store-callbacks-use-set-param/)
   */
  'svelte/require-store-callbacks-use-set-param': RequireStoreCallbacksUseSetParamRuleOptions

  /**
   * disallow to use of the store itself as an operand. Need to use $ prefix or get function.
   *
   * @see [require-store-reactive-access](https://sveltejs.github.io/eslint-plugin-svelte/rules/require-store-reactive-access/)
   */
  'svelte/require-store-reactive-access': RequireStoreReactiveAccessRuleOptions

  /**
   * require initial value in store
   *
   * @see [require-stores-init](https://sveltejs.github.io/eslint-plugin-svelte/rules/require-stores-init/)
   */
  'svelte/require-stores-init': RequireStoresInitRuleOptions

  /**
   * enforce use of shorthand syntax in attribute
   *
   * @see [shorthand-attribute](https://sveltejs.github.io/eslint-plugin-svelte/rules/shorthand-attribute/)
   */
  'svelte/shorthand-attribute': ShorthandAttributeRuleOptions

  /**
   * enforce use of shorthand syntax in directives
   *
   * @see [shorthand-directive](https://sveltejs.github.io/eslint-plugin-svelte/rules/shorthand-directive/)
   */
  'svelte/shorthand-directive': ShorthandDirectiveRuleOptions

  /**
   * enforce order of attributes
   *
   * @see [sort-attributes](https://sveltejs.github.io/eslint-plugin-svelte/rules/sort-attributes/)
   */
  'svelte/sort-attributes': SortAttributesRuleOptions

  /**
   * enforce consistent spacing after the `<!--` and before the `-->` in a HTML comment
   *
   * @see [spaced-html-comment](https://sveltejs.github.io/eslint-plugin-svelte/rules/spaced-html-comment/)
   */
  'svelte/spaced-html-comment': SpacedHtmlCommentRuleOptions

  /**
   * system rule for working this plugin
   *
   * @see [system](https://sveltejs.github.io/eslint-plugin-svelte/rules/system/)
   */
  'svelte/system': SystemRuleOptions

  /**
   * disallow warnings when compiling.
   *
   * @see [valid-compile](https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-compile/)
   */
  'svelte/valid-compile': ValidCompileRuleOptions

  /**
   * enforce keys to use variables defined in the `{#each}` block
   *
   * @see [valid-each-key](https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-each-key/)
   */
  'svelte/valid-each-key': ValidEachKeyRuleOptions

  /**
   * disallow props other than data or errors in SvelteKit page components.
   *
   * @see [valid-prop-names-in-kit-pages](https://sveltejs.github.io/eslint-plugin-svelte/rules/valid-prop-names-in-kit-pages/)
   */
  'svelte/valid-prop-names-in-kit-pages': ValidPropNamesInKitPagesRuleOptions

}
