import { Container, Text, Box } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <Box component='footer' style={{ zIndex: 1 }} pos={'fixed'} bottom={0} left={0} w={'100%'} bg={'dark'}>
      <Container bg={'dark'} size={1024} py={16}>
        <Text size='xs' c='dimmed' ta='center'>
          © {currentYear} {t('footer.copyrigth')}
        </Text>
      </Container>
    </Box>
  )
}
