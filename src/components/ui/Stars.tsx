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
  return (
    <>
      <Star size="lg" />
    </>
  )
}

export function Stars2() {
  return (
    <>
      <Star size="xs" />
      <Star size="md" className="-rotate-45" />
    </>
  )
}

export function Stars4() {
  return (
    <>
      <Star size="lg" />
      <Star size="lg" />
      <Star size="sm" />
      <Star size="sm" />
    </>
  )
}
