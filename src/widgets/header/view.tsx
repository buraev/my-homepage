import Link from "next/link"

import { Container } from "../../shared/ui/container"
import { NavLink } from "../../shared/ui/nav-link"
import { cx } from "../../shared/utils"

export const Header = () => {
  return (
    <header
      className={cx(
        "shadow-card relative z-50 rounded-b-3xl pt-4 backdrop-blur-sm lg:pt-6",
      )}
    >
      <Container
        className={cx(
          "grid grid-cols-[max-content_1fr_max-content] items-center gap-x-4 gap-y-3 xl:gap-x-10",
        )}
      >
        <nav className="xs:justify-between flex items-center justify-center gap-8 sm:self-center lg:col-span-2">
          <div className="flex gap-2 whitespace-nowrap text-gray-50">
            <Link href="./">
              <p>Vasilii Buraev</p>
            </Link>

            <span className="bg-green h-[18px] w-[1.5px] shrink-0 self-center" />
          </div>

          <div className="leading-tighter hidden shrink-0 items-center gap-8 text-base text-gray-50 lg:flex">
            <NavLink
              activeClassName="underline"
              className="hover:underline"
              href="/works"
            >
              Works
            </NavLink>
            <NavLink
              activeClassName="underline"
              className="hover:underline"
              href="/posts"
            >
              Posts
            </NavLink>
            <NavLink className="hover:underline" href="/devices">
              Devices
            </NavLink>
            <NavLink className="hover:underline" href="/source">
              Source
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  )
}
