/* eslint-disable */

import { NextPageWithLayout } from "../../shared/types"

export const Devices: NextPageWithLayout = () => {
  return (
    <div className="mx-auto mt-24 flex max-h-full min-h-screen w-full max-w-prose flex-1 flex-col">
      <div className="border-secondaryMain flex flex-col gap-4 rounded-lg border p-3">
        <div>
          <div className="flex flex-1 flex-col justify-center gap-1 self-center">
            <div className="flex flex-1">
              <div className="flex flex-2 flex-col gap-2">
                {[1, 2, 3, 4].map(el => {
                  return (
                    <div
                      key={el}
                      className="border-secondaryMain h-14 w-14 rounded-lg border border-dashed p-3"
                    >
                      {el}
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-1 justify-center self-center">2</div>

              <div className="flex flex-2 flex-col gap-2">
                {[1, 2, 3, 4].map(el => {
                  return (
                    <div
                      key={el}
                      className="border-secondaryMain h-14 w-14 rounded-lg border border-dashed p-3"
                    >
                      {el}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 self-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(el => {
              return (
                <div
                  key={el}
                  className="border-secondaryMain h-14 w-14 rounded-lg border border-dashed p-3"
                >
                  {el}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {[1, 2, 3, 4, 5].map(el => {
            return (
              <div key={el} className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => {
                  return (
                    <div
                      className="border-secondaryMain h-14 w-14 rounded-lg border border-dashed p-3"
                      key={el}
                    >
                      {el}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
