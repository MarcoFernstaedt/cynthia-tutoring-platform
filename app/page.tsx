import { BookOpen, CalendarHeart, CheckCircle2, GraduationCap, HeartHandshake, Home, Leaf, Mail, MessageCircle, PenLine, Sprout, Star } from 'lucide-react'

const services = [
  {
    title: 'Reading Development',
    icon: BookOpen,
    text: 'From phonics and fluency to comprehension and critical analysis — we meet every reader at their level and guide them forward at their own pace.',
    bullets: ['Phonics & early literacy', 'Reading fluency & comprehension', 'Critical reading for college', 'Adult reading development'],
  },
  {
    title: 'Writing & Expression',
    icon: PenLine,
    text: 'Writing is finding your voice. We help every learner discover theirs — from forming sentences to crafting essays and authentic personal expression.',
    bullets: ['Creative & narrative writing', 'Academic essay writing', 'Grammar & mechanics', 'Writing confidence for adults'],
  },
  {
    title: 'English as a Second Language',
    icon: MessageCircle,
    text: 'Language is a bridge. We help adult learners cross it with dignity, confidence, and the support they deserve on their unique journey.',
    bullets: ['Conversational English', 'Reading & writing in English', 'Workplace language skills', 'Pronunciation & fluency support'],
  },
  {
    title: 'Homeschool Support',
    icon: Home,
    text: 'A flexible, personalized partnership for homeschool families seeking holistic language arts support tailored to their child’s one-of-a-kind journey.',
    bullets: ['Individualized curriculum support', 'Reading & writing integration', 'Progress assessment & guidance', 'Parent collaboration & resources'],
  },
]

const audiences = [
  ['K–12 Students', 'Young Learners', 'Nurturing confident readers and writers from kindergarten through high school — at their own unique pace.'],
  ['College Students', 'Academic Growth', 'Supporting college students as they strengthen reading, writing, research, and language skills.'],
  ['Adult Learners', 'Lifelong Learning', 'Helping adult learners build confidence, literacy, expression, and practical communication skills.'],
  ['ESL & Homeschool', 'Flexible Support', 'Welcoming English language learners and homeschool families with holistic, individualized support.'],
]

const process = [
  ['01', 'Plant the seed', 'Every learner begins somewhere. We meet them there — with patience, without judgment — and plant the seed of confidence and curiosity.'],
  ['02', 'Tend with care', 'Growth is not linear. We nurture each learner through their individual seasons — celebrating progress and navigating challenges together.'],
  ['03', 'Harvest the possibility', 'The harvest looks different for every learner — a first chapter written, a voice found, a new language spoken with pride and confidence.'],
]

const pricing = [
  ['$25/hour', 'Kindergarten'],
  ['$40/hour', 'Grades 1–5'],
  ['$45/hour', 'Middle school, grades 6–8'],
  ['$50/hour', 'High school, grades 9–12'],
  ['$60/hour', 'College courses, including dual enrollment and concurrent courses'],
  ['$20/hour', 'Adult learners and/or ESL'],
]

const aboutParagraphs = [
  'My education career began in elementary settings where I worked as both a paraprofessional and substitute teacher, building a foundational understanding of literacy development across ages and grade levels. After focusing on family, I returned to education and earned my teaching credentials and adding additional experience as a tutor and a teacher before moving onto higher education where I continue to work as a professor of English.  My education and experience have worked to enable me to understand learners at every level which allows me to meet them where they are.',
  'My credentials include a bachelor’s degree and a master’s degree with a focus in English Studies from Arizona State University, graduate coursework in applied linguistics, and ongoing doctoral studies in English Literature. In addition to continued learning through education and professional development, I hold memberships in AZTESOL, AETA, NCTE/CCCC, TESOL, MLA and GSOLE, which are all professional organizations that keep me grounded in current research and best practices.',
  'My experience and credentials have provided the foundation for my teaching philosophy.  My work is driven by a student-centered philosophy rooted in building confidence, fostering holistic growth, and honoring each learner’s individual pace. I bring experience working with learner’s who possess various needs and backgrounds, including those in exceptional educational settings. Whether you’re working within a specific curriculum or need me to design custom lessons, I adapt to what serves you best. ',
]

const whySaguaroParagraphs = [
  'I chose this name because the saguaro cactus embodies everything I believe about learning and growth. Unlike wildflowers that I sow in my garden that bloom quickly and fade, the saguaro takes time. It establishes deep roots, upon which it builds a strong structure while developing resilience to withstand any challenge the desert brings. That steady, supported growth is what creates something truly lasting and beautiful.',
  'I see every learned the same way. There is potential and beauty in every student, at every stage of learning. Growth isn’t about speed, it’s about depth, resilience, and becoming stronger through process. Each learner’s journey is unique. Your pace is yours. And when you bloom, it will be rooted in something solid that will sustain you. Every learner bloom at their own pace is not simply a tagline but encompasses my philosophy.',
]

const paymentItems = ['ESA Funds beginning May 2026', 'CashApp', 'Venmo', 'Zelle']

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden" aria-label="Saguaro Blossoms tutoring platform home page">
      <section id="home" className="relative px-6 py-8 md:px-10 lg:px-16" aria-labelledby="hero-title">
        <div className="absolute left-0 top-0 -z-10 h-[42rem] w-[42rem] rounded-full bg-[#d7b76d]/20 blur-3xl" aria-hidden="true" />
        <div className="absolute right-0 top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#bd6c57]/16 blur-3xl" aria-hidden="true" />

        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-full border border-[#decba7] bg-white/65 px-5 py-3 shadow-sm backdrop-blur" aria-label="Primary navigation">
          <a href="#home" className="focus-ring flex items-center gap-3 font-semibold text-[#274132]">
            <span className="grid size-10 place-items-center rounded-full bg-[#5d7a4f] text-white"><Sprout size={20} aria-hidden="true" /></span>
            <span>Saguaro Blossoms</span>
          </a>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#355340]">
            <a className="focus-ring hover:text-[#1f3328]" href="#about">About</a>
            <a className="focus-ring hover:text-[#1f3328]" href="#services">Services</a>
            <a className="focus-ring hover:text-[#1f3328]" href="#pricing">Pricing</a>
            <a className="focus-ring hover:text-[#1f3328]" href="#contact">Get Started</a>
            <a className="focus-ring rounded-full bg-[#1f3328] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1f3328]/20" href="#contact">Begin Your Journey</a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
          <div>
            <p className="mb-4 inline-flex max-w-fit rounded-full border border-[#d4b16f] bg-white/75 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5d2d]">Tucson, Arizona · In-person & virtual sessions available</p>
            <h1 id="hero-title" className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.055em] text-[#1f3328] md:text-7xl">
              Where every learner blossoms at their own pace
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-black leading-snug text-[#5d7a4f]">Saguaro Blossoms Learning Services, LLC.</p>
            <p className="mt-2 max-w-2xl text-xl font-semibold leading-snug text-[#8a5d2d]">Rooted in growth. Strengthened by time. Blossoming into possibilities.</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#425748]">Compassionate, professional education support for K–12, college, adult learning and English as a Second Language.</p>
            <p className="mt-4 max-w-2xl text-base font-semibold text-[#5d7a4f]">Donde cada estudiante florece.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="focus-ring rounded-full bg-[#bd6c57] px-7 py-3 font-black text-white shadow-lg shadow-[#bd6c57]/25" href="#contact">Schedule a $30 consultation</a>
              <a className="focus-ring rounded-full border border-[#5d7a4f] bg-white/80 px-7 py-3 font-black text-[#274132] shadow-sm" href="#services">Explore services</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3" aria-label="Learner groups served">
              {['Reading', 'Writing', 'ESL', 'Homeschool', 'College & adult learners'].map((item) => <span key={item} className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#2c4435] shadow-sm">{item}</span>)}
            </div>
          </div>
          <div className="relative rounded-[2.5rem] border border-white/70 bg-white/60 p-6 shadow-2xl shadow-[#8f6b3f]/15 backdrop-blur">
            <div className="rounded-[2rem] bg-[#1f3328] p-8 text-white">
              <Leaf className="mb-8 text-[#d7b76d]" size={42} aria-hidden="true" />
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f3d58d]">Every voice</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Every reader. Every writer. Every learner.</h2>
              <p className="mt-5 leading-7 text-[#e7eadc]">Learning as unique and vivid as the saguaro blossom. Rooted in growth. Grounded in possibility.</p>
              <div className="mt-8 grid gap-3 text-sm font-semibold text-[#e7eadc]">
                {['Nurturing readers', 'Nurturing writers', 'Nurturing confidence', 'K–12 · College · Adult · ESL · Homeschool'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2"><CheckCircle2 size={16} className="text-[#d7b76d]" aria-hidden="true" />{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learners" className="px-6 py-12 md:px-10 lg:px-16" aria-labelledby="learners-title">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#5d7a4f] p-7 text-white shadow-2xl shadow-[#5d7a4f]/20 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f3d58d]">Learning for every season of life</p>
          <h2 id="learners-title" className="mt-3 text-4xl font-black tracking-tight">From kindergarten to adulthood — every learner finds their harvest here.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map(([label, title, text]) => (
              <article key={label} className="rounded-[1.75rem] bg-white/12 p-6 ring-1 ring-white/15">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f3d58d]">{label}</p>
                <h3 className="mt-2 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-[#eef3e8]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-12 md:px-10 lg:px-16" aria-labelledby="about-title">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e2d2b6] bg-white/75 p-7 shadow-lg shadow-[#806640]/10 md:p-10">
          <div className="max-w-5xl">
            <HeartHandshake className="text-[#bd6c57]" size={38} aria-hidden="true" />
            <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-[#bd6c57]">Our Story</p>
            <h2 id="about-title" className="mt-2 text-4xl font-black tracking-tight">Rooted in growth. Grounded in possibility.</h2>
            <p className="mt-4 max-w-3xl leading-8 text-[#425748]">Cynthia’s full background is included below so families can understand the depth behind the teaching, while the page keeps the first impression warm, clear, and easy to scan.</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
            <aside className="rounded-[1.75rem] bg-[#1f3328] p-6 text-white shadow-xl shadow-[#1f3328]/15">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f3d58d]">Why Saguaro Blossoms?</p>
              <h3 className="mt-3 text-3xl font-black">A name rooted in steady, lasting growth.</h3>
              <div className="mt-4 space-y-4 leading-8 text-[#e7eadc]">
                {whySaguaroParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </aside>
            <div className="rounded-[1.75rem] border border-[#e2d2b6] bg-[#fbf6ea] p-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#bd6c57]">About Cynthia · full notes preserved</p>
              <div className="mt-4 space-y-4 leading-8 text-[#425748]">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 lg:px-16" aria-labelledby="process-title">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#bd6c57]">The seed to harvest philosophy</p>
          <h2 id="process-title" className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Growth that honors the learner’s pace.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map(([step, title, text]) => (
              <article key={step} className="rounded-[2rem] border border-[#e2d2b6] bg-white/70 p-7 shadow-sm">
                <p className="text-xs font-black tracking-[0.25em] text-[#bd6c57]">{step}</p>
                <h3 className="mt-3 text-2xl font-black text-[#1f3328]">{title}</h3>
                <p className="mt-3 leading-7 text-[#4a5d4d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-12 md:px-10 lg:px-16" aria-labelledby="services-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#bd6c57]">What We Offer</p>
            <h2 id="services-title" className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Nurturing readers. Nurturing writers. Nurturing confidence.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map(({ title, icon: Icon, text, bullets }) => (
              <article key={title} className="rounded-[2rem] border border-[#e2d2b6] bg-white/70 p-7 shadow-lg shadow-[#806640]/10">
                <Icon className="text-[#5d7a4f]" size={34} aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-[#4a5d4d]">{text}</p>
                <ul className="mt-5 grid gap-2" aria-label={`${title} focus areas`}>
                  {bullets.map((bullet) => <li key={bullet} className="flex gap-2 text-sm font-semibold text-[#284234]"><Star className="mt-0.5 shrink-0 text-[#c89449]" size={16} aria-hidden="true" />{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-12 md:px-10 lg:px-16" aria-labelledby="pricing-title">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#bd6c57]">Services & Pricing</p>
              <h2 id="pricing-title" className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Services and pricing are together for easier decisions.</h2>
            </div>
            <p className="max-w-xl leading-7 text-[#4a5d4d]">All sessions may include 30–60 minutes of instruction, 15 minutes of review and next steps, and a weekly parent conference when applicable.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map(([price, label]) => (
              <article key={label} className="rounded-3xl border border-[#e2d2b6] bg-white/75 p-6 shadow-sm">
                <p className="text-3xl font-black text-[#5d7a4f]">{price}</p>
                <p className="mt-2 font-semibold text-[#334c3d]">{label}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 rounded-[2rem] bg-[#1f3328] p-6 text-white md:grid-cols-4">
            <div><strong>$30 consultation:</strong><br />Informal discussion and small formal assessment; applied toward the first session if services begin.</div>
            <div><strong>Small group rates:</strong><br />$30/hour/individual</div>
            <div><strong>Packages:</strong><br />6-week commitment: 10% discount · 12-week commitment: 15% discount</div>
            <div><strong>Payment Options:</strong><br />{paymentItems.join(' · ')}</div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-[#e2d2b6] bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#bd6c57]">Family rates</p>
              <h3 className="mt-2 text-2xl font-black text-[#1f3328]">Support for multiple learners</h3>
              <p className="mt-3 leading-7 text-[#4a5d4d]">Initial learner is billed at the stated grade-level rate, with each additional family member receiving a $5 discount from the stated rate.</p>
            </article>
            <article className="rounded-[1.75rem] border border-[#e2d2b6] bg-white/70 p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#bd6c57]">Customized asynchronous packages</p>
              <h3 className="mt-2 text-2xl font-black text-[#1f3328]">$250–$300 tailored learning support</h3>
              <p className="mt-3 leading-7 text-[#4a5d4d]">Independent packages can be customized by grade level, learning goal, and need, giving families flexible support between live sessions.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 md:px-10 lg:px-16" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[2.5rem] border border-[#e2d2b6] bg-white/75 p-8 shadow-2xl shadow-[#806640]/10 md:p-10">
            <CalendarHeart className="text-[#bd6c57]" size={44} aria-hidden="true" />
            <h2 id="contact-title" className="mt-4 text-4xl font-black tracking-tight">Your story matters. Let’s grow it together.</h2>
            <p className="mt-4 leading-8 text-[#4a5d4d]">Whether you are a parent seeking support for your child, a homeschool family, a college student, or an adult learner — every inquiry is answered personally and with care.</p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-[#334c3d]">
              <span className="inline-flex items-center gap-2"><Home size={16} className="text-[#5d7a4f]" /> Tucson, Arizona · Serving the greater Arizona area</span>
              <span className="inline-flex items-center gap-2"><GraduationCap size={16} className="text-[#5d7a4f]" /> In-person & virtual sessions available</span>
              <span className="inline-flex items-center gap-2"><Mail size={16} className="text-[#5d7a4f]" /> Response within 24–48 hours</span>
            </div>
          </div>
          <form className="rounded-[2.5rem] border border-[#e2d2b6] bg-[#1f3328] p-8 text-white shadow-2xl shadow-[#1f3328]/15 md:p-10" aria-label="Tell us about your learning journey">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f3d58d]">Tell us about your learning journey</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">First Name<input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:ring-2 focus:ring-[#f3d58d]" /></label>
              <label className="grid gap-2 text-sm font-semibold">Last Name<input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:ring-2 focus:ring-[#f3d58d]" /></label>
              <label className="grid gap-2 text-sm font-semibold md:col-span-2">Email Address<input type="email" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:ring-2 focus:ring-[#f3d58d]" /></label>
              <label className="grid gap-2 text-sm font-semibold md:col-span-2">I am a<select className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#f3d58d]"><option>Parent seeking services for my child</option><option>Homeschool family</option><option>College student</option><option>Adult learner</option><option>ESL learner</option></select></label>
              <label className="grid gap-2 text-sm font-semibold md:col-span-2">Area of Interest<select className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#f3d58d]"><option>Reading development</option><option>Writing & expression</option><option>English as a Second Language</option><option>Homeschool support</option><option>Multiple areas</option></select></label>
              <label className="grid gap-2 text-sm font-semibold md:col-span-2">Share your story<textarea rows={5} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:ring-2 focus:ring-[#f3d58d]" /></label>
            </div>
            <a className="focus-ring mt-7 inline-flex rounded-full bg-[#bd6c57] px-7 py-3 font-black text-white shadow-lg shadow-[#bd6c57]/25" href="mailto:hello@saguaroblossomslearning.com?subject=Saguaro%20Blossoms%20consultation%20request">Send My Inquiry</a>
            <p className="mt-4 text-sm leading-6 text-[#e7eadc]">Thank you for reaching out. We’ll be in touch within 24–48 hours to begin your journey together.</p>
          </form>
        </div>
      </section>
    </main>
  )
}
