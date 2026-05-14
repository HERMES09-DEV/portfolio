import Link from 'next/link'
import Reveal from '@/components/Reveal'
import ScrambleText from '@/components/ScrambleText'

const coffeeHighlights = [
  'Public shop selector and tenant-specific menus',
  'Role-aware admin workspace for staff, admins, and superadmins',
  'Orders, KDS queue, inventory, promotions, and customers',
  'Analytics, tenant settings, staff controls, and audit logs',
]

const coffeeStack = [
  'Next.js App Router',
  'TypeScript',
  'Prisma',
  'MySQL',
  'next-auth',
  'Tailwind CSS',
]

const heroTags = ['SaaS', 'Multi Tenant Apps', 'Admin Dashboards']

const stack = [
  {
    category: 'Experience',
    items: ['Product UI', 'Design systems', 'Admin dashboards', 'Responsive web'],
    tone: 'border-gold/30 bg-gold/10 text-gold-bright',
  },
  {
    category: 'Application',
    items: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Laravel', 'PHP'],
    tone: 'border-purple/35 bg-purple/10 text-purple-glow',
  },
  {
    category: 'Data & Ops',
    items: ['MySQL', 'Prisma', 'Auth', 'Audit trails', 'Vercel', 'GitLab'],
    tone: 'border-purple-bright/35 bg-purple-bright/10 text-purple-glow',
  },
]

const nextBuilds = [
  {
    label: '01',
    title: 'Operational dashboards',
    copy: 'Readable control surfaces for teams that need to compare, review, and act quickly.',
  },
  {
    label: '02',
    title: 'Commerce workflows',
    copy: 'Ordering, inventory, reporting, and customer flows shaped around daily operations.',
  },
  {
    label: '03',
    title: 'Private tools',
    copy: 'Focused internal systems with permissions, auditability, and the right amount of polish.',
  },
]

function SectionHeader({
  label,
  title,
  copy,
}: {
  label: string
  title: string
  copy?: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-mono text-xs uppercase text-gold/70">{label}</p>
        <h2 className="mt-3 font-display text-5xl leading-[0.95] text-snow md:text-7xl">
          {title}
        </h2>
      </div>
      {copy ? (
        <p className="max-w-md text-sm leading-7 text-muted md:text-base">
          {copy}
        </p>
      ) : null}
    </div>
  )
}

function CoffeePlatformPreview() {
  const queue = [
    { name: 'Iced latte', status: 'preparing', time: '04m' },
    { name: 'Cortado', status: 'ready', time: '08m' },
    { name: 'Cold brew', status: 'pending', time: '02m' },
  ]

  return (
    <div className="product-screen" aria-label="Coffee Platform interface preview">
      <div className="product-screen-top">
        <span>Coffee Platform</span>
        <span>Tenant: Cafe Luna</span>
      </div>

      <div className="product-metrics">
        <div>
          <span>Active queue</span>
          <strong>18</strong>
        </div>
        <div>
          <span>Menu items</span>
          <strong>42</strong>
        </div>
        <div>
          <span>Low stock</span>
          <strong>05</strong>
        </div>
      </div>

      <div className="product-workspace">
        <div className="product-sidebar">
          {['Orders', 'KDS', 'Inventory', 'Promos'].map((item, index) => (
            <span key={item} className={index === 1 ? 'is-active' : undefined}>
              {item}
            </span>
          ))}
        </div>

        <div className="product-queue">
          <div className="product-queue-head">
            <span>Kitchen Display</span>
            <span>Live SLA</span>
          </div>
          {queue.map((item) => (
            <div key={item.name} className="product-order">
              <div>
                <strong>{item.name}</strong>
                <span>{item.status}</span>
              </div>
              <em>{item.time}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeroSignal() {
  return (
    <div className="hero-board motion-safe:animate-float-slow" aria-hidden="true">
      <div className="hero-board-header">
        <span>&#9791; / 2026</span>
        <span>Manila build room</span>
      </div>
      <div className="hero-symbol-wrap">
        <div className="hero-symbol-orbit" />
        <div className="hero-symbol">&#9791;</div>
      </div>
      <div className="hero-board-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero-board-footer">
        <span>Design</span>
        <span>Engineering</span>
        <span>Operations</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="overflow-hidden pt-14">
      <section className="relative isolate min-h-[86svh] px-6 py-20 sm:py-24">
        <div className="hero-grid" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl gap-14 pt-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] xl:items-center">
          <div className="hero-enter">
            <p className="font-mono text-xs uppercase text-gold/75">
              Manila, Philippines
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.6rem,8.6vw,7.8rem)] font-light leading-[0.86] text-snow">
              <ScrambleText text="HERMES Group" />
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Born in Manila. Made of many. Known as one. We are a collective
              of different occupations, disciplines, and after-hours obsessions
              building software under a shared name.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs uppercase text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="button-primary">
                See the work
              </a>
              <Link href="/contact" className="button-secondary">
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="hero-enter hero-enter-delay">
            <HeroSignal />
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs text-muted/60 md:block">
          <a href="#work" className="soft-link">
            Scroll to selected work
          </a>
        </div>
      </section>

      <section id="work" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              label="Selected work"
              title="Coffee Platform"
              copy="The featured build is a real multi-tenant coffee shop POS and public menu platform, updated here to match the app in the sibling coffee-platform project."
            />
          </Reveal>

          <Reveal delay={120} className="project-showcase">
            <div className="project-copy">
              <p className="font-mono text-xs uppercase text-purple-glow">
                Multi-tenant POS and menu system
              </p>
              <h3 className="mt-5 font-display text-4xl leading-tight text-snow md:text-6xl">
                A coffee platform for menu discovery, shop operations, and
                kitchen flow.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                Built around tenant-scoped cafes, public menus, authenticated
                admin workspaces, role permissions, and the operational tools a
                coffee shop needs once orders start moving.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {coffeeHighlights.map((item) => (
                  <div key={item} className="feature-row">
                    <span />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {coffeeStack.map((item) => (
                  <span key={item} className="stack-pill">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://gitlab.com/hermesgroup/coffeepos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  View GitLab
                </a>
              </div>
            </div>

            <CoffeePlatformPreview />
          </Reveal>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {nextBuilds.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="h-full bg-card p-7 transition duration-300 hover:-translate-y-1 hover:bg-surface">
                  <p className="font-mono text-xs text-gold/70">{item.label}</p>
                  <h3 className="mt-5 font-display text-2xl text-snow">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              label="Stack"
              title="What we use"
              copy="A practical toolkit for interfaces, back-office systems, data-backed apps, and deployment workflows."
            />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {stack.map((group, index) => (
              <Reveal key={group.category} delay={index * 100}>
                <div className="stack-group">
                  <p className="font-mono text-xs uppercase text-muted">
                    {group.category}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-3 py-1.5 text-xs ${group.tone}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase text-gold/70">
                Who we are
              </p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] text-snow md:text-7xl">
                Made of many. Known as one.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6 text-base leading-8 text-muted md:text-lg">
              <p>
                Hermes Group is less a roster than a signal. Among us are
                frontend builders, backend engineers, systems administrators,
                operators, artists, and people whose work outside Hermes may
                have nothing to do with IT.
              </p>
              <p>
                What joins us is the standard we keep when the room gathers:
                hand off cleanly, build with intention, and move from the query
                to the pixel without losing the thread.
              </p>
              <p>
                Some projects are practical, some are strange, and some are
                still unnamed. If it ships under Hermes, it ships as ours.
              </p>
              <blockquote className="border-l border-gold/50 pl-6 font-display text-3xl leading-tight text-gold-bright md:text-4xl">
                No single point of failure. No single face.
              </blockquote>
              <p className="font-mono text-xs uppercase text-muted/50">
                A quiet dedication: for Bubba, from Bubba.
              </p>
            </div>
          </Reveal>
        </div>
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
          <div className="flex gap-5">
            <a
              href="https://gitlab.com/hermesgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-link"
            >
              GitLab
            </a>
            <Link href="/contact" className="soft-link">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
