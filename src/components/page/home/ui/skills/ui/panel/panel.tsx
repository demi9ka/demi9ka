import { PanelItem } from './ui/panel-item'
import type { SkillItemType } from '../../constants'

type Props = {
  data: SkillItemType[]
}

export const Panel = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-1.5 py-2 sm:py-3">
      {data.map(({ icon, text }, i) => (
        <PanelItem key={i} Icon={icon} text={text} delay={(i + 1) / 60} />
      ))}
    </div>
  )
}
