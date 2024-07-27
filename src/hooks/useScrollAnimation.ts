import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  y?: number
  opacity?: number
  ease?: string
  duration?: number
  stagger?: number
  start?: string
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const {
    y = 30,
    opacity = 0,
    ease = 'power1.inOut',
    duration = 0.6,
    stagger = 0.15,
    start = 'top 80%',
  } = options

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(scrollRef.current!.children)

      gsap.fromTo(
        targets,
        {
          y,
          opacity,
        },
        {
          y: 0,
          opacity: 1,
          ease,
          duration,
          stagger,
          scrollTrigger: {
            trigger: scrollRef.current,
            start,
            toggleActions: 'play none none none',
          },
        },
      )
    },
    { scope: scrollRef },
  )

  return scrollRef
}
