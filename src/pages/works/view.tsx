import type { NextPage } from "next/types"

import { Container, NewsCard } from "../../shared/ui"
export const Works: NextPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
      <p className="text-2xl text-gray-50">Works</p>
      <Container className="grid max-w-prose grid-cols-2 gap-6">
        <NewsCard
          discription={"Fiascos"}
          href={"fiascos"}
          picSrc={""}
          title={"this is fiascos my dude"}
        />
        <NewsCard discription={""} picSrc={""} title={""} />
        <NewsCard discription={""} picSrc={""} title={""} />
      </Container>
      <p className="text-2xl text-gray-50">Personal projects</p>
      <Container className="grid max-w-prose grid-cols-2 gap-6">
        <NewsCard discription={""} href="works/1" picSrc={""} title={""} />
        <NewsCard discription={""} picSrc={""} title={""} />
        <NewsCard discription={""} picSrc={""} title={""} />
      </Container>
    </div>
  )
}
