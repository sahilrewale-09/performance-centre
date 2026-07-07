'use client'

const REVIEWS = [
  { name: 'Sanjana Das', rating: 5, text: 'The best gym in Matunga Dadar area. The equipments are kick ass, the trainers are extremely helpful.' },
  { name: 'Angad Kerkar', rating: 5, text: 'The perfect gym. The batch system is very unique and beneficial for beginners. MMA training is great too.' },
  { name: 'Shirish Ghatge', rating: 5, text: 'One of the most well maintained gyms in the region. Good ambience and favourable atmosphere for workouts.' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-[60px] bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E63030]">Reviews</span>
        </div>
        <h2 className="font-black text-5xl sm:text-7xl leading-none tracking-tight uppercase mb-16">
          WHAT MEMBERS<br /><span className="text-[#E63030]">ARE SAYING.</span>
        </h2>

        <div className="mb-12 flex items-center gap-5 rounded-2xl border border-white/5 bg-[#0f0f0f] p-6">
          <div className="text-6xl font-black text-[#E63030] leading-none">4.4</div>
          <div>
            <div className="flex gap-1 mb-1 text-[#E63030] text-xl">★★★★☆</div>
            <div className="text-sm text-white/50 font-medium">Based on 102 Google Reviews</div>
          </div>
          <a href="https://maps.google.com/?q=Performance+Centre+India+Dadar+Mumbai" target="_blank" rel="noopener noreferrer" className="ml-auto text-xs font-bold uppercase tracking-wide text-[#E63030] hover:underline">
            See All →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-white/5 bg-[#0f0f0f] p-7 hover:border-[#E63030]/40 transition-colors">
              <div className="text-[#E63030] text-xl mb-5">{'★'.repeat(r.rating)}</div>
              <blockquote className="grow text-white/60 leading-relaxed text-[15px] italic">"{r.text}"</blockquote>
              <figcaption className="mt-6 font-black text-white text-sm uppercase tracking-wide">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
