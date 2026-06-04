import { AnimatedComponent } from '@/shared/ui/animated-component'
import type { IconType } from '@icons-pack/react-simple-icons'

type Props = {
  Icon: IconType
  text: string
  delay?: number
}

export const PanelItem = ({ Icon, text, delay }: Props) => {
  return (
    <AnimatedComponent animationType='fade' duration={0.6} delay={delay ?? 0.2} once={false}>
      <div className="flex items-center gap-3 h-11 px-3 py-2 bg-muted border border-border rounded-md hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors duration-150">
        <Icon color={'default'} size={18} className="shrink-0 text-foreground" />
        <span className="text-sm text-foreground truncate">{text}</span>
      </div>
    </AnimatedComponent>
  )
}
