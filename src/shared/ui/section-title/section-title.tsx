import { cn } from '@/shared/ui/lib/utils'

type Props = {
  title: string
  id?: string
  /** small muted label shown above the title, e.g. "01 / work" */
  label?: string
  className?: string
  style?: React.CSSProperties
}

export const SectionTitle = ({ title, id, label, className, style }: Props) => {
  return (
    <div id={id} style={style} className={cn('mb-8', className)}>
      {label && (
        <div className="mb-2 font-mono text-xs tracking-tight text-[hsl(var(--muted-foreground))]">
          {label}
        </div>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
