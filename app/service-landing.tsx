import Link from 'next/link'

type LandingPageProps = {
  eyebrow: string
  title: string
  intro: string
  bullets: string[]
  sections: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
}

export default function ServiceLandingPage({ eyebrow, title, intro, bullets, sections, faqs }: LandingPageProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <nav className="landing-nav" aria-label="Primary navigation">
        <Link className="nav-brand" href="/"><span className="nav-brand-dot" aria-hidden="true"></span>Saguaro Blossoms</Link>
        <div className="landing-nav-links">
          <Link href="/services/">Services</Link>
          <Link href="/az-esa-tutoring/">AZ ESA</Link>
          <Link className="nav-cta" href="/contact/">Get Started</Link>
        </div>
      </nav>
      <main id="main-content" className="landing-page">
        <section className="landing-hero">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="landing-actions">
            <Link className="btn-primary" href="/contact/">Start a Tutoring Inquiry</Link>
            <Link className="btn-secondary" href="/services/">View All Services</Link>
          </div>
        </section>
        <section className="landing-highlights" aria-label="Program highlights">
          {bullets.map((item) => <article key={item}>{item}</article>)}
        </section>
        <section className="landing-sections">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>
        <section className="landing-faq" aria-labelledby="landing-faq-title">
          <h2 id="landing-faq-title">Questions families and learners ask</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="conversion-band" aria-labelledby="landing-contact-title">
          <h2 id="landing-contact-title">Ready to ask about support?</h2>
          <p>Send a short message about the learner, the area of need, and whether you want to ask about AZ ESA payment options.</p>
          <Link className="btn-primary" href="/contact/">Contact Cynthia</Link>
        </section>
      </main>
      <footer>
        <div>
          <div className="footer-brand-name">Saguaro Blossoms</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'var(--gold)' }} aria-hidden="true"></div>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Yuma, Arizona</span>
          </div>
          <div className="footer-brand-tagline">
            Every learner blooms at their own pace.<br />Learning as unique and vivid as you are.
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
            <li><Link href="/reading-tutoring/">Reading Development</Link></li>
            <li><Link href="/writing-tutoring/">Writing &amp; Expression</Link></li>
            <li><Link href="/esl-tutoring/">ESL Support</Link></li>
            <li><Link href="/homeschool-support/">Homeschool Support</Link></li>
            <li><Link href="/az-esa-tutoring/">AZ ESA Tutoring</Link></li>
            <li><Link href="/yuma-tutoring/">Yuma Tutoring</Link></li>
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
