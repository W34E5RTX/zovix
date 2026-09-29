const stats = [
  { label: 'Total Leads', value: '184' },
  { label: 'New Leads', value: '26' },
  { label: 'Projects', value: '42' },
  { label: 'Clients', value: '17' },
  { label: 'Testimonials', value: '12' },
  { label: 'Unread Messages', value: '9' }
]

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-200 bg-white/90 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 text-sm font-black text-white">Z</div>
          <div>
            <div className="text-lg font-black">ZOVIX</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Admin</div>
          </div>
        </div>

        <nav className="mt-10 space-y-2 text-sm font-medium text-slate-600">
          {['Dashboard', 'Leads', 'Projects', 'Services', 'Clients', 'Testimonials', 'Messages', 'Site Settings', 'Admins', 'Activity Logs', 'Logout'].map((item) => (
            <div key={item} className={`rounded-2xl px-4 py-3 ${item === 'Dashboard' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'hover:bg-slate-50'}`}>{item}</div>
          ))}
        </nav>
      </aside>

      <main className="ml-72 p-8">
        <header className="flex items-center justify-between rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Overview</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.06em] text-slate-900">Dashboard</h1>
          </div>
          <button className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white">+ New Project</button>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">{stat.label}</div>
              <div className="mt-4 text-3xl font-black tracking-[-0.06em] text-slate-900">{stat.value}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6 text-lg font-bold text-slate-900">Leads by month</div>
            <div className="flex h-52 items-end gap-3">
              {[40, 55, 60, 80, 70, 110, 96].map((value, idx) => (
                <div key={idx} className="flex-1 rounded-t-2xl bg-gradient-to-t from-indigo-500 to-sky-300" style={{ height: `${value}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6 text-lg font-bold text-slate-900">Lead Status</div>
            <div className="space-y-4 text-sm text-slate-600">
              {['New', 'Contacted', 'Qualified', 'Proposal', 'Won', 'Lost'].map((status, idx) => (
                <div key={status} className="flex items-center justify-between">
                  <span>{status}</span>
                  <span className="font-semibold text-slate-900">{[26, 18, 20, 14, 11, 8][idx]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
