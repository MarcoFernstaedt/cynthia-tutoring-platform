import { Eyebrow, PrimaryButton, SecondaryButton, Shell } from '@/components/site'

const learners = [
  ['K–12 Students', 'Young Learners', 'Nurturing confident readers and writers from kindergarten through high school — at their own unique pace.'],
  ['College & Adult', 'Growing Voices', 'Supporting college students and adult learners in developing academic reading, writing, and language skills.'],
  ['ESL & Homeschool', 'Every Background', 'Welcoming English language learners and homeschool families with holistic, individualized support.'],
]

export default function HomePage() {
  return (
    <Shell current="home">
      <div className="page active" id="page-home">
        <section className="hero" aria-labelledby="home-title">
          <div className="hero-left">
            <Eyebrow>Tucson, Arizona</Eyebrow>
            <h1 className="hero-h1" id="home-title" aria-label="Where every learner blossoms at their own pace">
              Where every<br />learner <em>blossoms</em><br />at their own pace
            </h1>
            <p className="hero-tagline">
              Learning as unique and vivid as the saguaro blossom. Rooted in growth. Grounded in possibility.
            </p>
            <div className="hero-actions">
              <PrimaryButton href="/contact/">Begin Your Journey</PrimaryButton>
              <SecondaryButton href="/services/">Explore Services</SecondaryButton>
            </div>
          </div>
          <div className="hero-right">
            <div className="bloom-art" aria-label="Decorative saguaro blossom symbol">
              <div className="bloom-petals" aria-hidden="true">
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
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
          <span className="tagline-strip-dot" aria-hidden="true" />
          <span className="tagline-strip-text">Nurturing writers</span>
          <span className="tagline-strip-dot" aria-hidden="true" />
          <span className="tagline-strip-text">Nurturing confidence</span>
          <span className="tagline-strip-dot" aria-hidden="true" />
          <span className="tagline-strip-text">K–12 · College · Adult · ESL · Homeschool</span>
          <span className="tagline-strip-dot" aria-hidden="true" />
          <span className="tagline-strip-text">Donde cada estudiante florece</span>
        </div>

        <section className="features" aria-labelledby="features-title">
          <div className="features-header">
            <h2 className="section-title" id="features-title" aria-label="Learning for every season of life">Learning for <em>every</em> season of life</h2>
            <p className="section-sub">From kindergarten to adulthood — every learner finds their harvest here</p>
          </div>
          <div className="features-grid">
            {learners.map(([label, title, text]) => (
              <article className="feature-card" key={label}>
                <div className="feature-label">{label}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  )
}
