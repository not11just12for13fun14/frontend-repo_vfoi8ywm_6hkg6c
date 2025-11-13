import Navbar from '../components/Navbar'
import SectionShell from './SectionShell'

const items = [
  { title: 'AR Product Viewer', desc: 'Place and scale 3D products in your space.' },
  { title: 'VR Gallery', desc: 'A serene gallery with spatial audio and soft lighting.' },
  { title: '3D UI Kit', desc: 'Micro-interactions and animated components for 3D UIs.' },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 text-slate-800">
      <Navbar />
      <SectionShell title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p, i) => (
            <article key={i} className="rounded-2xl p-4 bg-white/70 shadow-sm ring-1 ring-slate-900/5 hover:shadow transition-shadow">
              <div className="h-36 rounded-xl bg-gradient-to-br from-pink-100 to-violet-100 mb-3" />
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  )
}
