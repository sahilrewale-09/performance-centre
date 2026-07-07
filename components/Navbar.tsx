'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Training', href: '#training' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#080808]/95 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#home" className="flex flex-col leading-none">
          <span className="text-xl font-black uppercase tracking-wide">
            PERF<span className="text-[#E63030]">O</span>RMANCE
          </span>
          <span className="text-[9px] font-bold tracking-[0.25em] text-white/40 uppercase">Centre India</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map(l => (
            <a key={l.href} href={l.href} className="text-xs font-bold uppercase tracking-wide text-white/60 hover:text-[#E63030] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="tel:07400465007" className="hidden sm:flex items-center gap-2 bg-[#E63030] text-white px-4 py-2 rounded-lg text-sm font-black uppercase hover:brightness-110 transition-all">
          <Phone className="size-4" /> Call Now
        </a>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#080808] border-t border-white/5 px-4 py-3">
          {NAV.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wide text-white/60 hover:text-[#E63030]">
              {l.label}
            </a>
          ))}
          <a href="tel:07400465007" className="mt-2 flex items-center justify-center gap-2 bg-[#E63030] text-white px-4 py-3 rounded-lg text-sm font-black uppercase">
            <Phone className="size-4" /> Call Now — 074004 65007
          </a>
        </div>
      )}
    </nav>
  )
}
