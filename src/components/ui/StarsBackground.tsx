import { useMemo } from 'react'
import { createNoise2D } from 'simplex-noise'

const createStarGrid = (cols: number, rows: number, smallStarRatio: number) => {
  const grid = []
  const noise2D = createNoise2D()
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = (j / cols) * 100
      const y = (i / rows) * 100
      const noiseValue = noise2D(x * 0.1, y * 0.1)
      grid.push({
        x: x + noiseValue * 10,
        y: y + noiseValue * 10,
        isSmall: Math.random() < smallStarRatio,
      })
    }
  }

  return grid
}

const StarsBackground = ({ cols = 20, rows = 15, smallStarRatio = 0.7 }) => {
  const stars = useMemo(
    () => createStarGrid(cols, rows, smallStarRatio),
    [cols, rows, smallStarRatio],
  )

  return (
    <div className="absolute inset-0 overflow-hidden bg-nad-gradient">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-white ${
            star.isSmall ? 'size-[1.8px] lg:size-[2.9px]' : 'size-[5.2px] lg:size-[8px]'
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            boxShadow: star.isSmall
              ? '0 0 2px 1px rgba(255, 255, 255, 0.5)'
              : '0 0 4px 2px rgba(255, 255, 255, 0.7)',
          }}
        />
      ))}
    </div>
  )
}

export default StarsBackground
