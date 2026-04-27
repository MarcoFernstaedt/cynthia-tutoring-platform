import { Eyebrow, PrimaryButton, SecondaryButton, Shell } from '@/components/site'

const learners = [
  ['K–12 Students', 'Young Learners', 'Nurturing confident readers and writers from kindergarten through high school — at their own unique pace.'],
  ['College & Adult', 'Growing Voices', 'Supporting college students and adult learners in developing academic reading, writing, and language skills.'],
  ['ESL & Homeschool', 'Every Background', 'Welcoming English language learners and homeschool families with holistic, individualized support.'],
]

export default function HomePage() {
  return (
    <Shell>
      <section className="grid min-h-[calc(100vh-70px)] bg-[#FFFBF0] lg:grid-cols-[55%_45%]">
        <div className="relative flex flex-col justify-center px-6 py-20 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#D4006A] after:via-[#F0C84A] after:to-transparent md:px-20">
          <Eyebrow>Tucson, Arizona</Eyebrow>
          <h1 className="font-display text-[clamp(2.8rem,4.5vw,4.2rem)] font-normal leading-[1.18] tracking-[-0.02em] text-[#0D0D0D]">
            Where every learner blossoms at their own pace
          </h1>
          <p className="mt-7 max-w-[440px] border-l-[3px] border-[#F0C84A] pl-5 font-display text-[1.05rem] italic leading-[1.9] text-[#3A3A3A]">
            Learning as unique and vivid as the saguaro blossom. Rooted in growth. Grounded in possibility.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href="/contact/">Begin Your Journey</PrimaryButton>
            <SecondaryButton href="/services/">Explore Services</SecondaryButton>
          </div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF0F7] via-[#FFE0EF] to-[#FEF9E7] px-6 py-16">
          <div className="absolute right-[-10%] top-[12%] h-72 w-72 rounded-full bg-[#FF7EB3]/30 blur-3xl" />
          <div className="absolute bottom-[-12%] left-[-10%] h-80 w-80 rounded-full bg-[#F0C84A]/30 blur-3xl" />
          <div className="relative flex h-[330px] w-[330px] items-center justify-center md:h-[430px] md:w-[430px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className="absolute h-32 w-16 origin-bottom rounded-[50%_50%_45%_45%] bg-gradient-to-b from-[#FF7EB3] to-[#D4006A]/80 opacity-90 shadow-xl"
                style={{ transform: `rotate(${index * 45}deg) translateY(-92px)` }}
              />
            ))}
            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-[#F0C84A] bg-[#FFFBF0] text-center font-display text-2xl italic leading-tight text-[#0D0D0D] shadow-2xl">
              Every<br />voice
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-6 py-10 text-center text-[#FFFBF0]">
        <p className="bloom-quote font-display text-3xl italic md:text-5xl">Every reader. Every writer. Every learner.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.18em] text-[#F0C84A]">
          <span>Nurturing readers</span><span>·</span><span>Nurturing writers</span><span>·</span><span>Nurturing confidence</span>
        </div>
        <p className="mt-4 text-[#FF7EB3]">K–12 · College · Adult · ESL · Homeschool</p>
        <p className="mt-2 font-display italic text-[#FFFBF0]">Donde cada estudiante florece</p>
      </section>

      <section className="bg-[#FFFBF0] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Learning for every season of life</Eyebrow>
          <h2 className="font-display text-4xl font-normal md:text-6xl">Learning for every season of life</h2>
          <p className="mt-5 text-lg text-[#3A3A3A]">From kindergarten to adulthood — every learner finds their harvest here</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {learners.map(([label, title, text]) => (
            <article key={label} className="border border-[#D4A017]/25 bg-white p-8 shadow-[0_20px_60px_rgba(13,13,13,0.06)]">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#D4006A]">{label}</p>
              <h3 className="font-display text-3xl font-normal text-[#0D0D0D]">{title}</h3>
              <p className="mt-4 text-[#3A3A3A]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  )
}
