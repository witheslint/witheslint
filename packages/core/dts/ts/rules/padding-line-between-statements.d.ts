type PaddingType = ('always' | 'any' | 'never')
type StatementType = (('*' | 'block-like' | 'block' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'directive' | 'do' | 'empty' | 'export' | 'exports' | 'expression' | 'for' | 'function' | 'if' | 'iife' | 'import' | 'interface' | 'let' | 'multiline-block-like' | 'multiline-const' | 'multiline-expression' | 'multiline-let' | 'multiline-var' | 'require' | 'return' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'switch' | 'throw' | 'try' | 'type' | 'var' | 'while' | 'with') | [('*' | 'block-like' | 'block' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'directive' | 'do' | 'empty' | 'export' | 'exports' | 'expression' | 'for' | 'function' | 'if' | 'iife' | 'import' | 'interface' | 'let' | 'multiline-block-like' | 'multiline-const' | 'multiline-expression' | 'multiline-let' | 'multiline-var' | 'require' | 'return' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'switch' | 'throw' | 'try' | 'type' | 'var' | 'while' | 'with'), ...(('*' | 'block-like' | 'block' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'directive' | 'do' | 'empty' | 'export' | 'exports' | 'expression' | 'for' | 'function' | 'if' | 'iife' | 'import' | 'interface' | 'let' | 'multiline-block-like' | 'multiline-const' | 'multiline-expression' | 'multiline-let' | 'multiline-var' | 'require' | 'return' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'switch' | 'throw' | 'try' | 'type' | 'var' | 'while' | 'with'))[]])
type Schema0 = {
  blankLine: PaddingType
  next: StatementType
  prev: StatementType
}[]

export type PaddingLineBetweenStatementsRuleOptions = Schema0
