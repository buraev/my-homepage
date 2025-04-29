/* eslint-disable */

import { NextPageWithLayout } from "../../shared/types"
import { useDragAndDrop } from "@formkit/drag-and-drop/react"
import Y18 from "public/y18.svg"
import VimLogo from "public/Vimlogo.svg"
import MacBookSvg from "public/macbook.svg"
import { useEffect } from "react"

type Items = {
  name: string
  discription: string
  item?: Node
}

export const Devices: NextPageWithLayout = () => {
  const backpackItems: Items = [
    {
      name: "pet",
      discription: "lalala",
      item: <Y18 />,
    },
    {
      name: "dee",
      discription: "aaaaa",

      item: <VimLogo />,
    },
    {
      name: "mac",
      discription: "cccc",

      item: <MacBookSvg />,
    },
  ]

  const leftGroupItems: Items = [
    {
      name: "leftPet",
      discription: "leftPet",
      item: <Y18 />,
    },
    {
      name: "leftdee",
      discription: "aaaaa",
      item: <VimLogo />,
    },
    {
      name: "leftmac",
      discription: "cccc",
      item: <MacBookSvg />,
    },
    {
      name: "leftmacaa",
      discription: "cccc",
      item: undefined,
    },
  ]

  const rightGroupItems: Items = [
    {
      name: "rpet",
      discription: "lalala",
      item: <Y18 />,
    },
    {
      name: "rdee",
      discription: "aaaaa",

      item: <VimLogo />,
    },
    {
      name: "rmac",
      discription: "cccc",

      item: <MacBookSvg />,
    },
  ]
  const middleGroupItems: Items = [
    {
      name: "mpet",
      discription: "lalala",
      item: <Y18 />,
    },
    {
      name: "mdee",
      discription: "aaaaa",

      item: <VimLogo />,
    },
  ]

  const [parentBackpackItems, currentBackpackItems] = useDragAndDrop<
    HTMLUListElement,
    Items
  >(backpackItems, { group: "items" })
  const [parentLeftGroupItems, currentLeftGroupItems] = useDragAndDrop<
    HTMLUListElement,
    Items
  >(leftGroupItems, { group: "items" })
  const [parentRightGroupItems, currentRightGroupItems] = useDragAndDrop<
    HTMLUListElement,
    Items
  >(rightGroupItems, { group: "items" })
  const [parentMiddleGroupItems, currentMiddleGroupItems] = useDragAndDrop<
    HTMLUListElement,
    Items
  >(middleGroupItems, { group: "items" })

  return (
    <div className="mx-auto mt-24 flex max-h-full min-h-screen w-full max-w-prose flex-1 flex-col">
      <div className="border-secondaryMain flex flex-col gap-4 rounded-lg border p-3">
        <div>
          <div className="flex flex-1 flex-col justify-center gap-1 self-center">
            <div className="flex h-fit flex-1">
              <div className="relative flex min-h-62 flex-1">
                <ul
                  className="absolute z-10 grid cursor-grab grid-flow-col grid-cols-1 grid-rows-4 gap-1.5 active:cursor-grabbing"
                  ref={parentLeftGroupItems}
                >
                  {currentLeftGroupItems.map(el => {
                    return (
                      <li
                        key={el}
                        className="border-secondaryMain flex h-14 w-14 justify-center self-center rounded-lg border p-3"
                      >
                        <span className="flex justify-center self-center">
                          {el?.item}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="flex flex-1 justify-center self-center">2</div>
              <div className="relative flex flex-1">
                <ul
                  className="absolute z-10 grid cursor-grab grid-flow-col grid-cols-1 grid-rows-4 gap-1.5 active:cursor-grabbing"
                  ref={parentRightGroupItems}
                >
                  {currentRightGroupItems.map(el => {
                    return (
                      <li
                        key={el.name}
                        className="border-secondaryMain flex h-14 w-14 justify-center self-center rounded-lg border p-3"
                      >
                        <span className="flex justify-center self-center">
                          {" "}
                          {el?.item}
                        </span>
                      </li>
                    )
                  })}
                </ul>
                <ul className="absolute grid grid-flow-col grid-cols-1 grid-rows-4 gap-1.5">
                  {[1, 2, 3, 4].map(el => {
                    return (
                      <li
                        key={el.name}
                        className="border-secondaryMain flex h-14 w-14 justify-center self-center rounded-lg border p-3"
                      >
                        <span className="flex justify-center self-center">
                          {" "}
                          {el?.item}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <ul
            className="flex justify-center gap-2 self-center"
            ref={parentMiddleGroupItems}
          >
            {currentMiddleGroupItems.map(el => {
              return (
                <li
                  key={el.name}
                  className="border-secondaryMain flex h-14 w-14 justify-center self-center rounded-lg border p-3"
                >
                  <span
                    data-tooltip-target="tooltip-discription"
                    className="flex justify-center self-center"
                  >
                    {el?.item}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="relative flex flex-1">
          <ul
            className="absolute z-10 grid cursor-grab grid-flow-col grid-cols-10 grid-rows-8 gap-1.5 active:cursor-grabbing"
            ref={parentBackpackItems}
          >
            {currentBackpackItems.map(el => {
              return (
                <li
                  key={el.name}
                  className="border-secondaryMain flex h-14 w-14 justify-center self-center rounded-lg border p-3"
                >
                  <span className="flex justify-center self-center">
                    {" "}
                    {el?.item}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="absolute grid grid-flow-col grid-cols-1 grid-rows-4 gap-1.5">
            {[1, 2, 3, 4].map(el => {
              return (
                <li
                  key={el.name}
                  className="border-secondaryMain flex h-14 w-14 justify-center self-center rounded-lg border p-3"
                >
                  <span className="flex justify-center self-center">
                    {" "}
                    {el?.item}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
