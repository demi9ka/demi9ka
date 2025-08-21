import { Box } from '@mantine/core'
import css from './scroll-progress.module.css'
import { observer } from 'mobx-react-lite'
import { scrollPositionStore } from '@/store/scroll-postoion-store'

export const ScrollProgress = observer(() => {
  const { scrollPosition } = scrollPositionStore
  const progress = (scrollPosition.y / window.innerHeight) * 100
  console.log(scrollPosition.y, window.innerHeight, window.outerHeight, document.documentElement.clientHeight)
  console.log(progress)

  return (
    <Box
      className={css.wrapper}
      style={{
        width: `${progress}%`,
      }}
    />
  )
})
