import type {
  QueryClient,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import { useQuery } from "@tanstack/react-query"
import qs from "qs"

import { api } from "@/shared/api"
import type { QueryObject } from "@/shared/types"

export type FiascoType = {
  id: string
  name: string
}[]

const fetchPerson = async (id?: number) => {
  const res = await api.post(`api/person/read`, { id: id })
  return res.data
}

export const usePerson = (
  id?: number,
  params?: QueryObject,
  options?: UseQueryOptions<FiascoType>,
): UseQueryResult<FiascoType> => {
  const ps = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })
  return useQuery<FiascoType>({
    queryKey: ["person"],
    queryFn: async () => await fetchPerson(id),
    refetchOnWindowFocus: false,
    ...options,
  })
}

export const prefetchPerson = async (
  client: QueryClient,
  params?: QueryObject,
): Promise<void> => {
  const ps = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })
  await client.prefetchQuery({
    queryKey: ["person"],
    queryFn: async () => await fetchPerson(),
  })
}
