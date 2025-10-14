import { Card as CardComponent, Text, Button, Grid, Group, Flex, Spoiler, Tooltip } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { Image } from '@/shared/ui/image'
import { AnimatedComponent } from '@/shared/ui/animated-component'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { imageModalStore } from '@/store/image-modal-store'
import type { CardType } from '../../constants'

type Props = CardType

export const Card = ({ description, imgUrl, stackList, title, link, githubLink }: Props) => {
  const { t } = useTranslation()
  const { setImageUrl } = imageModalStore
  const goToGithub = () => {
    window.open(githubLink!, '_blank')
  }

  const goToLink = () => {
    window.open(link!, '_blank')
  }

  const onClickImage = (url: string) => {
    setImageUrl(url)
  }

  const mappedStackData = stackList.map(({ name, Icon }, i) => (
    <Tooltip label={name} key={i}>
      <Icon size={20} color='default' />
    </Tooltip>
  ))

  const mappedImageData = imgUrl.map((el, i) => (
    <Carousel.Slide key={i} pos={'relative'} style={{ cursor: 'pointer' }}>
      <Image onClick={() => onClickImage(el)} src={el} height={190} alt='Norway' />
    </Carousel.Slide>
  ))

  return (
    <Grid.Col span={{ base: 12, xs: 6 }}>
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
              {title}
            </Text>
            <Group gap={8}>{mappedStackData}</Group>
          </Flex>

          <Spoiler
            maxHeight={80}
            showLabel={t('home.portfolio.open-description')}
            hideLabel={t('home.portfolio.close-description')}
          >
            <Text size='sm' c='dimmed'>
              {description}
            </Text>
          </Spoiler>
          <Flex gap={8} justify={'end'} align={'center'}>
            {Boolean(githubLink) && (
              <Button
                onClick={goToGithub}
                rightSection={<SiGithub size={16} />}
                size='xs'
                c={'black'}
                variant='white'
                mt={'md'}
              >
                {t('home.portfolio.open-github')}
              </Button>
            )}
            {Boolean(link) && (
              <Button onClick={goToLink} rightSection={<Globe size={16} />} size='xs' mt='md'>
                {t('home.portfolio.open-link')}
              </Button>
            )}
          </Flex>
        </CardComponent>
      </AnimatedComponent>
    </Grid.Col>
  )
}
