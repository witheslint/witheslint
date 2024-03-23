import type { AccessorPairsRuleOptions } from './rules/accessor-pairs'
import type { ArrayBracketNewlineRuleOptions } from './rules/array-bracket-newline'
import type { ArrayBracketSpacingRuleOptions } from './rules/array-bracket-spacing'
import type { ArrayCallbackReturnRuleOptions } from './rules/array-callback-return'
import type { ArrayElementNewlineRuleOptions } from './rules/array-element-newline'
import type { ArrowBodyStyleRuleOptions } from './rules/arrow-body-style'
import type { ArrowParensRuleOptions } from './rules/arrow-parens'
import type { ArrowSpacingRuleOptions } from './rules/arrow-spacing'
import type { BlockScopedVarRuleOptions } from './rules/block-scoped-var'
import type { BlockSpacingRuleOptions } from './rules/block-spacing'
import type { BraceStyleRuleOptions } from './rules/brace-style'
import type { CallbackReturnRuleOptions } from './rules/callback-return'
import type { CamelcaseRuleOptions } from './rules/camelcase'
import type { CapitalizedCommentsRuleOptions } from './rules/capitalized-comments'
import type { ClassMethodsUseThisRuleOptions } from './rules/class-methods-use-this'
import type { CommaDangleRuleOptions } from './rules/comma-dangle'
import type { CommaSpacingRuleOptions } from './rules/comma-spacing'
import type { CommaStyleRuleOptions } from './rules/comma-style'
import type { ComplexityRuleOptions } from './rules/complexity'
import type { ComputedPropertySpacingRuleOptions } from './rules/computed-property-spacing'
import type { ConsistentReturnRuleOptions } from './rules/consistent-return'
import type { ConsistentThisRuleOptions } from './rules/consistent-this'
import type { ConstructorSuperRuleOptions } from './rules/constructor-super'
import type { CurlyRuleOptions } from './rules/curly'
import type { DefaultCaseRuleOptions } from './rules/default-case'
import type { DefaultCaseLastRuleOptions } from './rules/default-case-last'
import type { DefaultParamLastRuleOptions } from './rules/default-param-last'
import type { DotLocationRuleOptions } from './rules/dot-location'
import type { DotNotationRuleOptions } from './rules/dot-notation'
import type { EolLastRuleOptions } from './rules/eol-last'
import type { EqeqeqRuleOptions } from './rules/eqeqeq'
import type { ForDirectionRuleOptions } from './rules/for-direction'
import type { FuncCallSpacingRuleOptions } from './rules/func-call-spacing'
import type { FuncNameMatchingRuleOptions } from './rules/func-name-matching'
import type { FuncNamesRuleOptions } from './rules/func-names'
import type { FuncStyleRuleOptions } from './rules/func-style'
import type { FunctionCallArgumentNewlineRuleOptions } from './rules/function-call-argument-newline'
import type { FunctionParenNewlineRuleOptions } from './rules/function-paren-newline'
import type { GeneratorStarSpacingRuleOptions } from './rules/generator-star-spacing'
import type { GetterReturnRuleOptions } from './rules/getter-return'
import type { GlobalRequireRuleOptions } from './rules/global-require'
import type { GroupedAccessorPairsRuleOptions } from './rules/grouped-accessor-pairs'
import type { GuardForInRuleOptions } from './rules/guard-for-in'
import type { HandleCallbackErrRuleOptions } from './rules/handle-callback-err'
import type { IdBlacklistRuleOptions } from './rules/id-blacklist'
import type { IdDenylistRuleOptions } from './rules/id-denylist'
import type { IdLengthRuleOptions } from './rules/id-length'
import type { IdMatchRuleOptions } from './rules/id-match'
import type { ImplicitArrowLinebreakRuleOptions } from './rules/implicit-arrow-linebreak'
import type { IndentRuleOptions } from './rules/indent'
import type { IndentLegacyRuleOptions } from './rules/indent-legacy'
import type { InitDeclarationsRuleOptions } from './rules/init-declarations'
import type { JsxQuotesRuleOptions } from './rules/jsx-quotes'
import type { KeySpacingRuleOptions } from './rules/key-spacing'
import type { KeywordSpacingRuleOptions } from './rules/keyword-spacing'
import type { LineCommentPositionRuleOptions } from './rules/line-comment-position'
import type { LinebreakStyleRuleOptions } from './rules/linebreak-style'
import type { LinesAroundCommentRuleOptions } from './rules/lines-around-comment'
import type { LinesAroundDirectiveRuleOptions } from './rules/lines-around-directive'
import type { LinesBetweenClassMembersRuleOptions } from './rules/lines-between-class-members'
import type { LogicalAssignmentOperatorsRuleOptions } from './rules/logical-assignment-operators'
import type { MaxClassesPerFileRuleOptions } from './rules/max-classes-per-file'
import type { MaxDepthRuleOptions } from './rules/max-depth'
import type { MaxLenRuleOptions } from './rules/max-len'
import type { MaxLinesRuleOptions } from './rules/max-lines'
import type { MaxLinesPerFunctionRuleOptions } from './rules/max-lines-per-function'
import type { MaxNestedCallbacksRuleOptions } from './rules/max-nested-callbacks'
import type { MaxParamsRuleOptions } from './rules/max-params'
import type { MaxStatementsRuleOptions } from './rules/max-statements'
import type { MaxStatementsPerLineRuleOptions } from './rules/max-statements-per-line'
import type { MultilineCommentStyleRuleOptions } from './rules/multiline-comment-style'
import type { MultilineTernaryRuleOptions } from './rules/multiline-ternary'
import type { NewCapRuleOptions } from './rules/new-cap'
import type { NewParensRuleOptions } from './rules/new-parens'
import type { NewlineAfterVarRuleOptions } from './rules/newline-after-var'
import type { NewlineBeforeReturnRuleOptions } from './rules/newline-before-return'
import type { NewlinePerChainedCallRuleOptions } from './rules/newline-per-chained-call'
import type { NoAlertRuleOptions } from './rules/no-alert'
import type { NoArrayConstructorRuleOptions } from './rules/no-array-constructor'
import type { NoAsyncPromiseExecutorRuleOptions } from './rules/no-async-promise-executor'
import type { NoAwaitInLoopRuleOptions } from './rules/no-await-in-loop'
import type { NoBitwiseRuleOptions } from './rules/no-bitwise'
import type { NoBufferConstructorRuleOptions } from './rules/no-buffer-constructor'
import type { NoCallerRuleOptions } from './rules/no-caller'
import type { NoCaseDeclarationsRuleOptions } from './rules/no-case-declarations'
import type { NoCatchShadowRuleOptions } from './rules/no-catch-shadow'
import type { NoClassAssignRuleOptions } from './rules/no-class-assign'
import type { NoCompareNegZeroRuleOptions } from './rules/no-compare-neg-zero'
import type { NoCondAssignRuleOptions } from './rules/no-cond-assign'
import type { NoConfusingArrowRuleOptions } from './rules/no-confusing-arrow'
import type { NoConsoleRuleOptions } from './rules/no-console'
import type { NoConstAssignRuleOptions } from './rules/no-const-assign'
import type { NoConstantBinaryExpressionRuleOptions } from './rules/no-constant-binary-expression'
import type { NoConstantConditionRuleOptions } from './rules/no-constant-condition'
import type { NoConstructorReturnRuleOptions } from './rules/no-constructor-return'
import type { NoContinueRuleOptions } from './rules/no-continue'
import type { NoControlRegexRuleOptions } from './rules/no-control-regex'
import type { NoDebuggerRuleOptions } from './rules/no-debugger'
import type { NoDeleteVarRuleOptions } from './rules/no-delete-var'
import type { NoDivRegexRuleOptions } from './rules/no-div-regex'
import type { NoDupeArgsRuleOptions } from './rules/no-dupe-args'
import type { NoDupeClassMembersRuleOptions } from './rules/no-dupe-class-members'
import type { NoDupeElseIfRuleOptions } from './rules/no-dupe-else-if'
import type { NoDupeKeysRuleOptions } from './rules/no-dupe-keys'
import type { NoDuplicateCaseRuleOptions } from './rules/no-duplicate-case'
import type { NoDuplicateImportsRuleOptions } from './rules/no-duplicate-imports'
import type { NoElseReturnRuleOptions } from './rules/no-else-return'
import type { NoEmptyRuleOptions } from './rules/no-empty'
import type { NoEmptyCharacterClassRuleOptions } from './rules/no-empty-character-class'
import type { NoEmptyFunctionRuleOptions } from './rules/no-empty-function'
import type { NoEmptyPatternRuleOptions } from './rules/no-empty-pattern'
import type { NoEmptyStaticBlockRuleOptions } from './rules/no-empty-static-block'
import type { NoEqNullRuleOptions } from './rules/no-eq-null'
import type { NoEvalRuleOptions } from './rules/no-eval'
import type { NoExAssignRuleOptions } from './rules/no-ex-assign'
import type { NoExtendNativeRuleOptions } from './rules/no-extend-native'
import type { NoExtraBindRuleOptions } from './rules/no-extra-bind'
import type { NoExtraBooleanCastRuleOptions } from './rules/no-extra-boolean-cast'
import type { NoExtraLabelRuleOptions } from './rules/no-extra-label'
import type { NoExtraParensRuleOptions } from './rules/no-extra-parens'
import type { NoExtraSemiRuleOptions } from './rules/no-extra-semi'
import type { NoFallthroughRuleOptions } from './rules/no-fallthrough'
import type { NoFloatingDecimalRuleOptions } from './rules/no-floating-decimal'
import type { NoFuncAssignRuleOptions } from './rules/no-func-assign'
import type { NoGlobalAssignRuleOptions } from './rules/no-global-assign'
import type { NoImplicitCoercionRuleOptions } from './rules/no-implicit-coercion'
import type { NoImplicitGlobalsRuleOptions } from './rules/no-implicit-globals'
import type { NoImpliedEvalRuleOptions } from './rules/no-implied-eval'
import type { NoImportAssignRuleOptions } from './rules/no-import-assign'
import type { NoInlineCommentsRuleOptions } from './rules/no-inline-comments'
import type { NoInnerDeclarationsRuleOptions } from './rules/no-inner-declarations'
import type { NoInvalidRegexpRuleOptions } from './rules/no-invalid-regexp'
import type { NoInvalidThisRuleOptions } from './rules/no-invalid-this'
import type { NoIrregularWhitespaceRuleOptions } from './rules/no-irregular-whitespace'
import type { NoIteratorRuleOptions } from './rules/no-iterator'
import type { NoLabelVarRuleOptions } from './rules/no-label-var'
import type { NoLabelsRuleOptions } from './rules/no-labels'
import type { NoLoneBlocksRuleOptions } from './rules/no-lone-blocks'
import type { NoLonelyIfRuleOptions } from './rules/no-lonely-if'
import type { NoLoopFuncRuleOptions } from './rules/no-loop-func'
import type { NoLossOfPrecisionRuleOptions } from './rules/no-loss-of-precision'
import type { NoMagicNumbersRuleOptions } from './rules/no-magic-numbers'
import type { NoMisleadingCharacterClassRuleOptions } from './rules/no-misleading-character-class'
import type { NoMixedOperatorsRuleOptions } from './rules/no-mixed-operators'
import type { NoMixedRequiresRuleOptions } from './rules/no-mixed-requires'
import type { NoMixedSpacesAndTabsRuleOptions } from './rules/no-mixed-spaces-and-tabs'
import type { NoMultiAssignRuleOptions } from './rules/no-multi-assign'
import type { NoMultiSpacesRuleOptions } from './rules/no-multi-spaces'
import type { NoMultiStrRuleOptions } from './rules/no-multi-str'
import type { NoMultipleEmptyLinesRuleOptions } from './rules/no-multiple-empty-lines'
import type { NoNativeReassignRuleOptions } from './rules/no-native-reassign'
import type { NoNegatedConditionRuleOptions } from './rules/no-negated-condition'
import type { NoNegatedInLhsRuleOptions } from './rules/no-negated-in-lhs'
import type { NoNestedTernaryRuleOptions } from './rules/no-nested-ternary'
import type { NoNewRuleOptions } from './rules/no-new'
import type { NoNewFuncRuleOptions } from './rules/no-new-func'
import type { NoNewNativeNonconstructorRuleOptions } from './rules/no-new-native-nonconstructor'
import type { NoNewObjectRuleOptions } from './rules/no-new-object'
import type { NoNewRequireRuleOptions } from './rules/no-new-require'
import type { NoNewSymbolRuleOptions } from './rules/no-new-symbol'
import type { NoNewWrappersRuleOptions } from './rules/no-new-wrappers'
import type { NoNonoctalDecimalEscapeRuleOptions } from './rules/no-nonoctal-decimal-escape'
import type { NoObjCallsRuleOptions } from './rules/no-obj-calls'
import type { NoObjectConstructorRuleOptions } from './rules/no-object-constructor'
import type { NoOctalRuleOptions } from './rules/no-octal'
import type { NoOctalEscapeRuleOptions } from './rules/no-octal-escape'
import type { NoParamReassignRuleOptions } from './rules/no-param-reassign'
import type { NoPathConcatRuleOptions } from './rules/no-path-concat'
import type { NoPlusplusRuleOptions } from './rules/no-plusplus'
import type { NoProcessEnvRuleOptions } from './rules/no-process-env'
import type { NoProcessExitRuleOptions } from './rules/no-process-exit'
import type { NoPromiseExecutorReturnRuleOptions } from './rules/no-promise-executor-return'
import type { NoProtoRuleOptions } from './rules/no-proto'
import type { NoPrototypeBuiltinsRuleOptions } from './rules/no-prototype-builtins'
import type { NoRedeclareRuleOptions } from './rules/no-redeclare'
import type { NoRegexSpacesRuleOptions } from './rules/no-regex-spaces'
import type { NoRestrictedExportsRuleOptions } from './rules/no-restricted-exports'
import type { NoRestrictedGlobalsRuleOptions } from './rules/no-restricted-globals'
import type { NoRestrictedImportsRuleOptions } from './rules/no-restricted-imports'
import type { NoRestrictedModulesRuleOptions } from './rules/no-restricted-modules'
import type { NoRestrictedPropertiesRuleOptions } from './rules/no-restricted-properties'
import type { NoRestrictedSyntaxRuleOptions } from './rules/no-restricted-syntax'
import type { NoReturnAssignRuleOptions } from './rules/no-return-assign'
import type { NoReturnAwaitRuleOptions } from './rules/no-return-await'
import type { NoScriptUrlRuleOptions } from './rules/no-script-url'
import type { NoSelfAssignRuleOptions } from './rules/no-self-assign'
import type { NoSelfCompareRuleOptions } from './rules/no-self-compare'
import type { NoSequencesRuleOptions } from './rules/no-sequences'
import type { NoSetterReturnRuleOptions } from './rules/no-setter-return'
import type { NoShadowRuleOptions } from './rules/no-shadow'
import type { NoShadowRestrictedNamesRuleOptions } from './rules/no-shadow-restricted-names'
import type { NoSpacedFuncRuleOptions } from './rules/no-spaced-func'
import type { NoSparseArraysRuleOptions } from './rules/no-sparse-arrays'
import type { NoSyncRuleOptions } from './rules/no-sync'
import type { NoTabsRuleOptions } from './rules/no-tabs'
import type { NoTemplateCurlyInStringRuleOptions } from './rules/no-template-curly-in-string'
import type { NoTernaryRuleOptions } from './rules/no-ternary'
import type { NoThisBeforeSuperRuleOptions } from './rules/no-this-before-super'
import type { NoThrowLiteralRuleOptions } from './rules/no-throw-literal'
import type { NoTrailingSpacesRuleOptions } from './rules/no-trailing-spaces'
import type { NoUndefRuleOptions } from './rules/no-undef'
import type { NoUndefInitRuleOptions } from './rules/no-undef-init'
import type { NoUndefinedRuleOptions } from './rules/no-undefined'
import type { NoUnderscoreDangleRuleOptions } from './rules/no-underscore-dangle'
import type { NoUnexpectedMultilineRuleOptions } from './rules/no-unexpected-multiline'
import type { NoUnmodifiedLoopConditionRuleOptions } from './rules/no-unmodified-loop-condition'
import type { NoUnneededTernaryRuleOptions } from './rules/no-unneeded-ternary'
import type { NoUnreachableRuleOptions } from './rules/no-unreachable'
import type { NoUnreachableLoopRuleOptions } from './rules/no-unreachable-loop'
import type { NoUnsafeFinallyRuleOptions } from './rules/no-unsafe-finally'
import type { NoUnsafeNegationRuleOptions } from './rules/no-unsafe-negation'
import type { NoUnsafeOptionalChainingRuleOptions } from './rules/no-unsafe-optional-chaining'
import type { NoUnusedExpressionsRuleOptions } from './rules/no-unused-expressions'
import type { NoUnusedLabelsRuleOptions } from './rules/no-unused-labels'
import type { NoUnusedPrivateClassMembersRuleOptions } from './rules/no-unused-private-class-members'
import type { NoUnusedVarsRuleOptions } from './rules/no-unused-vars'
import type { NoUseBeforeDefineRuleOptions } from './rules/no-use-before-define'
import type { NoUselessBackreferenceRuleOptions } from './rules/no-useless-backreference'
import type { NoUselessCallRuleOptions } from './rules/no-useless-call'
import type { NoUselessCatchRuleOptions } from './rules/no-useless-catch'
import type { NoUselessComputedKeyRuleOptions } from './rules/no-useless-computed-key'
import type { NoUselessConcatRuleOptions } from './rules/no-useless-concat'
import type { NoUselessConstructorRuleOptions } from './rules/no-useless-constructor'
import type { NoUselessEscapeRuleOptions } from './rules/no-useless-escape'
import type { NoUselessRenameRuleOptions } from './rules/no-useless-rename'
import type { NoUselessReturnRuleOptions } from './rules/no-useless-return'
import type { NoVarRuleOptions } from './rules/no-var'
import type { NoVoidRuleOptions } from './rules/no-void'
import type { NoWarningCommentsRuleOptions } from './rules/no-warning-comments'
import type { NoWhitespaceBeforePropertyRuleOptions } from './rules/no-whitespace-before-property'
import type { NoWithRuleOptions } from './rules/no-with'
import type { NonblockStatementBodyPositionRuleOptions } from './rules/nonblock-statement-body-position'
import type { ObjectCurlyNewlineRuleOptions } from './rules/object-curly-newline'
import type { ObjectCurlySpacingRuleOptions } from './rules/object-curly-spacing'
import type { ObjectPropertyNewlineRuleOptions } from './rules/object-property-newline'
import type { ObjectShorthandRuleOptions } from './rules/object-shorthand'
import type { OneVarRuleOptions } from './rules/one-var'
import type { OneVarDeclarationPerLineRuleOptions } from './rules/one-var-declaration-per-line'
import type { OperatorAssignmentRuleOptions } from './rules/operator-assignment'
import type { OperatorLinebreakRuleOptions } from './rules/operator-linebreak'
import type { PaddedBlocksRuleOptions } from './rules/padded-blocks'
import type { PaddingLineBetweenStatementsRuleOptions } from './rules/padding-line-between-statements'
import type { PreferArrowCallbackRuleOptions } from './rules/prefer-arrow-callback'
import type { PreferConstRuleOptions } from './rules/prefer-const'
import type { PreferDestructuringRuleOptions } from './rules/prefer-destructuring'
import type { PreferExponentiationOperatorRuleOptions } from './rules/prefer-exponentiation-operator'
import type { PreferNamedCaptureGroupRuleOptions } from './rules/prefer-named-capture-group'
import type { PreferNumericLiteralsRuleOptions } from './rules/prefer-numeric-literals'
import type { PreferObjectHasOwnRuleOptions } from './rules/prefer-object-has-own'
import type { PreferObjectSpreadRuleOptions } from './rules/prefer-object-spread'
import type { PreferPromiseRejectErrorsRuleOptions } from './rules/prefer-promise-reject-errors'
import type { PreferReflectRuleOptions } from './rules/prefer-reflect'
import type { PreferRegexLiteralsRuleOptions } from './rules/prefer-regex-literals'
import type { PreferRestParamsRuleOptions } from './rules/prefer-rest-params'
import type { PreferSpreadRuleOptions } from './rules/prefer-spread'
import type { PreferTemplateRuleOptions } from './rules/prefer-template'
import type { QuotePropsRuleOptions } from './rules/quote-props'
import type { QuotesRuleOptions } from './rules/quotes'
import type { RadixRuleOptions } from './rules/radix'
import type { RequireAtomicUpdatesRuleOptions } from './rules/require-atomic-updates'
import type { RequireAwaitRuleOptions } from './rules/require-await'
import type { RequireJsdocRuleOptions } from './rules/require-jsdoc'
import type { RequireUnicodeRegexpRuleOptions } from './rules/require-unicode-regexp'
import type { RequireYieldRuleOptions } from './rules/require-yield'
import type { RestSpreadSpacingRuleOptions } from './rules/rest-spread-spacing'
import type { SemiRuleOptions } from './rules/semi'
import type { SemiSpacingRuleOptions } from './rules/semi-spacing'
import type { SemiStyleRuleOptions } from './rules/semi-style'
import type { SortImportsRuleOptions } from './rules/sort-imports'
import type { SortKeysRuleOptions } from './rules/sort-keys'
import type { SortVarsRuleOptions } from './rules/sort-vars'
import type { SpaceBeforeBlocksRuleOptions } from './rules/space-before-blocks'
import type { SpaceBeforeFunctionParenRuleOptions } from './rules/space-before-function-paren'
import type { SpaceInParensRuleOptions } from './rules/space-in-parens'
import type { SpaceInfixOpsRuleOptions } from './rules/space-infix-ops'
import type { SpaceUnaryOpsRuleOptions } from './rules/space-unary-ops'
import type { SpacedCommentRuleOptions } from './rules/spaced-comment'
import type { StrictRuleOptions } from './rules/strict'
import type { SwitchColonSpacingRuleOptions } from './rules/switch-colon-spacing'
import type { SymbolDescriptionRuleOptions } from './rules/symbol-description'
import type { TemplateCurlySpacingRuleOptions } from './rules/template-curly-spacing'
import type { TemplateTagSpacingRuleOptions } from './rules/template-tag-spacing'
import type { UnicodeBomRuleOptions } from './rules/unicode-bom'
import type { UseIsnanRuleOptions } from './rules/use-isnan'
import type { ValidJsdocRuleOptions } from './rules/valid-jsdoc'
import type { ValidTypeofRuleOptions } from './rules/valid-typeof'
import type { VarsOnTopRuleOptions } from './rules/vars-on-top'
import type { WrapIifeRuleOptions } from './rules/wrap-iife'
import type { WrapRegexRuleOptions } from './rules/wrap-regex'
import type { YieldStarSpacingRuleOptions } from './rules/yield-star-spacing'
import type { YodaRuleOptions } from './rules/yoda'

export interface RuleOptions {
  /**
   * Enforce getter and setter pairs in objects and classes
   *
   * @see [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)
   */
  'accessor-pairs': AccessorPairsRuleOptions

  /**
   * @deprecated
   *
   * Enforce linebreaks after opening and before closing array brackets
   *
   * @see [array-bracket-newline](https://eslint.org/docs/latest/rules/array-bracket-newline)
   */
  'array-bracket-newline': ArrayBracketNewlineRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing inside array brackets
   *
   * @see [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing)
   */
  'array-bracket-spacing': ArrayBracketSpacingRuleOptions

  /**
   * Enforce `return` statements in callbacks of array methods
   *
   * @see [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)
   */
  'array-callback-return': ArrayCallbackReturnRuleOptions

  /**
   * @deprecated
   *
   * Enforce line breaks after each array element
   *
   * @see [array-element-newline](https://eslint.org/docs/latest/rules/array-element-newline)
   */
  'array-element-newline': ArrayElementNewlineRuleOptions

  /**
   * Require braces around arrow function bodies
   *
   * @see [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)
   */
  'arrow-body-style': ArrowBodyStyleRuleOptions

  /**
   * @deprecated
   *
   * Require parentheses around arrow function arguments
   *
   * @see [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
   */
  'arrow-parens': ArrowParensRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before and after the arrow in arrow functions
   *
   * @see [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing)
   */
  'arrow-spacing': ArrowSpacingRuleOptions

  /**
   * Enforce the use of variables within the scope they are defined
   *
   * @see [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)
   */
  'block-scoped-var': BlockScopedVarRuleOptions

  /**
   * @deprecated
   *
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * @see [block-spacing](https://eslint.org/docs/latest/rules/block-spacing)
   */
  'block-spacing': BlockSpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent brace style for blocks
   *
   * @see [brace-style](https://eslint.org/docs/latest/rules/brace-style)
   */
  'brace-style': BraceStyleRuleOptions

  /**
   * @deprecated
   *
   * Require `return` statements after callbacks
   *
   * @see [callback-return](https://eslint.org/docs/latest/rules/callback-return)
   */
  'callback-return': CallbackReturnRuleOptions

  /**
   * Enforce camelcase naming convention
   *
   * @see [camelcase](https://eslint.org/docs/latest/rules/camelcase)
   */
  'camelcase': CamelcaseRuleOptions

  /**
   * Enforce or disallow capitalization of the first letter of a comment
   *
   * @see [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)
   */
  'capitalized-comments': CapitalizedCommentsRuleOptions

  /**
   * Enforce that class methods utilize `this`
   *
   * @see [class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this)
   */
  'class-methods-use-this': ClassMethodsUseThisRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow trailing commas
   *
   * @see [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)
   */
  'comma-dangle': CommaDangleRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before and after commas
   *
   * @see [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing)
   */
  'comma-spacing': CommaSpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent comma style
   *
   * @see [comma-style](https://eslint.org/docs/latest/rules/comma-style)
   */
  'comma-style': CommaStyleRuleOptions

  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   *
   * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
   */
  'complexity': ComplexityRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing inside computed property brackets
   *
   * @see [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing)
   */
  'computed-property-spacing': ComputedPropertySpacingRuleOptions

  /**
   * Require `return` statements to either always or never specify values
   *
   * @see [consistent-return](https://eslint.org/docs/latest/rules/consistent-return)
   */
  'consistent-return': ConsistentReturnRuleOptions

  /**
   * Enforce consistent naming when capturing the current execution context
   *
   * @see [consistent-this](https://eslint.org/docs/latest/rules/consistent-this)
   */
  'consistent-this': ConsistentThisRuleOptions

  /**
   * Require `super()` calls in constructors
   *
   * @see [constructor-super](https://eslint.org/docs/latest/rules/constructor-super)
   */
  'constructor-super': ConstructorSuperRuleOptions

  /**
   * Enforce consistent brace style for all control statements
   *
   * @see [curly](https://eslint.org/docs/latest/rules/curly)
   */
  'curly': CurlyRuleOptions

  /**
   * Require `default` cases in `switch` statements
   *
   * @see [default-case](https://eslint.org/docs/latest/rules/default-case)
   */
  'default-case': DefaultCaseRuleOptions

  /**
   * Enforce default clauses in switch statements to be last
   *
   * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
   */
  'default-case-last': DefaultCaseLastRuleOptions

  /**
   * Enforce default parameters to be last
   *
   * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
   */
  'default-param-last': DefaultParamLastRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent newlines before and after dots
   *
   * @see [dot-location](https://eslint.org/docs/latest/rules/dot-location)
   */
  'dot-location': DotLocationRuleOptions

  /**
   * Enforce dot notation whenever possible
   *
   * @see [dot-notation](https://eslint.org/docs/latest/rules/dot-notation)
   */
  'dot-notation': DotNotationRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow newline at the end of files
   *
   * @see [eol-last](https://eslint.org/docs/latest/rules/eol-last)
   */
  'eol-last': EolLastRuleOptions

  /**
   * Require the use of `===` and `!==`
   *
   * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
   */
  'eqeqeq': EqeqeqRuleOptions

  /**
   * Enforce "for" loop update clause moving the counter in the right direction
   *
   * @see [for-direction](https://eslint.org/docs/latest/rules/for-direction)
   */
  'for-direction': ForDirectionRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow spacing between function identifiers and their invocations
   *
   * @see [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing)
   */
  'func-call-spacing': FuncCallSpacingRuleOptions

  /**
   * Require function names to match the name of the variable or property to which they are assigned
   *
   * @see [func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching)
   */
  'func-name-matching': FuncNameMatchingRuleOptions

  /**
   * Require or disallow named `function` expressions
   *
   * @see [func-names](https://eslint.org/docs/latest/rules/func-names)
   */
  'func-names': FuncNamesRuleOptions

  /**
   * Enforce the consistent use of either `function` declarations or expressions
   *
   * @see [func-style](https://eslint.org/docs/latest/rules/func-style)
   */
  'func-style': FuncStyleRuleOptions

  /**
   * @deprecated
   *
   * Enforce line breaks between arguments of a function call
   *
   * @see [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
   */
  'function-call-argument-newline': FunctionCallArgumentNewlineRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent line breaks inside function parentheses
   *
   * @see [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
   */
  'function-paren-newline': FunctionParenNewlineRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing around `*` operators in generator functions
   *
   * @see [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)
   */
  'generator-star-spacing': GeneratorStarSpacingRuleOptions

  /**
   * Enforce `return` statements in getters
   *
   * @see [getter-return](https://eslint.org/docs/latest/rules/getter-return)
   */
  'getter-return': GetterReturnRuleOptions

  /**
   * @deprecated
   *
   * Require `require()` calls to be placed at top-level module scope
   *
   * @see [global-require](https://eslint.org/docs/latest/rules/global-require)
   */
  'global-require': GlobalRequireRuleOptions

  /**
   * Require grouped accessor pairs in object literals and classes
   *
   * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
   */
  'grouped-accessor-pairs': GroupedAccessorPairsRuleOptions

  /**
   * Require `for-in` loops to include an `if` statement
   *
   * @see [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)
   */
  'guard-for-in': GuardForInRuleOptions

  /**
   * @deprecated
   *
   * Require error handling in callbacks
   *
   * @see [handle-callback-err](https://eslint.org/docs/latest/rules/handle-callback-err)
   */
  'handle-callback-err': HandleCallbackErrRuleOptions

  /**
   * @deprecated
   *
   * Disallow specified identifiers
   *
   * @see [id-blacklist](https://eslint.org/docs/latest/rules/id-blacklist)
   */
  'id-blacklist': IdBlacklistRuleOptions

  /**
   * Disallow specified identifiers
   *
   * @see [id-denylist](https://eslint.org/docs/latest/rules/id-denylist)
   */
  'id-denylist': IdDenylistRuleOptions

  /**
   * Enforce minimum and maximum identifier lengths
   *
   * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
   */
  'id-length': IdLengthRuleOptions

  /**
   * Require identifiers to match a specified regular expression
   *
   * @see [id-match](https://eslint.org/docs/latest/rules/id-match)
   */
  'id-match': IdMatchRuleOptions

  /**
   * @deprecated
   *
   * Enforce the location of arrow function bodies
   *
   * @see [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
   */
  'implicit-arrow-linebreak': ImplicitArrowLinebreakRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent indentation
   *
   * @see [indent](https://eslint.org/docs/latest/rules/indent)
   */
  'indent': IndentRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent indentation
   *
   * @see [indent-legacy](https://eslint.org/docs/latest/rules/indent-legacy)
   */
  'indent-legacy': IndentLegacyRuleOptions

  /**
   * Require or disallow initialization in variable declarations
   *
   * @see [init-declarations](https://eslint.org/docs/latest/rules/init-declarations)
   */
  'init-declarations': InitDeclarationsRuleOptions

  /**
   * @deprecated
   *
   * Enforce the consistent use of either double or single quotes in JSX attributes
   *
   * @see [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
   */
  'jsx-quotes': JsxQuotesRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing between keys and values in object literal properties
   *
   * @see [key-spacing](https://eslint.org/docs/latest/rules/key-spacing)
   */
  'key-spacing': KeySpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before and after keywords
   *
   * @see [keyword-spacing](https://eslint.org/docs/latest/rules/keyword-spacing)
   */
  'keyword-spacing': KeywordSpacingRuleOptions

  /**
   * Enforce position of line comments
   *
   * @see [line-comment-position](https://eslint.org/docs/latest/rules/line-comment-position)
   */
  'line-comment-position': LineCommentPositionRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent linebreak style
   *
   * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
   */
  'linebreak-style': LinebreakStyleRuleOptions

  /**
   * @deprecated
   *
   * Require empty lines around comments
   *
   * @see [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
   */
  'lines-around-comment': LinesAroundCommentRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow newlines around directives
   *
   * @see [lines-around-directive](https://eslint.org/docs/latest/rules/lines-around-directive)
   */
  'lines-around-directive': LinesAroundDirectiveRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow an empty line between class members
   *
   * @see [lines-between-class-members](https://eslint.org/docs/latest/rules/lines-between-class-members)
   */
  'lines-between-class-members': LinesBetweenClassMembersRuleOptions

  /**
   * Require or disallow logical assignment operator shorthand
   *
   * @see [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)
   */
  'logical-assignment-operators': LogicalAssignmentOperatorsRuleOptions

  /**
   * Enforce a maximum number of classes per file
   *
   * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
   */
  'max-classes-per-file': MaxClassesPerFileRuleOptions

  /**
   * Enforce a maximum depth that blocks can be nested
   *
   * @see [max-depth](https://eslint.org/docs/latest/rules/max-depth)
   */
  'max-depth': MaxDepthRuleOptions

  /**
   * @deprecated
   *
   * Enforce a maximum line length
   *
   * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
   */
  'max-len': MaxLenRuleOptions

  /**
   * Enforce a maximum number of lines per file
   *
   * @see [max-lines](https://eslint.org/docs/latest/rules/max-lines)
   */
  'max-lines': MaxLinesRuleOptions

  /**
   * Enforce a maximum number of lines of code in a function
   *
   * @see [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)
   */
  'max-lines-per-function': MaxLinesPerFunctionRuleOptions

  /**
   * Enforce a maximum depth that callbacks can be nested
   *
   * @see [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)
   */
  'max-nested-callbacks': MaxNestedCallbacksRuleOptions

  /**
   * Enforce a maximum number of parameters in function definitions
   *
   * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
   */
  'max-params': MaxParamsRuleOptions

  /**
   * Enforce a maximum number of statements allowed in function blocks
   *
   * @see [max-statements](https://eslint.org/docs/latest/rules/max-statements)
   */
  'max-statements': MaxStatementsRuleOptions

  /**
   * @deprecated
   *
   * Enforce a maximum number of statements allowed per line
   *
   * @see [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
   */
  'max-statements-per-line': MaxStatementsPerLineRuleOptions

  /**
   * Enforce a particular style for multiline comments
   *
   * @see [multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)
   */
  'multiline-comment-style': MultilineCommentStyleRuleOptions

  /**
   * @deprecated
   *
   * Enforce newlines between operands of ternary expressions
   *
   * @see [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
   */
  'multiline-ternary': MultilineTernaryRuleOptions

  /**
   * Require constructor names to begin with a capital letter
   *
   * @see [new-cap](https://eslint.org/docs/latest/rules/new-cap)
   */
  'new-cap': NewCapRuleOptions

  /**
   * @deprecated
   *
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   *
   * @see [new-parens](https://eslint.org/docs/latest/rules/new-parens)
   */
  'new-parens': NewParensRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow an empty line after variable declarations
   *
   * @see [newline-after-var](https://eslint.org/docs/latest/rules/newline-after-var)
   */
  'newline-after-var': NewlineAfterVarRuleOptions

  /**
   * @deprecated
   *
   * Require an empty line before `return` statements
   *
   * @see [newline-before-return](https://eslint.org/docs/latest/rules/newline-before-return)
   */
  'newline-before-return': NewlineBeforeReturnRuleOptions

  /**
   * @deprecated
   *
   * Require a newline after each call in a method chain
   *
   * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
   */
  'newline-per-chained-call': NewlinePerChainedCallRuleOptions

  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`
   *
   * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
   */
  'no-alert': NoAlertRuleOptions

  /**
   * Disallow `Array` constructors
   *
   * @see [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)
   */
  'no-array-constructor': NoArrayConstructorRuleOptions

  /**
   * Disallow using an async function as a Promise executor
   *
   * @see [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)
   */
  'no-async-promise-executor': NoAsyncPromiseExecutorRuleOptions

  /**
   * Disallow `await` inside of loops
   *
   * @see [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)
   */
  'no-await-in-loop': NoAwaitInLoopRuleOptions

  /**
   * Disallow bitwise operators
   *
   * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
   */
  'no-bitwise': NoBitwiseRuleOptions

  /**
   * @deprecated
   *
   * Disallow use of the `Buffer()` constructor
   *
   * @see [no-buffer-constructor](https://eslint.org/docs/latest/rules/no-buffer-constructor)
   */
  'no-buffer-constructor': NoBufferConstructorRuleOptions

  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`
   *
   * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
   */
  'no-caller': NoCallerRuleOptions

  /**
   * Disallow lexical declarations in case clauses
   *
   * @see [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)
   */
  'no-case-declarations': NoCaseDeclarationsRuleOptions

  /**
   * @deprecated
   *
   * Disallow `catch` clause parameters from shadowing variables in the outer scope
   *
   * @see [no-catch-shadow](https://eslint.org/docs/latest/rules/no-catch-shadow)
   */
  'no-catch-shadow': NoCatchShadowRuleOptions

  /**
   * Disallow reassigning class members
   *
   * @see [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)
   */
  'no-class-assign': NoClassAssignRuleOptions

  /**
   * Disallow comparing against -0
   *
   * @see [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
   */
  'no-compare-neg-zero': NoCompareNegZeroRuleOptions

  /**
   * Disallow assignment operators in conditional expressions
   *
   * @see [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)
   */
  'no-cond-assign': NoCondAssignRuleOptions

  /**
   * @deprecated
   *
   * Disallow arrow functions where they could be confused with comparisons
   *
   * @see [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
   */
  'no-confusing-arrow': NoConfusingArrowRuleOptions

  /**
   * Disallow the use of `console`
   *
   * @see [no-console](https://eslint.org/docs/latest/rules/no-console)
   */
  'no-console': NoConsoleRuleOptions

  /**
   * Disallow reassigning `const` variables
   *
   * @see [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)
   */
  'no-const-assign': NoConstAssignRuleOptions

  /**
   * Disallow expressions where the operation doesn't affect the value
   *
   * @see [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)
   */
  'no-constant-binary-expression': NoConstantBinaryExpressionRuleOptions

  /**
   * Disallow constant expressions in conditions
   *
   * @see [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)
   */
  'no-constant-condition': NoConstantConditionRuleOptions

  /**
   * Disallow returning value from constructor
   *
   * @see [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)
   */
  'no-constructor-return': NoConstructorReturnRuleOptions

  /**
   * Disallow `continue` statements
   *
   * @see [no-continue](https://eslint.org/docs/latest/rules/no-continue)
   */
  'no-continue': NoContinueRuleOptions

  /**
   * Disallow control characters in regular expressions
   *
   * @see [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)
   */
  'no-control-regex': NoControlRegexRuleOptions

  /**
   * Disallow the use of `debugger`
   *
   * @see [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
   */
  'no-debugger': NoDebuggerRuleOptions

  /**
   * Disallow deleting variables
   *
   * @see [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)
   */
  'no-delete-var': NoDeleteVarRuleOptions

  /**
   * Disallow equal signs explicitly at the beginning of regular expressions
   *
   * @see [no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex)
   */
  'no-div-regex': NoDivRegexRuleOptions

  /**
   * Disallow duplicate arguments in `function` definitions
   *
   * @see [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)
   */
  'no-dupe-args': NoDupeArgsRuleOptions

  /**
   * Disallow duplicate class members
   *
   * @see [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)
   */
  'no-dupe-class-members': NoDupeClassMembersRuleOptions

  /**
   * Disallow duplicate conditions in if-else-if chains
   *
   * @see [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)
   */
  'no-dupe-else-if': NoDupeElseIfRuleOptions

  /**
   * Disallow duplicate keys in object literals
   *
   * @see [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)
   */
  'no-dupe-keys': NoDupeKeysRuleOptions

  /**
   * Disallow duplicate case labels
   *
   * @see [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)
   */
  'no-duplicate-case': NoDuplicateCaseRuleOptions

  /**
   * Disallow duplicate module imports
   *
   * @see [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)
   */
  'no-duplicate-imports': NoDuplicateImportsRuleOptions

  /**
   * Disallow `else` blocks after `return` statements in `if` statements
   *
   * @see [no-else-return](https://eslint.org/docs/latest/rules/no-else-return)
   */
  'no-else-return': NoElseReturnRuleOptions

  /**
   * Disallow empty block statements
   *
   * @see [no-empty](https://eslint.org/docs/latest/rules/no-empty)
   */
  'no-empty': NoEmptyRuleOptions

  /**
   * Disallow empty character classes in regular expressions
   *
   * @see [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)
   */
  'no-empty-character-class': NoEmptyCharacterClassRuleOptions

  /**
   * Disallow empty functions
   *
   * @see [no-empty-function](https://eslint.org/docs/latest/rules/no-empty-function)
   */
  'no-empty-function': NoEmptyFunctionRuleOptions

  /**
   * Disallow empty destructuring patterns
   *
   * @see [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)
   */
  'no-empty-pattern': NoEmptyPatternRuleOptions

  /**
   * Disallow empty static blocks
   *
   * @see [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)
   */
  'no-empty-static-block': NoEmptyStaticBlockRuleOptions

  /**
   * Disallow `null` comparisons without type-checking operators
   *
   * @see [no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)
   */
  'no-eq-null': NoEqNullRuleOptions

  /**
   * Disallow the use of `eval()`
   *
   * @see [no-eval](https://eslint.org/docs/latest/rules/no-eval)
   */
  'no-eval': NoEvalRuleOptions

  /**
   * Disallow reassigning exceptions in `catch` clauses
   *
   * @see [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)
   */
  'no-ex-assign': NoExAssignRuleOptions

  /**
   * Disallow extending native types
   *
   * @see [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)
   */
  'no-extend-native': NoExtendNativeRuleOptions

  /**
   * Disallow unnecessary calls to `.bind()`
   *
   * @see [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)
   */
  'no-extra-bind': NoExtraBindRuleOptions

  /**
   * Disallow unnecessary boolean casts
   *
   * @see [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
   */
  'no-extra-boolean-cast': NoExtraBooleanCastRuleOptions

  /**
   * Disallow unnecessary labels
   *
   * @see [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label)
   */
  'no-extra-label': NoExtraLabelRuleOptions

  /**
   * @deprecated
   *
   * Disallow unnecessary parentheses
   *
   * @see [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens)
   */
  'no-extra-parens': NoExtraParensRuleOptions

  /**
   * @deprecated
   *
   * Disallow unnecessary semicolons
   *
   * @see [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
   */
  'no-extra-semi': NoExtraSemiRuleOptions

  /**
   * Disallow fallthrough of `case` statements
   *
   * @see [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)
   */
  'no-fallthrough': NoFallthroughRuleOptions

  /**
   * @deprecated
   *
   * Disallow leading or trailing decimal points in numeric literals
   *
   * @see [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
   */
  'no-floating-decimal': NoFloatingDecimalRuleOptions

  /**
   * Disallow reassigning `function` declarations
   *
   * @see [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)
   */
  'no-func-assign': NoFuncAssignRuleOptions

  /**
   * Disallow assignments to native objects or read-only global variables
   *
   * @see [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)
   */
  'no-global-assign': NoGlobalAssignRuleOptions

  /**
   * Disallow shorthand type conversions
   *
   * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
   */
  'no-implicit-coercion': NoImplicitCoercionRuleOptions

  /**
   * Disallow declarations in the global scope
   *
   * @see [no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals)
   */
  'no-implicit-globals': NoImplicitGlobalsRuleOptions

  /**
   * Disallow the use of `eval()`-like methods
   *
   * @see [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)
   */
  'no-implied-eval': NoImpliedEvalRuleOptions

  /**
   * Disallow assigning to imported bindings
   *
   * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
   */
  'no-import-assign': NoImportAssignRuleOptions

  /**
   * Disallow inline comments after code
   *
   * @see [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)
   */
  'no-inline-comments': NoInlineCommentsRuleOptions

  /**
   * Disallow variable or `function` declarations in nested blocks
   *
   * @see [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)
   */
  'no-inner-declarations': NoInnerDeclarationsRuleOptions

  /**
   * Disallow invalid regular expression strings in `RegExp` constructors
   *
   * @see [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)
   */
  'no-invalid-regexp': NoInvalidRegexpRuleOptions

  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`
   *
   * @see [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)
   */
  'no-invalid-this': NoInvalidThisRuleOptions

  /**
   * Disallow irregular whitespace
   *
   * @see [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
   */
  'no-irregular-whitespace': NoIrregularWhitespaceRuleOptions

  /**
   * Disallow the use of the `__iterator__` property
   *
   * @see [no-iterator](https://eslint.org/docs/latest/rules/no-iterator)
   */
  'no-iterator': NoIteratorRuleOptions

  /**
   * Disallow labels that share a name with a variable
   *
   * @see [no-label-var](https://eslint.org/docs/latest/rules/no-label-var)
   */
  'no-label-var': NoLabelVarRuleOptions

  /**
   * Disallow labeled statements
   *
   * @see [no-labels](https://eslint.org/docs/latest/rules/no-labels)
   */
  'no-labels': NoLabelsRuleOptions

  /**
   * Disallow unnecessary nested blocks
   *
   * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
   */
  'no-lone-blocks': NoLoneBlocksRuleOptions

  /**
   * Disallow `if` statements as the only statement in `else` blocks
   *
   * @see [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if)
   */
  'no-lonely-if': NoLonelyIfRuleOptions

  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   *
   * @see [no-loop-func](https://eslint.org/docs/latest/rules/no-loop-func)
   */
  'no-loop-func': NoLoopFuncRuleOptions

  /**
   * Disallow literal numbers that lose precision
   *
   * @see [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)
   */
  'no-loss-of-precision': NoLossOfPrecisionRuleOptions

  /**
   * Disallow magic numbers
   *
   * @see [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)
   */
  'no-magic-numbers': NoMagicNumbersRuleOptions

  /**
   * Disallow characters which are made with multiple code points in character class syntax
   *
   * @see [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)
   */
  'no-misleading-character-class': NoMisleadingCharacterClassRuleOptions

  /**
   * @deprecated
   *
   * Disallow mixed binary operators
   *
   * @see [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
   */
  'no-mixed-operators': NoMixedOperatorsRuleOptions

  /**
   * @deprecated
   *
   * Disallow `require` calls to be mixed with regular variable declarations
   *
   * @see [no-mixed-requires](https://eslint.org/docs/latest/rules/no-mixed-requires)
   */
  'no-mixed-requires': NoMixedRequiresRuleOptions

  /**
   * @deprecated
   *
   * Disallow mixed spaces and tabs for indentation
   *
   * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
   */
  'no-mixed-spaces-and-tabs': NoMixedSpacesAndTabsRuleOptions

  /**
   * Disallow use of chained assignment expressions
   *
   * @see [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)
   */
  'no-multi-assign': NoMultiAssignRuleOptions

  /**
   * @deprecated
   *
   * Disallow multiple spaces
   *
   * @see [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
   */
  'no-multi-spaces': NoMultiSpacesRuleOptions

  /**
   * Disallow multiline strings
   *
   * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
   */
  'no-multi-str': NoMultiStrRuleOptions

  /**
   * @deprecated
   *
   * Disallow multiple empty lines
   *
   * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
   */
  'no-multiple-empty-lines': NoMultipleEmptyLinesRuleOptions

  /**
   * @deprecated
   *
   * Disallow assignments to native objects or read-only global variables
   *
   * @see [no-native-reassign](https://eslint.org/docs/latest/rules/no-native-reassign)
   */
  'no-native-reassign': NoNativeReassignRuleOptions

  /**
   * Disallow negated conditions
   *
   * @see [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)
   */
  'no-negated-condition': NoNegatedConditionRuleOptions

  /**
   * @deprecated
   *
   * Disallow negating the left operand in `in` expressions
   *
   * @see [no-negated-in-lhs](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
   */
  'no-negated-in-lhs': NoNegatedInLhsRuleOptions

  /**
   * Disallow nested ternary expressions
   *
   * @see [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
   */
  'no-nested-ternary': NoNestedTernaryRuleOptions

  /**
   * Disallow `new` operators outside of assignments or comparisons
   *
   * @see [no-new](https://eslint.org/docs/latest/rules/no-new)
   */
  'no-new': NoNewRuleOptions

  /**
   * Disallow `new` operators with the `Function` object
   *
   * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
   */
  'no-new-func': NoNewFuncRuleOptions

  /**
   * Disallow `new` operators with global non-constructor functions
   *
   * @see [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
   */
  'no-new-native-nonconstructor': NoNewNativeNonconstructorRuleOptions

  /**
   * @deprecated
   *
   * Disallow `Object` constructors
   *
   * @see [no-new-object](https://eslint.org/docs/latest/rules/no-new-object)
   */
  'no-new-object': NoNewObjectRuleOptions

  /**
   * @deprecated
   *
   * Disallow `new` operators with calls to `require`
   *
   * @see [no-new-require](https://eslint.org/docs/latest/rules/no-new-require)
   */
  'no-new-require': NoNewRequireRuleOptions

  /**
   * Disallow `new` operators with the `Symbol` object
   *
   * @see [no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol)
   */
  'no-new-symbol': NoNewSymbolRuleOptions

  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   *
   * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
   */
  'no-new-wrappers': NoNewWrappersRuleOptions

  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   *
   * @see [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
   */
  'no-nonoctal-decimal-escape': NoNonoctalDecimalEscapeRuleOptions

  /**
   * Disallow calling global object properties as functions
   *
   * @see [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)
   */
  'no-obj-calls': NoObjCallsRuleOptions

  /**
   * Disallow calls to the `Object` constructor without an argument
   *
   * @see [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)
   */
  'no-object-constructor': NoObjectConstructorRuleOptions

  /**
   * Disallow octal literals
   *
   * @see [no-octal](https://eslint.org/docs/latest/rules/no-octal)
   */
  'no-octal': NoOctalRuleOptions

  /**
   * Disallow octal escape sequences in string literals
   *
   * @see [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)
   */
  'no-octal-escape': NoOctalEscapeRuleOptions

  /**
   * Disallow reassigning `function` parameters
   *
   * @see [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)
   */
  'no-param-reassign': NoParamReassignRuleOptions

  /**
   * @deprecated
   *
   * Disallow string concatenation with `__dirname` and `__filename`
   *
   * @see [no-path-concat](https://eslint.org/docs/latest/rules/no-path-concat)
   */
  'no-path-concat': NoPathConcatRuleOptions

  /**
   * Disallow the unary operators `++` and `--`
   *
   * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
   */
  'no-plusplus': NoPlusplusRuleOptions

  /**
   * @deprecated
   *
   * Disallow the use of `process.env`
   *
   * @see [no-process-env](https://eslint.org/docs/latest/rules/no-process-env)
   */
  'no-process-env': NoProcessEnvRuleOptions

  /**
   * @deprecated
   *
   * Disallow the use of `process.exit()`
   *
   * @see [no-process-exit](https://eslint.org/docs/latest/rules/no-process-exit)
   */
  'no-process-exit': NoProcessExitRuleOptions

  /**
   * Disallow returning values from Promise executor functions
   *
   * @see [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)
   */
  'no-promise-executor-return': NoPromiseExecutorReturnRuleOptions

  /**
   * Disallow the use of the `__proto__` property
   *
   * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
   */
  'no-proto': NoProtoRuleOptions

  /**
   * Disallow calling some `Object.prototype` methods directly on objects
   *
   * @see [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)
   */
  'no-prototype-builtins': NoPrototypeBuiltinsRuleOptions

  /**
   * Disallow variable redeclaration
   *
   * @see [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)
   */
  'no-redeclare': NoRedeclareRuleOptions

  /**
   * Disallow multiple spaces in regular expressions
   *
   * @see [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)
   */
  'no-regex-spaces': NoRegexSpacesRuleOptions

  /**
   * Disallow specified names in exports
   *
   * @see [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)
   */
  'no-restricted-exports': NoRestrictedExportsRuleOptions

  /**
   * Disallow specified global variables
   *
   * @see [no-restricted-globals](https://eslint.org/docs/latest/rules/no-restricted-globals)
   */
  'no-restricted-globals': NoRestrictedGlobalsRuleOptions

  /**
   * Disallow specified modules when loaded by `import`
   *
   * @see [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)
   */
  'no-restricted-imports': NoRestrictedImportsRuleOptions

  /**
   * @deprecated
   *
   * Disallow specified modules when loaded by `require`
   *
   * @see [no-restricted-modules](https://eslint.org/docs/latest/rules/no-restricted-modules)
   */
  'no-restricted-modules': NoRestrictedModulesRuleOptions

  /**
   * Disallow certain properties on certain objects
   *
   * @see [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)
   */
  'no-restricted-properties': NoRestrictedPropertiesRuleOptions

  /**
   * Disallow specified syntax
   *
   * @see [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)
   */
  'no-restricted-syntax': NoRestrictedSyntaxRuleOptions

  /**
   * Disallow assignment operators in `return` statements
   *
   * @see [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign)
   */
  'no-return-assign': NoReturnAssignRuleOptions

  /**
   * @deprecated
   *
   * Disallow unnecessary `return await`
   *
   * @see [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
   */
  'no-return-await': NoReturnAwaitRuleOptions

  /**
   * Disallow `javascript:` urls
   *
   * @see [no-script-url](https://eslint.org/docs/latest/rules/no-script-url)
   */
  'no-script-url': NoScriptUrlRuleOptions

  /**
   * Disallow assignments where both sides are exactly the same
   *
   * @see [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)
   */
  'no-self-assign': NoSelfAssignRuleOptions

  /**
   * Disallow comparisons where both sides are exactly the same
   *
   * @see [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)
   */
  'no-self-compare': NoSelfCompareRuleOptions

  /**
   * Disallow comma operators
   *
   * @see [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)
   */
  'no-sequences': NoSequencesRuleOptions

  /**
   * Disallow returning values from setters
   *
   * @see [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)
   */
  'no-setter-return': NoSetterReturnRuleOptions

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   *
   * @see [no-shadow](https://eslint.org/docs/latest/rules/no-shadow)
   */
  'no-shadow': NoShadowRuleOptions

  /**
   * Disallow identifiers from shadowing restricted names
   *
   * @see [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
   */
  'no-shadow-restricted-names': NoShadowRestrictedNamesRuleOptions

  /**
   * @deprecated
   *
   * Disallow spacing between function identifiers and their applications (deprecated)
   *
   * @see [no-spaced-func](https://eslint.org/docs/latest/rules/no-spaced-func)
   */
  'no-spaced-func': NoSpacedFuncRuleOptions

  /**
   * Disallow sparse arrays
   *
   * @see [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)
   */
  'no-sparse-arrays': NoSparseArraysRuleOptions

  /**
   * @deprecated
   *
   * Disallow synchronous methods
   *
   * @see [no-sync](https://eslint.org/docs/latest/rules/no-sync)
   */
  'no-sync': NoSyncRuleOptions

  /**
   * @deprecated
   *
   * Disallow all tabs
   *
   * @see [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
   */
  'no-tabs': NoTabsRuleOptions

  /**
   * Disallow template literal placeholder syntax in regular strings
   *
   * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
   */
  'no-template-curly-in-string': NoTemplateCurlyInStringRuleOptions

  /**
   * Disallow ternary operators
   *
   * @see [no-ternary](https://eslint.org/docs/latest/rules/no-ternary)
   */
  'no-ternary': NoTernaryRuleOptions

  /**
   * Disallow `this`/`super` before calling `super()` in constructors
   *
   * @see [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)
   */
  'no-this-before-super': NoThisBeforeSuperRuleOptions

  /**
   * Disallow throwing literals as exceptions
   *
   * @see [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)
   */
  'no-throw-literal': NoThrowLiteralRuleOptions

  /**
   * @deprecated
   *
   * Disallow trailing whitespace at the end of lines
   *
   * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
   */
  'no-trailing-spaces': NoTrailingSpacesRuleOptions

  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
   *
   * @see [no-undef](https://eslint.org/docs/latest/rules/no-undef)
   */
  'no-undef': NoUndefRuleOptions

  /**
   * Disallow initializing variables to `undefined`
   *
   * @see [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)
   */
  'no-undef-init': NoUndefInitRuleOptions

  /**
   * Disallow the use of `undefined` as an identifier
   *
   * @see [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)
   */
  'no-undefined': NoUndefinedRuleOptions

  /**
   * Disallow dangling underscores in identifiers
   *
   * @see [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle)
   */
  'no-underscore-dangle': NoUnderscoreDangleRuleOptions

  /**
   * Disallow confusing multiline expressions
   *
   * @see [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline)
   */
  'no-unexpected-multiline': NoUnexpectedMultilineRuleOptions

  /**
   * Disallow unmodified loop conditions
   *
   * @see [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
   */
  'no-unmodified-loop-condition': NoUnmodifiedLoopConditionRuleOptions

  /**
   * Disallow ternary operators when simpler alternatives exist
   *
   * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
   */
  'no-unneeded-ternary': NoUnneededTernaryRuleOptions

  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   *
   * @see [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)
   */
  'no-unreachable': NoUnreachableRuleOptions

  /**
   * Disallow loops with a body that allows only one iteration
   *
   * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
   */
  'no-unreachable-loop': NoUnreachableLoopRuleOptions

  /**
   * Disallow control flow statements in `finally` blocks
   *
   * @see [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)
   */
  'no-unsafe-finally': NoUnsafeFinallyRuleOptions

  /**
   * Disallow negating the left operand of relational operators
   *
   * @see [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)
   */
  'no-unsafe-negation': NoUnsafeNegationRuleOptions

  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
   *
   * @see [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
   */
  'no-unsafe-optional-chaining': NoUnsafeOptionalChainingRuleOptions

  /**
   * Disallow unused expressions
   *
   * @see [no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions)
   */
  'no-unused-expressions': NoUnusedExpressionsRuleOptions

  /**
   * Disallow unused labels
   *
   * @see [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)
   */
  'no-unused-labels': NoUnusedLabelsRuleOptions

  /**
   * Disallow unused private class members
   *
   * @see [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
   */
  'no-unused-private-class-members': NoUnusedPrivateClassMembersRuleOptions

  /**
   * Disallow unused variables
   *
   * @see [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars)
   */
  'no-unused-vars': NoUnusedVarsRuleOptions

  /**
   * Disallow the use of variables before they are defined
   *
   * @see [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
   */
  'no-use-before-define': NoUseBeforeDefineRuleOptions

  /**
   * Disallow useless backreferences in regular expressions
   *
   * @see [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)
   */
  'no-useless-backreference': NoUselessBackreferenceRuleOptions

  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`
   *
   * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
   */
  'no-useless-call': NoUselessCallRuleOptions

  /**
   * Disallow unnecessary `catch` clauses
   *
   * @see [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)
   */
  'no-useless-catch': NoUselessCatchRuleOptions

  /**
   * Disallow unnecessary computed property keys in objects and classes
   *
   * @see [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key)
   */
  'no-useless-computed-key': NoUselessComputedKeyRuleOptions

  /**
   * Disallow unnecessary concatenation of literals or template literals
   *
   * @see [no-useless-concat](https://eslint.org/docs/latest/rules/no-useless-concat)
   */
  'no-useless-concat': NoUselessConcatRuleOptions

  /**
   * Disallow unnecessary constructors
   *
   * @see [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)
   */
  'no-useless-constructor': NoUselessConstructorRuleOptions

  /**
   * Disallow unnecessary escape characters
   *
   * @see [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)
   */
  'no-useless-escape': NoUselessEscapeRuleOptions

  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   *
   * @see [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)
   */
  'no-useless-rename': NoUselessRenameRuleOptions

  /**
   * Disallow redundant return statements
   *
   * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
   */
  'no-useless-return': NoUselessReturnRuleOptions

  /**
   * Require `let` or `const` instead of `var`
   *
   * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
   */
  'no-var': NoVarRuleOptions

  /**
   * Disallow `void` operators
   *
   * @see [no-void](https://eslint.org/docs/latest/rules/no-void)
   */
  'no-void': NoVoidRuleOptions

  /**
   * Disallow specified warning terms in comments
   *
   * @see [no-warning-comments](https://eslint.org/docs/latest/rules/no-warning-comments)
   */
  'no-warning-comments': NoWarningCommentsRuleOptions

  /**
   * @deprecated
   *
   * Disallow whitespace before properties
   *
   * @see [no-whitespace-before-property](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
   */
  'no-whitespace-before-property': NoWhitespaceBeforePropertyRuleOptions

  /**
   * Disallow `with` statements
   *
   * @see [no-with](https://eslint.org/docs/latest/rules/no-with)
   */
  'no-with': NoWithRuleOptions

  /**
   * @deprecated
   *
   * Enforce the location of single-line statements
   *
   * @see [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
   */
  'nonblock-statement-body-position': NonblockStatementBodyPositionRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent line breaks after opening and before closing braces
   *
   * @see [object-curly-newline](https://eslint.org/docs/latest/rules/object-curly-newline)
   */
  'object-curly-newline': ObjectCurlyNewlineRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing inside braces
   *
   * @see [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
   */
  'object-curly-spacing': ObjectCurlySpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce placing object properties on separate lines
   *
   * @see [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
   */
  'object-property-newline': ObjectPropertyNewlineRuleOptions

  /**
   * Require or disallow method and property shorthand syntax for object literals
   *
   * @see [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)
   */
  'object-shorthand': ObjectShorthandRuleOptions

  /**
   * Enforce variables to be declared either together or separately in functions
   *
   * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
   */
  'one-var': OneVarRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow newlines around variable declarations
   *
   * @see [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
   */
  'one-var-declaration-per-line': OneVarDeclarationPerLineRuleOptions

  /**
   * Require or disallow assignment operator shorthand where possible
   *
   * @see [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)
   */
  'operator-assignment': OperatorAssignmentRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent linebreak style for operators
   *
   * @see [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
   */
  'operator-linebreak': OperatorLinebreakRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow padding within blocks
   *
   * @see [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
   */
  'padded-blocks': PaddedBlocksRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow padding lines between statements
   *
   * @see [padding-line-between-statements](https://eslint.org/docs/latest/rules/padding-line-between-statements)
   */
  'padding-line-between-statements': PaddingLineBetweenStatementsRuleOptions

  /**
   * Require using arrow functions for callbacks
   *
   * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
   */
  'prefer-arrow-callback': PreferArrowCallbackRuleOptions

  /**
   * Require `const` declarations for variables that are never reassigned after declared
   *
   * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
   */
  'prefer-const': PreferConstRuleOptions

  /**
   * Require destructuring from arrays and/or objects
   *
   * @see [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)
   */
  'prefer-destructuring': PreferDestructuringRuleOptions

  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator
   *
   * @see [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
   */
  'prefer-exponentiation-operator': PreferExponentiationOperatorRuleOptions

  /**
   * Enforce using named capture group in regular expression
   *
   * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
   */
  'prefer-named-capture-group': PreferNamedCaptureGroupRuleOptions

  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   *
   * @see [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
   */
  'prefer-numeric-literals': PreferNumericLiteralsRuleOptions

  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
   *
   * @see [prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own)
   */
  'prefer-object-has-own': PreferObjectHasOwnRuleOptions

  /**
   * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
   *
   * @see [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)
   */
  'prefer-object-spread': PreferObjectSpreadRuleOptions

  /**
   * Require using Error objects as Promise rejection reasons
   *
   * @see [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
   */
  'prefer-promise-reject-errors': PreferPromiseRejectErrorsRuleOptions

  /**
   * @deprecated
   *
   * Require `Reflect` methods where applicable
   *
   * @see [prefer-reflect](https://eslint.org/docs/latest/rules/prefer-reflect)
   */
  'prefer-reflect': PreferReflectRuleOptions

  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals
   *
   * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
   */
  'prefer-regex-literals': PreferRegexLiteralsRuleOptions

  /**
   * Require rest parameters instead of `arguments`
   *
   * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
   */
  'prefer-rest-params': PreferRestParamsRuleOptions

  /**
   * Require spread operators instead of `.apply()`
   *
   * @see [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)
   */
  'prefer-spread': PreferSpreadRuleOptions

  /**
   * Require template literals instead of string concatenation
   *
   * @see [prefer-template](https://eslint.org/docs/latest/rules/prefer-template)
   */
  'prefer-template': PreferTemplateRuleOptions

  /**
   * @deprecated
   *
   * Require quotes around object literal property names
   *
   * @see [quote-props](https://eslint.org/docs/latest/rules/quote-props)
   */
  'quote-props': QuotePropsRuleOptions

  /**
   * @deprecated
   *
   * Enforce the consistent use of either backticks, double, or single quotes
   *
   * @see [quotes](https://eslint.org/docs/latest/rules/quotes)
   */
  'quotes': QuotesRuleOptions

  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`
   *
   * @see [radix](https://eslint.org/docs/latest/rules/radix)
   */
  'radix': RadixRuleOptions

  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   *
   * @see [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)
   */
  'require-atomic-updates': RequireAtomicUpdatesRuleOptions

  /**
   * Disallow async functions which have no `await` expression
   *
   * @see [require-await](https://eslint.org/docs/latest/rules/require-await)
   */
  'require-await': RequireAwaitRuleOptions

  /**
   * @deprecated
   *
   * Require JSDoc comments
   *
   * @see [require-jsdoc](https://eslint.org/docs/latest/rules/require-jsdoc)
   */
  'require-jsdoc': RequireJsdocRuleOptions

  /**
   * Enforce the use of `u` or `v` flag on RegExp
   *
   * @see [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)
   */
  'require-unicode-regexp': RequireUnicodeRegexpRuleOptions

  /**
   * Require generator functions to contain `yield`
   *
   * @see [require-yield](https://eslint.org/docs/latest/rules/require-yield)
   */
  'require-yield': RequireYieldRuleOptions

  /**
   * @deprecated
   *
   * Enforce spacing between rest and spread operators and their expressions
   *
   * @see [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing)
   */
  'rest-spread-spacing': RestSpreadSpacingRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow semicolons instead of ASI
   *
   * @see [semi](https://eslint.org/docs/latest/rules/semi)
   */
  'semi': SemiRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before and after semicolons
   *
   * @see [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing)
   */
  'semi-spacing': SemiSpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce location of semicolons
   *
   * @see [semi-style](https://eslint.org/docs/latest/rules/semi-style)
   */
  'semi-style': SemiStyleRuleOptions

  /**
   * Enforce sorted import declarations within modules
   *
   * @see [sort-imports](https://eslint.org/docs/latest/rules/sort-imports)
   */
  'sort-imports': SortImportsRuleOptions

  /**
   * Require object keys to be sorted
   *
   * @see [sort-keys](https://eslint.org/docs/latest/rules/sort-keys)
   */
  'sort-keys': SortKeysRuleOptions

  /**
   * Require variables within the same declaration block to be sorted
   *
   * @see [sort-vars](https://eslint.org/docs/latest/rules/sort-vars)
   */
  'sort-vars': SortVarsRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before blocks
   *
   * @see [space-before-blocks](https://eslint.org/docs/latest/rules/space-before-blocks)
   */
  'space-before-blocks': SpaceBeforeBlocksRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before `function` definition opening parenthesis
   *
   * @see [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren)
   */
  'space-before-function-paren': SpaceBeforeFunctionParenRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing inside parentheses
   *
   * @see [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
   */
  'space-in-parens': SpaceInParensRuleOptions

  /**
   * @deprecated
   *
   * Require spacing around infix operators
   *
   * @see [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
   */
  'space-infix-ops': SpaceInfixOpsRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before or after unary operators
   *
   * @see [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops)
   */
  'space-unary-ops': SpaceUnaryOpsRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing after the `//` or `/*` in a comment
   *
   * @see [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
   */
  'spaced-comment': SpacedCommentRuleOptions

  /**
   * Require or disallow strict mode directives
   *
   * @see [strict](https://eslint.org/docs/latest/rules/strict)
   */
  'strict': StrictRuleOptions

  /**
   * @deprecated
   *
   * Enforce spacing around colons of switch statements
   *
   * @see [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing)
   */
  'switch-colon-spacing': SwitchColonSpacingRuleOptions

  /**
   * Require symbol descriptions
   *
   * @see [symbol-description](https://eslint.org/docs/latest/rules/symbol-description)
   */
  'symbol-description': SymbolDescriptionRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow spacing around embedded expressions of template strings
   *
   * @see [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
   */
  'template-curly-spacing': TemplateCurlySpacingRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow spacing between template tags and their literals
   *
   * @see [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
   */
  'template-tag-spacing': TemplateTagSpacingRuleOptions

  /**
   * Require or disallow Unicode byte order mark (BOM)
   *
   * @see [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom)
   */
  'unicode-bom': UnicodeBomRuleOptions

  /**
   * Require calls to `isNaN()` when checking for `NaN`
   *
   * @see [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)
   */
  'use-isnan': UseIsnanRuleOptions

  /**
   * @deprecated
   *
   * Enforce valid JSDoc comments
   *
   * @see [valid-jsdoc](https://eslint.org/docs/latest/rules/valid-jsdoc)
   */
  'valid-jsdoc': ValidJsdocRuleOptions

  /**
   * Enforce comparing `typeof` expressions against valid strings
   *
   * @see [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)
   */
  'valid-typeof': ValidTypeofRuleOptions

  /**
   * Require `var` declarations be placed at the top of their containing scope
   *
   * @see [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top)
   */
  'vars-on-top': VarsOnTopRuleOptions

  /**
   * @deprecated
   *
   * Require parentheses around immediate `function` invocations
   *
   * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
   */
  'wrap-iife': WrapIifeRuleOptions

  /**
   * @deprecated
   *
   * Require parenthesis around regex literals
   *
   * @see [wrap-regex](https://eslint.org/docs/latest/rules/wrap-regex)
   */
  'wrap-regex': WrapRegexRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow spacing around the `*` in `yield*` expressions
   *
   * @see [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing)
   */
  'yield-star-spacing': YieldStarSpacingRuleOptions

  /**
   * Require or disallow "Yoda" conditions
   *
   * @see [yoda](https://eslint.org/docs/latest/rules/yoda)
   */
  'yoda': YodaRuleOptions

}
