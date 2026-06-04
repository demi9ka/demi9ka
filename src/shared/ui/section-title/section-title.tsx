import { cn } from '@/shared/ui/lib/utils'

type Props = {
  title: string
  id?: string
  className?: string
  style?: React.CSSProperties
}

export const SectionTitle = ({ title, id, className, style }: Props) => {
  return (
    <h3
      id={id}
      style={style}
      className={cn('mt-12 mb-4 text-xl font-semibold tracking-tight text-foreground', className)}
    >
      {title}
    </h3>
  )
}
