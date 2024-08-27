import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

import { HTMLAttributes } from 'react'
import Icon from './icon'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const About = ({ className }: Props) => {
  const scrollRef = useScrollAnimation()

  return (
    <div className={className}>
      <section id="about" className="relative">
        <div ref={scrollRef} className="px-[20px] max-md:w-[380px] md:hidden">
          <div className="text-headline3 md:text-headline1">About Nad.fun</div>
          <div className="mt-[8px] text-body2 text-gray-50 md:mt-[16px] md:text-subtitle2">
            Nad.fun is a platform that provides everything Nads who want to trade Memecoin need to
            make it simple to create and trade Memecoin.
          </div>
        </div>
        <div className="md:relative">
          <div className="absolute bottom-[15%] right-1/2 flex translate-x-1/2 items-center md:bottom-[20%] md:w-[700px] md:gap-[80px] lg:w-[817.7px] lg:gap-[138px]">
            <Icon
              name="create-button"
              className="bottom-0 size-[176.3px] shrink-0 max-md:absolute max-md:right-1/2 max-md:translate-x-1/2 md:size-[220.4px]"
            />
            <div ref={scrollRef} className="max-md:hidden">
              <div className="text-headline3 md:text-headline1">About Nad.fun</div>
              <div className="mt-[8px] text-body2 text-gray-50 md:mt-[16px] md:text-subtitle2">
                Nad.fun is a platform that provides everything Nads who want to trade Memecoin need
                to make it simple to create and trade Memecoin.
              </div>
            </div>
          </div>
          <img
            src="/about.png"
            className="left-0 top-0 min-h-[420px] w-full object-cover object-right"
          />
        </div>
      </section>
    </div>
  )
}
