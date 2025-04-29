"use server"

import * as z from "zod"

import bcrypt from "bcryptjs"

import { db } from "@/app/src/shared/lib/db"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosRequestConfig } from "axios"

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z.string().min(1, { message: "Name is required" }),
})

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  console.log("1")
  const validatedFields = RegisterSchema.safeParse(value)
  console.log("2")

  if (!validatedFields.success) {
    console.log("3")
    return { error: "Invalid fields" }
  }

  console.log("4")

  const { email, password, name } = validatedFields.data

  console.log(email)

  const hashedPassword = await bcrypt.hash(password, 10)

  console.log("6")

  const existUser = await db.user.findUnique({
    where: {
      email,
    },
  })

  console.log("7")

  if (existUser) {
    console.log("8")

    return { error: "Email already in use" }
  }

  console.log("9")

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  console.log("10")

  return { success: "User created" }
}

export const useRegister = () => {
  const { mutate, isSuccess } = useMutation({
    mutationFn: async (req: z.infer<typeof RegisterSchema>) =>
      await register(req),
    onSuccess: () => {
      console.log("suk")
    },
  })

  return {
    mutate,
  }
}
