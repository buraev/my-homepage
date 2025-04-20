import Image from "next/image"
import Link from "next/link"
import type { NextPage } from "next/types"

import profilePic from "../../../public/profile-img.jpg"
import { useAuth } from "../../entities/auth"
import { CreepingLineTextg } from "../../shared/consts/creepingLineText"
import { Icon, NavLink, NewsCard } from "../../shared/ui"
import { Button } from "../../shared/ui/button"

import { Container } from "@/shared/ui/container"

export const Home: NextPage = () => {
  const { data } = useAuth()
  return (
    <Container className="grid max-w-prose grid-cols-1 gap-6">
      <div className="border-secondaryMain relative flex overflow-x-hidden rounded-lg border p-3">
        <div className="animate-marque flex gap-2 whitespace-nowrap">
          <div> </div>

          {[1, 2, 3, 4].map(el => {
            return <span key={el}>{CreepingLineTextg}</span>
          })}
        </div>

        <div className="animate-marque2 absolute flex gap-2 whitespace-nowrap">
          <div> </div>
          {[1, 2, 3, 4].map(el => {
            return <span key={el}>{CreepingLineTextg}</span>
          })}
        </div>
      </div>
      <div className="flex">
        <div className="z-20 grow">
          <p className="text-4xl text-white">Vasilii Buraev</p>
          <p className="text-orange">They call me The Seeker</p>
        </div>
        <div className="shrink-0 overflow-hidden rounded-full border">
          <Image alt="Profile image" height={96} src={profilePic} width={96} />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">Work</p>
        <p className="text-textMain text-base">
          I&apos;m self-taught programmer from Russia. <br />
          One day I decided to switch career from being bartender. <br />
          What I didnt know back then is that in the process of learning to code
          I would soon discover a true passion.
          <br />
          I have a five years of experience developing web applications,
          building websites and contributing to Open Source projects.
          <br />
        </p>
        <div className="flex">
          <Link passHref href="https://reactjs.org/">
            <p className="text-secondaryLight underline">React</p>
          </Link>
          <p> &nbsp;</p>
          <p className="text-white">
            - thats the technology I know best and work daily with.
          </p>
        </div>
        <div className="flex items-center justify-center pt-6">
          <NavLink
            className="flex items-center justify-center gap-1"
            href={"./works"}
          >
            <Button
              className="hover:bg-secondaryLight/20 w-full md:w-fit"
              size="sm"
            >
              <span className="text-[0.85em] tracking-[0.075em] text-[white] transition-[0.1s] duration-[ease-in-out]">
                My portfolio
              </span>
              <Icon
                className="h-5 w-5 text-white"
                name="common/chevron-right"
              />
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">Bio</p>
        <div className="flex gap-3">
          <p className="text-gray-100">1995</p>
          <p className="text-white">Born in Balakovo, Russia</p>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-50">2012</p>
          <div className="flex gap-1">
            <p className="text-white">
              Graduated from the Physics and Mathematics Lyceum in
            </p>
            <Link passHref href="https://reactjs.org/">
              <p className="text-secondaryLight underline">Semenov</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-50">2013</p>
          <p className="text-white">Started working as a bartender</p>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-50">2019</p>
          <p className="text-white">Working as a web developer</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">My interests</p>
        <p className="text-white">
          Art, Bartending, Industrial Design, Neurobiology, Machine Learning
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">On the web</p>
        <p className="text-white">@buraev</p>
        <p className="text-white">@buraev_v</p>
      </div>
      <div className="flex gap-4">
        <NewsCard
          className="flex-1"
          discription={"Best way learn to code - for free"}
          title={"freeCodeCamp"}
        />
        <NewsCard
          className="flex-1"
          discription={"My YouTube channel"}
          title={"Wu-Shi podcast"}
        />
      </div>
    </Container>
  )
}
