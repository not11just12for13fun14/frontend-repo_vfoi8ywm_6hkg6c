import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-200/60 rounded-full blur-3xl" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-blue-200/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-violet-200/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold text-slate-800 tracking-tight"
          >
            XR Developer
            <span className="block text-slate-600 text-xl md:text-2xl mt-3 font-normal">
              Building immersive web experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-slate-600 max-w-prose"
          >
            Minimal, elegant and fast. I craft interactive 3D interfaces with a focus on performance and delightful motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">
              View Projects
            </a>
            <a href="/contact" className="px-5 py-2.5 rounded-full bg-white text-slate-800 text-sm shadow-sm hover:shadow transition-all">
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square rounded-3xl bg-gradient-to-br from-white to-white/60 shadow-xl ring-1 ring-slate-900/5 p-4"
        >
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-tr from-pink-100/40 via-transparent to-blue-100/40" />
          <div className="w-full h-full rounded-2xl overflow-hidden grid place-items-center">
            <div className="relative w-40 h-40 md:w-56 md:h-56">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
              />
              <div className="absolute inset-6 rounded-xl bg-white/80 backdrop-blur shadow-md grid place-items-center">
                <span className="text-slate-700 text-sm">3D Space</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
