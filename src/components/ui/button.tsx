import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Базовые стили (применяются ко всем кнопкам)
  [
    'inline-flex shrink-0 items-center justify-center',
    'font-semibold whitespace-nowrap',
    'transition-all duration-200 ease-in-out',
    'outline-none select-none',
    'focus-visible:ring-2 focus-visible:ring-pinterest-red/40 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        // 🔴 Основная красная кнопка (Сохранить, Войти)
        default: [
          'bg-pinterest-red text-white',
          'hover:bg-pinterest-red-hover',
          'active:scale-[0.98]',
          'rounded-lg',
          'cursor-pointer'
        ],

        // ⚪ Вторичная серая кнопка (Подписаться, Отмена)
        secondary: [
          'bg-pinterest-gray-light text-pinterest-black',
          'hover:bg-gray-200',
          'active:scale-[0.98]',
          'rounded-full',
          'cursor-pointer'
        ],

        // 🔲 Кнопка с обводкой (Нейтральные действия)
        outline: [
          'border border-pinterest-gray-border bg-white text-pinterest-black',
          'hover:bg-pinterest-gray-light',
          'rounded-xl',
        ],

        // 👻 Прозрачная (Иконки, меню)
        ghost: [
          'text-pinterest-black',
          'hover:bg-pinterest-gray-light',
          'rounded-full',
        ],

        // ❌ Удаление
        destructive: [
          'bg-red-50 text-red-600',
          'hover:bg-red-100',
          'rounded-xl',
        ],

        // 🔗 Текстовая ссылка
        link: [
          'text-pinterest-black underline-offset-4',
          'hover:underline',
          'p-0 h-auto',
        ],
      },

      size: {
        // Стандартная кнопка
        default: 'h-10 px-4 py-2 text-sm gap-2 [&_svg]:size-4',

        // Маленькая (теги, фильтры)
        xs: 'h-7 px-2.5 text-xs gap-1 rounded-full [&_svg]:size-3',

        // Компактная (внутри карточек)
        sm: 'h-8 px-3 text-sm gap-1.5 [&_svg]:size-3.5',

        // Крупная (CTA-кнопки)
        lg: 'h-12 px-6 text-base gap-2 [&_svg]:size-5',

        // На всю ширину (формы, модалки)
        xl: 'h-12 w-full px-6 text-base gap-2 [&_svg]:size-5',

        // Для форм авторизации (жирная, на всю ширину)
        auth: 'h-12 w-full px-6 text-[15px] gap-2 [&_svg]:size-5',

        // Иконки
        icon: 'size-10 [&_svg]:size-5',
        'icon-xs': 'size-7 [&_svg]:size-3.5',
        'icon-sm': 'size-8 [&_svg]:size-4',
        'icon-lg': 'size-12 [&_svg]:size-5',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
