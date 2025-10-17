import { SectionTitle } from '@/shared/ui/section-title'
import { Box } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { DATA } from './constants'
import { Card } from './ui/card'
import { useMediaQuery } from '@mantine/hooks'
import { useMemo } from 'react'

export const Portfolio = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const mappedData = useMemo(() => DATA.map((el, i) => <Card key={i} {...el} id={i} />), [])

  return (
    <>
      <SectionTitle title={t('home.portfolio.title')} />
      <Box
        style={{
          columnCount: isMobile ? 1 : 2,
          columnGap: 16
        }}
        my={'sm'}
      >
        {mappedData}
      </Box>
    </>
  )
}
