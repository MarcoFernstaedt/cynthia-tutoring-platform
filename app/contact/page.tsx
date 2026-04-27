import { PageHero, Shell } from '@/components/site'

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Get started"
        title="Your story matters. Let's grow it together."
        intro="Whether you're a parent seeking support for your child, a homeschool family, a college student, or an adult learner — we'd love to hear from you. Every inquiry is answered personally."
      />
      <section className="grid gap-10 bg-[#FFFBF0] px-6 pb-20 md:grid-cols-[0.85fr_1.15fr] md:px-16">
        <aside className="bg-[#0D0D0D] p-8 text-[#FFFBF0] md:p-10">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-[#F0C84A]">Begin your journey</p>
          <h2 className="mt-4 font-display text-4xl">Saguaro Blossoms Learning</h2>
          <p className="mt-5 text-[#FFFBF0]/75">Tucson, Arizona · In-person and virtual sessions available</p>
          <div className="mt-10 space-y-5 text-sm text-[#FFFBF0]/80">
            <p><span className="text-[#F0C84A]">Consultation:</span> $30 consultation</p>
            <p><span className="text-[#F0C84A]">Includes:</span> informal discussion and a small formal assessment</p>
            <p><span className="text-[#F0C84A]">Applies toward:</span> first session if services are chosen</p>
          </div>
        </aside>
        <form className="rounded-[2rem] border border-[#D4A017]/25 bg-white p-6 shadow-[0_24px_70px_rgba(13,13,13,0.08)] md:p-10">
          <p className="mb-8 font-display text-3xl text-[#0D0D0D]">Tell us about your learning journey</p>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-[#3A3A3A]">First Name<input className="border border-[#D4A017]/30 bg-[#FFFBF0] px-4 py-3 outline-none focus:border-[#D4006A]" /></label>
            <label className="flex flex-col gap-2 text-sm text-[#3A3A3A]">Last Name<input className="border border-[#D4A017]/30 bg-[#FFFBF0] px-4 py-3 outline-none focus:border-[#D4006A]" /></label>
            <label className="flex flex-col gap-2 text-sm text-[#3A3A3A] md:col-span-2">Email Address<input type="email" className="border border-[#D4A017]/30 bg-[#FFFBF0] px-4 py-3 outline-none focus:border-[#D4006A]" /></label>
            <label className="flex flex-col gap-2 text-sm text-[#3A3A3A]">I am a<select className="border border-[#D4A017]/30 bg-[#FFFBF0] px-4 py-3 outline-none focus:border-[#D4006A]"><option>Parent / Guardian</option><option>College Student</option><option>Adult Learner</option><option>Homeschool Family</option></select></label>
            <label className="flex flex-col gap-2 text-sm text-[#3A3A3A]">Area of Interest<select className="border border-[#D4A017]/30 bg-[#FFFBF0] px-4 py-3 outline-none focus:border-[#D4006A]"><option>Reading Development</option><option>Writing & Expression</option><option>English as a Second Language</option><option>Homeschool Support</option><option>$30 consultation</option></select></label>
            <label className="flex flex-col gap-2 text-sm text-[#3A3A3A] md:col-span-2">Share your story<textarea rows={5} className="border border-[#D4A017]/30 bg-[#FFFBF0] px-4 py-3 outline-none focus:border-[#D4006A]" /></label>
          </div>
          <button type="button" className="mt-8 w-full rounded-full bg-[#D4006A] px-8 py-4 font-body text-sm uppercase tracking-[0.12em] text-white transition hover:bg-[#E8008A]">Send My Inquiry</button>
        </form>
      </section>
    </Shell>
  )
}
