import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Community = () => {
  const scrollRef = useScrollAnimation()

  return (
    <section className="mt-[171px] h-[600px] bg-gradient-to-t from-black to-transparent lg:mt-[303px] lg:h-[756px]">
      <div className="relative mx-auto h-full max-w-[1076px] px-[20px]">
        <div className="absolute bottom-0 right-0 size-[40vw] max-h-[620px] min-h-[268.7px] min-w-[268.7px] max-w-[620px] max-lg:right-[-15px] lg:size-[45vw]">
          <div className="absolute right-1/2 top-[-100px] z-10 lg:right-[60%] lg:top-[-150px]">
            <div className="relative inline-block">
              <div className="whitespace-nowrap rounded-full bg-purple px-8 py-[20.7px] pl-[47.7px] pr-[56.3px] font-bold text-background max-lg:text-[15px] lg:py-[33px] lg:pl-[76px] lg:pr-[90px] lg:text-h4">
                <i>Moonad or Jeet?</i>
              </div>
              <div className="absolute bottom-[-20px] right-[20%] border-[20px] border-transparent border-r-purple lg:bottom-[-30px] lg:border-[30px]" />
            </div>
          </div>
          <img src="/images/community.png" className="size-full object-contain" />
        </div>
        <div className="lg:pt-[237px]">
          <div ref={scrollRef} className="flex flex-col gap-[8px] lg:gap-[24px]">
            <div className="text-h4 lg:max-w-[600px] lg:text-h3">
              Join the Nad.fun OG community before the launch!
            </div>
            <p className="max-w-[80vw] text-description lg:max-w-[500px] lg:text-h5-regular">
              Let's discuss shitcoin endlessly with experienced Degen Nads and strategize to achieve
              high Pnl.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
