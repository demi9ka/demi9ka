import { SectionTitle } from '@/shared/ui/section-title'
import { Grid } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { DATA } from './constants'
import { Card } from './ui/card'

export const Portfolio = () => {
  const { t } = useTranslation()

  const mappedData = DATA.map((el, i) => <Card key={i} {...el} />)
  return (
    <>
      <SectionTitle title={t('home.portfolio.title')} />
      <Grid gutter={'sm'} my={'sm'}>
        {mappedData}
      </Grid>
    </>
  )
}
