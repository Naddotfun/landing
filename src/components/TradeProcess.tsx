import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const TradeProcess = ({ className }: Props) => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 })

    tl.to('#parallelize', {
      rotation: 165,
      duration: 0.4,
      ease: 'power1.out',
    }).to('#parallelize', {
      rotation: 0,
      duration: 1,
      ease: 'power1.in',
    })
  }, [])

  return (
    <div className={className}>
      <div className="flex gap-[50px] max-md:flex-col-reverse md:gap-[80px] md:pl-[30px] lg:gap-[209px] lg:pl-[45px]">
        <div className="max-md:flex-center min-w-[204px] lg:min-w-[262px]">
          <img
            id="parallelize"
            src="/images/parallelize.png"
            className="size-[204px] shrink-0 lg:size-[262px]"
          />
        </div>
        <div className="w-[308px] md:w-[523px]">
          <h2 className="text-headline3 md:text-headline1">Post-trade process on Nad.fun</h2>
          <p className="mt-[8px] text-body2 text-gray-50 md:mt-[16px] md:text-subtitle2">
            After reaching a certain Marketcap on Nad.fun, memecoin will be halted from trading in
            preparation for listing on Monad's main DEX.
            <br />
            <br />A portion of the liquidity accumulated prior to the listing will then be burned
            and listed.
          </p>
        </div>
      </div>
    </div>
  )
}
