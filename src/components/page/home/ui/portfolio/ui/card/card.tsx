import { Card as CardComponent, Text, Button, Group, Flex, Tooltip, Box } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { Image } from '@/shared/ui/image'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { CardType } from '../../constants'
import { useMemo } from 'react'

type Props = CardType

export const Card = ({ githubRepositoryUrl, imgUrls, stackTechnology, siteUrl, localeId }: Props) => {
  const { t } = useTranslation()

  const openUrl = (url: string) => {
    window.open(url, '_blank')
  }

  const onOpenGithub = () => openUrl(githubRepositoryUrl ?? '')
  const onOpenWebSite = () => openUrl(siteUrl ?? '')
  const onOpenImage = (imageUrl: string) => openUrl(window.location.href + imageUrl)

  const mappedStackData = useMemo(
    () =>
      stackTechnology.map(({ name, Icon }, i) => (
        <Tooltip label={name} key={i}>
          <Icon size={20} color='default' />
        </Tooltip>
      )),
    []
  )

  const mappedImageData = useMemo(
    () =>
      imgUrls.map((el, i) => (
        <Carousel.Slide key={i}>
          <Image onClick={() => onOpenImage(el)} src={el} alt={el} />
        </Carousel.Slide>
      )),
    []
  )

  return (
    <Box style={{ breakInside: 'avoid' }} mb={{ base: 8, sm: 16 }}>
      <AnimatedComponent animationType='slideUp' duration={0.8} delay={0.2} once={false} value={20}>
        <CardComponent shadow='sm' p={'xs'} radius='md' withBorder>
          <CardComponent.Section>
            <Carousel
              emblaOptions={{
                loop: true
              }}
            >
              {mappedImageData}
            </Carousel>
          </CardComponent.Section>
          <Flex justify={'space-between'} py={'sm'} align={'center'}>
            <Text size={'lg'} fw={600}>
              {t(`home.portfolio.projects.${localeId}.title`)}
            </Text>
            <Group gap={8}>{mappedStackData}</Group>
          </Flex>

          <Text size='sm' c='dimmed'>
            {t(`home.portfolio.projects.${localeId}.description`)}
          </Text>

          <Flex gap={8} justify={'end'} align={'center'}>
            {Boolean(githubRepositoryUrl) && (
              <Button
                onClick={onOpenGithub}
                rightSection={<SiGithub size={16} />}
                size='xs'
                c={'black'}
                variant='white'
                mt={'md'}
              >
                {t('home.portfolio.open-github')}
              </Button>
            )}
            {Boolean(siteUrl) && (
              <Button onClick={onOpenWebSite} rightSection={<Globe size={16} />} size='xs' mt='md'>
                {t('home.portfolio.open-link')}
              </Button>
            )}
          </Flex>
        </CardComponent>
      </AnimatedComponent>
    </Box>
  )
}
