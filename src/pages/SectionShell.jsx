import { motion } from 'framer-motion'

export default function SectionShell({ id, title, children }) {
  return (
    <section id={id} className="relative">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-6"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="prose prose-slate max-w-none"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
