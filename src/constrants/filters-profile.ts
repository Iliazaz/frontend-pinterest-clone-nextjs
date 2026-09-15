export const categoryFilters = [
  {
    label: 'Пины',
    value: 'pins',
  },
  {
    label: 'Доски',
    value: 'board',
  },
] as const

export const sortFilters = [
  {
    label: 'Сохраненные',
    value: 'saved',
  },
  {
    label: 'Мои',
    value: 'mine',
  },
  {
    label: 'Приватные',
    value: 'isPrivate',
  },
] as const
