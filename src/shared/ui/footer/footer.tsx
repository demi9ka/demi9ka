import { Container, Group, Text, Stack, Box } from '@mantine/core'

import { Navigation } from './ui/navigation'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <Box component='footer' style={{ zIndex: 1 }} pos={'fixed'} bottom={0} left={0} w={'100%'} bg={'dark'} mt={24}>
      <Container bg={'dark'} size={1024} py={16}>
        <Stack gap='xs'>
          <Text size='md' fw={500}>
            {t('footer.title')}
          </Text>
          <Group gap='lg'>
            <Navigation to='/' text={t('footer.main')} />
            <Navigation to='/#skills' text={t('footer.skills')} />
            <Navigation to='/#portfolio' text={t('footer.portfolio')} />
            <Navigation to='/#contact' text={t('footer.contact')} />
          </Group>
        </Stack>

        <Text
          size='xs'
          c='dimmed'
          ta='center'
          mt='md'
          pt='md'
          style={{
            borderTop: '1px solid var(--mantine-color-gray-8)'
          }}
        >
          © {currentYear} {t('footer.copyrigth')}
        </Text>
      </Container>
    </Box>
  )
}
