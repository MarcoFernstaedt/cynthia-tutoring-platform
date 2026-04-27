'use client'

import { FormEvent, useState } from 'react'

type PageName = 'home' | 'about' | 'services' | 'contact'
const pages: PageName[] = ['home', 'about', 'services', 'contact']

function cx(active: boolean) {
  return active ? 'active' : undefined
}

export default function ExactSaguaroSite({ initialPage = 'home' }: { initialPage?: PageName }) {
  const [activePage, setActivePage] = useState<PageName>(initialPage)
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function showPage(pageName: PageName) {
    setActivePage(pageName)
    setSubmitted(false)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <nav aria-label="Primary navigation">
        <a className="nav-brand" href="#home" onClick={(event) => { event.preventDefault(); showPage('home') }} aria-label="Saguaro Blossoms home">
          <span className="nav-brand-dot" aria-hidden="true"></span>
          Saguaro Blossoms
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-nav-links"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <ul className="nav-links" id="primary-nav-links" data-open={menuOpen ? 'true' : 'false'}>
          {pages.slice(0, 3).map((page) => (
            <li key={page}>
              <a
                href={`#${page}`}
                id={`nav-${page}`}
                className={cx(activePage === page)}
                aria-current={activePage === page ? 'page' : undefined}
                onClick={(event) => { event.preventDefault(); showPage(page) }}
              >
                {page === 'home' ? 'Home' : page === 'about' ? 'About' : 'Services'}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              id="nav-contact"
              className={`nav-cta ${activePage === 'contact' ? 'active' : ''}`}
              aria-current={activePage === 'contact' ? 'page' : undefined}
              onClick={(event) => { event.preventDefault(); showPage('contact') }}
            >
              Get Started
            </a>
          </li>
        </ul>
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          data-open={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen(false)}
        />
      </nav>

      <main id="main-content">
        {/* ===== HOME ===== */}
        <div className={`page ${activePage === 'home' ? 'active' : ''}`} id="page-home">
          <section className="hero" aria-labelledby="home-title">
            <div className="hero-left">
              <div className="eyebrow">Tucson, Arizona</div>
              <h1 className="hero-h1" id="home-title">
                Where every<br />learner <em>blossoms</em><br />at their own pace
              </h1>
              <p className="hero-tagline">
                Learning as unique and vivid as the saguaro blossom. Rooted in growth. Grounded in possibility.
              </p>
              <div className="hero-actions">
                <button className="btn-primary" type="button" onClick={() => showPage('contact')}>Begin Your Journey</button>
                <button className="btn-secondary" type="button" onClick={() => showPage('services')}>Explore Services</button>
              </div>
            </div>
            <div className="hero-right">
              <div className="bloom-art" aria-label="Decorative saguaro blossom symbol">
                <div className="bloom-petals" aria-hidden="true">
                  <div className="petal"></div>
                  <div className="petal"></div>
                  <div className="petal"></div>
                  <div className="petal"></div>
                  <div className="petal"></div>
                  <div className="petal"></div>
                  <div className="petal"></div>
                  <div className="petal"></div>
                  <div className="bloom-center-circle">
                    <div className="bloom-center-text">Every<br />voice</div>
                  </div>
                </div>
                <p className="bloom-quote">Every reader. Every writer. Every learner.</p>
              </div>
            </div>
          </section>

          <div className="tagline-strip" aria-label="Learning support focus areas">
            <span className="tagline-strip-text">Nurturing readers</span>
            <span className="tagline-strip-dot" aria-hidden="true"></span>
            <span className="tagline-strip-text">Nurturing writers</span>
            <span className="tagline-strip-dot" aria-hidden="true"></span>
            <span className="tagline-strip-text">Nurturing confidence</span>
            <span className="tagline-strip-dot" aria-hidden="true"></span>
            <span className="tagline-strip-text">K–12 · College · Adult · ESL · Homeschool</span>
            <span className="tagline-strip-dot" aria-hidden="true"></span>
            <span className="tagline-strip-text">Donde cada estudiante florece</span>
          </div>

          <section className="features" aria-labelledby="features-title">
            <div className="features-header">
              <h2 className="section-title" id="features-title">Learning for <em>every</em> season of life</h2>
              <p className="section-sub">From kindergarten to adulthood — every learner finds their harvest here</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-label">K–12 Students</div>
                <h3>Young Learners</h3>
                <p>Nurturing confident readers and writers from kindergarten through high school — at their own unique pace.</p>
              </div>
              <div className="feature-card">
                <div className="feature-label">College &amp; Adult</div>
                <h3>Growing Voices</h3>
                <p>Supporting college students and adult learners in developing academic reading, writing, and language skills.</p>
              </div>
              <div className="feature-card">
                <div className="feature-label">ESL &amp; Homeschool</div>
                <h3>Every Background</h3>
                <p>Welcoming English language learners and homeschool families with holistic, individualized support.</p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== ABOUT ===== */}
        <div className={`page ${activePage === 'about' ? 'active' : ''}`} id="page-about">
          <section className="about-hero" aria-labelledby="about-title">
            <div>
              <div className="eyebrow">Our Story</div>
              <h1 className="page-title" id="about-title">Rooted in growth.<br /><em>Grounded in possibility.</em></h1>
              <p className="about-body">
                My education career began in elementary settings where I worked as both a paraprofessional and substitute teacher, building a foundational understanding of literacy development across ages and grade levels. After focusing on family, I returned to education and earned my teaching credentials and additional experience as a tutor and teacher before moving into higher education, where I continue to work as a professor of English.
                <br /><br />
                My credentials include a bachelor’s degree and a master’s degree with a focus in English Studies from Arizona State University, graduate coursework in applied linguistics, and ongoing doctoral studies in English Literature. I also hold memberships in AZTESOL, AETA, NCTE/CCCC, TESOL, MLA, and GSOLE — professional organizations that keep me grounded in current research and best practices.
                <br /><br />
                My work is driven by a student-centered philosophy rooted in building confidence, fostering holistic growth, and honoring each learner’s individual pace. Whether you’re working within a specific curriculum or need custom lessons, I adapt to what serves you best.
              </p>
            </div>
            <div className="value-stack">
              <div className="value-item">
                <h3>Every learner is unique</h3>
                <p>No two learning journeys look the same. We build every experience around the individual — their pace, their strengths, their story.</p>
              </div>
              <div className="value-item">
                <h3>Holistic by design</h3>
                <p>We see the whole learner — not just the skill gap. Confidence, curiosity, and voice matter as much as grammar and comprehension.</p>
              </div>
              <div className="value-item">
                <h3>Warmth at the center</h3>
                <p>Learning flourishes in a safe, nurturing space. Every session begins with trust and ends with possibility.</p>
              </div>
            </div>
          </section>

          <section className="philosophy-section" aria-labelledby="why-saguaro-title">
            <h2 className="section-title" id="why-saguaro-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Why Saguaro Blossoms?</h2>
            <p className="section-sub" style={{ maxWidth: 920, margin: '0 auto 1rem', textAlign: 'center' }}>
              I chose this name because the saguaro cactus embodies everything I believe about learning and growth. Unlike wildflowers that bloom quickly and fade, the saguaro takes time. It establishes deep roots, builds a strong structure, and develops resilience to withstand the desert’s challenges.
            </p>
            <p className="section-sub" style={{ maxWidth: 920, margin: '0 auto 3rem', textAlign: 'center' }}>
              Growth isn’t about speed, it’s about depth, resilience, and becoming stronger through process. Each learner’s journey is unique. Your pace is yours — and when you bloom, it will be rooted in something solid that will sustain you.
            </p>
            <h3 className="section-title" id="philosophy-title" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>The seed <em>to harvest</em> philosophy</h3>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <div className="philosophy-num">01</div>
                <h3>Plant the seed</h3>
                <p>Every learner begins somewhere. We meet them there — with patience, curiosity, and an individualized plan for growth.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-num">02</div>
                <h3>Tend with care</h3>
                <p>Growth is not linear. We nurture each learner through their individual challenges, celebrating every small bloom along the way.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-num">03</div>
                <h3>Harvest the possibility</h3>
                <p>The harvest looks different for every learner — a first full sentence, a confident essay, a new language bridge, or a voice finally heard.</p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== SERVICES ===== */}
        <div className={`page ${activePage === 'services' ? 'active' : ''}`} id="page-services">
          <section className="services-hero" aria-labelledby="services-title">
            <div className="eyebrow">What We Offer</div>
            <h1 className="page-title" id="services-title">Nurturing readers.<br />Nurturing writers.<br /><em>Nurturing confidence.</em></h1>
          </section>

          <div className="services-grid">
            <div className="service-card">
              <span className="service-tag">Reading</span>
              <h3>Reading Development</h3>
              <p>From phonics and fluency to comprehension and critical analysis — we meet every reader at their level and guide them forward at their own pace.</p>
              <ul className="service-list">
                <li>Phonics &amp; early literacy</li>
                <li>Reading fluency &amp; comprehension</li>
                <li>Critical reading for college</li>
                <li>Adult reading development</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="service-tag">Writing</span>
              <h3>Writing &amp; Expression</h3>
              <p>Writing is finding your voice. We help every learner discover theirs — from forming sentences to crafting essays and authentic personal expression.</p>
              <ul className="service-list">
                <li>Creative &amp; narrative writing</li>
                <li>Academic essay writing</li>
                <li>Grammar &amp; mechanics</li>
                <li>Writing confidence for adults</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="service-tag">ESL</span>
              <h3>English as a Second Language</h3>
              <p>Language is a bridge. We help adult learners cross it with dignity, confidence, and the support they deserve on their unique journey.</p>
              <ul className="service-list">
                <li>Conversational English</li>
                <li>Reading &amp; writing in English</li>
                <li>Workplace language skills</li>
                <li>Pronunciation &amp; fluency support</li>
              </ul>
            </div>
            <div className="service-card">
              <span className="service-tag">Homeschool</span>
              <h3>Homeschool Support</h3>
              <p>A flexible, personalized partnership for homeschool families seeking holistic language arts support tailored to their child&apos;s one-of-a-kind journey.</p>
              <ul className="service-list">
                <li>Individualized curriculum support</li>
                <li>Reading &amp; writing integration</li>
                <li>Progress assessment &amp; guidance</li>
                <li>Parent collaboration &amp; resources</li>
              </ul>
            </div>
          </div>

          <div className="ages-strip" aria-label="Learners served">
            <div className="age-item">
              <h3>K–12 Students</h3>
              <p>From kindergarteners discovering letters to high schoolers refining their voice</p>
            </div>
            <div className="age-item">
              <h3>College Students</h3>
              <p>Supporting academic reading, writing, and language arts at the collegiate level</p>
            </div>
            <div className="age-item">
              <h3>Adult Learners</h3>
              <p>Empowering adults at every stage — including English language learners — with dignity</p>
            </div>
          </div>

          <section className="philosophy-section" aria-labelledby="pricing-title">
            <h2 className="section-title" id="pricing-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Individual Session Pricing</h2>
            <p className="section-sub" style={{ maxWidth: 860, margin: '0 auto 2rem', textAlign: 'center' }}>
              All sessions include 30–60 minutes of instruction, 15 minutes of review and next steps, and a weekly parent conference when applicable.
            </p>
            <div className="services-grid" aria-label="Pricing options">
              <div className="service-card">
                <span className="service-tag">K–8</span>
                <h3>$40/hour K-8</h3>
                <p>Reading, writing, and language arts support for elementary and middle school learners.</p>
              </div>
              <div className="service-card">
                <span className="service-tag">9–College</span>
                <h3>$50/hour grades 9-college</h3>
                <p>Academic reading, essay writing, and English support for high school, dual enrollment, and college learners.</p>
              </div>
              <div className="service-card">
                <span className="service-tag">Adult / ESL</span>
                <h3>$40/hour adult learners and/or ESL</h3>
                <p>English language, reading, writing, workplace communication, and confidence-building support.</p>
              </div>
              <div className="service-card">
                <span className="service-tag">Packages</span>
                <h3>Commitment discounts available</h3>
                <p>Small groups are $30/hour per individual. Family rates keep the initial rate as stated, with additional members receiving $5 off for the second and subsequent learners. Customized asynchronous packages are $250–$300 depending on grade level and need. Six- and eight-week commitments receive 10% off; twelve-week commitments receive 15% off. A 24-hour cancellation policy applies, with a cancellation fee of ½ the standard rate for cancellations not made within 24 hours.</p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== CONTACT ===== */}
        <div className={`page ${activePage === 'contact' ? 'active' : ''}`} id="page-contact">
          <section className="contact-hero" aria-labelledby="contact-title">
            <div className="eyebrow">Get in Touch</div>
            <h1 className="page-title" id="contact-title">Your story matters.<br /><em>Let&apos;s grow it together.</em></h1>
          </section>

          <section className="contact-body" aria-label="Contact Saguaro Blossoms">
            <div className="contact-info">
              <p className="contact-info-title">Begin your journey</p>
              <p>Whether you&apos;re a parent seeking support for your child, a homeschool family, a college student, or an adult learner — we&apos;d love to hear from you. Every inquiry is answered personally and with care.</p>
              <div className="contact-details">
                <div className="contact-row">
                  <span className="contact-row-label">Location</span>
                  <span className="contact-row-val">Tucson, Arizona<br />Serving the greater Arizona area</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">Sessions</span>
                  <span className="contact-row-val">In-person &amp; virtual available</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">Response</span>
                  <span className="contact-row-val">Within 24–48 hours</span>
                </div>
              </div>
            </div>

            <form className="contact-form-wrap" onSubmit={submitForm} aria-labelledby="contact-form-title">
              <p className="form-title" id="contact-form-title">Tell us about your learning journey</p>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="first-name">First Name</label>
                  <input className="form-control" id="first-name" name="first-name" type="text" placeholder="Your first name" autoComplete="given-name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="last-name">Last Name</label>
                  <input className="form-control" id="last-name" name="last-name" type="text" placeholder="Your last name" autoComplete="family-name" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input className="form-control" id="email" name="email" type="email" placeholder="your@email.com" autoComplete="email" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="learner-type">I am a</label>
                <select className="form-control" id="learner-type" name="learner-type" defaultValue="">
                  <option value="">Select one...</option>
                  <option>Parent seeking services for my child</option>
                  <option>Homeschool family</option>
                  <option>College student</option>
                  <option>Adult learner</option>
                  <option>ESL learner</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="interest">Area of Interest</label>
                <select className="form-control" id="interest" name="interest" defaultValue="">
                  <option value="">Select one...</option>
                  <option>Reading development</option>
                  <option>Writing &amp; expression</option>
                  <option>English as a Second Language</option>
                  <option>Homeschool support</option>
                  <option>Multiple areas</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="story">Share your story</label>
                <textarea className="form-control" id="story" name="story" placeholder="Tell us where you are and where you'd like to grow..."></textarea>
              </div>
              <button className="form-btn" type="submit">Send My Inquiry</button>
              <div className="form-success" id="success-msg" aria-live="polite" style={{ display: submitted ? 'block' : undefined }}>
                Thank you for reaching out. We&apos;ll be in touch within 24–48 hours to begin your journey together.
              </div>
            </form>
          </section>
        </div>
      </main>

      <footer>
        <div>
          <div className="footer-brand-name">Saguaro Blossoms</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'var(--gold)' }} aria-hidden="true"></div>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Tucson, Arizona</span>
          </div>
          <div className="footer-brand-tagline">
            Every learner blooms at their own pace.<br />
            Learning as unique and vivid as you are.
          </div>
        </div>
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li><a href="#home" onClick={(event) => { event.preventDefault(); showPage('home') }}>Home</a></li>
            <li><a href="#about" onClick={(event) => { event.preventDefault(); showPage('about') }}>About</a></li>
            <li><a href="#services" onClick={(event) => { event.preventDefault(); showPage('services') }}>Services</a></li>
            <li><a href="#contact" onClick={(event) => { event.preventDefault(); showPage('contact') }}>Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#services" onClick={(event) => { event.preventDefault(); showPage('services') }}>Reading Development</a></li>
            <li><a href="#services" onClick={(event) => { event.preventDefault(); showPage('services') }}>Writing &amp; Expression</a></li>
            <li><a href="#services" onClick={(event) => { event.preventDefault(); showPage('services') }}>ESL Support</a></li>
            <li><a href="#services" onClick={(event) => { event.preventDefault(); showPage('services') }}>Homeschool Support</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Saguaro Blossoms Learning. Tucson, Arizona.</span>
        <span className="footer-bilingual">Donde cada estudiante florece.</span>
      </div>
    </>
  )
}
