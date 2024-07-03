import { forwardRef } from "react"
import { cva } from "class-variance-authority"

import { cx } from "../../utils"

import { Size, Variant } from "./constants"

import ArrowLeftIcon from "./assets/arrow-left.svg"

export interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconClassName?: string
  variant?: "outline" | "shadow"
  size?: "lg" | "md" | "sm" | "xs"
  orientation?: "bottom" | "left" | "right" | "top"
}

const variants = cva(
  "flex items-start justify-center border rounded-full bg-white  text-gray-600 transition-all duration-300 disabled:text-gray-300",
  {
    variants: {
      variant: {
        shadow:
          "shadow-button hover:shadow-button_hover border-transparent disabled:hover:shadow-button :",
        outline:
          "border-gray-200 hover:border-green disabled:hover:border-gray-200",
      },
      size: {
        xs: "p-1.5",
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
      },
    },
    defaultVariants: {
      variant: "shadow",
    },
  },
)

const arrowVariant = cva("shrink-0", {
  variants: {
    orientation: {
      bottom: "-rotate-90",
      top: "rotate-90",
      right: "rotate-180",
      left: "",
    },
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
    },
  },
})

/**
 * Компонент кнопки стрелка в кружке
 *
 * @component
 *
 * @property {string} props.className - дополнительные стили
 * @property {string} props.iconClassName - дополнительные стили
 * @property {Size} props.size - размер кнопки
 * @property {Variant} props.variant - вариант
 * @property {Orientation} props.orientation - ориентация
 * @property {() => void} props.onClick - обработчик
 *
 * @public
 *
 * @example
 * <ArrowButton
 *   size="md"
 *   variant="outline"
 *   orientation="left"
 *   onClick={() => console.log('click')}
 * />
 */
export const ArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>(
  (props, ref) => {
    const {
      className,
      orientation,
      iconClassName,
      size = Size.Medium,
      variant = Variant.Shadow,
      ...restProps
    } = props
    return (
      <button
        ref={ref}
        {...restProps}
        className={cx(variants({ variant, size, className }))}
      >
        <ArrowLeftIcon
          className={cx(
            arrowVariant({ orientation, size, className: iconClassName }),
          )}
        />
      </button>
    )
  },
)
