import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const HowToBuy = ({ className }: Props) => {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!stepsRef.current || !sectionRef.current) return

      const steps = stepsRef.current.children

      gsap.fromTo(
        steps,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        },
      )

      Array.from(steps).forEach((step) => {
        const img = step.querySelector('img')
        const title = step.querySelector('.text-h5-bold')
        const description = step.querySelector('.text-description')

        if (img && title && description) {
          gsap.fromTo(
            [img, title, description],
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.3,
              duration: 0.6,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 80%',
              },
            },
          )
        }
      })
    },
    { scope: sectionRef },
  )

  return (
    <div className={className}>
      <section ref={sectionRef} id="how-to-buy">
        <h4 className="text-center text-headline4 md:text-headline2">
          How to buy token on Nad.fun
        </h4>
        <div
          ref={stepsRef}
          className="mt-[35px] flex items-center justify-center gap-[24px] max-lg:flex-col lg:mt-[82px] xl:gap-[36px]"
        >
          <Step image="/images/step1.png" title="Step 1" description="Pick a coin that you like" />
          <Step
            image="/images/step2.png"
            title="Step 2"
            description="Buy the coin on the bonding curve"
          />
          <Step
            image="/images/step3.png"
            title="Step 3"
            description="Sell at any time to lock in your profits or losses"
          />
          <div className="absolute -z-10 h-[340px] w-[2px] lg:h-[2px] lg:w-[800px]">
            <div className="center absolute size-full border-l-2 border-dashed border-purple-100 lg:border-l-0 lg:border-t-2"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface StepProps {
  image: string
  title: string
  description: string
}

const Step = ({ image, title, description }: StepProps) => (
  <div className="flex max-w-[320px] shrink-0 gap-[20px] rounded-[16px] border border-gray-800 bg-gray-850 p-[10px] max-lg:min-w-[335px] max-lg:items-center lg:min-h-[390px] lg:flex-col lg:p-[20px]">
    <img src={image} className="size-[80px] lg:h-[240px] lg:w-[280px]" alt={title} />
    <div>
      <div className="text-subtitle1 text-purple-400 lg:text-subtitle1">{title}</div>
      <div className="mt-[4px] text-body2 text-gray-100 lg:mt-[8px] lg:text-subtitle2">
        {description}
      </div>
    </div>
  </div>
)

export default HowToBuy
