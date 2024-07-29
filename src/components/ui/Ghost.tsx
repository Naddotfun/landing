import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Ghost = ({ className }: Props) => {
  useGSAP(() => {
    gsap.to('#ghost', {
      x: 30,
      y: -20,
      duration: 0.4,
      rotate: -25,
      yoyo: true,
      repeat: -1,
      repeatDelay: 1.3,
      ease: 'power1.out',
    })
  }, [])

  return (
    <div
      className={`absolute bottom-1/2 right-1/2 max-h-[68px] max-w-[68px] translate-x-[calc(50%+100px)] translate-y-[calc(50%-160px)] lg:max-h-[199px] lg:max-w-[198px] lg:translate-x-[calc(50%+390px)] lg:translate-y-[calc(50%-200px)] ${className}`}
    >
      <img id="ghost" src="/images/ghost.png" className="lg:translate-x-[-60px]" />
    </div>
  )
}

export default Ghost
