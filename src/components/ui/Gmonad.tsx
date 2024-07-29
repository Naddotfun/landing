import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Gmonad = ({ className }: Props) => {
  return (
    <div
      className={`text-h4 text-background drop-shadow-strong lg:text-h1 lg:drop-shadow-glow ${className}`}
    >
      GMonad!
    </div>
  )
}

export default Gmonad
