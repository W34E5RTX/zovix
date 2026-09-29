import Navbar from '../components/Navbar'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import FloatingScene from '../components/FloatingScene'
import ParallaxScrollSection from '../components/ParallaxScrollSection'
import WorksWheelDemo from '../components/ui/works-wheel-demo'
import PricingSectionDemo from '../components/ui/pricing'
import { services, projects, testimonials } from '../data/siteData'

const stats = [
  { value: '180+', label: 'Projects Delivered' },
  { value: '96%', label: 'Happy Clients' },
  { value: '16+', label: 'Technologies' },
  { value: '8+', label: 'Years of Experience' }
]

const reasons = [
  'Modern Technology',
  'Scalable Architecture',
  'Performance First',
  'Security Focused',
  'User-Centered Design',
  'Long-Term Support'
]

const process = ['Discover', 'Plan', 'Design', 'Develop', 'Test', 'Launch', 'Scale']

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-[#050b16] text-slate-100">
      <Navbar light />

      <main>
        <section className="robot-hero">
          <div className="robot-hero__scene"><FloatingScene /></div>
          <div className="robot-hero__watermark" aria-hidden="true">ZOVIX</div>
          <div className="robot-hero__coordinates" aria-hidden="true">37°33' N<br />126°58' E</div>
          <div className="robot-hero__intro">
            <p>Meet the next generation</p>
            <h1>Technology,<br />with a little more heart.</h1>
            <a href="#contact">Build something meaningful <span>↗</span></a>
          </div>
          <div className="robot-hero__caption"><span className="robot-hero__status" /> PROTOTYPE 001 <span>DESIGNED TO CONNECT</span></div>
          <div className="robot-hero__scroll">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="py-8">
          <div className="section-shell">
            <div className="glass rounded-[32px] p-6 md:p-8">
              <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-5">
                {['React', 'Node.js', 'MongoDB', 'Three.js', 'AWS'].map((tech) => (
                  <div key={tech} className="rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400/30 hover:text-white">{tech}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Services</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">Technology built for momentum.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-28">
          <div className="section-shell mb-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Experience</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">Technology that moves with your business.</h2>
            </div>
          </div>
          <ParallaxScrollSection />
        </section>

        <section id="about" className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">About ZOVIX</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">We turn ideas into digital products.</h2>
                <p className="mt-6 max-w-xl text-lg text-slate-300">
                  ZOVIX is a technology company focused on building modern digital products, SaaS platforms, business applications and intelligent automation systems.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="soft-card rounded-[28px] p-6 text-center">
                    <div className="text-4xl font-black tracking-[-0.08em] text-white">{stat.value}</div>
                    <div className="mt-2 text-sm font-medium text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Why ZOVIX</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">Engineering confidence into every release.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {reasons.map((reason, index) => (
                <div key={reason} className="soft-card rounded-[28px] p-6 transition hover:-translate-y-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-sky-500/20 text-lg font-bold text-violet-200">0{index + 1}</div>
                  <h3 className="text-xl font-bold text-white">{reason}</h3>
                  <p className="mt-3 text-slate-300">We build systems with long-term value, not just short-term output.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Process</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">A clear roadmap from idea to scale.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-7">
              {process.map((step, index) => (
                <div key={step} className="rounded-[26px] border border-slate-800 bg-slate-900/70 p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">0{index + 1}</div>
                  <div className="mt-4 text-xl font-bold text-white">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Featured Work</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="rounded-[36px] border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-violet-950/70 p-8 text-white shadow-[0_30px_120px_rgba(76,29,149,0.2)] md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-sm font-medium text-sky-300">From idea to SaaS</p>
                  <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">Build your next scalable product.</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Idea', 'Prototype', 'MVP', 'Launch', 'Scale', 'Growth'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Technology stack</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">The tools that power high-performance digital products.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Three.js', 'TypeScript', 'Tailwind CSS', 'AWS', 'Vercel', 'GitHub'].map((tech) => (
                <div key={tech} className="soft-card rounded-[24px] p-5 text-center text-base font-semibold text-slate-200">{tech}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Testimonials</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">Clients trust the process and the outcome.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="soft-card rounded-[28px] p-6">
                  <div className="mb-4 text-yellow-400">{'★'.repeat(item.rating)}</div>
                  <p className="text-lg leading-8 text-slate-200">“{item.message}”</p>
                  <div className="mt-6 border-t border-slate-700 pt-4">
                    <div className="font-bold text-white">{item.name}</div>
                    <div className="text-sm text-slate-400">{item.role} · {item.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSectionDemo />

        <section id="contact" className="py-24 lg:py-28">
          <div className="section-shell">
            <div className="rounded-[36px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.7)] lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Contact</p>
                  <h2 className="mt-4 text-4xl font-black tracking-[-0.07em] text-white md:text-5xl">Let’s shape your next digital breakthrough.</h2>
                  <p className="mt-5 text-lg text-slate-300">Tell us about your goals and we’ll guide the right solution with clarity and momentum.</p>
                </div>
                <form className="grid gap-5 sm:grid-cols-2">
                  <input className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-violet-400" placeholder="Name" />
                  <input className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-violet-400" placeholder="Email" />
                  <input className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-violet-400" placeholder="Phone" />
                  <input className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-violet-400" placeholder="Company" />
                  <select className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400 sm:col-span-2">
                    <option>Web Development</option>
                    <option>SaaS Development</option>
                    <option>Custom Software</option>
                    <option>AI Automation</option>
                    <option>E-commerce</option>
                    <option>Other</option>
                  </select>
                  <select className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-violet-400 sm:col-span-2">
                    <option>Under ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000 - ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                  <textarea rows="5" className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-violet-400 sm:col-span-2" placeholder="Message" />
                  <button type="submit" className="sm:col-span-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3.5 text-base font-semibold text-white">Send Project Request</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-700 bg-slate-950/90 py-12 text-slate-200">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 text-sm font-black text-white">Z</div>
              <span className="text-2xl font-black tracking-tight text-white">ZOVIX</span>
            </div>
            <p className="mt-4 max-w-xs text-slate-300">Build Beyond Ideas.</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Web Development</li>
              <li>SaaS</li>
              <li>AI Automation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white">Social</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="section-shell mt-8 border-t border-slate-700 pt-6 text-sm text-slate-400">© 2026 ZOVIX. All rights reserved.</div>
      </footer>
    </div>
  )
}
