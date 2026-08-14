export type PanelType =
  | 'create'
  | 'notifications'
  | 'messages'
  | 'setting'
  | null

export interface ISidebar {
  className?: string
}

export interface ISidebar {
  className?: string
}

export interface NavigateProps {
  handlePanelClick: (panel: PanelType) => void
  className?: string
}

export interface INavItem {
  name: string
  link?: string
  icon: React.ReactNode
  panel: PanelType
}
