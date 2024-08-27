import { useScrollAnimation } from '../hooks/useScrollAnimation'

import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Rule = ({ className }: Props) => {
  const scrollRef = useScrollAnimation()

  return (
    <div className={className}>
      <section id="rule" className="relative">
        <div className="mx-auto max-w-[1076px] px-[20px]">
          <div ref={scrollRef}>
            <div className="text-headline3 md:text-headline1">Rule of Nad.fun</div>
            <p className="mt-[8px] w-[300px] text-body2 text-gray-50 md:mt-[16px] md:w-[340px] md:text-subtitle2">
              Each coin on Nad.fun is a fair-launch with no pre-sale and no team allocation.
            </p>
          </div>
        </div>
        <div className="relative max-md:mt-[79px] md:mt-[-40px]">
          <img
            src="/rule-graph.png"
            className="mx-auto max-h-[478px] min-h-[215px] w-full object-cover object-center md:object-fill"
          />
          <div className="relative">
            <div className="absolute bottom-0 right-[40%] aspect-[232/149] w-[30vw] min-w-[209px] max-w-[464px]">
              <img src="/rule-character.png" className="absolute size-full" />
              <div className="absolute left-[20%] top-[-70px] w-fit rounded-[16px] bg-gray-800 p-[13px_39px_13px_47px] lg:top-[-90px] lg:p-[18px_59px_18px_66px]">
                <i className="text-nowrap text-[12px] leading-[150%] tracking-[-0.02em] text-purple-200 lg:text-[16px]">
                  Left curve always win
                </i>
                <div className="absolute bottom-[-4px] left-[20px] size-0 -rotate-90 border-x-8 border-t-8 border-x-transparent border-t-gray-800 lg:bottom-[-6px] lg:left-[30px] lg:border-x-[12px] lg:border-t-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
