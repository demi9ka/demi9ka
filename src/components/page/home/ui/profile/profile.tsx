import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Flex, Title, Box, Text } from '@mantine/core'

import { Trans, useTranslation } from 'react-i18next'
import { Image } from '@/shared/ui/image'

export const Profile = () => {
  const { t } = useTranslation()

  return (
    <Flex
      gap={16}
      direction={{
        base: 'column-reverse',
        sm: 'row',
      }}
      align={{
        base: 'center',
        sm: 'start',
      }}
    >
      <Box mt={{ base: 32, sm: 0 }}>
        <AnimatedComponent animationType="slideUp" duration={1.2} delay={0.2} once={false} value={20}>
          <Flex
            gap={8}
            justify={{
              base: 'center',
              sm: 'start',
            }}
            align={'center'}
          >
            <Title mb={'xl'} order={2}>
              {t('home.profile.name')}
            </Title>
          </Flex>
        </AnimatedComponent>
        <AnimatedComponent animationType="slideUp" duration={1.2} delay={0.4} once={false} value={10}>
          <Title ta={{ base: 'center', sm: 'left' }} order={3}>
            {t('home.profile.post')}
          </Title>
        </AnimatedComponent>
        <AnimatedComponent animationType="slideUp" duration={1.2} delay={0.6} once={false} value={10}>
          <Text ta={{ base: 'justify', sm: 'left' }} mt={16} mx={{ base: 'md', sm: 0 }}>
            <Trans
              i18nKey={'home.profile.info'}
              components={{
                span: <span style={{ color: 'var(--mantine-color-violet-3)' }} />,
              }}
            />
          </Text>
        </AnimatedComponent>
      </Box>
      <AnimatedComponent animationType="slideUp" duration={2} delay={0.8} once={false} value={10}>
        <Image mt={{ base: 0, sm: 64 }} w={256} h={256} src={'/avatar.webp'} />
      </AnimatedComponent>
    </Flex>
  )
}
