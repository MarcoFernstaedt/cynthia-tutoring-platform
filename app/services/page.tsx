import { Eyebrow, Shell } from '@/components/site'

const services = [
  ['Reading', 'Reading Development', 'From phonics and fluency to comprehension and critical analysis — we meet every reader at their level and guide them forward at their own pace.', ['Phonics & early literacy', 'Reading fluency & comprehension', 'Critical reading for college', 'Adult reading development']],
  ['Writing', 'Writing & Expression', 'Writing is finding your voice. We help every learner discover theirs — from forming sentences to crafting essays and authentic personal expression.', ['Creative & narrative writing', 'Academic essay writing', 'Grammar & mechanics', 'Writing confidence for adults']],
  ['ESL', 'English as a Second Language', 'Language is a bridge. We help adult learners cross it with dignity, confidence, and the support they deserve on their unique journey.', ['Conversational English', 'Reading & writing in English', 'Workplace language skills', 'Pronunciation & fluency support']],
  ['Homeschool', 'Homeschool Support', "A flexible, personalized partnership for homeschool families seeking holistic language arts support tailored to their child's one-of-a-kind journey.", ['Individualized curriculum support', 'Reading & writing integration', 'Progress assessment & guidance', 'Parent collaboration & resources']],
]

const ages = [
  ['K–12 Students', 'From kindergarteners discovering letters to high schoolers refining their voice'],
  ['College Students', 'Supporting academic reading, writing, and language arts at the collegiate level'],
  ['Adult Learners', 'Empowering adults at every stage — including English language learners — with dignity'],
]

export default function ServicesPage() {
  return (
    <Shell current="services">
      <div className="page active" id="page-services">
        <section className="services-hero" aria-labelledby="services-title">
          <Eyebrow>What We Offer</Eyebrow>
          <h1 className="page-title" id="services-title">Nurturing readers.<br />Nurturing writers.<br /><em>Nurturing confidence.</em></h1>
        </section>

        <div className="services-grid">
          {services.map(([tag, title, text, items]) => (
            <article className="service-card" key={title as string}>
              <span className="service-tag">{tag as string}</span>
              <h3>{title as string}</h3>
              <p>{text as string}</p>
              <ul className="service-list">
                {(items as string[]).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <section className="ages-strip" aria-label="Learners served">
          {ages.map(([title, text]) => (
            <article className="age-item" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </div>
    </Shell>
  )
}
