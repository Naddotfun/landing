import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HowToBuy = () => {
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
    <section
      ref={sectionRef}
      id="how-to-buy"
      className="mx-auto max-w-[1076px] px-[20px] pt-[134px] lg:pt-[240px]"
    >
      <h4 className="text-center text-h4 lg:text-h2">How to buy token on Nad.fun</h4>
      <div
        ref={stepsRef}
        className="mt-[47px] flex gap-[60px] max-lg:flex-col max-lg:justify-center lg:mt-[116px] lg:gap-[126px]"
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
      </div>
    </section>
  )
}

interface StepProps {
  image: string
  title: string
  description: string
}

const Step = ({ image, title, description }: StepProps) => (
  <div className="flex flex-col max-lg:items-center">
    <img src={image} className="h-[120px] w-[130px] lg:h-[240px] lg:w-[260px]" alt={title} />
    <div className="lg: mt-[16px] flex flex-col gap-[4px] max-lg:items-center lg:mt-[33px] lg:gap-[8px]">
      <div className="text-h5-bold text-purple">{title}</div>
      <div className="text-description lg:text-description-lg">{description}</div>
    </div>
  </div>
)

export default HowToBuy
