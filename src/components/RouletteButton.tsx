import rouletteImage from '/images/roulette.png'

export default function RouletteButton() {
  return (
    <div>
      <a
        href="https://demo.nad.fun/demo"
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-[50px] right-[20px] z-50 flex flex-col items-center gap-[8px] lg:bottom-[80px] lg:right-[52px] lg:gap-[15px]"
      >
        <img src={rouletteImage} alt="Roulette" className="size-[91px] lg:size-[165px]" />
        <div className="text-[10px] leading-[150%] tracking-[-0.02em] text-[#9D9FFD] lg:text-[16px]">
          OG Lucky Roulette
        </div>
      </a>
    </div>
  )
}
