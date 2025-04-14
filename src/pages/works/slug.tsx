import { useRouter } from "next/router"

import { Container } from "../../shared/ui"

import type { NextPageWithLayout } from "@/shared/types"

export const Work: NextPageWithLayout = () => {
  const { query } = useRouter()
  return (
    <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
      <p className="text-gray-50 text-2xl">Work</p>
      <Container>work</Container>
    </div>
  )
}
