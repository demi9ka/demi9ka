import { Flex, Title, Box, Text, Blockquote, Badge, Button } from '@mantine/core'
import { Trans, useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import { scrollPositionStore } from '@/store/scroll-postoion-store'

export const Profile = () => {
  const { t } = useTranslation()

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (!el || !scrollPositionStore.viewportRef?.current) return
    const viewport = scrollPositionStore.viewportRef.current
    const offsetTop = el.offsetTop
    viewport.scrollTo({ top: offsetTop - 60, behavior: 'smooth' })
  }

  return (
    <Box>
      <Flex mb={{ base: 24, sm: 32 }} direction={'column'}>
        <Title order={2}>{t('home.profile.name')}</Title>

        <Badge w={'fit-content'} fw={'unset'} mt={{ base: 8, sm: 12 }} fs={'italic'} size='lg' variant='light'>
          {t('home.profile.post')}
        </Badge>
      </Flex>

      <Blockquote m={0} pl={30} py={22} color='blue.4' icon={null}>
        <Text>
          <Trans i18nKey={'home.profile.info'} />
        </Text>
      </Blockquote>

      <Flex justify='center' mt={24}>
        <Button onClick={scrollToContact} size='md' leftSection={<Mail size={16} />}>
          {t('home.profile.cta')}
        </Button>
      </Flex>
    </Box>
  )
}
