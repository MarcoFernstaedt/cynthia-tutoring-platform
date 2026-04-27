import { Eyebrow, Shell } from '@/components/site'

const values = [
  ['Every learner is unique', 'No two learning journeys look the same. We build every experience around the individual — their pace, their strengths, their story.'],
  ['Holistic by design', 'We see the whole learner — not just the skill gap. Confidence, curiosity, and voice matter as much as grammar and comprehension.'],
  ['Warmth at the center', 'Learning flourishes in a safe, nurturing space. Every session begins with trust and ends with possibility.'],
]

const philosophy = [
  ['01', 'Plant the seed', 'Every learner begins somewhere. We meet them there — with patience, without judgment — and plant the seed of confidence and curiosity.'],
  ['02', 'Tend with care', 'Growth is not linear. We nurture each learner through their individual seasons — celebrating progress and navigating challenges together.'],
  ['03', 'Harvest the possibility', 'The harvest looks different for every learner — a first chapter written, a voice found, a new language spoken with pride and confidence.'],
]

export default function AboutPage() {
  return (
    <Shell current="about">
      <div className="page active" id="page-about">
        <section className="about-hero" aria-labelledby="about-title">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="page-title" id="about-title">Rooted in growth.<br /><em>Grounded in possibility.</em></h1>
            <p className="about-body">
              At Saguaro Blossoms, we believe every learner carries within them a unique and vivid story waiting to bloom. Like the saguaro blossom — Arizona&apos;s state flower — growth happens at its own pace, in its own season, and in its own remarkable way.
              <br /><br />
              We serve K–12 students, homeschool families, college students, and adult learners across reading, writing, and ESL. Our approach is holistic, individualized, and deeply human — because every learner deserves to be seen, heard, and celebrated.
              <br /><br />
              I see every learner as a unique and vivid story waiting to bloom.
            </p>
          </div>
          <div className="value-stack">
            {values.map(([title, text]) => (
              <article className="value-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="philosophy-section" aria-labelledby="philosophy-title">
          <h2 className="section-title" id="philosophy-title" aria-label="The seed to harvest philosophy" style={{ textAlign: 'center', marginBottom: '3rem' }}>The seed <em>to harvest</em> philosophy</h2>
          <div className="philosophy-grid">
            {philosophy.map(([num, title, text]) => (
              <article className="philosophy-card" key={num}>
                <div className="philosophy-num" aria-hidden="true">{num}</div>
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
