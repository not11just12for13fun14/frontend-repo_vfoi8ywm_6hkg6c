import Navbar from '../components/Navbar'
import SectionShell from './SectionShell'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50 text-slate-800">
      <Navbar />
      <SectionShell title="About Me">
        <p>
          I’m an XR developer focused on WebXR, Three.js, and spatial UI. I care about clarity, smoothness, and subtle 3D that highlights content without overwhelming it.
        </p>
      </SectionShell>
    </div>
  )
}
