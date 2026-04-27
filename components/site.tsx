import Link from 'next/link'
import type { ReactNode } from 'react'

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
]

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-[70px]">{children}</main>
      <Footer />
    </>
  )
}

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-[70px] items-center justify-between border-b border-[#D4A017]/25 bg-[#FFFBF0]/95 px-5 backdrop-blur-lg md:px-12" aria-label="Primary navigation">
      <Link href="/" className="flex items-center gap-2 font-display text-[1.4rem] font-medium tracking-tight text-[#0D0D0D]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#D4006A] bloom-pulse" />
        Saguaro Blossoms
      </Link>
      <div className="hidden items-center gap-10 md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="font-body text-[0.82rem] uppercase tracking-[0.1em] text-[#3A3A3A] transition hover:text-[#0D0D0D]">
            {item.label}
          </Link>
        ))}
        <Link href="/contact/" className="rounded-full bg-[#D4006A] px-5 py-2 font-body text-[0.82rem] uppercase tracking-[0.1em] text-white transition hover:bg-[#E8008A]">
          Get Started
        </Link>
      </div>
      <Link href="/contact/" className="rounded-full bg-[#D4006A] px-4 py-2 font-body text-xs uppercase tracking-[0.1em] text-white md:hidden">
        Start
      </Link>
    </nav>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-body text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#3A3A3A] before:block before:h-[1.5px] before:w-7 before:bg-[#3A3A3A]">
      {children}
    </div>
  )
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-block rounded-full bg-[#D4006A] px-8 py-3 font-body text-[0.82rem] font-medium uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[#E8008A]">{children}</Link>
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-block rounded-full border border-[#F0C84A] px-8 py-3 font-body text-[0.82rem] uppercase tracking-[0.1em] text-[#1F1F1F] transition hover:border-[#D4006A] hover:text-[#D4006A]">{children}</Link>
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-[#FFFBF0] px-6 py-20 md:px-16 md:py-28">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-4xl font-display text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-[#0D0D0D] md:text-7xl">{title}</h1>
      {intro ? <p className="mt-7 max-w-2xl border-l-[3px] border-[#F0C84A] pl-5 font-display text-xl italic leading-9 text-[#3A3A3A]">{intro}</p> : null}
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-[#D4A017]/25 bg-[#0D0D0D] px-6 py-12 text-[#FFFBF0] md:px-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">Saguaro Blossoms</p>
          <p className="mt-3 max-w-sm font-display italic text-[#FF7EB3]">Where every learner blossoms at their own pace.</p>
        </div>
        <div>
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-[#F0C84A]">Pages</p>
          <div className="flex flex-col gap-2 text-sm text-[#FFFBF0]/80">
            {[...navItems, { href: '/contact/', label: 'Contact' }].map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-[#F0C84A]">Services</p>
          <div className="flex flex-col gap-2 text-sm text-[#FFFBF0]/80">
            <Link href="/services/">Reading Development</Link>
            <Link href="/services/">Writing & Expression</Link>
            <Link href="/services/">ESL Support</Link>
            <Link href="/services/">Homeschool Support</Link>
          </div>
        </div>
      </div>
      <p className="mt-10 text-xs uppercase tracking-[0.16em] text-[#FFFBF0]/50">Tucson, Arizona · In-person and virtual learning support</p>
    </footer>
  )
}
