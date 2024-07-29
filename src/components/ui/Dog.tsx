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
      className={`bottom-1/2 right-1/2 z-40 max-h-[108px] max-w-[117px] translate-x-[calc(50%-140px)] translate-y-[calc(50%)] lg:max-h-[316px] lg:max-w-[342px] lg:translate-x-[calc(50%-430px)] lg:translate-y-[calc(50%-140px)] ${className}`}
    >
      <img id="dog" src="/images/dog.png" />
    </div>
  )
}

export default Dog
