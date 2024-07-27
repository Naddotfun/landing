import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const scrollRef = useScrollAnimation()

  return (
    <section
      id="about"
      className="mx-auto flex max-w-[1076px] gap-[24px] px-[20px] pt-[46px] max-lg:flex-col max-lg:px-[20px] lg:gap-[50px] lg:pt-[160px] xl:gap-[87px]"
    >
      <img src="/images/about.png" alt="about" className="lg:max-w-[490px]" />
      <div ref={scrollRef} className="flex flex-col gap-[8px] lg:gap-[24px]">
        <div className="text-h4 lg:text-h3">About Nad.fun</div>
        <div className="text-description max-lg:w-[65vw] lg:text-h5-regular">
          Nad.fun is a platform that provides everything Nads who want to trade Memencoin need to
          make it simple to create and trade Memecoin
        </div>
      </div>
    </section>
  )
}

export default About
