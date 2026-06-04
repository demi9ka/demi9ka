import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './lib/utils'

const badgeVariants = cva(
  'inline-flex items-center border px-2 py-0.5 text-xs font-mono tracking-widest uppercase transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-indigo-600 text-white',
        secondary: 'border-[hsl(var(--border))] bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]',
        outline: 'border-[hsl(var(--border))] text-[hsl(var(--foreground))]',
        light: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
