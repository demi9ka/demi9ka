import { Flex, Title, Box, Text, Blockquote, Badge } from '@mantine/core'
import { Trans, useTranslation } from 'react-i18next'
import { CodeIcon } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import { skillsStore } from '@/store/skills-store'

export const Profile = () => {
  const { t } = useTranslation()
  const { setActiveTab } = skillsStore

  return (
    <Box>
      <Flex mb={{ base: 24, sm: 32 }} direction={'column'}>
        <Title order={2}>
          {t('home.profile.name')}
        </Title>

        <Badge w={'fit-content'} fw={'unset'} mt={{ base: 8, sm: 12 }} fs={'italic'} size="lg" variant="light">
          {t('home.profile.post')}
        </Badge>
      </Flex>

      <Blockquote m={0} pl={30} py={22} color="blue.4" icon={<CodeIcon />}>
        <Text>
          <Trans
            i18nKey={'home.profile.info'}
            components={{
              frontendLink: <HashLink smooth style={{ color: 'var(--mantine-color-blue-6)' }} onClick={() => setActiveTab('frontend')} to="/#skills" />,
              backendLink: <HashLink smooth style={{ color: 'var(--mantine-color-blue-6)' }} onClick={() => setActiveTab('backend')} to="/#skills" />,
              br: <br />,
              b: <b />,
            }}
          />
        </Text>
      </Blockquote>
    </Box>
  )
}
