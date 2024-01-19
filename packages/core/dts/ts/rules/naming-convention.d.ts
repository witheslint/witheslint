type FormatOptionsConfig = (PredefinedFormats[] | null)
type PredefinedFormats = ('camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE')
type UnderscoreOptions = ('forbid' | 'allow' | 'require' | 'requireDouble' | 'allowDouble' | 'allowSingleOrDouble')
type PrefixSuffixConfig = string[]
type TypeModifiers = ('boolean' | 'string' | 'number' | 'function' | 'array')
type Schema0 = ({
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('const' | 'readonly' | 'static' | 'public' | 'protected' | 'private' | '#private' | 'abstract' | 'destructured' | 'global' | 'exported' | 'unused' | 'requiresQuotes' | 'override' | 'async' | 'default' | 'namespace')[]
  prefix?: PrefixSuffixConfig
  selector: ('default' | 'variableLike' | 'memberLike' | 'typeLike' | 'method' | 'property' | 'variable' | 'function' | 'parameter' | 'parameterProperty' | 'accessor' | 'enumMember' | 'classMethod' | 'objectLiteralMethod' | 'typeMethod' | 'classProperty' | 'objectLiteralProperty' | 'typeProperty' | 'class' | 'interface' | 'typeAlias' | 'enum' | 'typeParameter' | 'import')[]
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('const' | 'readonly' | 'static' | 'public' | 'protected' | 'private' | '#private' | 'abstract' | 'destructured' | 'global' | 'exported' | 'unused' | 'requiresQuotes' | 'override' | 'async' | 'default' | 'namespace')[]
  prefix?: PrefixSuffixConfig
  selector: 'default'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('unused' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'variableLike'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('const' | 'destructured' | 'exported' | 'global' | 'unused' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'variable'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('exported' | 'global' | 'unused' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'function'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('destructured' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'parameter'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'private' | '#private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static' | 'override' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'memberLike'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'private' | '#private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static' | 'override')[]
  prefix?: PrefixSuffixConfig
  selector: 'classProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('public' | 'requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'objectLiteralProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('public' | 'readonly' | 'requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('private' | 'protected' | 'public' | 'readonly')[]
  prefix?: PrefixSuffixConfig
  selector: 'parameterProperty'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'private' | '#private' | 'protected' | 'public' | 'readonly' | 'requiresQuotes' | 'static' | 'override' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'property'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'private' | '#private' | 'protected' | 'public' | 'requiresQuotes' | 'static' | 'override' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'classMethod'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('public' | 'requiresQuotes' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'objectLiteralMethod'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('public' | 'requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeMethod'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'private' | '#private' | 'protected' | 'public' | 'requiresQuotes' | 'static' | 'override' | 'async')[]
  prefix?: PrefixSuffixConfig
  selector: 'method'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'private' | 'protected' | 'public' | 'requiresQuotes' | 'static' | 'override')[]
  prefix?: PrefixSuffixConfig
  selector: 'accessor'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
  types?: TypeModifiers[]
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('requiresQuotes')[]
  prefix?: PrefixSuffixConfig
  selector: 'enumMember'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeLike'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('abstract' | 'exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'class'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'interface'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeAlias'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('exported' | 'unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'enum'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('unused')[]
  prefix?: PrefixSuffixConfig
  selector: 'typeParameter'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
} | {
  custom?: MatchRegexConfig
  failureMessage?: string
  filter?: (string | MatchRegexConfig)
  format: FormatOptionsConfig
  leadingUnderscore?: UnderscoreOptions
  modifiers?: ('default' | 'namespace')[]
  prefix?: PrefixSuffixConfig
  selector: 'import'
  suffix?: PrefixSuffixConfig
  trailingUnderscore?: UnderscoreOptions
})[]

interface MatchRegexConfig {
  match: boolean
  regex: string
}

export type NamingConventionRuleOptions = Schema0
