'use client'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808] py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xl font-black uppercase tracking-wide">
            PERF<span className="text-[#E63030]">O</span>RMANCE CENTRE
          </p>
          <p className="text-xs text-white/30 mt-1">A Project Battlefit Affiliate · Dadar, Mumbai</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-white/20">© 2025 Performance Centre India. All rights reserved.</p>
          <p className="text-xs text-white/20 mt-1">Website by <span className="text-[#E63030]">Sahil</span> · Web Developer</p>
        </div>
        <div className="flex gap-4">
          <a href="tel:07400465007" className="text-xs font-bold uppercase tracking-wide text-white/40 hover:text-[#E63030] transition-colors">Call</a>
          <a href="#home" className="text-xs font-bold uppercase tracking-wide text-white/40 hover:text-[#E63030] transition-colors">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  )
}
