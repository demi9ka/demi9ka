import { Grid } from '@mantine/core'
import { PanelItem } from './ui/panel-item'
import type { SkillItemType } from '../../constants'

type Props = {
  data: SkillItemType[]
}

export const Panel = ({ data }: Props) => {
  const mappedData = data.map(({ icon, text }, i) => <PanelItem key={i} Icon={icon} text={text} delay={(i + 1) / 60} />)
  return (
    <Grid gutter={{ base: 4, sm: 6 }} py={{ base: 'xs', sm: 'sm' }}>
      {mappedData}
    </Grid>
  )
}
