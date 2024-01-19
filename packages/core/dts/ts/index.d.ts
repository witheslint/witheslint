import type { AdjacentOverloadSignaturesRuleOptions } from './rules/adjacent-overload-signatures'
import type { ArrayTypeRuleOptions } from './rules/array-type'
import type { AwaitThenableRuleOptions } from './rules/await-thenable'
import type { BanTsCommentRuleOptions } from './rules/ban-ts-comment'
import type { BanTslintCommentRuleOptions } from './rules/ban-tslint-comment'
import type { BanTypesRuleOptions } from './rules/ban-types'
import type { BlockSpacingRuleOptions } from './rules/block-spacing'
import type { BraceStyleRuleOptions } from './rules/brace-style'
import type { ClassLiteralPropertyStyleRuleOptions } from './rules/class-literal-property-style'
import type { ClassMethodsUseThisRuleOptions } from './rules/class-methods-use-this'
import type { CommaDangleRuleOptions } from './rules/comma-dangle'
import type { CommaSpacingRuleOptions } from './rules/comma-spacing'
import type { ConsistentGenericConstructorsRuleOptions } from './rules/consistent-generic-constructors'
import type { ConsistentIndexedObjectStyleRuleOptions } from './rules/consistent-indexed-object-style'
import type { ConsistentTypeAssertionsRuleOptions } from './rules/consistent-type-assertions'
import type { ConsistentTypeDefinitionsRuleOptions } from './rules/consistent-type-definitions'
import type { ConsistentTypeExportsRuleOptions } from './rules/consistent-type-exports'
import type { ConsistentTypeImportsRuleOptions } from './rules/consistent-type-imports'
import type { DefaultParamLastRuleOptions } from './rules/default-param-last'
import type { DotNotationRuleOptions } from './rules/dot-notation'
import type { ExplicitFunctionReturnTypeRuleOptions } from './rules/explicit-function-return-type'
import type { ExplicitMemberAccessibilityRuleOptions } from './rules/explicit-member-accessibility'
import type { ExplicitModuleBoundaryTypesRuleOptions } from './rules/explicit-module-boundary-types'
import type { FuncCallSpacingRuleOptions } from './rules/func-call-spacing'
import type { IndentRuleOptions } from './rules/indent'
import type { InitDeclarationsRuleOptions } from './rules/init-declarations'
import type { KeySpacingRuleOptions } from './rules/key-spacing'
import type { KeywordSpacingRuleOptions } from './rules/keyword-spacing'
import type { LinesAroundCommentRuleOptions } from './rules/lines-around-comment'
import type { LinesBetweenClassMembersRuleOptions } from './rules/lines-between-class-members'
import type { MaxParamsRuleOptions } from './rules/max-params'
import type { MemberDelimiterStyleRuleOptions } from './rules/member-delimiter-style'
import type { MemberOrderingRuleOptions } from './rules/member-ordering'
import type { MethodSignatureStyleRuleOptions } from './rules/method-signature-style'
import type { NamingConventionRuleOptions } from './rules/naming-convention'
import type { NoArrayConstructorRuleOptions } from './rules/no-array-constructor'
import type { NoArrayDeleteRuleOptions } from './rules/no-array-delete'
import type { NoBaseToStringRuleOptions } from './rules/no-base-to-string'
import type { NoConfusingNonNullAssertionRuleOptions } from './rules/no-confusing-non-null-assertion'
import type { NoConfusingVoidExpressionRuleOptions } from './rules/no-confusing-void-expression'
import type { NoDupeClassMembersRuleOptions } from './rules/no-dupe-class-members'
import type { NoDuplicateEnumValuesRuleOptions } from './rules/no-duplicate-enum-values'
import type { NoDuplicateTypeConstituentsRuleOptions } from './rules/no-duplicate-type-constituents'
import type { NoDynamicDeleteRuleOptions } from './rules/no-dynamic-delete'
import type { NoEmptyFunctionRuleOptions } from './rules/no-empty-function'
import type { NoEmptyInterfaceRuleOptions } from './rules/no-empty-interface'
import type { NoExplicitAnyRuleOptions } from './rules/no-explicit-any'
import type { NoExtraNonNullAssertionRuleOptions } from './rules/no-extra-non-null-assertion'
import type { NoExtraParensRuleOptions } from './rules/no-extra-parens'
import type { NoExtraSemiRuleOptions } from './rules/no-extra-semi'
import type { NoExtraneousClassRuleOptions } from './rules/no-extraneous-class'
import type { NoFloatingPromisesRuleOptions } from './rules/no-floating-promises'
import type { NoForInArrayRuleOptions } from './rules/no-for-in-array'
import type { NoImpliedEvalRuleOptions } from './rules/no-implied-eval'
import type { NoImportTypeSideEffectsRuleOptions } from './rules/no-import-type-side-effects'
import type { NoInferrableTypesRuleOptions } from './rules/no-inferrable-types'
import type { NoInvalidThisRuleOptions } from './rules/no-invalid-this'
import type { NoInvalidVoidTypeRuleOptions } from './rules/no-invalid-void-type'
import type { NoLoopFuncRuleOptions } from './rules/no-loop-func'
import type { NoLossOfPrecisionRuleOptions } from './rules/no-loss-of-precision'
import type { NoMagicNumbersRuleOptions } from './rules/no-magic-numbers'
import type { NoMeaninglessVoidOperatorRuleOptions } from './rules/no-meaningless-void-operator'
import type { NoMisusedNewRuleOptions } from './rules/no-misused-new'
import type { NoMisusedPromisesRuleOptions } from './rules/no-misused-promises'
import type { NoMixedEnumsRuleOptions } from './rules/no-mixed-enums'
import type { NoNamespaceRuleOptions } from './rules/no-namespace'
import type { NoNonNullAssertedNullishCoalescingRuleOptions } from './rules/no-non-null-asserted-nullish-coalescing'
import type { NoNonNullAssertedOptionalChainRuleOptions } from './rules/no-non-null-asserted-optional-chain'
import type { NoNonNullAssertionRuleOptions } from './rules/no-non-null-assertion'
import type { NoRedeclareRuleOptions } from './rules/no-redeclare'
import type { NoRedundantTypeConstituentsRuleOptions } from './rules/no-redundant-type-constituents'
import type { NoRequireImportsRuleOptions } from './rules/no-require-imports'
import type { NoRestrictedImportsRuleOptions } from './rules/no-restricted-imports'
import type { NoShadowRuleOptions } from './rules/no-shadow'
import type { NoThisAliasRuleOptions } from './rules/no-this-alias'
import type { NoThrowLiteralRuleOptions } from './rules/no-throw-literal'
import type { NoTypeAliasRuleOptions } from './rules/no-type-alias'
import type { NoUnnecessaryBooleanLiteralCompareRuleOptions } from './rules/no-unnecessary-boolean-literal-compare'
import type { NoUnnecessaryConditionRuleOptions } from './rules/no-unnecessary-condition'
import type { NoUnnecessaryQualifierRuleOptions } from './rules/no-unnecessary-qualifier'
import type { NoUnnecessaryTypeArgumentsRuleOptions } from './rules/no-unnecessary-type-arguments'
import type { NoUnnecessaryTypeAssertionRuleOptions } from './rules/no-unnecessary-type-assertion'
import type { NoUnnecessaryTypeConstraintRuleOptions } from './rules/no-unnecessary-type-constraint'
import type { NoUnsafeArgumentRuleOptions } from './rules/no-unsafe-argument'
import type { NoUnsafeAssignmentRuleOptions } from './rules/no-unsafe-assignment'
import type { NoUnsafeCallRuleOptions } from './rules/no-unsafe-call'
import type { NoUnsafeDeclarationMergingRuleOptions } from './rules/no-unsafe-declaration-merging'
import type { NoUnsafeEnumComparisonRuleOptions } from './rules/no-unsafe-enum-comparison'
import type { NoUnsafeMemberAccessRuleOptions } from './rules/no-unsafe-member-access'
import type { NoUnsafeReturnRuleOptions } from './rules/no-unsafe-return'
import type { NoUnsafeUnaryMinusRuleOptions } from './rules/no-unsafe-unary-minus'
import type { NoUnusedExpressionsRuleOptions } from './rules/no-unused-expressions'
import type { NoUnusedVarsRuleOptions } from './rules/no-unused-vars'
import type { NoUseBeforeDefineRuleOptions } from './rules/no-use-before-define'
import type { NoUselessConstructorRuleOptions } from './rules/no-useless-constructor'
import type { NoUselessEmptyExportRuleOptions } from './rules/no-useless-empty-export'
import type { NoUselessTemplateLiteralsRuleOptions } from './rules/no-useless-template-literals'
import type { NoVarRequiresRuleOptions } from './rules/no-var-requires'
import type { NonNullableTypeAssertionStyleRuleOptions } from './rules/non-nullable-type-assertion-style'
import type { ObjectCurlySpacingRuleOptions } from './rules/object-curly-spacing'
import type { PaddingLineBetweenStatementsRuleOptions } from './rules/padding-line-between-statements'
import type { ParameterPropertiesRuleOptions } from './rules/parameter-properties'
import type { PreferAsConstRuleOptions } from './rules/prefer-as-const'
import type { PreferDestructuringRuleOptions } from './rules/prefer-destructuring'
import type { PreferEnumInitializersRuleOptions } from './rules/prefer-enum-initializers'
import type { PreferForOfRuleOptions } from './rules/prefer-for-of'
import type { PreferFunctionTypeRuleOptions } from './rules/prefer-function-type'
import type { PreferIncludesRuleOptions } from './rules/prefer-includes'
import type { PreferLiteralEnumMemberRuleOptions } from './rules/prefer-literal-enum-member'
import type { PreferNamespaceKeywordRuleOptions } from './rules/prefer-namespace-keyword'
import type { PreferNullishCoalescingRuleOptions } from './rules/prefer-nullish-coalescing'
import type { PreferOptionalChainRuleOptions } from './rules/prefer-optional-chain'
import type { PreferPromiseRejectErrorsRuleOptions } from './rules/prefer-promise-reject-errors'
import type { PreferReadonlyRuleOptions } from './rules/prefer-readonly'
import type { PreferReadonlyParameterTypesRuleOptions } from './rules/prefer-readonly-parameter-types'
import type { PreferReduceTypeParameterRuleOptions } from './rules/prefer-reduce-type-parameter'
import type { PreferRegexpExecRuleOptions } from './rules/prefer-regexp-exec'
import type { PreferReturnThisTypeRuleOptions } from './rules/prefer-return-this-type'
import type { PreferStringStartsEndsWithRuleOptions } from './rules/prefer-string-starts-ends-with'
import type { PreferTsExpectErrorRuleOptions } from './rules/prefer-ts-expect-error'
import type { PromiseFunctionAsyncRuleOptions } from './rules/promise-function-async'
import type { QuotesRuleOptions } from './rules/quotes'
import type { RequireArraySortCompareRuleOptions } from './rules/require-array-sort-compare'
import type { RequireAwaitRuleOptions } from './rules/require-await'
import type { RestrictPlusOperandsRuleOptions } from './rules/restrict-plus-operands'
import type { RestrictTemplateExpressionsRuleOptions } from './rules/restrict-template-expressions'
import type { ReturnAwaitRuleOptions } from './rules/return-await'
import type { SemiRuleOptions } from './rules/semi'
import type { SortTypeConstituentsRuleOptions } from './rules/sort-type-constituents'
import type { SpaceBeforeBlocksRuleOptions } from './rules/space-before-blocks'
import type { SpaceBeforeFunctionParenRuleOptions } from './rules/space-before-function-paren'
import type { SpaceInfixOpsRuleOptions } from './rules/space-infix-ops'
import type { StrictBooleanExpressionsRuleOptions } from './rules/strict-boolean-expressions'
import type { SwitchExhaustivenessCheckRuleOptions } from './rules/switch-exhaustiveness-check'
import type { TripleSlashReferenceRuleOptions } from './rules/triple-slash-reference'
import type { TypeAnnotationSpacingRuleOptions } from './rules/type-annotation-spacing'
import type { TypedefRuleOptions } from './rules/typedef'
import type { UnboundMethodRuleOptions } from './rules/unbound-method'
import type { UnifiedSignaturesRuleOptions } from './rules/unified-signatures'

export interface RuleOptions {
  /**
   * Require that function overload signatures be consecutive
   *
   * @see [adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
   */
  'ts/adjacent-overload-signatures': AdjacentOverloadSignaturesRuleOptions

  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   *
   * @see [array-type](https://typescript-eslint.io/rules/array-type)
   */
  'ts/array-type': ArrayTypeRuleOptions

  /**
   * Disallow awaiting a value that is not a Thenable
   *
   * @see [await-thenable](https://typescript-eslint.io/rules/await-thenable)
   */
  'ts/await-thenable': AwaitThenableRuleOptions

  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   *
   * @see [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
   */
  'ts/ban-ts-comment': BanTsCommentRuleOptions

  /**
   * Disallow `// tslint:<rule-flag>` comments
   *
   * @see [ban-tslint-comment](https://typescript-eslint.io/rules/ban-tslint-comment)
   */
  'ts/ban-tslint-comment': BanTslintCommentRuleOptions

  /**
   * Disallow certain types
   *
   * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
   */
  'ts/ban-types': BanTypesRuleOptions

  /**
   * @deprecated
   *
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * @see [block-spacing](https://typescript-eslint.io/rules/block-spacing)
   */
  'ts/block-spacing': BlockSpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent brace style for blocks
   *
   * @see [brace-style](https://typescript-eslint.io/rules/brace-style)
   */
  'ts/brace-style': BraceStyleRuleOptions

  /**
   * Enforce that literals on classes are exposed in a consistent style
   *
   * @see [class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style)
   */
  'ts/class-literal-property-style': ClassLiteralPropertyStyleRuleOptions

  /**
   * Enforce that class methods utilize `this`
   *
   * @see [class-methods-use-this](https://typescript-eslint.io/rules/class-methods-use-this)
   */
  'ts/class-methods-use-this': ClassMethodsUseThisRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow trailing commas
   *
   * @see [comma-dangle](https://typescript-eslint.io/rules/comma-dangle)
   */
  'ts/comma-dangle': CommaDangleRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before and after commas
   *
   * @see [comma-spacing](https://typescript-eslint.io/rules/comma-spacing)
   */
  'ts/comma-spacing': CommaSpacingRuleOptions

  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   *
   * @see [consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors)
   */
  'ts/consistent-generic-constructors': ConsistentGenericConstructorsRuleOptions

  /**
   * Require or disallow the `Record` type
   *
   * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
   */
  'ts/consistent-indexed-object-style': ConsistentIndexedObjectStyleRuleOptions

  /**
   * Enforce consistent usage of type assertions
   *
   * @see [consistent-type-assertions](https://typescript-eslint.io/rules/consistent-type-assertions)
   */
  'ts/consistent-type-assertions': ConsistentTypeAssertionsRuleOptions

  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   *
   * @see [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)
   */
  'ts/consistent-type-definitions': ConsistentTypeDefinitionsRuleOptions

  /**
   * Enforce consistent usage of type exports
   *
   * @see [consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)
   */
  'ts/consistent-type-exports': ConsistentTypeExportsRuleOptions

  /**
   * Enforce consistent usage of type imports
   *
   * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
   */
  'ts/consistent-type-imports': ConsistentTypeImportsRuleOptions

  /**
   * Enforce default parameters to be last
   *
   * @see [default-param-last](https://typescript-eslint.io/rules/default-param-last)
   */
  'ts/default-param-last': DefaultParamLastRuleOptions

  /**
   * Enforce dot notation whenever possible
   *
   * @see [dot-notation](https://typescript-eslint.io/rules/dot-notation)
   */
  'ts/dot-notation': DotNotationRuleOptions

  /**
   * Require explicit return types on functions and class methods
   *
   * @see [explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)
   */
  'ts/explicit-function-return-type': ExplicitFunctionReturnTypeRuleOptions

  /**
   * Require explicit accessibility modifiers on class properties and methods
   *
   * @see [explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)
   */
  'ts/explicit-member-accessibility': ExplicitMemberAccessibilityRuleOptions

  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   *
   * @see [explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types)
   */
  'ts/explicit-module-boundary-types': ExplicitModuleBoundaryTypesRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow spacing between function identifiers and their invocations
   *
   * @see [func-call-spacing](https://typescript-eslint.io/rules/func-call-spacing)
   */
  'ts/func-call-spacing': FuncCallSpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent indentation
   *
   * @see [indent](https://typescript-eslint.io/rules/indent)
   */
  'ts/indent': IndentRuleOptions

  /**
   * Require or disallow initialization in variable declarations
   *
   * @see [init-declarations](https://typescript-eslint.io/rules/init-declarations)
   */
  'ts/init-declarations': InitDeclarationsRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   *
   * @see [key-spacing](https://typescript-eslint.io/rules/key-spacing)
   */
  'ts/key-spacing': KeySpacingRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before and after keywords
   *
   * @see [keyword-spacing](https://typescript-eslint.io/rules/keyword-spacing)
   */
  'ts/keyword-spacing': KeywordSpacingRuleOptions

  /**
   * @deprecated
   *
   * Require empty lines around comments
   *
   * @see [lines-around-comment](https://typescript-eslint.io/rules/lines-around-comment)
   */
  'ts/lines-around-comment': LinesAroundCommentRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow an empty line between class members
   *
   * @see [lines-between-class-members](https://typescript-eslint.io/rules/lines-between-class-members)
   */
  'ts/lines-between-class-members': LinesBetweenClassMembersRuleOptions

  /**
   * Enforce a maximum number of parameters in function definitions
   *
   * @see [max-params](https://typescript-eslint.io/rules/max-params)
   */
  'ts/max-params': MaxParamsRuleOptions

  /**
   * @deprecated
   *
   * Require a specific member delimiter style for interfaces and type literals
   *
   * @see [member-delimiter-style](https://typescript-eslint.io/rules/member-delimiter-style)
   */
  'ts/member-delimiter-style': MemberDelimiterStyleRuleOptions

  /**
   * Require a consistent member declaration order
   *
   * @see [member-ordering](https://typescript-eslint.io/rules/member-ordering)
   */
  'ts/member-ordering': MemberOrderingRuleOptions

  /**
   * Enforce using a particular method signature syntax
   *
   * @see [method-signature-style](https://typescript-eslint.io/rules/method-signature-style)
   */
  'ts/method-signature-style': MethodSignatureStyleRuleOptions

  /**
   * Enforce naming conventions for everything across a codebase
   *
   * @see [naming-convention](https://typescript-eslint.io/rules/naming-convention)
   */
  'ts/naming-convention': NamingConventionRuleOptions

  /**
   * Disallow generic `Array` constructors
   *
   * @see [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)
   */
  'ts/no-array-constructor': NoArrayConstructorRuleOptions

  /**
   * Disallow using the `delete` operator on array values
   *
   * @see [no-array-delete](https://typescript-eslint.io/rules/no-array-delete)
   */
  'ts/no-array-delete': NoArrayDeleteRuleOptions

  /**
   * Require `.toString()` to only be called on objects which provide useful information when stringified
   *
   * @see [no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)
   */
  'ts/no-base-to-string': NoBaseToStringRuleOptions

  /**
   * Disallow non-null assertion in locations that may be confusing
   *
   * @see [no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)
   */
  'ts/no-confusing-non-null-assertion': NoConfusingNonNullAssertionRuleOptions

  /**
   * Require expressions of type void to appear in statement position
   *
   * @see [no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression)
   */
  'ts/no-confusing-void-expression': NoConfusingVoidExpressionRuleOptions

  /**
   * Disallow duplicate class members
   *
   * @see [no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)
   */
  'ts/no-dupe-class-members': NoDupeClassMembersRuleOptions

  /**
   * Disallow duplicate enum member values
   *
   * @see [no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)
   */
  'ts/no-duplicate-enum-values': NoDuplicateEnumValuesRuleOptions

  /**
   * Disallow duplicate constituents of union or intersection types
   *
   * @see [no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)
   */
  'ts/no-duplicate-type-constituents': NoDuplicateTypeConstituentsRuleOptions

  /**
   * Disallow using the `delete` operator on computed key expressions
   *
   * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
   */
  'ts/no-dynamic-delete': NoDynamicDeleteRuleOptions

  /**
   * Disallow empty functions
   *
   * @see [no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
   */
  'ts/no-empty-function': NoEmptyFunctionRuleOptions

  /**
   * Disallow the declaration of empty interfaces
   *
   * @see [no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
   */
  'ts/no-empty-interface': NoEmptyInterfaceRuleOptions

  /**
   * Disallow the `any` type
   *
   * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
   */
  'ts/no-explicit-any': NoExplicitAnyRuleOptions

  /**
   * Disallow extra non-null assertions
   *
   * @see [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)
   */
  'ts/no-extra-non-null-assertion': NoExtraNonNullAssertionRuleOptions

  /**
   * @deprecated
   *
   * Disallow unnecessary parentheses
   *
   * @see [no-extra-parens](https://typescript-eslint.io/rules/no-extra-parens)
   */
  'ts/no-extra-parens': NoExtraParensRuleOptions

  /**
   * @deprecated
   *
   * Disallow unnecessary semicolons
   *
   * @see [no-extra-semi](https://typescript-eslint.io/rules/no-extra-semi)
   */
  'ts/no-extra-semi': NoExtraSemiRuleOptions

  /**
   * Disallow classes used as namespaces
   *
   * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
   */
  'ts/no-extraneous-class': NoExtraneousClassRuleOptions

  /**
   * Require Promise-like statements to be handled appropriately
   *
   * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
   */
  'ts/no-floating-promises': NoFloatingPromisesRuleOptions

  /**
   * Disallow iterating over an array with a for-in loop
   *
   * @see [no-for-in-array](https://typescript-eslint.io/rules/no-for-in-array)
   */
  'ts/no-for-in-array': NoForInArrayRuleOptions

  /**
   * Disallow the use of `eval()`-like methods
   *
   * @see [no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)
   */
  'ts/no-implied-eval': NoImpliedEvalRuleOptions

  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   *
   * @see [no-import-type-side-effects](https://typescript-eslint.io/rules/no-import-type-side-effects)
   */
  'ts/no-import-type-side-effects': NoImportTypeSideEffectsRuleOptions

  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   *
   * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
   */
  'ts/no-inferrable-types': NoInferrableTypesRuleOptions

  /**
   * Disallow `this` keywords outside of classes or class-like objects
   *
   * @see [no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)
   */
  'ts/no-invalid-this': NoInvalidThisRuleOptions

  /**
   * Disallow `void` type outside of generic or return types
   *
   * @see [no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type)
   */
  'ts/no-invalid-void-type': NoInvalidVoidTypeRuleOptions

  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   *
   * @see [no-loop-func](https://typescript-eslint.io/rules/no-loop-func)
   */
  'ts/no-loop-func': NoLoopFuncRuleOptions

  /**
   * Disallow literal numbers that lose precision
   *
   * @see [no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)
   */
  'ts/no-loss-of-precision': NoLossOfPrecisionRuleOptions

  /**
   * Disallow magic numbers
   *
   * @see [no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)
   */
  'ts/no-magic-numbers': NoMagicNumbersRuleOptions

  /**
   * Disallow the `void` operator except when used to discard a value
   *
   * @see [no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator)
   */
  'ts/no-meaningless-void-operator': NoMeaninglessVoidOperatorRuleOptions

  /**
   * Enforce valid definition of `new` and `constructor`
   *
   * @see [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
   */
  'ts/no-misused-new': NoMisusedNewRuleOptions

  /**
   * Disallow Promises in places not designed to handle them
   *
   * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
   */
  'ts/no-misused-promises': NoMisusedPromisesRuleOptions

  /**
   * Disallow enums from having both number and string members
   *
   * @see [no-mixed-enums](https://typescript-eslint.io/rules/no-mixed-enums)
   */
  'ts/no-mixed-enums': NoMixedEnumsRuleOptions

  /**
   * Disallow TypeScript namespaces
   *
   * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
   */
  'ts/no-namespace': NoNamespaceRuleOptions

  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   *
   * @see [no-non-null-asserted-nullish-coalescing](https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing)
   */
  'ts/no-non-null-asserted-nullish-coalescing': NoNonNullAssertedNullishCoalescingRuleOptions

  /**
   * Disallow non-null assertions after an optional chain expression
   *
   * @see [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)
   */
  'ts/no-non-null-asserted-optional-chain': NoNonNullAssertedOptionalChainRuleOptions

  /**
   * Disallow non-null assertions using the `!` postfix operator
   *
   * @see [no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
   */
  'ts/no-non-null-assertion': NoNonNullAssertionRuleOptions

  /**
   * Disallow variable redeclaration
   *
   * @see [no-redeclare](https://typescript-eslint.io/rules/no-redeclare)
   */
  'ts/no-redeclare': NoRedeclareRuleOptions

  /**
   * Disallow members of unions and intersections that do nothing or override type information
   *
   * @see [no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)
   */
  'ts/no-redundant-type-constituents': NoRedundantTypeConstituentsRuleOptions

  /**
   * Disallow invocation of `require()`
   *
   * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
   */
  'ts/no-require-imports': NoRequireImportsRuleOptions

  /**
   * Disallow specified modules when loaded by `import`
   *
   * @see [no-restricted-imports](https://typescript-eslint.io/rules/no-restricted-imports)
   */
  'ts/no-restricted-imports': NoRestrictedImportsRuleOptions

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   *
   * @see [no-shadow](https://typescript-eslint.io/rules/no-shadow)
   */
  'ts/no-shadow': NoShadowRuleOptions

  /**
   * Disallow aliasing `this`
   *
   * @see [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
   */
  'ts/no-this-alias': NoThisAliasRuleOptions

  /**
   * Disallow throwing literals as exceptions
   *
   * @see [no-throw-literal](https://typescript-eslint.io/rules/no-throw-literal)
   */
  'ts/no-throw-literal': NoThrowLiteralRuleOptions

  /**
   * @deprecated
   *
   * Disallow type aliases
   *
   * @see [no-type-alias](https://typescript-eslint.io/rules/no-type-alias)
   */
  'ts/no-type-alias': NoTypeAliasRuleOptions

  /**
   * Disallow unnecessary equality comparisons against boolean literals
   *
   * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
   */
  'ts/no-unnecessary-boolean-literal-compare': NoUnnecessaryBooleanLiteralCompareRuleOptions

  /**
   * Disallow conditionals where the type is always truthy or always falsy
   *
   * @see [no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)
   */
  'ts/no-unnecessary-condition': NoUnnecessaryConditionRuleOptions

  /**
   * Disallow unnecessary namespace qualifiers
   *
   * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
   */
  'ts/no-unnecessary-qualifier': NoUnnecessaryQualifierRuleOptions

  /**
   * Disallow type arguments that are equal to the default
   *
   * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
   */
  'ts/no-unnecessary-type-arguments': NoUnnecessaryTypeArgumentsRuleOptions

  /**
   * Disallow type assertions that do not change the type of an expression
   *
   * @see [no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)
   */
  'ts/no-unnecessary-type-assertion': NoUnnecessaryTypeAssertionRuleOptions

  /**
   * Disallow unnecessary constraints on generic types
   *
   * @see [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
   */
  'ts/no-unnecessary-type-constraint': NoUnnecessaryTypeConstraintRuleOptions

  /**
   * Disallow calling a function with a value with type `any`
   *
   * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
   */
  'ts/no-unsafe-argument': NoUnsafeArgumentRuleOptions

  /**
   * Disallow assigning a value with type `any` to variables and properties
   *
   * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
   */
  'ts/no-unsafe-assignment': NoUnsafeAssignmentRuleOptions

  /**
   * Disallow calling a value with type `any`
   *
   * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
   */
  'ts/no-unsafe-call': NoUnsafeCallRuleOptions

  /**
   * Disallow unsafe declaration merging
   *
   * @see [no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)
   */
  'ts/no-unsafe-declaration-merging': NoUnsafeDeclarationMergingRuleOptions

  /**
   * Disallow comparing an enum value with a non-enum value
   *
   * @see [no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)
   */
  'ts/no-unsafe-enum-comparison': NoUnsafeEnumComparisonRuleOptions

  /**
   * Disallow member access on a value with type `any`
   *
   * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
   */
  'ts/no-unsafe-member-access': NoUnsafeMemberAccessRuleOptions

  /**
   * Disallow returning a value with type `any` from a function
   *
   * @see [no-unsafe-return](https://typescript-eslint.io/rules/no-unsafe-return)
   */
  'ts/no-unsafe-return': NoUnsafeReturnRuleOptions

  /**
   * Require unary negation to take a number
   *
   * @see [no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus)
   */
  'ts/no-unsafe-unary-minus': NoUnsafeUnaryMinusRuleOptions

  /**
   * Disallow unused expressions
   *
   * @see [no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)
   */
  'ts/no-unused-expressions': NoUnusedExpressionsRuleOptions

  /**
   * Disallow unused variables
   *
   * @see [no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
   */
  'ts/no-unused-vars': NoUnusedVarsRuleOptions

  /**
   * Disallow the use of variables before they are defined
   *
   * @see [no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)
   */
  'ts/no-use-before-define': NoUseBeforeDefineRuleOptions

  /**
   * Disallow unnecessary constructors
   *
   * @see [no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)
   */
  'ts/no-useless-constructor': NoUselessConstructorRuleOptions

  /**
   * Disallow empty exports that don't change anything in a module file
   *
   * @see [no-useless-empty-export](https://typescript-eslint.io/rules/no-useless-empty-export)
   */
  'ts/no-useless-empty-export': NoUselessEmptyExportRuleOptions

  /**
   * Disallow unnecessary template literals
   *
   * @see [no-useless-template-literals](https://typescript-eslint.io/rules/no-useless-template-literals)
   */
  'ts/no-useless-template-literals': NoUselessTemplateLiteralsRuleOptions

  /**
   * Disallow `require` statements except in import statements
   *
   * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
   */
  'ts/no-var-requires': NoVarRequiresRuleOptions

  /**
   * Enforce non-null assertions over explicit type casts
   *
   * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
   */
  'ts/non-nullable-type-assertion-style': NonNullableTypeAssertionStyleRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing inside braces
   *
   * @see [object-curly-spacing](https://typescript-eslint.io/rules/object-curly-spacing)
   */
  'ts/object-curly-spacing': ObjectCurlySpacingRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow padding lines between statements
   *
   * @see [padding-line-between-statements](https://typescript-eslint.io/rules/padding-line-between-statements)
   */
  'ts/padding-line-between-statements': PaddingLineBetweenStatementsRuleOptions

  /**
   * Require or disallow parameter properties in class constructors
   *
   * @see [parameter-properties](https://typescript-eslint.io/rules/parameter-properties)
   */
  'ts/parameter-properties': ParameterPropertiesRuleOptions

  /**
   * Enforce the use of `as const` over literal type
   *
   * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
   */
  'ts/prefer-as-const': PreferAsConstRuleOptions

  /**
   * Require destructuring from arrays and/or objects
   *
   * @see [prefer-destructuring](https://typescript-eslint.io/rules/prefer-destructuring)
   */
  'ts/prefer-destructuring': PreferDestructuringRuleOptions

  /**
   * Require each enum member value to be explicitly initialized
   *
   * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
   */
  'ts/prefer-enum-initializers': PreferEnumInitializersRuleOptions

  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   *
   * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
   */
  'ts/prefer-for-of': PreferForOfRuleOptions

  /**
   * Enforce using function types instead of interfaces with call signatures
   *
   * @see [prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)
   */
  'ts/prefer-function-type': PreferFunctionTypeRuleOptions

  /**
   * Enforce `includes` method over `indexOf` method
   *
   * @see [prefer-includes](https://typescript-eslint.io/rules/prefer-includes)
   */
  'ts/prefer-includes': PreferIncludesRuleOptions

  /**
   * Require all enum members to be literal values
   *
   * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
   */
  'ts/prefer-literal-enum-member': PreferLiteralEnumMemberRuleOptions

  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   *
   * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
   */
  'ts/prefer-namespace-keyword': PreferNamespaceKeywordRuleOptions

  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   *
   * @see [prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
   */
  'ts/prefer-nullish-coalescing': PreferNullishCoalescingRuleOptions

  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   *
   * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
   */
  'ts/prefer-optional-chain': PreferOptionalChainRuleOptions

  /**
   * Require using Error objects as Promise rejection reasons
   *
   * @see [prefer-promise-reject-errors](https://typescript-eslint.io/rules/prefer-promise-reject-errors)
   */
  'ts/prefer-promise-reject-errors': PreferPromiseRejectErrorsRuleOptions

  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   *
   * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
   */
  'ts/prefer-readonly': PreferReadonlyRuleOptions

  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   *
   * @see [prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)
   */
  'ts/prefer-readonly-parameter-types': PreferReadonlyParameterTypesRuleOptions

  /**
   * Enforce using type parameter when calling `Array#reduce` instead of casting
   *
   * @see [prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)
   */
  'ts/prefer-reduce-type-parameter': PreferReduceTypeParameterRuleOptions

  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   *
   * @see [prefer-regexp-exec](https://typescript-eslint.io/rules/prefer-regexp-exec)
   */
  'ts/prefer-regexp-exec': PreferRegexpExecRuleOptions

  /**
   * Enforce that `this` is used when only `this` type is returned
   *
   * @see [prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type)
   */
  'ts/prefer-return-this-type': PreferReturnThisTypeRuleOptions

  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   *
   * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
   */
  'ts/prefer-string-starts-ends-with': PreferStringStartsEndsWithRuleOptions

  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   *
   * @see [prefer-ts-expect-error](https://typescript-eslint.io/rules/prefer-ts-expect-error)
   */
  'ts/prefer-ts-expect-error': PreferTsExpectErrorRuleOptions

  /**
   * Require any function or method that returns a Promise to be marked async
   *
   * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
   */
  'ts/promise-function-async': PromiseFunctionAsyncRuleOptions

  /**
   * @deprecated
   *
   * Enforce the consistent use of either backticks, double, or single quotes
   *
   * @see [quotes](https://typescript-eslint.io/rules/quotes)
   */
  'ts/quotes': QuotesRuleOptions

  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   *
   * @see [require-array-sort-compare](https://typescript-eslint.io/rules/require-array-sort-compare)
   */
  'ts/require-array-sort-compare': RequireArraySortCompareRuleOptions

  /**
   * Disallow async functions which have no `await` expression
   *
   * @see [require-await](https://typescript-eslint.io/rules/require-await)
   */
  'ts/require-await': RequireAwaitRuleOptions

  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   *
   * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
   */
  'ts/restrict-plus-operands': RestrictPlusOperandsRuleOptions

  /**
   * Enforce template literal expressions to be of `string` type
   *
   * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
   */
  'ts/restrict-template-expressions': RestrictTemplateExpressionsRuleOptions

  /**
   * Enforce consistent returning of awaited values
   *
   * @see [return-await](https://typescript-eslint.io/rules/return-await)
   */
  'ts/return-await': ReturnAwaitRuleOptions

  /**
   * @deprecated
   *
   * Require or disallow semicolons instead of ASI
   *
   * @see [semi](https://typescript-eslint.io/rules/semi)
   */
  'ts/semi': SemiRuleOptions

  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   *
   * @see [sort-type-constituents](https://typescript-eslint.io/rules/sort-type-constituents)
   */
  'ts/sort-type-constituents': SortTypeConstituentsRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before blocks
   *
   * @see [space-before-blocks](https://typescript-eslint.io/rules/space-before-blocks)
   */
  'ts/space-before-blocks': SpaceBeforeBlocksRuleOptions

  /**
   * @deprecated
   *
   * Enforce consistent spacing before function parenthesis
   *
   * @see [space-before-function-paren](https://typescript-eslint.io/rules/space-before-function-paren)
   */
  'ts/space-before-function-paren': SpaceBeforeFunctionParenRuleOptions

  /**
   * @deprecated
   *
   * Require spacing around infix operators
   *
   * @see [space-infix-ops](https://typescript-eslint.io/rules/space-infix-ops)
   */
  'ts/space-infix-ops': SpaceInfixOpsRuleOptions

  /**
   * Disallow certain types in boolean expressions
   *
   * @see [strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)
   */
  'ts/strict-boolean-expressions': StrictBooleanExpressionsRuleOptions

  /**
   * Require switch-case statements to be exhaustive
   *
   * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
   */
  'ts/switch-exhaustiveness-check': SwitchExhaustivenessCheckRuleOptions

  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   *
   * @see [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)
   */
  'ts/triple-slash-reference': TripleSlashReferenceRuleOptions

  /**
   * @deprecated
   *
   * Require consistent spacing around type annotations
   *
   * @see [type-annotation-spacing](https://typescript-eslint.io/rules/type-annotation-spacing)
   */
  'ts/type-annotation-spacing': TypeAnnotationSpacingRuleOptions

  /**
   * Require type annotations in certain places
   *
   * @see [typedef](https://typescript-eslint.io/rules/typedef)
   */
  'ts/typedef': TypedefRuleOptions

  /**
   * Enforce unbound methods are called with their expected scope
   *
   * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
   */
  'ts/unbound-method': UnboundMethodRuleOptions

  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   *
   * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
   */
  'ts/unified-signatures': UnifiedSignaturesRuleOptions

}
