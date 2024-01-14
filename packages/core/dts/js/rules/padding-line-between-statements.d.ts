type PaddingType = ('always' | 'any' | 'never')
type StatementType = (('*' | 'block-like' | 'block' | 'break' | 'case' | 'cjs-export' | 'cjs-import' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'directive' | 'do' | 'empty' | 'export' | 'expression' | 'for' | 'function' | 'if' | 'iife' | 'import' | 'let' | 'multiline-block-like' | 'multiline-const' | 'multiline-expression' | 'multiline-let' | 'multiline-var' | 'return' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with') | [('*' | 'block-like' | 'block' | 'break' | 'case' | 'cjs-export' | 'cjs-import' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'directive' | 'do' | 'empty' | 'export' | 'expression' | 'for' | 'function' | 'if' | 'iife' | 'import' | 'let' | 'multiline-block-like' | 'multiline-const' | 'multiline-expression' | 'multiline-let' | 'multiline-var' | 'return' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with'), ...(('*' | 'block-like' | 'block' | 'break' | 'case' | 'cjs-export' | 'cjs-import' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'directive' | 'do' | 'empty' | 'export' | 'expression' | 'for' | 'function' | 'if' | 'iife' | 'import' | 'let' | 'multiline-block-like' | 'multiline-const' | 'multiline-expression' | 'multiline-let' | 'multiline-var' | 'return' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with'))[]])
type Schema0 = {
  blankLine: PaddingType
  next: StatementType
  prev: StatementType
}[]

export type PaddingLineBetweenStatementsRuleOptions = Schema0
