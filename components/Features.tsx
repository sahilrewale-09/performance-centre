'use client'

const FEATURES = [
  { icon: '🏋️', title: 'Strength Training', desc: 'Hoist machines, bumper plates, squat racks — professional grade equipment for serious lifters.' },
  { icon: '🥊', title: 'MMA Training', desc: 'Dedicated MMA cage, boxing bags, battle ropes. The only gym in Dadar with a full combat sports facility.' },
  { icon: '👥', title: 'Batch System', desc: 'Unique structured batch training — small groups, personalised attention, proven results for beginners and advanced.' },
  { icon: '⚡', title: 'Functional Zone', desc: 'Kettlebells, medicine balls, battle ropes, TRX — complete functional fitness setup for athletic performance.' },
]

export default function Features() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-[60px] bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E63030]">Why Performance Centre</span>
        </div>
        <h2 className="font-black text-5xl sm:text-7xl leading-none tracking-tight uppercase mb-16">
          BEYOND A GYM.<br /><span className="text-[#E63030]">A TRAINING SYSTEM.</span>
        </h2>

        {/* Split layout with photo */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden min-h-[320px]">
            <img src="/images/trainer-1.png" alt="Training" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[320px]">
            <img src="/images/mma.png" alt="MMA" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#E63030]">MMA Training</span>
              <p className="text-white font-bold text-lg leading-tight mt-1">Mumbai's Only Gym<br />With A Full MMA Cage</p>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-white/5 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="group bg-[#080808] p-8 hover:bg-[#0f0f0f] transition-colors">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-3 text-white">{f.title}</h3>
              <p className="text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
