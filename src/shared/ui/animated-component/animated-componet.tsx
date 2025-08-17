import React, { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useAnimation, type Variants } from 'framer-motion'

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoom' | 'rotate'

interface AnimatedComponentProps {
  children: ReactNode
  animationType?: AnimationType
  duration?: number
  delay?: number
  threshold?: number
  className?: string
  once?: boolean
  value?: number
}

// Правильно типизированная функция создания вариантов анимации
const getAnimationVariants = (type: AnimationType, duration: number, delay: number, value: number): Variants & { value?: number } => {
  const transition = {
    duration,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  const common = {
    visible: {
      opacity: 1,
      transition,
    },
    hidden: {
      opacity: 0,
      transition,
    },
  }

  switch (type) {
    case 'fade':
      return common
    case 'slideUp':
      return {
        visible: { ...common.visible, y: 0 },
        hidden: { ...common.hidden, y: value },
      }
    case 'slideDown':
      return {
        visible: { ...common.visible, y: 0 },
        hidden: { ...common.hidden, y: value },
      }
    case 'slideLeft':
      return {
        visible: { ...common.visible, x: 0 },
        hidden: { ...common.hidden, x: value },
      }
    case 'slideRight':
      return {
        visible: { ...common.visible, x: 0 },
        hidden: { ...common.hidden, x: value },
      }
    case 'zoom':
      return {
        visible: { ...common.visible, scale: 1 },
        hidden: { ...common.hidden, scale: value },
      }
    case 'rotate':
      return {
        visible: { ...common.visible, rotate: 0 },
        hidden: { ...common.hidden, rotate: value },
      }
    default:
      return common
  }
}

export const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, animationType = 'fade', duration = 0.6, delay = 0, threshold = 0.1, className, once = true, value = 50 }) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Получаем варианты с уже встроенными параметрами transition
  const variants = getAnimationVariants(animationType, duration, delay, value)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
          if (once) {
            setHasAnimated(true)
          }
        } else if (!once && !hasAnimated) {
          controls.start('hidden')
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [controls, threshold, once, hasAnimated])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
