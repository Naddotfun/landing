import { useScrollAnimation } from '../hooks/useScrollAnimation'

import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Community = ({ className }: Props) => {
  const scrollRef = useScrollAnimation()

  return (
    <div className={className}>
      <div className="relative h-[645px] md:h-[775px]">
        <div className="mx-auto max-w-[1076px] px-[20px] md:pl-[64px] md:pt-[182px]">
          <div ref={scrollRef} className="flex flex-col gap-[8px] md:gap-[24px]">
            <div className="text-headline3 md:text-headline1">
              Join the Nad.fun OG community
              <br className="max-md:hidden" /> before the launch!
            </div>
            <p className="mt-[16px] text-body2 max-md:w-[278px] md:text-subtitle2">
              Let's discuss shitcoin endlessly with experienced Degen Nads
              <br className="max-md:hidden" /> and strategize to achieve high Pnl.
            </p>
            <a
              href="https://x.com/naddotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[40px] md:mt-[64px]"
            >
              <button className="rounded-[32px] bg-purple-500 px-[20px] py-[10px] text-button2 md:px-[37px] md:py-[13px] md:text-button1">
                Lock-in to Community
              </button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 size-[35vw] max-h-[620px] min-h-[268.7px] min-w-[268.7px] max-w-[620px] max-xl:right-[-15px] xl:size-[40vw]">
          <div className="absolute right-1/2 top-[-70px] xl:right-[60%] xl:top-[-150px]">
            <div className="relative inline-block">
              <div className="whitespace-nowrap rounded-[16px] bg-gray-800 p-[13px_35px_13px_42px] text-[12px] font-medium leading-[150%] tracking-[-0.02em] text-purple-200 xl:rounded-[32px] xl:px-[96px] xl:py-[36px] xl:text-[24px]">
                <i>Moonad or Jeet?</i>
              </div>
              <div className="absolute bottom-[-6px] right-[20px] size-0 rotate-90 border-x-[16px] border-t-[16px] border-x-transparent border-t-gray-800 xl:bottom-[-10px] xl:right-[30px] xl:border-x-[20px] xl:border-t-[20px]" />
            </div>
          </div>
          <img src="/images/joinmonad.png" className="size-full object-contain" />
        </div>
      </div>
    </div>
  )
}
