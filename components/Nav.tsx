'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-void/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display text-2xl text-gold leading-none group-hover:animate-flicker transition-all">
            ☿
          </span>
          <span className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
            Hermes Group
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`font-mono text-xs tracking-[0.15em] uppercase transition-colors ${
              pathname === '/'
                ? 'text-gold'
                : 'text-muted hover:text-snow'
            }`}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className={`font-mono text-xs tracking-[0.15em] uppercase transition-colors ${
              pathname === '/contact'
                ? 'text-gold'
                : 'text-muted hover:text-snow'
            }`}
          >
            Contact
          </Link>
          <a
            href="https://gitlab.com/hermesgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-snow transition-colors"
          >
            GitLab ↗
          </a>
        </nav>
      </div>
    </header>
  )
}
