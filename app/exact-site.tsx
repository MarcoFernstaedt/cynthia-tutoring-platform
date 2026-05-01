'use client'

import { useState } from 'react'

type PageName = 'home' | 'about' | 'services' | 'contact'
type Language = 'en' | 'es'
const pages: PageName[] = ['home', 'about', 'services', 'contact']

function cx(active: boolean) {
  return active ? 'active' : undefined
}

export default function ExactSaguaroSite({ initialPage = 'home' }: { initialPage?: PageName }) {
  const [activePage, setActivePage] = useState<PageName>(initialPage)
  const [language, setLanguage] = useState<Language>('en')
  const [formSubmitted, setFormSubmitted] = useState(
    () => typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('submitted') === 'true'
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const copy = {
    en: {
      home: 'Home', about: 'About', services: 'Services', getStarted: 'Get Started',
      location: 'Yuma, Arizona', heroTitle: <>Where every<br />learner <em>blossoms</em><br />at their own pace</>,
      heroTagline: 'Learning as unique and vivid as the saguaro blossom. Rooted in growth. Grounded in possibility.',
      begin: 'Begin Your Journey', explore: 'Explore Services',
      strip: ['Nurturing readers', 'Nurturing writers', 'Nurturing confidence', 'K–12 · College · Adult · ESL · Homeschool', 'Donde cada estudiante florece'],
      featuresTitle: <>Learning for <em>every</em> season of life</>,
      featuresSub: 'From kindergarten to adulthood — every learner finds their harvest here',
      contactLocation: <>Yuma, Arizona<br />Virtual services available globally</>,
      virtualSummary: 'Online reading, writing, ESL, and homeschool support from Yuma, Arizona, with virtual services available globally.',
      sessionsLabel: 'Sessions', sessionsValue: 'Virtual sessions only',
      serviceAreaLabel: 'Service area', serviceAreaValue: 'Virtual services available globally',
      paymentHeading: 'Payment types accepted', paymentTag: 'Payments',
      paymentIntro: 'Payment is currently accepted through AZ ESA funds, CashApp, Venmo, and Zelle.',
      paymentMethods: ['AZ ESA funds', 'CashApp', 'Venmo', 'Zelle'],
      footerTagline: <>Every learner blooms at their own pace.<br />Learning as unique and vivid as you are.</>,
      packageHeading: 'Commitment discounts available', packageTag: 'Packages',
      packageBullets: [
        'Small groups are $30/hour per individual.',
        'Family rates keep the initial rate as stated, with additional members receiving $5 off for the second and subsequent learners.',
        'Customized asynchronous packages are $250–$300 depending on grade level and need.',
        'Six- and eight-week commitments receive 10% off; twelve-week commitments receive 15% off.',
        'A 24-hour cancellation policy applies, with a cancellation fee of ½ the standard rate for cancellations not made within 24 hours.',
      ],
    },
    es: {
      home: 'Inicio', about: 'Acerca de', services: 'Servicios', getStarted: 'Comenzar',
      location: 'Yuma, Arizona', heroTitle: <>Donde cada<br />estudiante <em>florece</em><br />a su propio ritmo</>,
      heroTagline: 'Aprendizaje tan único y vivo como la flor del saguaro. Con raíces en el crecimiento y basado en la posibilidad.',
      begin: 'Comienza tu camino', explore: 'Explorar servicios',
      strip: ['Lectores en crecimiento', 'Escritores en crecimiento', 'Confianza en crecimiento', 'K–12 · Universidad · Adultos · ESL · Educación en casa', 'Donde cada estudiante florece a su propio ritmo'],
      featuresTitle: <>Aprendizaje para <em>cada</em> etapa de la vida</>,
      featuresSub: 'Desde kínder hasta la adultez — cada estudiante encuentra aquí su cosecha',
      contactLocation: <>Yuma, Arizona<br />Servicios virtuales disponibles globalmente</>,
      virtualSummary: 'Apoyo virtual de lectura, escritura, ESL y educación en casa desde Yuma, Arizona, con servicios virtuales disponibles globalmente.',
      sessionsLabel: 'Sesiones', sessionsValue: 'Solo sesiones virtuales',
      serviceAreaLabel: 'Área de servicio', serviceAreaValue: 'Servicios virtuales disponibles globalmente',
      paymentHeading: 'Tipos de pago aceptados', paymentTag: 'Pagos',
      paymentIntro: 'Actualmente se acepta pago por fondos AZ ESA, CashApp, Venmo y Zelle.',
      paymentMethods: ['Fondos AZ ESA', 'CashApp', 'Venmo', 'Zelle'],
      footerTagline: <>Cada estudiante florece a su propio ritmo.<br />Aprendizaje tan único y vivo como tú.</>,
      packageHeading: 'Descuentos por compromiso disponibles', packageTag: 'Paquetes especiales',
      packageBullets: [
        'Grupos pequeños: $30 por hora por persona.',
        'Las tarifas familiares mantienen la tarifa inicial, con $5 de descuento para el segundo estudiante y cada estudiante adicional.',
        'Los paquetes asincrónicos personalizados cuestan $250–$300 según el grado y la necesidad.',
        'Los compromisos de seis y ocho semanas reciben 10% de descuento; los compromisos de doce semanas reciben 15% de descuento.',
        'Se aplica una política de cancelación de 24 horas, con una tarifa de cancelación de la mitad de la tarifa estándar si no se cancela con 24 horas de anticipación.',
      ],
    },
  } satisfies Record<Language, Record<string, unknown>>
  const t = copy[language] as typeof copy.en

  function showPage(pageName: PageName) {
    setActivePage(pageName)
    setFormSubmitted(false)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
                {page === 'home' ? t.home : page === 'about' ? t.about : t.services}
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
              {t.getStarted}
            </a>
          </li>
        </ul>
        <div className="language-toggle" role="group" aria-label="Switch site language">
          <button type="button" className={language === 'en' ? 'active' : undefined} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button>
          <button type="button" className={language === 'es' ? 'active' : undefined} aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>Español</button>
        </div>
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          data-open={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen(false)}
        />
      </nav>

      <main id="main-content" lang={language}>
        {/* ===== HOME ===== */}
        <div className={`page ${activePage === 'home' ? 'active' : ''}`} id="page-home">
          <section className="hero" aria-labelledby="home-title">
            <div className="hero-left">
              <div className="eyebrow">{t.location}</div>
              <h1 className="hero-h1" id="home-title">
                {t.heroTitle}
              </h1>
              <p className="hero-tagline">
                {t.heroTagline}
              </p>
              <div className="hero-actions">
                <button className="btn-primary" type="button" onClick={() => showPage('contact')}>{t.begin}</button>
                <button className="btn-secondary" type="button" onClick={() => showPage('services')}>{t.explore}</button>
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
            {t.strip.map((item, index) => (
              <span key={item} className="tagline-strip-group">
                <span className="tagline-strip-text">{item}</span>
                {index < t.strip.length - 1 && <span className="tagline-strip-dot" aria-hidden="true"></span>}
              </span>
            ))}
          </div>

          <section className="features" aria-labelledby="features-title">
            <div className="features-header">
              <h2 className="section-title" id="features-title">{t.featuresTitle}</h2>
              <p className="section-sub">{t.featuresSub}</p>
              <p className="section-sub virtual-service-note">{t.virtualSummary}</p>
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
                My education career began in elementary settings where I worked as both a paraprofessional and substitute teacher, building a foundational understanding of literacy development across ages and grade levels. After focusing on family, I returned to education and earned my teaching credentials and adding additional experience as a tutor and a teacher before moving onto higher education where I continue to work as a professor of English.{'  '}My education and experience have worked to enable me to understand learners at every level which allows me to meet them where they are.
                <br /><br />
                My credentials include a bachelor’s degree and a master’s degree with a focus in English Studies from Arizona State University, graduate coursework in applied linguistics, and ongoing doctoral studies in English Literature. In addition to continued learning through education and professional development, I hold memberships in AZTESOL, AETA, NCTE/CCCC, TESOL, MLA and GSOLE, which are all professional organizations that keep me grounded in current research and best practices.
                <br /><br />
                My experience and credentials have provided the foundation for my teaching philosophy.{'  '}My work is driven by a student-centered philosophy rooted in building confidence, fostering holistic growth, and honoring each learner’s individual pace. I bring experience working with learner’s who possess various needs and backgrounds, including those in exceptional educational settings. Whether you’re working within a specific curriculum or need me to design custom lessons, I adapt to what serves you best.{' '}
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
            <h2 className="section-title" id="why-saguaro-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Why Choose Saguaro Blooms</h2>
            <p className="section-sub" style={{ maxWidth: 920, margin: '0 auto 1rem', textAlign: 'center' }}>
              I chose this name because the saguaro cactus embodies everything I believe about learning and growth. Unlike wildflowers that I sow in my garden that bloom quickly and fade, the saguaro takes time. It establishes deep roots, upon which it builds a strong structure while developing resilience to withstand any challenge the desert brings. That steady, supported growth is what creates something truly lasting and beautiful.
            </p>
            <p className="section-sub" style={{ maxWidth: 920, margin: '0 auto 3rem', textAlign: 'center' }}>
              I see every learned the same way. There is potential and beauty in every student, at every stage of learning. Growth isn’t about speed, it’s about depth, resilience, and becoming stronger through process. Each learner’s journey is unique. Your pace is yours. And when you bloom, it will be rooted in something solid that will sustain you. Every learner bloom at their own pace is not simply a tagline but encompasses my philosophy.
            </p>
            <h3 className="section-title" id="philosophy-title" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>The seed&nbsp;to harvest&nbsp;philosophy</h3>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <div className="philosophy-num">01</div>
                <h3>Plant the seed</h3>
                <p>Every learner begins somewhere. We meet them there — with patience, without judgment — and plant the seed of confidence and curiosity.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-num">02</div>
                <h3>Tend with care</h3>
                <p>Growth is not linear. We nurture each learner through their individual seasons — celebrating progress and navigating challenges together.</p>
              </div>
              <div className="philosophy-card">
                <div className="philosophy-num">03</div>
                <h3>Harvest the possibility</h3>
                <p>The harvest looks different for every learner — a first chapter written, a voice found, a new language spoken with pride and confidence.</p>
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
                <span className="service-tag">{t.packageTag}</span>
                <h3>{t.packageHeading}</h3>
                {language === 'en' ? (
                  <ul className="service-list special-packages-list">
                    <li>Small groups are $30/hour per individual.</li>
                    <li>Family rates keep the initial rate as stated, with additional members receiving $5 off for the second and subsequent learners.</li>
                    <li>Customized asynchronous packages are $250–$300 depending on grade level and need.</li>
                    <li>Six- and eight-week commitments receive 10% off; twelve-week commitments receive 15% off.</li>
                    <li>A 24-hour cancellation policy applies, with a cancellation fee of ½ the standard rate for cancellations not made within 24 hours.</li>
                  </ul>
                ) : (
                  <ul className="service-list special-packages-list" aria-label="Paquetes especiales">
                    {t.packageBullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
              <div className="service-card payment-card">
                <span className="service-tag">{t.paymentTag}</span>
                <h3>{t.paymentHeading}</h3>
                <p>{t.paymentIntro}</p>
                <ul className="service-list payment-method-list" aria-label={language === 'en' ? 'Accepted payment methods' : 'Métodos de pago aceptados'}>
                  {t.paymentMethods.map((item) => <li key={item}>{item}</li>)}
                </ul>
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
                  <span className="contact-row-val">{t.contactLocation}</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">{t.sessionsLabel}</span>
                  <span className="contact-row-val">{t.sessionsValue}</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">{t.serviceAreaLabel}</span>
                  <span className="contact-row-val">{t.serviceAreaValue}</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">{t.paymentTag}</span>
                  <span className="contact-row-val">{language === 'en' ? 'AZ ESA, CashApp, Venmo, Zelle' : 'Fondos AZ ESA, CashApp, Venmo, Zelle'}</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row-label">Response</span>
                  <span className="contact-row-val">Within 24–48 hours</span>
                </div>
              </div>
            </div>

            <form
              className="contact-form-wrap"
              action="https://formsubmit.co/cyntiam417@gmail.com"
              method="POST"
              aria-labelledby="contact-form-title"
            >
              <input type="hidden" name="_subject" value="New Saguaro Blossoms Learning inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://marcofernstaedt.github.io/cynthia-tutoring-platform/contact/?submitted=true" />
              <input type="text" name="_honey" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <p className="form-title" id="contact-form-title">Tell us about your learning journey</p>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="first-name">First Name</label>
                  <input className="form-control" id="first-name" name="first-name" type="text" placeholder="Your first name" autoComplete="given-name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="last-name">Last Name</label>
                  <input className="form-control" id="last-name" name="last-name" type="text" placeholder="Your last name" autoComplete="family-name" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input className="form-control" id="email" name="email" type="email" placeholder="your@email.com" autoComplete="email" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="learner-type">I am a</label>
                <select className="form-control" id="learner-type" name="learner-type" defaultValue="" required>
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
                <select className="form-control" id="interest" name="interest" defaultValue="" required>
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
                <textarea className="form-control" id="story" name="story" placeholder="Tell us where you are and where you'd like to grow..." required></textarea>
              </div>
              <button className="form-btn" type="submit">Send My Inquiry</button>
              {formSubmitted && (
                <div className="form-success" id="success-msg" aria-live="polite">
                  Thank you for reaching out. Your inquiry has been sent to Saguaro Blossoms Learning.
                </div>
              )}
              <p className="form-note">This form sends your inquiry directly to Saguaro Blossoms Learning by email.</p>
            </form>
          </section>
        </div>
      </main>

      <footer>
        <div>
          <div className="footer-brand-name">Saguaro Blossoms</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
            <div style={{ width: 28, height: 1.5, background: 'var(--gold)' }} aria-hidden="true"></div>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Yuma, Arizona</span>
          </div>
          <div className="footer-brand-tagline">
            {t.footerTagline}
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
        <span className="footer-copy">© 2025 Saguaro Blossoms Learning. Yuma, Arizona.</span>
        <span className="footer-bilingual">Donde cada estudiante florece.</span>
      </div>
    </>
  )
}
