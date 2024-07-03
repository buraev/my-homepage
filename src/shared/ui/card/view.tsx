import type { FC, MouseEventHandler, ReactNode } from "react"
import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"
import type { LinkProps } from "next/link"
import Link from "next/link"

import { cx } from "../../utils"

type Props = {
  className?: string
  children?: ReactNode | ReactNode[]
  href?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

type CardProps = Props & (HTMLMotionProps<"div"> | LinkProps)

export const Card: FC<CardProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  if (props.href) {
    return (
      <Link
        className={cx(
          "shadow-card hover:shadow-card-hover transition-shadow duration-300",
          className,
        )}
        {...(props as LinkProps)}
      >
        {children}
      </Link>
    )
  }
  return (
    <motion.div
      className={cx(
        "shadow-card hover:shadow-card-hover transition-shadow duration-300",
        className,
      )}
      onClick={onClick}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  )
}
