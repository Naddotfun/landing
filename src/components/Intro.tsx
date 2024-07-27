import { useEffect, useState } from 'react'
import StarsBackground from './ui/StarsBackground'

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

  const cols = Math.floor(dimensions.width / 90)
  const rows = Math.floor(dimensions.height / 90)

  return (
    <div className="relative h-dvh bg-nad-gradient pt-[60px]">
      <StarsBackground cols={cols} rows={rows} smallStarRatio={0.8} />
    </div>
  )
}

export default Intro
