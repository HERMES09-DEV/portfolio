'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')

  const handleSend = () => {
    const subject = encodeURIComponent(`Message from ${name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:hello@hermesgroup.dev?subject=${subject}&body=${body}`
  }

  return (
    <main className="pt-14 min-h-screen flex flex-col">

      {/* top accent */}
      <div className="gold-line" />

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-32 grid md:grid-cols-2 gap-20 items-start">

        {/* Left — info */}
        <div>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/50 mb-3">// Contact</p>
          <h1 className="font-display text-6xl text-snow mb-8 leading-tight">
            Let's talk.
          </h1>

          <p className="text-muted font-light leading-relaxed mb-12">
            We prefer the work to speak — but when you need to reach us, we're listening.
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted/50 mb-2">Email</p>
              <a
                href="mailto:hello@hermesgroup.dev"
                className="font-display text-xl text-gold/80 hover:text-gold transition-colors italic"
              >
                hello@hermesgroup.dev
              </a>
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted/50 mb-2">GitLab</p>
              <a
                href="https://gitlab.com/hermesgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xl text-purple-glow hover:text-snow transition-colors italic"
              >
                gitlab.com/hermesgroup ↗
              </a>
            </div>

            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted/50 mb-2">Based in</p>
              <p className="font-display text-xl italic text-snow/60">Manila, Philippines</p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-card border border-border p-8 space-y-6">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted/50">
            Send a message
          </p>

          <div className="space-y-1">
            <label className="font-mono text-xs tracking-[0.15em] uppercase text-muted/60">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-void border border-border text-snow font-light text-sm px-4 py-3 placeholder:text-muted/30
                         focus:outline-none focus:border-purple/50 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs tracking-[0.15em] uppercase text-muted/60">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-void border border-border text-snow font-light text-sm px-4 py-3 placeholder:text-muted/30
                         focus:outline-none focus:border-purple/50 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono text-xs tracking-[0.15em] uppercase text-muted/60">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="What's on your mind?"
              className="w-full bg-void border border-border text-snow font-light text-sm px-4 py-3 placeholder:text-muted/30
                         focus:outline-none focus:border-purple/50 transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleSend}
            className="w-full font-mono text-xs tracking-[0.2em] uppercase py-4
                       border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
          >
            Send via Email ↗
          </button>

          <p className="font-mono text-[10px] text-muted/30 text-center">
            Opens your mail client with the message pre-filled.
          </p>
        </div>
      </div>

      {/* footer */}
      <footer className="border-t border-border">
        <div className="gold-line" />
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl text-gold">☿</span>
            <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">Hermes Group</span>
          </div>
          <p className="font-mono text-xs text-muted/40 tracking-wider">Manila · {new Date().getFullYear()}</p>
          <Link href="/" className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">
            ← Back
          </Link>
        </div>
      </footer>

    </main>
  )
}
