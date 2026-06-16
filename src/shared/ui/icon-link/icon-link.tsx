import { cn } from '@/shared/ui/lib/utils'
import type { ReactNode } from 'react'

type Props = {
  href: string
  label: string
  children: ReactNode
  className?: string
}

/** Square bordered icon button used for social / contact links. */
export const IconLink = ({ href, label, children, className }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-md border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:border-[hsl(0_0%_32%)] hover:text-[hsl(var(--foreground))]',
        className
      )}
    >
      {children}
    </a>
  )
}
