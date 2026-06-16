import { cn } from '@/shared/ui/lib/utils'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

/** Minimal monochrome pill used for tech stack / skills. */
export const Tag = ({ children, icon, className }: Props) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-2.5 py-1 text-xs text-[hsl(var(--muted-foreground))] transition-colors duration-150 hover:border-[hsl(0_0%_30%)] hover:text-[hsl(var(--foreground))]',
        className
      )}
    >
      {icon}
      {children}
    </span>
  )
}
