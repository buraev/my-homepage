import type { UseQueryOptions, UseQueryResult } from "@tanstack/react-query"
import { useQuery } from "@tanstack/react-query"
import qs from "qs"

import * as z from "zod"

import { api } from "@/shared/api"
import type { QueryObject } from "@/shared/types"
import { error } from "console"

export type FiascoType = {
  id: string
  name: string
  person: string
}[]

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(value)

  if (!validatedFields.success) {
    return { error: "Invalid fields" }
  }
  return { success: "Email sent" }
}

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
