// shared/ui/icon/icon.tsx
import { type SVGProps } from "react"
import clsx from "clsx"

import type { SpritesMap } from "./sprite.gen"

// Merging all icons as `SPRITE_NAME/SPRITE_ICON_NAME`
export type IconName = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
  name: IconName
}

export function Icon({ name, className, viewBox, ...props }: IconProps) {
  const [spriteName, iconName] = name.split("/")

  return (
    <svg
      // We recommend to use specific component class for avoid collisions with other styles and simple override it
      aria-hidden
      className={clsx("icon", className)}
      focusable="false"
      viewBox={viewBox}
      {...props}
    >
      {/* For example, "/common.svg#favourite". Change base path if you don't store sprites under the root. */}
      <use href={`/${spriteName}.svg#${iconName}`} />
    </svg>
  )
}
