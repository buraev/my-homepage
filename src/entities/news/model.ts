import type {
  QueryClient,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import { useQuery } from "@tanstack/react-query"
import qs from "qs"

import { api } from "@/shared/api"
import type { IdTitle, List, QueryObject } from "@/shared/types"

export type NewsType = {
  title: string
  id: number
  image?: string
  body: string
  dateCreate: string
  imported: boolean
  published: boolean
  slug: string
  type: {
    id: number
    title: string
  }
  source: {
    id: number
    title: string
    sourceLink: string
  }
  tags?: NewsTag[]
}

type SlugedIdTitle = IdTitle & {
  slug: string
}

export type NewsSource = {
  id: number
  rss: boolean
  title: string
  sourceLink: string
}

export type NewsTag = {
  id: number
  title: string
  rssId: number
  main: boolean
}

/**
 * Получает данные новостей с сервера.
 *
 * @param {Object} pageParam - Параметр страницы для пагинации.
 * @param {Object} params - Дополнительные параметры для запроса API.
 */
const fetchNews = async () => {
  // const ps = qs.stringify(
  //   { per_page: 8, page: pageParam, ...params },
  //   /**
  //    * При SSR/SSG/ISR undefined pageParam превращается в null и переписывает 1.
  //    * Поэтому при открытии страницы он пытается открыть page=null.
  //    * В связи с этим явно пропускаем null при обработке квери параметров
  //    */
  //   { encode: false, skipNulls: true },
  // )
  const res = await api.get(`/news`)
  return res.data
}

/**
 * Хук для получения данных новостей из кэша.
 *
 * @param {QueryObject} params - Опциональные параметры для включения в запрос.
 * @param {UseQueryOptions<List<NewsType>>} options - Дополнительные параметры для хука useQuery.
 * @return {UseQueryResult<List<NewsType>>} массив новостей.
 */
export const useNews = (
  params?: QueryObject,
  options?: UseQueryOptions<List<NewsType>>,
): UseQueryResult<List<NewsType>> => {
  const ps = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })

  return useQuery<List<NewsType>>({
    queryKey: ["news"],
    queryFn: async () => await fetchNews(),
    refetchOnWindowFocus: false,
    ...options,
  })
}

/**
 * Получает данные новостей и кэширует их для будущего использования.
 *
 * @param {QueryClient} client - Клиент запросов, используемый для выполнения запроса предварительной загрузки.
 * @param {QueryObject} params - Необязательные параметры запроса, передаваемые в запрос предварительной загрузки.
 * @return {Promise<void>} Промис, который разрешается, когда предварительная загрузка завершена.
 */
export const prefetchNews = async (
  client: QueryClient,
  params?: QueryObject,
): Promise<void> => {
  const ps = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })
  await client.prefetchQuery({
    queryKey: ["news"],
    queryFn: async () => await fetchNews(),
  })
}
