import {
  Bell,
  House,
  LayoutPanelLeft,
  MessageCircleMore,
  SquarePlus,
} from 'lucide-react'
import { INavItem } from '../types/types'

export const navigate: INavItem[] = [
  { name: 'Главная', link: '/', icon: <House />, panel: null },
  {
    name: 'Ваши доски',
    link: '/profile',
    icon: <LayoutPanelLeft />,
    panel: null,
  },
  { name: 'Создать', icon: <SquarePlus />, panel: 'create' },
  { name: 'Обновления', icon: <Bell />, panel: 'notifications' },
  {
    name: 'Сообщения',
    icon: <MessageCircleMore />,
    panel: 'messages',
  },
]
