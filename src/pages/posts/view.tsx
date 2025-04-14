import type { NextPage } from "next/types"

import { Container } from "@/shared/ui/container"

export const Posts: NextPage = () => {
  return (
    <Container className="grid max-w-prose grid-cols-1 gap-6">
      <div className="mt-20 flex flex-col items-center justify-center gap-y-[1.25em]">
        <div className="flex flex-col gap-y-[1.5em]">
          <div className="flex gap-x-[1.5em]">
            <div className="bg-neutral-900 flex h-[6em] w-[6em] items-center justify-center rounded-[5px]">
              <button className="flex h-[5.7em] w-[5.7em] cursor-pointer items-center justify-center rounded-[10px] border-[none] bg-[#c7c3c0] shadow-[rgba(0,0,0,0.377)_10px_10px_8px,#ffffff_1.5px_1.5px_2px_0px_inset,#c7c3c0_-3.2px_-3.2px_8px_0px_inset] outline-none transition-[0.1s] duration-[ease-in-out] active:shadow-[rgba(0,0,0,0.377)_0px_0px_0px,inset_0.5px_0.5px_4px_#000000,#c7c3c0_-3.2px_-3.2px_8px_0px_inset]">
                <svg
                  className="active:scale:0.95 h-[25px] w-[25px] fill-[#5f5f5f] transition-[0.1s] duration-[ease-in-out]"
                  viewBox="0 -960 960 960"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M200-440v-80h560v80H200Z" />
                </svg>
              </button>
            </div>
            <div className="bg-neutral-900 flex h-[6.2em] w-[6.2em] items-center justify-center rounded-[5px]">
              <button className="flex h-[5.7em] w-[5.7em] cursor-pointer items-center justify-center rounded-[10px] border-[none] bg-[#c7c3c0] shadow-[rgba(0,0,0,0.377)_10px_10px_8px,#ffffff_1.5px_1.5px_2px_0px_inset,#c7c3c0_-3.2px_-3.2px_8px_0px_inset] outline-none transition-[0.1s] duration-[ease-in-out] active:shadow-[rgba(0,0,0,0.377)_0px_0px_0px,inset_0.5px_0.5px_4px_#000000,#c7c3c0_-3.2px_-3.2px_8px_0px_inset]">
                <svg
                  className="active:scale:0.95 h-[25px] w-[25px] fill-[#5f5f5f] transition-[0.1s] duration-[ease-in-out]"
                  viewBox="0 -960 960 960"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-x-[1.5em]">
            <div className="bg-neutral-900 flex h-[6em] w-[6em] items-center justify-center rounded-[5px]">
              <button className="flex h-[5.7em] w-[5.7em] cursor-pointer items-start justify-center rounded-[10px] border-[none] bg-[#d42a02] shadow-[rgba(0,0,0,0.377)_10px_10px_8px,#fb702c_2px_2px_10px_0px_inset,#d42a02_-4px_-4px_1px_0px_inset] transition-[0.1s] duration-[ease-in-out] active:translate-y-[2px] active:shadow-[rgba(0,0,0,0.377)_0px_0px_0px,inset_0.5px_0.5px_4px_#000000,#d42a02_-3.2px_-3.2px_8px_0px_inset]">
                <span className="pt-[0.9em] text-[0.85em] tracking-[0.075em] text-[white] transition-[0.1s] duration-[ease-in-out] active:translate-y-[2px]">
                  RECORD
                </span>
              </button>
            </div>
            <div className="bg-neutral-900 flex h-[5.9em] w-[5.9em] items-center justify-center rounded-[5px]">
              <button className="flex h-[5.7em] w-[5.7em] cursor-pointer items-start justify-center rounded-[10px] border-[none] bg-[#545251] shadow-[rgba(0,0,0,0.377)_10px_10px_8px,#a8a6a4_1.5px_1.5px_1px_0px_inset,#545251_-3.2px_-3.2px_8px_0px_inset] transition-[0.1s] duration-[ease-in-out] active:translate-y-[2px] active:shadow-[rgba(0,0,0,0.377)_0px_0px_0px,inset_0.5px_0.5px_4px_#000000,#545251_-3.2px_-3.2px_8px_0px_inset]">
                <span className="pt-[0.9em] text-[0.85em] tracking-[0.075em] text-[white] transition-[0.1s] duration-[ease-in-out] active:translate-y-[2px]">
                  PLAY
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-stone-100 text-center text-[0.65em]">
          Teenage Engineering [EP-133 K.O. II] - Buttons
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-stone-700">
          i haven&apos;t written any posts yet...
        </span>
      </div>
    </Container>
  )
}
