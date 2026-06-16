import { cn } from '@/shared/ui/lib/utils'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** narrow ~720px (content), wide ~1100px (full width) */
  size?: 'narrow' | 'wide'
}

export const Container = ({ children, className, size = 'narrow' }: Props) => {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-6',
        size === 'narrow' ? 'max-w-[760px]' : 'max-w-[1120px]',
        className
      )}
    >
      {children}
    </div>
  )
}
