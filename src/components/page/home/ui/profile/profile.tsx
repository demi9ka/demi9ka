import { AnimatedComponent } from '@/shared/ui/animated-component'
import { Flex, Title, Box, Text, Blockquote } from '@mantine/core'
import { Trans, useTranslation } from 'react-i18next'
import { Image } from '@/shared/ui/image'
import { CodeIcon } from 'lucide-react'

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
        sm: 'end',
      }}
    >
      <Box>
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

        <Title ta={{ base: 'center', sm: 'left' }} mb={32} order={3}>
          {t('home.profile.post')}
        </Title>

        <AnimatedComponent animationType="slideUp" duration={1.2} delay={0.4} once={false} value={10}>
          <Blockquote h={{ base: 'auto', sm: 256 }} color="violet.4" icon={<CodeIcon />} mt={16}>
            <Text ta={'left'}>
              <Trans
                i18nKey={'home.profile.info'}
                components={{
                  span: <span style={{ color: 'var(--mantine-color-violet-3)' }} />,
                }}
              />
            </Text>
          </Blockquote>
        </AnimatedComponent>
      </Box>
      <AnimatedComponent animationType="slideUp" duration={2} delay={0.4} once={false} value={10}>
        <Image style={{ pointerEvents: 'none' }} w={256} h={256} src={'/avatar.webp'} />
      </AnimatedComponent>
    </Flex>
  )
}
