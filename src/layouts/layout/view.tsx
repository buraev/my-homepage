import { type ReactNode } from "react"

import { VoxelMain } from "../../shared/ui/voxel"

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

      <main className="xs:pb-20 yargrow pb-15 lg:pb-30">
        <VoxelMain />
        {children}
      </main>
      {/* <ScrollToTopButton className="fixed bottom-40 right-4 z-50" /> */}
      {/* <Footer /> */}
    </div>
  )
}
