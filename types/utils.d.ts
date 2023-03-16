// declare module 'delegate'
declare module 'delegate' {
  declare function delegate(
    elements: Element | String | Array,
    selector: string,
    type: string,
    callback: Function,
    useCapture: boolean,
  ): Object
  export = delegate
}

declare module '@/utils/types'
declare module '@/utils'
