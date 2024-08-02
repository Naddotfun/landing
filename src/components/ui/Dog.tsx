import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Dog = ({ className }: Props) => {
  useGSAP(() => {
    gsap.to('#dog', {
      y: 20,
      duration: 0.6,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.8,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <div
      className={`absolute bottom-1/2 right-1/2 z-40 w-[105px] translate-x-[calc(50%-90px)] translate-y-[calc(50%-140px)] lg:w-[342px] lg:translate-x-[calc(50%-380px)] lg:translate-y-[calc(50%-140px)] ${className}`}
    >
      <img id="dog" src="/images/dog.png" />
    </div>
  )
}

export default Dog
