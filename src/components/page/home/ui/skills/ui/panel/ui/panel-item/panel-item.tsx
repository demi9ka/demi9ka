import { AnimatedComponent } from '@/shared/ui/animated-component'
import type { IconType } from '@icons-pack/react-simple-icons'

type Props = {
  Icon: IconType
  text: string
  delay?: number
  index: number
  total: number
}

export const PanelItem = ({ Icon, text, delay, index, total }: Props) => {
  const cols = 4
  const isRightBorder = (index + 1) % cols !== 0 && index !== total - 1
  const isBottomBorder = index < total - cols

  return (
    <AnimatedComponent animationType='fade' duration={0.5} delay={delay ?? 0.1} once={false}>
      <div
        className={[
          'group flex items-center gap-3 h-12 px-4 bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))] hover:border-indigo-500/40 transition-all duration-150 cursor-default',
          isRightBorder ? 'border-r border-[hsl(var(--border))]' : '',
          isBottomBorder ? 'border-b border-[hsl(var(--border))]' : '',
        ].join(' ')}
      >
        <Icon
          size={16}
          color='default'
          className="shrink-0 text-[hsl(var(--muted-foreground))] group-hover:text-indigo-400 transition-colors duration-150"
        />
        <span className="font-mono text-xs text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] truncate tracking-wide transition-colors duration-150">
          {text}
        </span>
      </div>
    </AnimatedComponent>
  )
}
