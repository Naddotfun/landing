import { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface Props extends HTMLAttributes<HTMLDivElement> {
  italic?: boolean
  typography:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'body-bold'
    | 'body-medium'
    | 'body-regular'
    | 'small-bold'
}

export function Text({ typography, italic, className, children }: Props) {
  const innerClassName = cn(
    typography === 'h1' && 'text-h1',
    typography === 'h2' && 'text-h2',
    typography === 'h3' && 'text-h3',
    typography === 'h4' && 'text-h4',
    typography === 'h5' && 'text-h5',
    typography === 'body-bold' && 'text-body-bold',
    typography === 'body-medium' && 'text-body-medium',
    typography === 'body-regular' && 'text-body-regular',
    typography === 'small-bold' && 'text-small-bold',
  )

  return (
    <div className={className}>
      {italic ? (
        <i className={innerClassName}>{children}</i>
      ) : (
        <span className={innerClassName}>{children}</span>
      )}
    </div>
  )
}
