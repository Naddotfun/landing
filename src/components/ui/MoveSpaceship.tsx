import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const MoveSpaceship = ({ className }: Props) => {
  useGSAP(() => {
    gsap.fromTo(
      '#move-spaceship',
      {
        x: 40,
        y: -30,
        opacity: 0,
        rotate: -20,
        scale: 0.6,
        duration: 0.4,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1.3,
        ease: 'power1.out',
      },
    )
  }, [])

  return (
    <div
      className={`absolute bottom-1/2 right-1/2 w-[119px] translate-x-[calc(50%+100px)] translate-y-[calc(50%+90px)] lg:w-[348px] lg:translate-x-[calc(50%+450px)] lg:translate-y-[calc(50%+150px)] ${className}`}
    >
      <img id="move-spaceship" src="/images/move-spaceship.png" />
    </div>
  )
}

export default MoveSpaceship
