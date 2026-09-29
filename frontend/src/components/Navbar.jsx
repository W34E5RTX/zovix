import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ light = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`zovix-navbar sticky top-0 z-50 transition-all duration-300 ${light ? 'is-light' : ''} ${scrolled ? 'is-scrolled bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="section-shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-400 text-sm font-black text-white">Z</div>
          <span className="text-2xl font-black tracking-tight text-white">ZOVIX</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {['Home', 'Services', 'Solutions', 'Work', 'About', 'Contact'].map((label) => (
            <a key={label} href={`#${label.toLowerCase() === 'home' ? 'top' : label.toLowerCase()}`} className="transition hover:text-violet-300">{label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/20">Start a Project</button>
        </div>

        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-5 py-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            {['Home', 'Services', 'Solutions', 'Work', 'About', 'Contact'].map((label) => (
              <a key={label} href={`#${label.toLowerCase() === 'home' ? 'top' : label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <button className="mt-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2.5 font-semibold text-white">Start a Project</button>
          </div>
        </div>
      )}
    </header>
  )
}
