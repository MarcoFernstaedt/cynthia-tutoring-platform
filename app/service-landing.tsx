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
    <main className="landing-page">
      <nav className="landing-nav" aria-label="Primary navigation">
        <Link className="nav-brand" href="/"><span className="nav-brand-dot" aria-hidden="true"></span>Saguaro Blossoms</Link>
        <div className="landing-nav-links">
          <Link href="/services/">Services</Link>
          <Link href="/az-esa-tutoring/">AZ ESA</Link>
          <Link className="nav-cta" href="/contact/">Get Started</Link>
        </div>
      </nav>
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
  )
}
