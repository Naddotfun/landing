const LockIn = () => {
  return (
    <div className="mx-auto pt-[120px] lg:pt-[111px]">
      <div className="text-center text-h3 text-purple drop-shadow-glow lg:text-h1">
        Let's LOCK-IN'
      </div>
      <div role="button" className="group relative mx-auto mt-[65px] size-[259px] lg:mt-[64px]">
        <img src="/images/lock-in.png" />
        <div className="absolute right-1/2 top-[82px] translate-x-1/2 text-h3 leading-[187%] transition-all group-hover:opacity-50">
          <i>Click!</i>
        </div>
      </div>
    </div>
  )
}

export default LockIn
