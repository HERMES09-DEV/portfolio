import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden pt-14">
      <div className="contact-aura" aria-hidden="true" />
      <div className="gold-line" />

      <section className="mx-auto grid w-full max-w-6xl flex-1 gap-12 px-6 py-24 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-32">
        <Reveal>
          <div>
            <p className="font-mono text-xs uppercase text-gold/70">Contact</p>
            <h1 className="mt-3 font-display text-6xl font-black uppercase leading-[0.9] text-snow md:text-8xl">
              Find the signal.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-muted md:text-lg">
              We do not have an official email yet. For now, follow the trail
              through GitLab.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <a
            href="https://gitlab.com/hermesgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-panel group"
          >
            <div className="contact-panel-symbol" aria-hidden="true">
              &#9791;
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-gold/75">
                GitLab
              </p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase text-snow md:text-6xl">
                hermesgroup
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted md:text-base">
                Projects, repositories, and public traces live here while the
                rest remains in motion.
              </p>
            </div>
            <span className="contact-panel-action">Open GitLab</span>
          </a>
        </Reveal>
      </section>

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
