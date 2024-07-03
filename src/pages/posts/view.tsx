import type { NextPage } from "next/types"

import { Container } from "@/shared/ui/container"

export const Posts: NextPage = () => {
  return (
    <Container className="grid max-w-prose grid-cols-1 gap-6">
      <div className="flex items-center justify-center">
        <span className="text-stone-700">
          i haven&apos;t written any posts yet...
        </span>
      </div>
    </Container>
  )
}
