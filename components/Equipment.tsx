'use client'

const ZONES = [
  { title: 'Strength Zone', icon: '🏋️', img: '/images/trainer-1.png', items: ['Hoist Machines', 'Bumper Plates (PowerJoe/USI)', 'Squat Rack', 'Bench Press', 'Cable Machines'] },
  { title: 'Combat Zone', icon: '🥊', img: '/images/mma.png', items: ['Full MMA Cage', 'Boxing Bags', 'Battle Ropes', 'Gloves & Pads', 'Combat Training'] },
  { title: 'Functional Zone', icon: '⚡', img: '/images/trainer-2.png', items: ['Colour Coded Kettlebells', 'Medicine Balls', 'Resistance Bands', 'TRX', 'Foam Rollers'] },
]

export default function Equipment() {
  return (
    <section id="training" className="py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-[60px] bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E63030]">Training Zones</span>
        </div>
        <h2 className="font-black text-5xl sm:text-7xl leading-none tracking-tight uppercase mb-16">
          THREE ZONES.<br /><span className="text-[#E63030]">ONE MISSION.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {ZONES.map((zone) => (
            <div key={zone.title} className="rounded-2xl overflow-hidden border border-white/5 hover:border-[#E63030]/50 transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <img src={zone.img} alt={zone.title} className="size-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl">{zone.icon}</span>
                </div>
              </div>
              <div className="bg-[#0f0f0f] p-6">
                <h3 className="text-xl font-black uppercase mb-4 text-white">{zone.title}</h3>
                <ul className="space-y-2">
                  {zone.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-white/50 text-sm">
                      <span className="size-1.5 rounded-full bg-[#E63030] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
