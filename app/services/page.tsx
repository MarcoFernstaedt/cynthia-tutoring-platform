import { PageHero, PrimaryButton, Shell } from '@/components/site'

const services = [
  ['Reading Development', 'From phonics and fluency to comprehension and critical analysis — we meet every reader at their level and guide them forward at their own pace.'],
  ['Writing & Expression', 'Writing is finding your voice. We help every learner discover theirs — from forming sentences to crafting essays and authentic personal expression.'],
  ['English as a Second Language', 'Language is a bridge. We help adult learners cross it with dignity, confidence, and the support they deserve on their unique journey.'],
  ['Homeschool Support', 'A flexible, personalized partnership for homeschool families seeking holistic language arts support tailored to their child\'s one-of-a-kind journey.'],
]

const ages = [
  ['K–12 Students', 'From kindergarteners discovering letters to high schoolers refining their voice'],
  ['College Students', 'Supporting academic reading, writing, and language arts at the collegiate level'],
  ['Adult Learners', 'Empowering adults at every stage — including English language learners — with dignity'],
]

const pricing = [
  ['$30 consultation', 'An informal discussion and a small formal assessment. The consultation fee goes toward the first session if the learner chooses services.'],
  ['$25 session option', 'Focused support for shorter learning needs and targeted practice.'],
  ['$60 session option', 'Full-length support for reading development, writing, ESL, and homeschool support.'],
  ['$250–$300 asynchronous packages', 'Customized asynchronous packages for learners who need flexible, project-based support.'],
]

export default function ServicesPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Services"
        title="Nurturing readers. Nurturing writers. Nurturing confidence."
        intro="Services and pricing are together so families can understand both the support and the investment before beginning."
      />
      <section className="bg-[#FFFBF0] px-6 pb-10 md:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(([title, text]) => (
            <article key={title} className="group border border-[#D4A017]/25 bg-white p-9 transition hover:-translate-y-1 hover:border-[#D4006A]/40 hover:shadow-[0_22px_60px_rgba(13,13,13,0.08)]">
              <div className="mb-8 h-1 w-16 bg-gradient-to-r from-[#D4006A] to-[#F0C84A]" />
              <h3 className="font-display text-3xl font-normal text-[#0D0D0D]">{title}</h3>
              <p className="mt-4 leading-8 text-[#3A3A3A]">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#0D0D0D] px-6 py-12 text-[#FFFBF0] md:px-16">
        <div className="grid gap-6 md:grid-cols-3">
          {ages.map(([title, text]) => (
            <article key={title} className="border border-[#FFFBF0]/10 p-7">
              <h3 className="font-display text-2xl text-[#F0C84A]">{title}</h3>
              <p className="mt-3 text-[#FFFBF0]/75">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#FFF0F7] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D4006A]">Pricing & consultation</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">Begin with clarity.</h2>
          <p className="mt-5 text-[#3A3A3A]">The $30 consultation helps identify needs, goals, and the right service path. ESA Funds beginning May 2026. CashApp, Venmo, and Zelle accepted.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-4">
          {pricing.map(([price, detail]) => (
            <article key={price} className="rounded-[2rem] bg-[#FFFBF0] p-6 shadow-[0_20px_50px_rgba(13,13,13,0.06)]">
              <h3 className="font-display text-2xl text-[#0D0D0D]">{price}</h3>
              <p className="mt-3 text-sm leading-7 text-[#3A3A3A]">{detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center"><PrimaryButton href="/contact/">Schedule a $30 consultation</PrimaryButton></div>
      </section>
    </Shell>
  )
}
