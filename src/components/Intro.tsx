import { useEffect, useState } from 'react'
import StarsBackground from './ui/StarsBackground'
import { Stars1, Stars2, Stars4 } from './ui/Stars'

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
    <div className="relative h-dvh bg-nad-gradient pt-[60px]">
      <StarsBackground cols={cols} rows={rows} smallStarRatio={0.8} />
      <div className="relative z-40">
        <div className="absolute">
          <Stars1 />
          <Stars2 />
          <Stars4 />
        </div>
        <img
          src="/images/monad-star.png"
          className="mx-auto mt-[20vh] h-[191px] w-[236px] lg:mt-[15vh] lg:h-[437px] lg:w-[538px]"
        />
      </div>
      <div className="absolute bottom-[24px] right-1/2 translate-x-1/2 text-h4 text-background drop-shadow-strong lg:text-h1 lg:drop-shadow-glow">
        GMonad!
      </div>
    </div>
  )
}

export default Intro
