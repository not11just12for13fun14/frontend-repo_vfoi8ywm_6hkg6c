import Navbar from '../components/Navbar'
import SectionShell from './SectionShell'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 text-slate-800">
      <Navbar />
      <SectionShell title="Contact">
        <form className="max-w-xl grid gap-3">
          <input className="rounded-xl bg-white/70 px-4 py-3 ring-1 ring-slate-900/5 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your name" />
          <input className="rounded-xl bg-white/70 px-4 py-3 ring-1 ring-slate-900/5 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Email address" />
          <textarea rows={5} className="rounded-xl bg-white/70 px-4 py-3 ring-1 ring-slate-900/5 focus:outline-none focus:ring-2 focus:ring-slate-300" placeholder="Message" />
          <button className="justify-self-start px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">
            Send
          </button>
        </form>
      </SectionShell>
    </div>
  )
}
