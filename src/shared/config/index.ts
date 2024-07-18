export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const FILES_API_URL =
  process.env.NEXT_PUBLIC_FILES_API_URL + "/api/files"

export const NODE_ENV = process.env.NODE_ENV

export const IS_DEV = NODE_ENV === "development"

export const IS_PROD = NODE_ENV === "production"

export const LK_URL = process.env.NEXT_PUBLIC_LK_URL

export const LK_API_URL = process.env.NEXT_PUBLIC_LK_API_URL + "/api"
