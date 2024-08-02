import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MonadEarth = () => {
  useGSAP(() => {
    gsap.to('#monad-earth', {
      yoyo: true,
      duration: 0.5,
      rotate: 30,
      delay: 0.5,
      repeat: -1,
      repeatDelay: 1,
    })
  }, [])

  return (
    <div className="absolute bottom-1/2 right-1/2 w-[290px] translate-x-1/2 translate-y-[42%] lg:w-[632.8px]">
      <img id="monad-earth" src="/images/monad-star.png" />
    </div>
  )
}

export default MonadEarth