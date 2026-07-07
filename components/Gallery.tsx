'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const PHOTOS = [
  { src: '/images/gym-floor.png', label: 'Main Floor' },
  { src: '/images/trainer-2.png', label: 'Functional Training' },
  { src: '/images/trainer-3.png', label: 'Strength & Conditioning' },
  { src: '/images/mma.png', label: 'MMA Class' },
  { src: '/images/hulk.png', label: 'Weight Zone' },
  { src: '/images/hero.png', label: 'Performance Centre' },
]

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-[60px] bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E63030]">Inside Performance Centre</span>
        </div>
        <h2 className="font-black text-5xl sm:text-7xl leading-none tracking-tight uppercase mb-16">
          SEE IT FOR<br /><span className="text-[#E63030]">YOURSELF.</span>
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setSelected(photo.src)}
              className={`relative overflow-hidden rounded-xl bg-[#111] border border-white/5 group cursor-pointer
                ${i === 0 ? 'col-span-2 md:col-span-2' : ''}
              `}
              style={{ minHeight: i === 0 ? '380px' : '190px' }}
            >
              <img src={photo.src} alt={photo.label} className="absolute inset-0 size-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-white/60">{photo.label}</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <X className="size-5" />
          </button>
          <img src={selected} alt="" className="max-h-[90vh] max-w-full rounded-xl object-contain" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
