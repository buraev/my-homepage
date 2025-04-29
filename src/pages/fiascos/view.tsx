import { useState } from "react"
import { dehydrate } from "@tanstack/react-query"
import type { GetStaticProps } from "next/types"

import { prefetchFiasco, useFiasco } from "../../entities/fiasco"
import { usePerson } from "../../entities/person"
import { createQueryClient } from "../../shared/api"
import { Container } from "../../shared/ui"

import type { NextPageWithLayout } from "@/shared/types"

export const fiascoStatic: GetStaticProps = async () => {
  const queryClient = createQueryClient()

  await Promise.all([await prefetchFiasco(queryClient, {})])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export const Fiascos: NextPageWithLayout = () => {
  const [currentPersonId, setCurrentPersonId] = useState<string | undefined>()
  const { data: fiascos } = useFiasco()
  const { data: persons } = usePerson()

  const handleSetPersonId = (id: string) => {
    setCurrentPersonId(id)
  }

  return (
    <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
      <p className="text-2xl text-gray-50">Fiasco</p>
      <Container className="flex flex-1 flex-col gap-2">
        <span className="flex justify-center self-center">
          This is fiasco, my dude
        </span>
        <div className="flex flex-1 gap-1 rounded-lg p-3">
          <div className="border-secondaryMain flex flex-1 flex-col gap-2 rounded-lg border-t border-r border-b border-dashed p-3">
            {!currentPersonId && (
              <div className="flex justify-between">
                <span>&lt;-</span>
                <span className="flex justify-center self-center">
                  choose your fighter
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
