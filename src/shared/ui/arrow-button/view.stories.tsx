import type { Meta, StoryObj } from "@storybook/react"

import { Orientation, Variant } from "./constants"
import { ArrowButton } from "./view"

const meta = {
  title: "Shared/UI/Buttons/Arrow Button",
  component: ArrowButton,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
      description: "Заблокировать кнопку",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    size: {
      type: "string",
      control: "select",
      description: "Размер кнопки",
      options: ["xs", "sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
        type: { summary: "xs | sm | md | lg" },
      },
    },
    orientation: {
      type: "string",
      control: "select",
      description: "Направление стрелки",
      options: ["left", "right", "bottom", "top"],
      table: {
        defaultValue: { summary: "left" },
        type: { summary: "left | right | bottom | top" },
      },
    },
    variant: {
      type: "string",
      control: "select",
      description: "Вариант кнопки",
      options: ["shadow", "outline"],
      table: {
        defaultValue: { summary: "shadow" },
        type: { summary: "shadow | outline" },
      },
    },
    type: {
      type: "string",
      control: "select",
      description: "Тип кнопки",
      options: ["button", "submit", "reset"],
      table: {
        defaultValue: { summary: "button" },
        type: { summary: "button | submit | reset" },
      },
    },
    className: {
      type: "string",
      control: "text",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      description: "Дополнительные классы кнопки",
    },
    iconClassName: {
      type: "string",
      control: "text",
      table: {
        category: "Styles",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      description: "Дополнительные классы иконки",
    },
    onClick: {
      type: "function",
      table: {
        category: "Events",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
      description: "Функция обработчик клика",
    },
    title: {
      type: "string",
      table: {
        category: "accessibility",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      description: "Описывает содержимое элемента в виде всплывающей подсказки",
    },
  },
} satisfies Meta<typeof ArrowButton>

export default meta
type Story = StoryObj<typeof meta>

export const ShadowArrowButton: Story = {
  name: "Shadow",
  args: {
    orientation: Orientation.Left,
    variant: Variant.Shadow,
  },
}
export const OutlineArrowButton: Story = {
  name: "Outline",
  args: {
    orientation: Orientation.Left,
    variant: Variant.Outline,
  },
}

export const View = () => {
  const variants = ["shadow", "outline"]
  const disableds = [false, true]
  const sizes = ["md", "sm", "xs"]
  const orientations = ["left", "right", "bottom", "top"]

  const buttons = sizes.flatMap(size => {
    return variants.flatMap(variant => {
      return disableds.flatMap(disabled => {
        return orientations.flatMap(orientation => {
          return {
            orientation,
            size,
            variant,
            disabled,
          }
        })
      })
    })
  })

  return (
    <div className="shadow-card grid grid-cols-4 items-center justify-items-center gap-10 rounded-xl border p-20">
      {buttons.map((props, idx) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line react/no-array-index-key
        <ArrowButton key={new Date().getTime() + idx} {...props} />
      ))}
    </div>
  )
}
