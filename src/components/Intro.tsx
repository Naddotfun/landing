import Icon from './icon'

import { HTMLAttributes, useEffect, useMemo, useState } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Intro = ({ className }: Props) => {
  const [joinedUser, setJoinedUser] = useState(6000)

  useEffect(() => {
    const api_url = import.meta.env.PROD
      ? import.meta.env.VITE_API_URL
      : import.meta.env.VITE_API_DEV_URL

    fetch(`${api_url}/accounts_count`)
      .then((res) => res.json())
      .then(({ count }) => setJoinedUser(count))
  }, [])

  const roundedJoinedUser = useMemo(() => {
    return roundUpDynamic(joinedUser)
  }, [joinedUser])

  return (
    <div className={className}>
      <div className="relative h-svh">
        <div className="absolute inset-0 h-full bg-nad-gradient" />
        <div className="mx-auto h-full max-w-[1440px]">
          <img
            src="/intro-star.png"
            alt="monad-logo"
            className="absolute bottom-0 left-1/2 h-[675px] w-[1324px] -translate-x-1/2 object-cover object-center"
          />
          <img
            src="intro-gradation.png"
            alt=""
            className="absolute left-0 size-full object-cover"
          />
          <Icon
            name="intro-monad-logo"
            className="absolute right-1/2 top-0 size-[100vw] translate-x-1/2 blur-[3px] xs:size-[580px]"
          />
          <div className="flex flex-col items-center pt-[70px] *:z-10 xs:pt-[107px]">
            <Icon name="intro-nad-fun-logo" />
            <Icon
              name="intro-text-logo"
              className="mt-[32px] h-[58px] w-[283px] xs:mt-[41.6px] xs:h-[101.4px] xs:w-[494.2px]"
            />
            <p className="mt-[24px] px-[20px] text-center text-body2 text-gray-100 xs:mt-[32px] xs:text-[20px] xs:leading-[150%] xs:tracking-[-0.02em]">
              One click token generation & gamefied trading platform on Monad
            </p>

            <a
              href="https://app.nad.fun/dashboard"
              target="_blank"
              rel="noreferrer noopener"
              className="relative mt-[48px] flex items-center gap-[12px] overflow-hidden rounded-[48px] border border-white bg-gradient-to-r from-[#FEFEFF] to-[#CFB7FF] bg-clip-text px-[19px] py-[11.5px] text-transparent xs:mt-[64px] xs:px-[32px] xs:py-[16px]"
            >
              <div className="absolute inset-0 bg-white/10" />
              <span className="text-subtitle3 xs:text-subtitle1">
                Grab GIGA opportunity before launch
              </span>
              <Icon name="chevron-right" className="xs:h-[16px] xs:w-[9px]" />
            </a>
            <p className="mt-[20px] text-body4 text-purple-100 xs:text-body2">
              {roundedJoinedUser}+ members already joined
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const roundUpDynamic = (number: number) => {
  const magnitude = Math.floor(Math.log10(number))
  const scale = Math.pow(10, magnitude - 1)
  return Math.ceil(number / scale) * scale
}
