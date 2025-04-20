import { forwardRef } from "react"
import { cva } from "class-variance-authority"

import { cx } from "../../utils"

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /**
   * Флаг состояния "загрузка"
   * @default false
   * @type {boolean}
   * @optional
   */
  pending?: boolean
  /**
   * Флаг неактивной кнопки
   * @default false
   * @type {boolean}
   * @optional
   */
  disabled?: boolean
  /**
   * размер кнопки
   * @default 'md'
   * @type {'sm' | 'md'}
   * @optional
   */
  size?: "md" | "sm"
  children: React.ReactNode
  /**
   * цвет кнопки
   * @default 'green'
   * @type {'green' | 'brand'}
   * @optional
   */
  color?: "brand" | "green"
  /**
   * вариант кнопки
   * @default 'primary'
   * @type {'primary' | 'secondary' | 'ghost'}
   * @optional
   */
  variant?: "ghost" | "primary" | "secondary"
  /**
   * будет удален на минорной версии
   * @deprecated
   */
  colors?: "brand" | "green"
}

/**
 * Конфирунация базового набора цветов
 */
export const variants = cva(
  "hover:transition hover:duration-150 hover:delay-50 hover:ease-in-out flex justify-center items-center font-semibold border disabled:!outline-none hover:cursor-pointer hover:-translate-y-0.5 hover:scale-100 bg-[#d42a02] shadow-[rgba(0,0,0,0.377)_10px_10px_8px,#fb702c_2px_2px_10px_0px_inset,#d42a02_-4px_-4px_1px_0px_inset] transition-[0.1s] duration-[ease-in-out] active:translate-y-[2px] active:shadow-[rgba(0,0,0,0.377)_0px_0px_0px,inset_0.5px_0.5px_4px_#000000,#d42a02_-3.2px_-3.2px_8px_0px_inset]",
  {
    variants: {
      size: {
        md: "py-3 px-8 rounded-2xl gap-2 ",
        sm: "px-4 py-2 rounded-xl gap-2.5",
      },
      color: {
        green: [
          "border-secondaryMain hover:border-secondaryLight active:border-secondaryLight hover:bg-secondaryLight hover:text-secondaryLight",
          "data-ghost:text-green data-ghost:hover:text-green-hover data-ghost:active:text-green-active",
        ],

        brand: "",
      },
      variant: {
        primary: "disabled:!bg-gray-200 ",
        secondary: "",
        ghost: "!border-white !bg-white",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "ghost", "secondary"],
        className: "disabled:!text-gray-400 disabled:cursor-default",
      },
      {
        variant: ["primary", "secondary"],
        className:
          "disabled:!border-gray-200 disabled:hover:!border-gray-200 disabled:active:!border-gray-200",
      },
      {
        variant: ["primary", "ghost"],
        className: "focus:outline-none active:outline-none outline-none",
      },
      { variant: ["secondary"], className: "!bg-opacity-0" },
    ],

    defaultVariants: {
      size: "md",
      color: "green",
      variant: "primary",
    },
  },
)

/**
 * Компонент Кнопки.
 *
 * Принимает все стандартные свойства HTML кнопки, а также дополнительные свойства
 *
 * @public
 *
 * @component
 *
 * @property {boolean} [pending] - флаг состояния "загрузка"
 *
 * @property {boolean} [disabled] - флаг неактивной кнопки
 *
 * @property {Size} [size = md] - размер кнопки
 *
 * @property {Variant} [variant = primary] - вариант
 *
 * @property {() => void} [onClick] - обработчик
 *
 * @property {string} [className] - дополнительные стили
 *
 * @property {string} [colors = green] - цвет кнопки
 *
 * @property {string} [color] - цвет кнопки
 *
 * @property {string} [type = button] - тип кнопки
 *
 * @example
 *
 * ```tsx
 * import { Button } from '@esia-frontend/ui-kit';
 *
 * <Button
 *   size="md"
 *   variant="primary"
 *   onClick={() => console.log('click')}>
 *    Жмакнуть
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      colors,
      pending,
      variant,
      disabled,
      children,
      className,
      size = "md",
      color = "green",
      type = "button",
      ...rest
    } = props

    const buttonStyles = variants({
      size,
      variant,
      className,
      color: colors ?? color,
    })

    return (
      <button
        ref={ref}
        {...rest}
        aria-disabled={disabled || pending}
        className={cx(buttonStyles)}
        data-variant={variant}
        disabled={disabled || pending}
        type={type}
      >
        {pending ? (
          <div className="flex items-center justify-center gap-x-2 py-2">
            <div className="animate-scale-pulse-color size-1 rounded-full delay-100" />
            <div className="animate-scale-pulse-color size-1 rounded-full delay-300" />
            <div className="animate-scale-pulse-color size-1 rounded-full delay-500" />
          </div>
        ) : (
          children
        )}
      </button>
    )
  },
)
