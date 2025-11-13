import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionShell from './SectionShell'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 text-slate-800">
      <Navbar />
      <Hero />
      <SectionShell id="about" title="About">
        <p>
          I design and build immersive, performant XR experiences for the web. My approach is minimalist: soft colors, ample whitespace, and motion that supports content.
        </p>
      </SectionShell>
      <SectionShell id="projects" title="Featured Projects">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <li key={i} className="rounded-2xl p-4 bg-white/70 shadow-sm ring-1 ring-slate-900/5 hover:shadow transition-shadow">
              <div className="h-36 rounded-xl bg-gradient-to-br from-pink-100 to-violet-100 mb-3" />
              <h3 className="font-medium">Project {i}</h3>
              <p className="text-sm text-slate-600">A crisp, interactive demo with smooth animations.</p>
            </li>
          ))}
        </ul>
      </SectionShell>
      <footer className="max-w-6xl mx-auto px-4 py-12 text-sm text-slate-500">
        © {new Date().getFullYear()} XR Developer
      </footer>
    </div>
  )
}
