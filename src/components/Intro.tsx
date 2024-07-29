import { useEffect, useState } from 'react'
import StarsBackground from './ui/StarsBackground'
import { Stars1, Stars2, Stars4 } from './ui/Stars'
import Gmonad from './ui/Gmonad'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Spaceship from './ui/Spaceship'
import Dog from './ui/Dog'
import MoveSpaceship from './ui/MoveSpaceship'
import Ghost from './ui/Ghost'
import MonadEarth from './ui/MonadEarth'

const Intro = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const cols = Math.floor(dimensions.width / 110)
  const rows = Math.floor(dimensions.height / 80)

  return (
    <>
      <StarsBackground cols={cols} rows={rows} smallStarRatio={0.8} />
      <div className="relative mx-auto h-dvh max-w-[1440px] pt-[60px]">
        <div className="absolute inset-0 w-full">
          <Stars1 />
          <Stars2 />
          <Stars4 />
        </div>
        <div className="relative top-[-70px] h-[80vh] lg:top-[-40px] lg:h-full">
          <div className="mt-[30px] flex flex-col items-center gap-[40px]">
            <Spaceship />
            <Dog />
            <MoveSpaceship />
            <Ghost />
          </div>
          <MonadEarth />
          <div className="absolute bottom-[30px] right-1/2 translate-x-1/2 text-h1 lg:bottom-0 lg:text-[128px]">
            Nad.fun
          </div>
        </div>
        <div className="absolute bottom-[58.5px] right-1/2 flex translate-x-1/2 flex-col items-center gap-[18px] lg:hidden">
          <Gmonad />
          <ChevronDown />
        </div>
      </div>
    </>
  )
}

export default Intro

function ChevronDown() {
  useGSAP(() => {
    gsap.to('#chevron-down', {
      y: 20,
      yoyo: true,
      repeat: -1,
    })
  }, [])

  return (
    <svg
      id="chevron-down"
      width="26"
      height="12"
      viewBox="0 0 26 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.57642 2.03979L13.1079 9.96772L24.6395 2.03979"
        stroke="#9747FF"
        strokeWidth="2.16216"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
