'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-void/82 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="brand-mark transition duration-300 group-hover:border-gold/70">
            HG
          </span>
          <span className="font-mono text-xs uppercase text-snow">
            Hermes Group
          </span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-border bg-card/70 p-1">
          {links.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 font-mono text-xs uppercase transition ${
                  isActive
                    ? 'bg-snow text-void'
                    : 'text-muted hover:bg-surface hover:text-snow'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="https://gitlab.com/hermesgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3 py-1.5 font-mono text-xs uppercase text-muted transition hover:bg-surface hover:text-snow sm:inline-flex"
          >
            GitLab
          </a>
        </nav>
      </div>
    </header>
  )
}
