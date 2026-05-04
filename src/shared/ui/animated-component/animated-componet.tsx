import React, { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'
import { motion, useAnimation, type Variants } from 'framer-motion'

type AnimationType = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoom' | 'rotate'

interface AnimatedComponentProps {
  children: ReactNode
  animationType?: AnimationType
  duration?: number
  delay?: number
  threshold?: number
  className?: string
  style?: React.CSSProperties
  once?: boolean
  value?: number
  scrollRoot?: RefObject<HTMLElement | null>
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
      pointerEvents: 'auto' as const,
      transition,
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none' as const,
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

export const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, animationType = 'fade', duration = 0.6, delay = 0, threshold = 0.1, className, style, once = true, value = 50, scrollRoot }) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

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
        root: scrollRoot?.current ?? null,
        rootMargin: '0px',
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [controls, threshold, once, hasAnimated, scrollRoot])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className} style={style}>
      {children}
    </motion.div>
  )
}
