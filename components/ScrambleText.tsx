'use client'

import { useEffect, useState } from 'react'

const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]#$%&'

function randomChar() {
  return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
}

export default function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let tick = 0
    const maxTicks = text.length + 12

    const interval = window.setInterval(() => {
      tick += 1

      const nextText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          if (tick > index + 8) return char
          if (tick >= index) return randomChar()
          return ' '
        })
        .join('')

      setDisplayText(nextText)

      if (tick >= maxTicks) {
        setDisplayText(text)
        window.clearInterval(interval)
      }
    }, 34)

    return () => window.clearInterval(interval)
  }, [text])

  return (
    <span className="scramble-text" aria-label={text}>
      {displayText}
    </span>
  )
}
