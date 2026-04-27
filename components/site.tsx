import Link from 'next/link'
import type { ReactNode } from 'react'

export const navItems = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about/', label: 'About', key: 'about' },
  { href: '/services/', label: 'Services', key: 'services' },
]

export function Shell({ children, current = 'home' }: { children: ReactNode; current?: string }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Nav current={current} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

export function Nav({ current = 'home' }: { current?: string }) {
  return (
    <nav aria-label="Primary navigation">
      <Link className="nav-brand" href="/" aria-label="Saguaro Blossoms home">
        <span className="nav-brand-dot" aria-hidden="true" />
        Saguaro Blossoms
      </Link>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={current === item.key ? 'active' : undefined} aria-current={current === item.key ? 'page' : undefined}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact/" className={`nav-cta ${current === 'contact' ? 'active' : ''}`} aria-current={current === 'contact' ? 'page' : undefined}>
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="btn-primary">{children}</Link>
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="btn-secondary">{children}</Link>
}

export function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="footer-brand-name">Saguaro Blossoms</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'var(--gold)' }} aria-hidden="true" />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Yuma, Arizona</span>
          </div>
          <div className="footer-brand-tagline">
            Every learner blooms at their own pace.<br />
            Learning as unique and vivid as you are.
          </div>
        </div>
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/services/">Services</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><Link href="/services/">Reading Development</Link></li>
            <li><Link href="/services/">Writing &amp; Expression</Link></li>
            <li><Link href="/services/">ESL Support</Link></li>
            <li><Link href="/services/">Homeschool Support</Link></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Saguaro Blossoms Learning. Yuma, Arizona.</span>
        <span className="footer-bilingual">Donde cada estudiante florece.</span>
      </div>
    </>
  )
}
