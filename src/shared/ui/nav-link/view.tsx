import type { ReactNode } from "react"
import type { LinkProps } from "next/link"
import Link from "next/link"
import { useRouter } from "next/router"

import { cx } from "@/shared/utils"

type NavLinkProps = LinkProps & {
  exact?: boolean
  className?: string
  children?: ReactNode
  activeClassName?: string
}

export const NavLink = ({
  href,
  exact,
  children,
  className,
  activeClassName = "",
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter()

  const isActive = href === asPath ? true : false

  return (
    <Link
      className={cx(className, { [activeClassName]: isActive })}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
