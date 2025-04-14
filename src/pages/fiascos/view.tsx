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
  console.log(persons)
  return (
    <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
      <p className="text-gray-50 text-2xl">Fiasco</p>
      <Container className="flex flex-1 flex-col gap-2">
        <span className="flex justify-center self-center">
          This is fiasco, my dude
        </span>
        <div className="flex flex-1 gap-1 rounded-lg p-3">
          <div className="flex flex-1 flex-col gap-2 rounded-lg border-b border-l border-t border-dashed border-secondaryMain p-3">
            {persons &&
              persons?.rows?.map(person => {
                return (
                  <div
                    key={person.id}
                    className="flex justify-between"
                    onClick={() => handleSetPersonId(person.id)}
                  >
                    <span
                      className={
                        person.id === currentPersonId
                          ? "cursor-pointer underline decoration-dotted underline-offset-4"
                          : "cursor-pointer no-underline hover:underline"
                      }
                    >
                      {person.name}
                    </span>
                    {person.id === currentPersonId && <span>-&gt;</span>}
                  </div>
                )
              })}
          </div>
          <div className="flex flex-1 flex-col gap-2 rounded-lg border-b border-r border-t border-dashed border-secondaryMain p-3">
            {fiascos &&
              fiascos?.rows
                ?.filter(fiasco => fiasco.person === currentPersonId)
                .map(person => {
                  return (
                    <div key={person.id}>
                      <span>{person.name}</span>
                    </div>
                  )
                })}
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
