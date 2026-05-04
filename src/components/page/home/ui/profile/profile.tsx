import { Flex, Title, Box, Text, Blockquote, Badge, Button, Avatar } from '@mantine/core'
import { Trans, useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import { scrollPositionStore } from '@/store/scroll-postoion-store'
import { AnimatedComponent } from '@/shared/ui/animated-component'

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
    <Box style={{ overflowX: 'hidden' }}>
      <Flex justify='center' mb={{ base: 20, sm: 28 }}>
        <AnimatedComponent animationType='zoom' duration={0.6} delay={0.1} value={0.7}>
          <Avatar
            src='/avatar.webp'
            alt={t('home.profile.name')}
            radius='50%'
            style={{ width: 'clamp(150px, 28vw, 240px)', height: 'clamp(150px, 28vw, 240px)' }}
          />
        </AnimatedComponent>
      </Flex>

      <Flex mb={{ base: 24, sm: 32 }} direction={'column'} align='center'>
        <AnimatedComponent animationType='slideRight' duration={0.5} delay={0.2} value={-40}>
          <Title order={2}>{t('home.profile.name')}</Title>
        </AnimatedComponent>

        <AnimatedComponent animationType='slideLeft' duration={0.5} delay={0.3} value={40}>
          <Badge fw={'unset'} mt={{ base: 8, sm: 12 }} fs={'italic'} size='lg' variant='light'>
            {t('home.profile.post')}
          </Badge>
        </AnimatedComponent>
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
