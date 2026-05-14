'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = () => {
    const subject = encodeURIComponent(`Message from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@hermesgroup.dev?subject=${subject}&body=${body}`
  }

  return (
    <main className="flex min-h-screen flex-col pt-14">
      <div className="gold-line" />

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-16 px-6 py-24 md:grid-cols-[0.85fr_1fr] md:py-32">
        <div>
          <p className="font-mono text-xs uppercase text-gold/70">Contact</p>
          <h1 className="mt-3 font-display text-6xl leading-[0.95] text-snow md:text-8xl">
            Let&apos;s talk.
          </h1>

          <p className="mt-8 max-w-md text-base leading-8 text-muted">
            We prefer the work to speak, but when you need to reach us, we are
            listening.
          </p>

          <div className="mt-12 space-y-7">
            <div>
              <p className="font-mono text-xs uppercase text-muted/60">Email</p>
              <a
                href="mailto:hello@hermesgroup.dev"
                className="mt-2 inline-flex font-display text-2xl text-gold-bright transition hover:text-snow"
              >
                hello@hermesgroup.dev
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase text-muted/60">GitLab</p>
              <a
                href="https://gitlab.com/hermesgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex font-display text-2xl text-purple-glow transition hover:text-snow"
              >
                gitlab.com/hermesgroup
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase text-muted/60">Based in</p>
              <p className="mt-2 font-display text-2xl text-snow/70">
                Manila, Philippines
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border bg-card p-6 md:p-8">
          <p className="font-mono text-xs uppercase text-muted/60">
            Send a message
          </p>

          <div className="mt-6 space-y-5">
            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-muted/70">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full border border-border bg-void px-4 py-3 text-sm text-snow outline-none transition placeholder:text-muted/40 focus:border-purple/60"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-muted/70">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your@email.com"
                className="w-full border border-border bg-void px-4 py-3 text-sm text-snow outline-none transition placeholder:text-muted/40 focus:border-purple/60"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase text-muted/70">
                Message
              </label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                placeholder="What are we building?"
                className="w-full resize-none border border-border bg-void px-4 py-3 text-sm text-snow outline-none transition placeholder:text-muted/40 focus:border-purple/60"
              />
            </div>

            <button onClick={handleSend} className="button-primary w-full">
              Send via email
            </button>

            <p className="text-center font-mono text-[10px] text-muted/45">
              Opens your mail client with the message pre-filled.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-border px-6">
        <div className="gold-line" />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 py-10 text-sm text-muted md:flex-row">
          <div className="flex items-center gap-3">
            <span className="brand-mark">&#9791;</span>
            <span className="font-mono text-xs uppercase">Hermes Group</span>
          </div>
          <p className="font-mono text-xs">
            Manila / {new Date().getFullYear()}
          </p>
          <Link href="/" className="soft-link">
            Back to work
          </Link>
        </div>
      </footer>
    </main>
  )
}
