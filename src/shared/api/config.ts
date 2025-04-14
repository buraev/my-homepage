import { QueryClient } from "@tanstack/react-query"
import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

import { API_URL, IS_DEV, LK_API_URL } from "@/shared/config"

interface JwtEncodedData {
  iat: number
  exp: number
  roles: string[]
  id: string
}
interface TokenResponse {
  token?: string
}
export const getToken: () => string | undefined = () => {
  if (IS_DEV) return process.env.NEXT_PUBLIC_TOKEN
  return Cookies.get("token")
}

export const api = axios.create({
  baseURL: API_URL,
  validateStatus: status => status >= 200 && status < 300,
})

export const authApi = axios.create({
  baseURL: LK_API_URL,
  validateStatus: status => status >= 200 && status < 300,
})

export const withTokenApi = axios.create({
  baseURL: API_URL,
  validateStatus: status => status >= 200 && status < 300,
  withCredentials: true,
})

const setToken = (newToken: string | null) => {
  if (newToken) {
    const decoded: JwtEncodedData = jwtDecode(newToken)

    Cookies.set("token", newToken, { expires: decoded.exp })
  } else {
    Cookies.remove("token")
  }
}

const refreshToken = async () => {
  const token: TokenResponse = await authApi.get("/auth/refresh")
  if (token.token) {
    setToken(token.token)
  }
}

const isTokenExpired = () => {
  const token = getToken()
  if (!token) return true
  if (token) {
    const decoded: JwtEncodedData = jwtDecode(token)
    const timeLeft = decoded.exp - Date.now() / 1000
    return timeLeft < 180
  }
}

const authInterceptor = async (config: InternalAxiosRequestConfig) => {
  const token = getToken()
  if (isTokenExpired()) {
    try {
      await refreshToken()
    } catch (error) {
      // window.location.replace('/login');
    }
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

const errInterceptor = async (res: AxiosResponse) => {
  if (res.data.errors) {
    throw { errors: res.data.errors }
  }

  if (res.status === 401 && res.config.headers.authorization) {
    throw new Error("UNAUTHORIZED")
  }

  return res
}

// api.interceptors.response.use(errInterceptor)

// withTokenApi.interceptors.request.use(authInterceptor)
// withTokenApi.interceptors.response.use(errInterceptor)

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        async queryFn({ queryKey }) {
          const res = await api.get(queryKey[0] as string)
          return res.data
        },
        refetchOnWindowFocus: false,
      },
      mutations: {
        async mutationFn(data) {
          const params = data as {
            key: string
            data: unknown
            method: unknown
          }

          const res = await api.post(params?.key, params?.data)

          return res.data
        },
      },
    },
  })
}
