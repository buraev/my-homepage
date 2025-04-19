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
        <div className="animate-marquee flex gap-2 whitespace-nowrap">
          <div> </div>

          {[1, 2, 3, 4].map(el => {
            return <span key={el}>{CreepingLineTextg}</span>
          })}
        </div>

        <div className="animate-marquee2 absolute flex gap-2 whitespace-nowrap">
          <div> </div>
          {[1, 2, 3, 4].map(el => {
            return <span key={el}>{CreepingLineTextg}</span>
          })}
        </div>
      </div>
      <div className="flex">
        <div className="z-20 grow">
          <p className="text-secondaryLight text-4xl">Vasilii Buraev</p>
          <p className="text-error text-gray-500">They call me The Seeker</p>
        </div>
        <div className="shrink-0 overflow-hidden rounded-full border">
          <Image alt="Profile image" height={96} src={profilePic} width={96} />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">Work</p>
        <p className="text-base text-gray-500">
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
          <p className="text-gray-500">
            - thats the technology I know best and work daily with.
          </p>
        </div>
        <div className="flex items-center justify-center pt-3">
          <NavLink
            className="flex items-center justify-center gap-1"
            href={"./works"}
          >
            <Button
              className="hover:bg-secondaryLight/20 w-full md:w-fit"
              size="sm"
            >
              <span className="line-clamp-3 w-full">My portfolio</span>
              <Icon className="h-5 w-5" name="common/chevron-right" />
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">Bio</p>
        <div className="flex gap-3">
          <p className="text-gray-50">1995</p>
          <p className="text-gray-500">Born in Balakovo, Russia</p>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-50">2012</p>
          <div className="flex gap-1">
            <p className="text-gray-500">
              Graduated from the Physics and Mathematics Lyceum in
            </p>
            <Link passHref href="https://reactjs.org/">
              <p className="text-secondaryLight underline">Semenov</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-50">2013</p>
          <p className="text-gray-500">Started working as a bartender</p>
        </div>
        <div className="flex gap-3">
          <p className="text-gray-50">2019</p>
          <p className="text-gray-500">Working as a web developer</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">My interests</p>
        <p className="text-gray-500">
          Art, Bartending, Industrial Design, Neurobiology, Machine Learning
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-secondaryLight py-2 text-xl">On the web</p>
        <p className="text-gray-500">@Prince-Gizard</p>
        <p className="text-gray-500">@buraev_v</p>
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
