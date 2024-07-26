const HowToBuy = () => {
  return (
    <section id="how-to-buy" className="mx-auto max-w-[1076px] px-[20px] pt-[134px] lg:pt-[240px]">
      <h4 className="text-center text-h4 lg:text-h2">How to buy token on Nad.fun</h4>
      <div className="mt-[47px] flex items-center gap-[60px] max-lg:flex-col max-lg:justify-center lg:mt-[116px] lg:gap-[126px]">
        <div className="flex flex-col max-lg:items-center">
          <img src="/images/step1.png" className="h-[120px] w-[130px] lg:h-[240px] lg:w-[260px]" />
          <div className="lg: mt-[16px] flex flex-col gap-[4px] max-lg:items-center lg:mt-[33px]  lg:gap-[8px]">
            <div className="text-h5-bold text-purple">Step 1</div>
            <div className="text-description lg:text-description-lg">Pick a coin that you like</div>
          </div>
        </div>

        <div className="flex flex-col max-lg:items-center">
          <img src="/images/step2.png" className="h-[120px] w-[130px] lg:h-[240px] lg:w-[260px]" />
          <div className="lg: mt-[16px] flex flex-col gap-[4px] max-lg:items-center lg:mt-[33px]  lg:gap-[8px]">
            <div className="text-h5-bold text-purple">Step 2</div>
            <div className="text-description lg:text-description-lg">
              Buy the coin on the bonding curve
            </div>
          </div>
        </div>

        <div className="flex flex-col max-lg:items-center">
          <img src="/images/step3.png" className="h-[120px] w-[130px] lg:h-[240px] lg:w-[260px]" />
          <div className="lg: mt-[16px] flex flex-col gap-[4px] max-lg:items-center lg:mt-[33px]  lg:gap-[8px]">
            <div className="text-h5-bold text-purple">Step 3</div>
            <div className="text-description max-lg:text-center lg:text-description-lg">
              Sell at any time to lock in <br className="lg:hidden" />
              your <br className="max-lg:hidden" />
              profits or losses
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuy
