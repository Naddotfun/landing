const Rule = () => {
  return (
    <div id="rule" className="relative mx-auto pt-[76px] lg:pt-[169.8px]">
      <img src="/images/rule-graph.png" className="mx-auto w-full max-w-[1440px]" />
      <img
        src="/images/rule-character.png"
        className="absolute bottom-0 left-1/2 h-[21vw] max-h-[322px] max-w-[502px] translate-x-[-15%] max-lg:bottom-[151px]"
      />
      <div className="mx-auto max-w-[1076px]">
        <div className="mx-[20px] flex flex-col gap-[8px] max-lg:mt-[56.9px] max-lg:px-[20px] lg:absolute lg:top-[169.8px] lg:gap-[24px]">
          <div className="text-h4 lg:text-h3">Rule of Nad.fun</div>
          <div className="text-body-regular lg:text-h5-regular">
            Each coin on Nad.fun is a{' '}
            <span className="text-body-bold lg:text-h5-bold">fair-launch</span> with
            <br />
            <span className="text-body-bold lg:text-h5-bold">no presale</span> and no{' '}
            <span className="text-body-bold lg:text-h5-bold">team allocation.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rule
