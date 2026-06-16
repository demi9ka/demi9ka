import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Tag } from '@/shared/ui/tag'
import type { IconType } from '@icons-pack/react-simple-icons'

type Props = {
  Icon: IconType
  text: string
  delay?: number
}

export const PanelItem = ({ Icon, text, delay }: Props) => {
  return (
    <AnimatedComponent animationType="slideUp" duration={0.4} delay={delay ?? 0.1} once value={8}>
      <Tag icon={<Icon size={14} color="default" className="shrink-0" />} className="px-3 py-1.5 text-sm">
        {text}
      </Tag>
    </AnimatedComponent>
  )
}
