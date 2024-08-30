import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const TPS = ({ className }: Props) => {
  return (
    <div className={className}>
      <div>
        <h2 className="bg-gradient-to-r from-[#D4DBF8] to-purple-400 bg-clip-text text-headline2 text-transparent md:text-hero">
          Launching Coin on
          <br className="max-md:hidden" /> Parallelized & 10,000 real TPS Chain
        </h2>
        <div className="flex-center mt-[24px] h-[162px] w-full rounded-[13px] bg-black md:mt-[31px] md:h-[293px] md:rounded-[24px]">
          <img src="/tps.png" alt="tps" className="aspect-[738/293] h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
