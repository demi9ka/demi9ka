import { PanelItem } from './ui/panel-item'
import type { SkillItemType } from '../../constants'

type Props = { data: SkillItemType[] }

export const Panel = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border border-t-0 border-[hsl(var(--border))] divide-[hsl(var(--border))]" style={{ gridAutoRows: '1fr' }}>
      {data.map(({ icon, text }, i) => (
        <PanelItem key={i} Icon={icon} text={text} delay={(i + 1) / 60} index={i} total={data.length} />
      ))}
    </div>
  )
}
