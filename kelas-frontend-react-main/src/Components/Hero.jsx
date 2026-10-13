import { motion } from "motion/react";
import Container from "./Container";
import ImageFrame from "./ImageFrame";
import SmoothLink from "./SmoothLink";
import SocialLinks from "./SocialLinks";
import { useMotionPreset } from "./motion";

/**
 * Hero — tangkapan 3 detik pertama.
 * photo: { src?, label? }  → kosong = frame placeholder
 * primaryCta / secondaryCta: { label, href }
 * socials: SocialLinks items
 */
function Hero({
  name,
  title,
  value,
  photo = {},
  primaryCta,
  secondaryCta,
  socials = [],
}) {
  const { fadeUp, stagger, hoverScale } = useMotionPreset();

  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-teal-100/80 to-transparent dark:from-teal-950/60 dark:to-transparent" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={stagger}
          initial={false}
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400"
          >
            Portfolio
          </motion.p>
          {/* Satu H1 untuk SEO */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            {name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-2 text-lg font-medium text-base-content/80 md:text-xl"
          >
            {title}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base text-base-content/70 md:text-lg"
          >
            {value}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <SmoothLink
                href={primaryCta.href}
                whileHover={hoverScale(1.04)}
                className="btn rounded-full px-6 bg-teal-600 border-teal-600 text-white hover:bg-teal-700 hover:border-teal-700 dark:bg-teal-400 dark:border-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 font-medium shadow-md shadow-teal-500/20"
              >
                {primaryCta.label}
              </SmoothLink>
            )}
            {secondaryCta && (
              <SmoothLink
                href={secondaryCta.href}
                whileHover={hoverScale(1.03)}
                className="btn rounded-full px-6 border-teal-500/30 text-teal-700 hover:bg-teal-500/10 hover:border-teal-500/50 dark:border-teal-400/30 dark:text-teal-300 dark:hover:bg-teal-400/10"
              >
                {secondaryCta.label}
              </SmoothLink>
            )}
          </motion.div>

          {socials.length > 0 && (
            <motion.div variants={fadeUp} className="mt-6">
              <SocialLinks items={socials} />
            </motion.div>
          )}
        </motion.div>

        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
          <ImageFrame
            src={photo.src}
            alt={photo.alt ?? name}
            label={photo.label ?? "Foto profil / ilustrasi (1:1)"}
            ratio="portrait"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;