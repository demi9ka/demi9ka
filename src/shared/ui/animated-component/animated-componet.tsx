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

const getAnimationVariants = (type: AnimationType, duration: number, delay: number, value: number): Variants => {
  const transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  }

  const hidden = { opacity: 0, transition }
  const visible = { opacity: 1, transition }

  switch (type) {
    case 'fade':
      return { visible, hidden }
    case 'slideUp':
      return { visible: { ...visible, y: 0 }, hidden: { ...hidden, y: value } }
    case 'slideDown':
      return { visible: { ...visible, y: 0 }, hidden: { ...hidden, y: -value } }
    case 'slideLeft':
      return { visible: { ...visible, x: 0 }, hidden: { ...hidden, x: value } }
    case 'slideRight':
      return { visible: { ...visible, x: 0 }, hidden: { ...hidden, x: -value } }
    case 'zoom':
      return { visible: { ...visible, scale: 1 }, hidden: { ...hidden, scale: value } }
    case 'rotate':
      return { visible: { ...visible, rotate: 0 }, hidden: { ...hidden, rotate: value } }
    default:
      return { visible, hidden }
  }
}

export const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animationType = 'fade',
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className,
  style,
  once = true,
  value = 24,
  scrollRoot,
}) => {
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
          if (once) setHasAnimated(true)
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
    return () => observer.unobserve(element)
  }, [controls, threshold, once, hasAnimated, scrollRoot])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className} style={style}>
      {children}
    </motion.div>
  )
}
