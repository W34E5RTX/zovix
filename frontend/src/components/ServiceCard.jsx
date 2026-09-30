import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ title, description, features, icon }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 via-indigo-500/20 to-sky-400/20 text-2xl shadow-inner shadow-violet-500/10">{icon}</div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-base text-slate-300">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-300">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {feature}
          </li>
        ))}
      </ul>
      <a href="#contact" className="button-secondary mt-auto w-fit text-slate-300">Learn More <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
    </article>
  )
}
