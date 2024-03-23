type Schema0 = ({
  maximum?: {
    single?: number
    multi?: number
    [k: string]: any
  }
} | {
  maximum?: number
  when?: ('always' | 'multiline')
})

export type JsxMaxPropsPerLineRuleOptions = [Schema0]
