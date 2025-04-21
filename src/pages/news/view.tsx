import { GetStaticProps } from "next"
import { NextPageWithLayout } from "../../shared/types"
import { createQueryClient } from "../../shared/api"
import {
  prefetchHackerNews,
  useHackerNews,
} from "../../entities/hackernews/model"
import { dehydrate } from "@tanstack/react-query"

export const hackerNewnsStatic: GetStaticProps = async () => {
  const queryClient = createQueryClient()

  await Promise.all([await prefetchHackerNews(queryClient, {})])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export const News: NextPageWithLayout = () => {
  const { data } = useHackerNews()
  console.log(data)
  return (
    <div className="mx-auto flex w-full max-w-prose flex-col gap-6">
      <table className="flex flex-col gap-2">
        {data?.map((el, index) => {
          return (
            <tbody key={el.id}>
              <tr>
                <td>
                  <span>{index + 1}.</span>
                </td>
                <td>
                  <span>
                    <a className="whitespace-nowrap underline" href={el.url}>
                      {el.title}
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}
