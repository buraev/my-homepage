import type { DetailedHTMLProps, HTMLAttributes } from "react"
import { forwardRef } from "react"
import { clsx as cx } from "clsx"

/**
 * интерфейс компонента контейнера
 * @see Container
 * @todo нужно сделать:
 *
 *
 */
export type ContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  /**
   * className для контейнера
   * @type {string}
   */
  className?: string
  /**
   * параметр задающий тип элемента, который будет отрисован
   * @type {React.ElementType}
   * @default - `div`
   */
  as?: React.ElementType
}

/**
 * Компонент для отрисовки контейнера
 * @param {ContainerProps} props - пропсы для контейнера
 * @return {JSX.Element}
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        {...props}
        className={cx("mx-auto w-full", className)}
      />
    )
  },
)

Container.displayName = "UI/Container"
