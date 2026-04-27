import { PageHero, Shell } from '@/components/site'

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
    <Shell>
      <PageHero
        eyebrow="About Saguaro Blossoms"
        title="Rooted in growth. Grounded in possibility."
        intro="At Saguaro Blossoms, we believe every learner carries within them a unique and vivid story waiting to bloom. Like the saguaro blossom — Arizona's state flower — growth happens at its own pace, in its own season, and with the right care."
      />
      <section className="grid gap-10 bg-[#FFFBF0] px-6 pb-20 md:grid-cols-[1fr_1.1fr] md:px-16">
        <div className="space-y-5 text-[#3A3A3A]">
          <p>
            I chose this name because the saguaro cactus embodies everything I believe about learning and growth. Unlike wildflowers that I sow in my garden that bloom quickly and fade, the saguaro takes time. It establishes deep roots, upon which it builds a strong structure while developing resilience to withstand any challenge the desert brings. That steady, supported growth is what creates something truly lasting and beautiful.
          </p>
          <p>
            I see every learner the same way. There is potential and beauty in every student, at every stage of learning. Growth isn’t about speed, it’s about depth, resilience, and becoming stronger through process. Each learner’s journey is unique. Your pace is yours. And when you bloom, it will be rooted in something solid that will sustain you. Every learner blooms at their own pace is not simply a tagline but encompasses my philosophy.
          </p>
        </div>
        <div className="space-y-5">
          {values.map(([title, text]) => (
            <article key={title} className="border-l-4 border-[#D4006A] bg-white p-7 shadow-[0_18px_45px_rgba(13,13,13,0.05)]">
              <h3 className="font-display text-2xl text-[#0D0D0D]">{title}</h3>
              <p className="mt-2 text-[#3A3A3A]">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#FAF3DC] px-6 py-20 md:px-16">
        <h2 className="mb-12 text-center font-display text-4xl font-normal md:text-6xl">The seed to harvest philosophy</h2>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {philosophy.map(([num, title, text]) => (
            <article key={title} className="bg-[#FFFBF0] p-8 text-center shadow-[0_20px_55px_rgba(13,13,13,0.06)]">
              <p className="font-display text-5xl italic text-[#D4006A]">{num}</p>
              <h3 className="mt-4 font-display text-3xl font-normal">{title}</h3>
              <p className="mt-4 text-[#3A3A3A]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  )
}
