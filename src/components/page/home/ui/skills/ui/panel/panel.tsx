import { PanelItem } from './ui/panel-item'
import type { SkillItemType } from '../../constants'

type Props = { data: SkillItemType[] }

export const Panel = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {data.map(({ icon, text }, i) => (
        <PanelItem key={i} Icon={icon} text={text} delay={(i + 1) / 60} />
      ))}
    </div>
  )
}
