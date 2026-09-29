export default function ProjectCard({ title, description, category, technologies, featured }) {
  return (
    <article className="group relative overflow-hidden rounded-[30px] border border-slate-800 bg-slate-950/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-violet-500/10 via-sky-500/10 to-indigo-500/10 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_40%)]" />
        <div className="relative flex min-h-[220px] flex-col justify-between rounded-[18px] border border-white/10 bg-slate-900/80 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
            <span>{category}</span>
            {featured && <span className="rounded-full bg-violet-500/15 px-2 py-1 text-violet-200">Featured</span>}
          </div>
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-200">{tech}</span>
        ))}
      </div>
      <button className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">View Project</button>
    </article>
  )
}
