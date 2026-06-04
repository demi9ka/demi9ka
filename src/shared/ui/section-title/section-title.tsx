import { cn } from '@/shared/ui/lib/utils'

type Props = {
  title: string
  id?: string
  index?: string
  className?: string
  style?: React.CSSProperties
}

export const SectionTitle = ({ title, id, index, className, style }: Props) => {
  return (
    <div
      id={id}
      style={style}
      className={cn('flex items-center gap-4 mt-14 mb-5', className)}
    >
      {index && (
        <span className="font-mono text-xs text-indigo-500/70 tracking-widest shrink-0">
          {index}
        </span>
      )}
      <span className="text-xs font-mono tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))]">
        {title}
      </span>
      <div className="flex-1 h-px bg-[hsl(var(--border))]" />
    </div>
  )
}
