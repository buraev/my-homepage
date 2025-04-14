/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import localFont from "next/font/local"
import Head from "next/head"

import { createQueryClient } from "../src/shared/api"

import "../styles/globals.css"

import { Layout } from "@/layouts/layout"
import type { NextPageWithLayout } from "@/shared/types"

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const SpaceMonoRegular = localFont({
  src: [
    {
      path: "../src/shared/assets/fonts/JetBrainsMono-Regular.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => createQueryClient())
  const getLayout = Component.getLayout ?? (page => page)
  return (
    <>
      <style global jsx>{`
        :root {
          --font-sans: ${SpaceMonoRegular.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Vasilii Buraev Homepage</title>
        <meta content="Vasilii Buraev Homepage" name="description" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <link href="../styles/globals.css" rel="stylesheet" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps}>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  )
}
