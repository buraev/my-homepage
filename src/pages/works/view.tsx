import type { NextPage } from "next/types"

import { Container, NewsCard } from "../../shared/ui"
export const Works: NextPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-prose flex-col gap-6 px-4 md:px-5 xl:px-[50px]">
      <p className="text-2xl text-gray-50">Works</p>
      <Container className="grid max-w-prose grid-cols-2 gap-6">
        <NewsCard discription={""} src={""} title={""} />
        <NewsCard discription={""} src={""} title={""} />
        <NewsCard discription={""} src={""} title={""} />
      </Container>
      <p className="text-2xl text-gray-50">Personal projects</p>
      <Container className="grid max-w-prose grid-cols-2 gap-6">
        <NewsCard discription={""} src={""} title={""} />
        <NewsCard discription={""} src={""} title={""} />
        <NewsCard discription={""} src={""} title={""} />
      </Container>
    </div>
  )
}
