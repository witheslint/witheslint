type Schema0 = ({
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
} | {
  eventHandlerPrefix?: string
  eventHandlerPropPrefix?: false
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
} | {
  eventHandlerPrefix?: false
  eventHandlerPropPrefix?: string
  checkLocalVariables?: boolean
  checkInlineFunction?: boolean
} | {
  checkLocalVariables?: boolean
} | {
  checkInlineFunction?: boolean
})

export type JsxHandlerNamesRuleOptions = [Schema0]
