import type { UseQueryOptions, UseQueryResult } from "@tanstack/react-query"
import { useQuery } from "@tanstack/react-query"
import qs from "qs"

import { api } from "@/shared/api"
import type { QueryObject } from "@/shared/types"

export type FiascoType = {
  id: string
  name: string
  person: string
}[]

const fetchAuthSignin = async (id?: string) => {
  const res = await api.post(`api/auth/signin`, {
    login: "marcus",
    password: "marcus",
  })
  return res.data
}

export const useAuth = (
  id?: string,
  params?: QueryObject,
  options?: UseQueryOptions<FiascoType>,
): UseQueryResult<FiascoType> => {
  const ps = qs.stringify(params, { addQueryPrefix: true, skipNulls: true })

  return useQuery<FiascoType>({
    queryKey: ["auth", id],
    queryFn: async () => await fetchAuthSignin(),
    refetchOnWindowFocus: false,
    ...options,
  })
}
