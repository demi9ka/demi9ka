import { Box } from '@mantine/core'
import css from './scroll-progress.module.css'
import { observer } from 'mobx-react-lite'
import { scrollPositionStore } from '@/store/scroll-postoion-store'

export const ScrollProgress = observer(() => {
  const { scrollPosition } = scrollPositionStore
  return (
    <Box
      className={css.wrapper}
      style={{
        width: `${scrollPosition.y}%`,
      }}
    />
  )
})
