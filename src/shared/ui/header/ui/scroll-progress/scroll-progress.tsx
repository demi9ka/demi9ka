import { Box } from '@mantine/core'
import { useState, useEffect } from 'react'
import css from './scroll-progress.module.css'

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = document.documentElement.clientHeight
      const docHeight = document.documentElement.scrollHeight

      const progress = (scrollTop / (docHeight - windowHeight)) * 100
      setScrollProgress(progress)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      bg={'violet'}
      className={css.wrapper}
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  )
}
