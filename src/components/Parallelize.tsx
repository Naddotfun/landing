import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Parallelize = () => {
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
    <div className="mx-auto mt-[177px] flex w-fit items-center text-center max-lg:flex-col max-lg:gap-[16px] lg:mt-[231px]">
      <div className="text-h4 text-purple">
        <i>Parallelized</i>
      </div>
      <div className="lg:pl-[97px] lg:pr-[89px]">
        <img
          id="parallelize"
          src="/images/parallelize.png"
          className="size-[120px] lg:size-[228px]"
        />
      </div>
      <div className="text-h4 text-purple">
        <i>10,000 real TPS</i>
      </div>
    </div>
  )
}

export default Parallelize
