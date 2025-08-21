import { useState } from 'react'
import { Box, Image as ImageComponent, Skeleton, type ImageProps, type PolymorphicComponentProps } from '@mantine/core'

export const Image = (props: PolymorphicComponentProps<'img', ImageProps>) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const { w, h } = props

  return (
    <Box w={w} h={h} style={{ position: 'relative' }}>
      {!isLoaded && <Skeleton w={'100%'} h={'100%'} style={{ position: 'absolute', top: 0, left: 0 }} />}
      <ImageComponent
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </Box>
  )
}
