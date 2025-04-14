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
  person: string
}[]

const fetchFiasco = async (id?: string) => {
  const res = await api.post(`api/fiasco/read`, { id: id })
  return res.data
}

export const useFiasco = (
  id?: string,
  params?: QueryObject,
  options?: UseQueryOptions<FiascoType>,
): UseQueryResult<FiascoType> => {
  const ps = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })

  return useQuery<FiascoType>({
    queryKey: ["fiasco", id],
    queryFn: async () => await fetchFiasco(id),
    refetchOnWindowFocus: false,
    ...options,
  })
}

export const prefetchFiasco = async (
  client: QueryClient,
  params?: QueryObject,
): Promise<void> => {
  const ps = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })
  await client.prefetchQuery({
    queryKey: ["fiasco"],
    queryFn: async () => await fetchFiasco(),
  })
}
