import { Grid } from '@mantine/core'
import { PanelItem } from './ui/panel-item'
import type { SkillItemType } from '../../constants'

type Props = {
  data: SkillItemType[]
}

export const Panel = ({ data }: Props) => {
  const mappedData = data.map(({ icon, text }, i) => <PanelItem Icon={icon} text={text} delay={(i + 1) / 60} />)
  return (
    <Grid gutter={'xs'} py={'sm'}>
      {mappedData}
    </Grid>
  )
}
