import Image, { StaticImageData } from "next/image"

import defaultPic from "../../../../public/footprint.png"

import { BLUR } from "./constants"

import { Card, Icon } from "@/shared/ui"
import { cx } from "@/shared/utils"

interface NewsCardProps {
  className?: string
  href?: string
  title: string
  src: StaticImageData | string
  discription: string
}
/**
 * Рендер компонента NewsCard.
 *
 * @param {string} className - дополнительный CSS-класс для компонента
 * @param {object} props.source - объект источника со свойством title
 * @param {string} props.className - дополнительный CSS-класс для компонента
 * @param {string} props.slug - слаг для новости
 * @param {string} props.id - уникальный идентификатор новости
 * @param {string} props.image - URL изображения для новости
 * @param {string} props.title - заголовок новости
 * @param {string} props.body - HTML-тело новости
 * @param {string} props.type.title - заголовок типа новости
 * @param {string} props.dateCreate - дата создания новости
 */
export const NewsCard = ({
  className,
  href,
  title,
  src,
  discription,
  ...props
}: NewsCardProps) => {
  return (
    <Card
      href={href}
      className={cx(
        "flex transform flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105",
        className,
      )}
    >
      <div className="relative flex h-[165px] flex-col justify-stretch">
        <Image
          fill
          alt={title}
          blurDataURL={BLUR}
          className="max-h-[165px] w-auto object-cover"
          placeholder="blur"
          quality={60}
          sizes="(100vw - 32px) 165px, 280px"
          src={src === "" ? defaultPic : src}
        />
      </div>

      <article className="flex grow flex-col justify-between px-4 py-5 font-semibold">
        <div className="flex flex-col gap-2">
          <span className="leading-4.5 text-xs uppercase text-stone-200">
            {title}
          </span>
          <h5 className="line-clamp-2 text-base text-stone-500">
            {discription}
          </h5>
        </div>

        <div className="mt-4 flex items-center gap-1 font-normal text-gray-400">
          <Icon className="h-5 w-5" name="common/calendar" />
          <p className="leading-4.5 text-sm">20.20.21</p>
        </div>
      </article>
    </Card>
  )
}
