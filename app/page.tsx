import Link from 'next/link'

const stack = {
  Frontend: [
    { label: 'Next.js',     color: 'bg-white/10 text-snow' },
    { label: 'React',       color: 'bg-[#20232a] text-[#61DAFB]' },
    { label: 'TypeScript',  color: 'bg-[#007ACC22] text-[#7aaaff]' },
    { label: 'Tailwind',    color: 'bg-[#38B2AC22] text-[#6ee7e7]' },
    { label: 'Figma',       color: 'bg-[#F24E1E22] text-[#f9865a]' },
  ],
  'Backend & DB': [
    { label: 'Node.js',   color: 'bg-[#6DA55F22] text-[#9ed87a]' },
    { label: 'PHP',       color: 'bg-[#777BB422] text-[#b0b4f5]' },
    { label: 'Laravel',   color: 'bg-[#FF2D2022] text-[#f97b7b]' },
    { label: 'Python',    color: 'bg-[#3670A022] text-[#7ab8e8]' },
    { label: 'MySQL',     color: 'bg-[#4479A122] text-[#7ab0d8]' },
    { label: 'Prisma',    color: 'bg-[#3982CE22] text-[#7ab4f5]' },
  ],
  'Tooling & Deploy': [
    { label: 'Vercel',  color: 'bg-white/10 text-snow' },
    { label: 'ESLint',  color: 'bg-[#4B32C322] text-[#9d7eef]' },
    { label: 'GitHub',  color: 'bg-white/10 text-snow' },
    { label: 'GitLab',  color: 'bg-[#FC6D2622] text-[#f9a97a]' },
  ],
}

export default function Home() {
  return (
    <main className="pt-14">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

        {/* subtle grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px),
                              linear-gradient(90deg, #c9a84c 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* purple glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center">
          <p className="font-mono text-xs tracking-[0.4em] text-gold/60 uppercase mb-6 section-fade">
            Manila · Philippines
          </p>

          <div className="font-display text-[9rem] leading-none text-gold animate-flicker mb-6 section-fade animate-delay-100">
            ☿
          </div>

          <h1 className="font-mono text-xl md:text-2xl tracking-[0.3em] uppercase text-snow mb-6 section-fade animate-delay-200">
            Hermes Group
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-6 section-fade animate-delay-300" />

          <p className="font-display text-2xl md:text-3xl italic text-muted max-w-md mx-auto leading-relaxed section-fade animate-delay-400">
            Born in Manila.<br />Made of many.<br />Known as one.
          </p>

          <div className="mt-12 flex gap-6 justify-center section-fade animate-delay-500">
            <a href="#work" className="font-mono text-xs tracking-[0.2em] uppercase text-gold border border-gold/30 px-6 py-3 hover:bg-gold/10 transition-colors">
              Our Work
            </a>
            <Link href="/contact" className="font-mono text-xs tracking-[0.2em] uppercase text-muted border border-border px-6 py-3 hover:border-purple/50 hover:text-snow transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <a href="#work" className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-muted/40 tracking-widest animate-bounce">
          ↓
        </a>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-32">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/50 mb-3">// 01</p>
        <h2 className="font-display text-5xl text-snow mb-16">Selected Work</h2>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {/* CoffeePOS card */}
          <div className="bg-card p-8 group hover:bg-surface transition-colors col-span-2 md:col-span-1">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 mb-2">
                  Point of Sale System
                </p>
                <h3 className="font-display text-3xl text-snow">Coffee POS</h3>
              </div>
              <a
                href="https://gitlab.com/hermesgroup/coffeepos"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-gold transition-colors mt-1"
              >
                GitLab ↗
              </a>
            </div>

            <p className="text-muted text-sm leading-relaxed mb-8 font-light">
              A full-featured point-of-sale system built for coffee shops. Handles orders, inventory, and reporting — clean interface, solid backend.
            </p>

            <div className="flex flex-wrap gap-2">
              {['PHP', 'MySQL', 'Tailwind', 'JavaScript'].map((t) => (
                <span key={t} className="font-mono text-xs text-purple-glow border border-purple/20 px-3 py-1 bg-purple/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* More coming card */}
          <div className="bg-card p-8 flex flex-col items-center justify-center text-center min-h-[280px] col-span-2 md:col-span-1 border-l border-border">
            <div className="font-display text-4xl text-border mb-4">☿</div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted/40">
              More in transit
            </p>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/50 mb-3">// 02</p>
        <h2 className="font-display text-5xl text-snow mb-16">What We Use</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category}>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-4">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item.label}
                    className={`font-mono text-xs px-3 py-1.5 rounded-sm ${item.color}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-5xl mx-auto px-6 py-32 border-t border-border">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold/50 mb-3">// 03</p>
        <h2 className="font-display text-5xl text-snow mb-16">Who We Are</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-5 text-muted font-light leading-relaxed">
            <p>
              We don't have a roster. We don't have titles. What we have is craft — and the honesty to admit that the best work happens when the right people are in the room, regardless of what they call themselves outside of it.
            </p>
            <p>
              Among us you'll find backend engineers, frontend builders, and systems administrators. Some of us make music after hours. Some of us paint. Some of us sleep at 4am because we were debugging, and some because we were writing.
            </p>
          </div>

          <div className="space-y-8">
            <blockquote className="border-l border-gold/40 pl-6">
              <p className="font-display text-2xl italic text-gold/80 leading-relaxed">
                "No single point of failure.<br />No single face."
              </p>
            </blockquote>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted/50">
              If it ships under Hermes,<br />it ships as ours — all of ours.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border">
        <div className="gold-line" />
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl text-gold">☿</span>
            <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">Hermes Group</span>
          </div>
          <p className="font-mono text-xs text-muted/40 tracking-wider">Manila · {new Date().getFullYear()}</p>
          <div className="flex gap-6">
            <a href="https://gitlab.com/hermesgroup" target="_blank" rel="noopener noreferrer"
               className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">
              GitLab ↗
            </a>
            <Link href="/contact"
               className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>

    </main>
  )
}
