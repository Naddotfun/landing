import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Star({
  size,
  className,
}: {
  size: 'lg' | 'md' | 'sm' | 'xs'
  className?: HTMLElement['className']
}) {
  const sizeClassName: HTMLElement['className'] =
    size === 'lg'
      ? 'w-[24px] h-[27px] lg:w-[70px] lg:h-[78px]'
      : size === 'md'
        ? 'w-[16px] h-[18px] lg:w-[47px] lg:h-[52px]'
        : size === 'sm'
          ? 'w-[14px] h-[16px] lg:w-[42px] lg:h-[47px]'
          : size === 'xs'
            ? 'w-[13px] h-[15px] lg:w-[39px] lg:h-[44px]'
            : ''

  return <img src="/images/star.png" className={`${sizeClassName} ${className}`} />
}

export function Stars1() {
  useGSAP(() => {
    gsap.to('#star1', {
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      delay: 0.5,
      repeatDelay: 1,
    })
  }, [])

  return (
    <div id="star1" className="absolute inset-0 opacity-0">
      <Star size="lg" className="absolute right-[10%] top-[20vh]" />
    </div>
  )
}

export function Stars2() {
  useGSAP(() => {
    gsap.to('#star2', {
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      delay: 0.8,
      repeatDelay: 1.6,
    })
  }, [])

  return (
    <div id="star2" className="absolute inset-0 opacity-0">
      <Star size="xs" className="absolute left-[40%] top-[15vh]" />
      <Star size="md" className="absolute bottom-[10vh] left-[20%] -rotate-45" />
    </div>
  )
}

export function Stars4() {
  useGSAP(() => {
    gsap.to('#star3', {
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 0.4,
      delay: 0.3,
      repeatDelay: 0.6,
    })
  }, [])

  return (
    <div id="star3" className="absolute inset-0 opacity-0">
      <Star size="lg" className="absolute left-[60%] top-[70px]" />
      <Star size="lg" className="absolute left-[5%] top-[30vh]" />
      <Star size="sm" className="absolute left-[70%] top-[50vh]" />
      {/* <Star size="sm" className="absolute left-[5%] top-[30vh]" /> */}
    </div>
  )
}
