export {}

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface RouteChildren {
    name: string
    layout?: string
    component?: JSX.Element
    icon: JSX.Element | string
    path?: string | undefined
    secondary?: boolean
    children?: RouteChildren[]
  }

  interface RoutesType {
    subTitle?: string
    children: RouteChildren[]
  }
}
