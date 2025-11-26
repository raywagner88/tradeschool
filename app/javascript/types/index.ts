export type Flash = {
  notice?: string
  alert?: string
}

export type NavigationMenuItem = {
  label: string
  icon?: string
  to?: string
  badge?: string
  target?: string
  defaultOpen?: boolean
  type?: string
  exact?: boolean
  children?: NavigationMenuItem[]
  onSelect?: () => void
}

export type SharedProps = {
  flash: Flash
  navigationLinks?: NavigationMenuItem[][]
}
