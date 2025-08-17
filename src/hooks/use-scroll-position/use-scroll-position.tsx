import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset || document.documentElement.scrollTop)
    }

    // Устанавливаем начальное значение
    updatePosition()

    // Подписываемся на событие скролла
    window.addEventListener('scroll', updatePosition)

    // Отписываемся при размонтировании
    return () => {
      window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return scrollPosition
}
