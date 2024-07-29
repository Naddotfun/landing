import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Spaceship = ({ className }: Props) => {
  useGSAP(() => {
    gsap.to('#spaceship', {
      duration: 0.6,
      y: 10,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.6,
      rotate: -20,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <div
      className={`absolute bottom-1/2 right-1/2 max-h-[70px] max-w-[101px] translate-x-[calc(50%-120px)] translate-y-[calc(50%+100px)] lg:max-h-[204px] lg:max-w-[296px] lg:translate-x-[calc(50%-450px)] lg:translate-y-[calc(50%+200px)] ${className}`}
    >
      <img id="spaceship" src="/images/spaceship.png" />
    </div>
  )
}

export default Spaceship
