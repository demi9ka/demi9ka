import { SectionTitle } from '@/shared/ui/section-title'
import { Box, Flex } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { DATA } from './constants'
import { Card } from './ui/card'
import { useMediaQuery } from '@mantine/hooks'

export const Portfolio = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const left = DATA.filter((_, i) => i % 2 === 0)
  const right = DATA.filter((_, i) => i % 2 === 1)

  if (isMobile) {
    return (
      <>
        <SectionTitle title={t('home.portfolio.title')} />
        <Box my='sm'>
          {DATA.map((el, i) => <Card key={i} {...el} />)}
        </Box>
      </>
    )
  }

  return (
    <>
      <SectionTitle title={t('home.portfolio.title')} />
      <Flex gap={16} my='sm' align='flex-start'>
        <Box style={{ flex: 1 }}>
          {left.map((el, i) => <Card key={i * 2} {...el} />)}
        </Box>
        <Box style={{ flex: 1 }}>
          {right.map((el, i) => <Card key={i * 2 + 1} {...el} />)}
        </Box>
      </Flex>
    </>
  )
}
