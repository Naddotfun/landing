const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-[1076px] gap-[24px] px-[20px] pt-[46px] max-lg:flex-col max-lg:px-[20px] lg:gap-[50px] lg:pt-[160px] xl:gap-[87px]"
    >
      <img src="/images/about.png" alt="about" className="lg:max-w-[490px]" />
      <div className="flex flex-col gap-[8px] lg:gap-[24px]">
        <div className="text-h4 lg:text-h3">About Nad.fun</div>
        <div className="text-description lg:text-h5-regular">
          Nad.fun is a platform that provides everything
          <br />
          Nads who want to trade Memencoin need to
          <br />
          make it simple to create and trade Memecoin
        </div>
      </div>
    </section>
  )
}

export default About
