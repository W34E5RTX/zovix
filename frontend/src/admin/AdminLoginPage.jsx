export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50 p-6">
      <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white/80 p-8 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 text-xl font-black text-white">Z</div>
          <h1 className="mt-5 text-3xl font-black text-slate-900">ZOVIX Admin</h1>
        </div>
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="admin@zovix.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-300" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_45px_rgba(91,124,255,0.35)]">Login</button>
        </form>
      </div>
    </div>
  )
}
