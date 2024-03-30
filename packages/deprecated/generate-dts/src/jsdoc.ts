/**
 * Simple class helper to build a JSDoc comment.
 */
export class JsDocBuilder {
  private readonly content: string[] = []

  public add(line?: string): JsDocBuilder {
    if (line) {
      this.content.push(line)
    }
    return this
  }

  public static build(): JsDocBuilder {
    return new JsDocBuilder()
  }

  public output(): string {
    return [
      //
      '/**',
      ...this.content.map(line => ` * ${line}`),
      ' */',
    ].join('\n')
  }
}
