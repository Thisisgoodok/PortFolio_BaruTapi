import { motion } from 'motion/react'
import Section from './Section'
import PortfolioIcon from './PortfolioIcon'
import { useMotionPreset } from './motion'

function Services({ services = [] }) {
  const { fadeUp, stagger, inView, hoverY, initial } = useMotionPreset()

  return (
    <Section
      id="services"
      eyebrow="Layanan"
      title="Apa yang bisa saya kerjakan"
      subtitle="Paket jelas, komunikasi enak, hasil rapi."
    >
      <motion.div
        variants={stagger}
        initial={initial}
        whileInView="show"
        viewport={inView}
        className="grid gap-6 md:grid-cols-3"
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            whileHover={hoverY(-4)}
            className="card border border-teal-500/20 bg-base-100 shadow-sm transition-all hover:border-teal-500/40 dark:border-teal-500/10 dark:hover:border-teal-500/30"
          >
            <div className="card-body gap-3">
              {(service.icon || service.iconSrc) && (
                <span className="grid size-11 place-items-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <PortfolioIcon
                    name={service.icon}
                    src={service.iconSrc}
                    alt=""
                    className="size-5"
                  />
                </span>
              )}
              <h3 className="card-title text-lg">{service.title}</h3>
              <p className="text-sm leading-relaxed text-base-content/70">{service.description}</p>
              {service.price && (
                <p className="mt-auto pt-2 text-sm font-semibold text-teal-600 dark:text-teal-400">
                  Mulai dari {service.price}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}

export default Services