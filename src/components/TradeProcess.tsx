const TradeProcess = () => {
  return (
    <section className="mx-auto flex max-w-[1076px] gap-[24px] px-[20px] pt-[175px] max-lg:flex-col lg:gap-[50px] lg:pt-[210px] xl:gap-[100px]">
      <img src="/images/trade-process.png" alt="about" className="lg:max-w-[416px]" />
      <div className="flex flex-col gap-[8px] lg:gap-[24px]">
        <div className="text-h4 lg:text-h3">Post-trade process on Nad.fun</div>
        <div className="max-lg:max-w-[80vw] lg:max-w-[530px]">
          <p className="text-description lg:text-h5-regular">
            After reaching a certain Marketcap on Nad.fun, memecoin will be halted from trading in
            preparation for listing on Monad's main DEX.
            <br />
            <br />A portion of the liquidity accumulated prior to the listing will then be burned
            and listed.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TradeProcess
