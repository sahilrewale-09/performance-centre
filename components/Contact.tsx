'use client'

import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-[60px] bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E63030]">Contact</span>
        </div>
        <h2 className="font-black text-5xl sm:text-7xl leading-none tracking-tight uppercase mb-16">
          VISIT US<br /><span className="text-[#E63030]">TODAY.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: MapPin, label: 'Address', value: '25C, Lakhamsi Napoo Rd, opp. Poddar College, Matunga, Dadar, Mumbai 400019', href: null },
              { icon: Phone, label: 'Phone', value: '074004 65007', href: 'tel:07400465007' },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: "https://wa.me/917400465007?text=Hi, I'm interested in joining Performance Centre India. Can you share batch timing and membership details?" },
              { icon: Clock, label: 'Hours', value: 'Monday – Sunday, 6:00 AM – 10:00 PM', href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-xl border border-white/5 bg-[#0f0f0f] p-6 hover:border-[#E63030]/40 transition-colors group">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#E63030]/10 text-[#E63030] shrink-0 group-hover:bg-[#E63030] group-hover:text-white transition-colors">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} className="text-white font-semibold hover:text-[#E63030] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-white font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/5 min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Performance+Centre+India+Dadar+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
