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
      <div className="flex gap-[50px] max-md:flex-col-reverse md:gap-[95px] md:pl-[20px] lg:gap-[209px] lg:pl-[45px]">
        <div className="max-md:flex-center relative min-w-[204px] lg:min-w-[262px]">
          <img
            id="parallelize"
            src="/images/parallelize.png"
            className="size-[204px] shrink-0 lg:size-[262px]"
          />
          <div className="absolute left-[calc(50%-20px)] top-[-20px] rounded-[12.5px] bg-gray-850 p-[17px_14px_19.5px_11.7px] lg:left-1/2 lg:p-[22px_18px_25px_15px]">
            <p className="text-nowrap text-[10.9px] leading-[150%] tracking-[-0.02em] text-[#9D9FFD] lg:text-body2">
              Reaching to main DEX...
            </p>
            <div className="relative mt-[8px] w-[163.6px] lg:w-[210px]">
              <div className="h-[4.7px] w-full rounded-[5px] bg-gray-700 lg:h-[6px]" />
              <div className="absolute top-0 h-[4.7px] w-[90%] rounded-[5px] bg-red-300 bg-gradient-to-r from-[#BBACEA] to-[#7560F1] lg:h-[6px]" />
            </div>
          </div>
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
