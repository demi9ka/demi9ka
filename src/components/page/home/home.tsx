import { Box, Title } from '@mantine/core'
import css from './home.module.css'
import { CodeIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Helmet } from './helmet'

export const Home = () => {
  const { t } = useTranslation()
  return (
    <Box p={8} pt={64} className={css.wrapper}>
      <Helmet/>
      <CodeIcon size={48} />
      <AnimatedComponent animationType="slideUp" duration={1.2} delay={0.2} once={false} value={20}>
        <Title my={'xl'} order={2}>
          {t('home.profile.name')}
        </Title>
      </AnimatedComponent>
    </Box>
  )
}
