type PaddingType = ('any' | 'never' | 'always')
type StatementType = (('*' | 'block-like' | 'cjs-export' | 'cjs-import' | 'directive' | 'expression' | 'iife' | 'multiline-block-like' | 'multiline-expression' | 'multiline-const' | 'multiline-let' | 'multiline-var' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'block' | 'empty' | 'function' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'do' | 'export' | 'for' | 'if' | 'import' | 'let' | 'return' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with') | [('*' | 'block-like' | 'cjs-export' | 'cjs-import' | 'directive' | 'expression' | 'iife' | 'multiline-block-like' | 'multiline-expression' | 'multiline-const' | 'multiline-let' | 'multiline-var' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'block' | 'empty' | 'function' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'do' | 'export' | 'for' | 'if' | 'import' | 'let' | 'return' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with'), ...(('*' | 'block-like' | 'cjs-export' | 'cjs-import' | 'directive' | 'expression' | 'iife' | 'multiline-block-like' | 'multiline-expression' | 'multiline-const' | 'multiline-let' | 'multiline-var' | 'singleline-const' | 'singleline-let' | 'singleline-var' | 'block' | 'empty' | 'function' | 'break' | 'case' | 'class' | 'const' | 'continue' | 'debugger' | 'default' | 'do' | 'export' | 'for' | 'if' | 'import' | 'let' | 'return' | 'switch' | 'throw' | 'try' | 'var' | 'while' | 'with'))[]])
type Schema0 = {
  blankLine: PaddingType
  next: StatementType
  prev: StatementType
}[]

export type PaddingLineBetweenStatementsRuleOptions = Schema0
