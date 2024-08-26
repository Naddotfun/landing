import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Gmonad = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="text-headline2 text-white drop-shadow-strong xs:text-hero lg:drop-shadow-glow">
        GMonad!
      </div>
    </div>
  )
}

export default Gmonad
