const svg = require("@neodx/svg/webpack")
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ]

    /**
     * подключение свг спрайт генератора
     * @see https://github.com/neodx/svg
     */
    const svgConfig = svg({
      root: "src/shared/assets/svg-icons",
      output: "public",
      group: true,
      metadata: "src/shared/ui/icon/sprite.gen.ts",
      resetColors: {
        // global files filter (default - all files)
        exclude: [/^content/, /^socials/, /[a-z]*-colored\.svg$/],
        // all colors except white and #eee will be replaced with currentColor
        replaceUnknown: "currentColor",
      },
    })

    config.plugins.push(svgConfig)

    return config
  },
  output: "standalone",

  redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/",
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
