type PaddingType = ('any' | 'never' | 'always')
type StatementType = (('*' | 'block-like' | 'exports' | 'require' | 'directive' | 'expression' | 'iife' | 'multiline-block-like' | 'multiline-expression' | 'multiline-const' | 'multiline-let' | 'multiline-var' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'block' | 'empty' | 'function' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'do' | 'export' | 'for' | 'if' | 'import' | 'let' | 'return' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with' | 'interface' | 'type') | [('*' | 'block-like' | 'exports' | 'require' | 'directive' | 'expression' | 'iife' | 'multiline-block-like' | 'multiline-expression' | 'multiline-const' | 'multiline-let' | 'multiline-var' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'block' | 'empty' | 'function' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'do' | 'export' | 'for' | 'if' | 'import' | 'let' | 'return' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with' | 'interface' | 'type'), ...(('*' | 'block-like' | 'exports' | 'require' | 'directive' | 'expression' | 'iife' | 'multiline-block-like' | 'multiline-expression' | 'multiline-const' | 'multiline-let' | 'multiline-var' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'block' | 'empty' | 'function' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'do' | 'export' | 'for' | 'if' | 'import' | 'let' | 'return' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with' | 'interface' | 'type'))[]])
type Schema0 = {
  blankLine: PaddingType
  prev: StatementType
  next: StatementType
}[]

export type PaddingLineBetweenStatementsRuleOptions = Schema0
