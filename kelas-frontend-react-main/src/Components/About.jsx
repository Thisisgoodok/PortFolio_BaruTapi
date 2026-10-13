import { Download } from 'lucide-react'
import { motion } from 'motion/react'
import Section from './Section'
import { useMotionPreset } from './motion'

/**
 * About Me.
 * paragraphs: string[]
 * skills: string[]  → chip skill utama (3)
 * personality: string
 * cvHref: link download CV
 */
function About({ paragraphs = [], skills = [], personality, cvHref }) {
  const { fadeUp, stagger, inView, initial } = useMotionPreset()

  return (
    <Section id="about" eyebrow="About Me" title="Gw top 1 voli Internasional." className="bg-base-200/50">
      <motion.div
        variants={stagger}
        initial={initial}
        whileInView="show"
        viewport={inView}
        className="grid gap-10 lg:grid-cols-[1.4fr_1fr]"
      >
        <div className="space-y-4">
          {paragraphs.map((p) => (
            <motion.p key={p.slice(0, 24)} variants={fadeUp} className="leading-relaxed text-base-content/80">
              {p}
            </motion.p>
          ))}
          {personality && (
            <motion.p variants={fadeUp} className="rounded-xl border border-teal-500/20 bg-teal-500/5 px-4 py-3 text-sm font-medium text-teal-700 dark:text-teal-300">
              {personality}
            </motion.p>
          )}
          {cvHref && (
            <motion.div variants={fadeUp}>
              <a
                href={cvHref}
                className="btn mt-2 rounded-full bg-teal-600 border-teal-600 text-white hover:bg-teal-700 hover:border-teal-700 dark:bg-teal-400 dark:border-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 font-medium"
                download
              >
                <Download className="size-4" />
                Download CV
              </a>
            </motion.div>
          )}
        </div>

        <motion.div variants={fadeUp} className="h-fit rounded-2xl border border-teal-500/20 bg-base-100 p-6 shadow-sm transition-all dark:border-teal-500/10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
            Skill utama
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="badge badge-lg border-teal-500/30 bg-teal-500/10 text-teal-700 dark:border-teal-400/30 dark:text-teal-300">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default About