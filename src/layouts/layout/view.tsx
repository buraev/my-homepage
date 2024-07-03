import { type ReactNode } from "react"

import { cx } from "@/shared/utils"
import { Header } from "@/widgets/header"

type LayoutProps = {
  className?: string
  children?: ReactNode
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={cx("relative flex min-h-screen flex-col font-sans", className)}
    >
      {/* <Toaster /> */}
      <Header />

      <main className="pb-15 xs:pb-20 lg:pb-30 yargrow pt-6 md:pt-10 lg:pt-12">
        {children}
      </main>
      {/* <ScrollToTopButton className="fixed bottom-40 right-4 z-50" /> */}
      {/* <Footer /> */}
    </div>
  )
}
