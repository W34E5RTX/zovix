import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

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
          <a href="#contact" className="button-primary">Start a Project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>

        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 lg:hidden"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-200 transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-800 bg-slate-950/95 px-5 py-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            {['Home', 'Services', 'Solutions', 'Work', 'About', 'Contact'].map((label) => (
              <a key={label} href={`#${label.toLowerCase() === 'home' ? 'top' : label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href="#contact" className="button-primary mt-2">Start a Project <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
          </div>
        </div>
      )}
    </header>
  )
}
