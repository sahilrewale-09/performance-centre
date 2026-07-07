'use client'

import { Phone, MapPin, Star, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero.png" alt="" className="size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        <div className="absolute inset-0" style={{background:'radial-gradient(50% 60% at 15% 60%, rgba(230,48,48,0.10), transparent 70%)'}} />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-20">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50 mb-7">
          <Star className="size-3.5 fill-[#E63030] text-[#E63030]" />
          4.4 / 5 &nbsp;·&nbsp; 102 Google Reviews &nbsp;·&nbsp; Dadar, Mumbai
        </div>

        {/* Affiliate badge */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E63030] mb-4">A Project Battlefit Affiliate</p>

        {/* Heading */}
        <h1 className="font-black leading-none tracking-tight uppercase text-balance" style={{fontSize:'clamp(48px,5vw,100px)'}}>
          WHERE PERFORMANCE<br />
          <span className="text-[#E63030]">MEETS PURPOSE.</span>
        </h1>

        {/* Sub */}
        <p className="mt-8 max-w-xl border-l-[3px] border-[#E63030] pl-5 text-base font-medium italic text-white/50">
          "Mumbai's most complete training centre — Strength, MMA, Functional & Batch Training under one roof."
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:07400465007"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#E63030] px-8 py-4 text-base font-black uppercase tracking-wide text-white transition-all hover:brightness-110 hover:scale-[1.02]"
          >
            <Phone className="size-5" />
            Call Now — 074004 65007
          </a>
          <a
            href="https://maps.google.com/?q=Performance+Centre+India+Dadar+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/20 px-8 py-4 text-base font-black uppercase tracking-wide text-white transition-all hover:border-[#E63030] hover:text-[#E63030]"
          >
            <MapPin className="size-5" />
            Get Directions
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap gap-10">
          {[
            { num: '100+', label: 'Active Members' },
            { num: 'MMA Cage', label: 'Combat Zone' },
            { num: 'Batch System', label: 'Unique Training' },
            { num: '6AM–10PM', label: 'Open Daily' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-[#E63030]">{s.num}</div>
              <div className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-bold uppercase tracking-widest text-white/30">Scroll</span>
        <ChevronDown className="size-5 text-[#E63030]" />
      </div>
    </section>
  )
}
