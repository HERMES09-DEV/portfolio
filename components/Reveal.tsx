'use client'

import { type CSSProperties, type HTMLAttributes, useEffect, useRef, useState } from 'react'

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true))
      return () => window.cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const revealStyle = {
    ...style,
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  )
}
