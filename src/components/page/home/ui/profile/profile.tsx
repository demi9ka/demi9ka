import { Flex, Title, Box, Text, Blockquote, Badge } from '@mantine/core'
import { Trans, useTranslation } from 'react-i18next'
import { Image } from '@/shared/ui/image'
import { CodeIcon } from 'lucide-react'

export const Profile = () => {
  const { t } = useTranslation()

  return (
    <Flex
      direction={{
        base: 'column-reverse',
        sm: 'row'
      }}
      align={{
        base: 'center',
        sm: 'end'
      }}
    >
      <Box mt={{ base: 'xl', sm: 0 }}>
        <Flex mb={{ base: 48, sm: 32 }} direction={'column'}>
          <Title order={2} ta={{ base: 'center', sm: 'left' }}>
            {t('home.profile.name')}
          </Title>

          <Badge
            mx={{ base: 'auto', sm: 0 }}
            fw={'unset'}
            mt={{ base: 8, sm: 12 }}
            fs={'italic'}
            size='lg'
            variant='light'
          >
            {t('home.profile.post')}
          </Badge>
        </Flex>

        <Blockquote h={{ base: 'auto', sm: 312 }} m={0} pl={30} py={22} color='violet.4' icon={<CodeIcon />}>
          <Text ta={{ base: 'left', sm: 'left' }}>
            <Trans
              i18nKey={'home.profile.info'}
              components={{
                span: <span style={{ color: 'var(--mantine-color-violet-3)' }} />,
                br: <br />,
                b: <b />
              }}
            />
          </Text>
        </Blockquote>
      </Box>

      <Image
        style={{ pointerEvents: 'none' }}
        w={{ base: 256, sm: 280 }}
        h={{ base: 256, sm: 312 }}
        src={'/avatar.webp'}
      />
    </Flex>
  )
}
