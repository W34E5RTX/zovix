import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const sections = [
  {
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    title: 'Web',
    subtitle: 'High-conversion digital experiences designed to perform at scale.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    title: 'SaaS',
    subtitle: 'Product systems built to launch fast and grow without friction.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=80',
    title: 'AI',
    subtitle: 'Automation layers that turn repetitive work into strategic leverage.'
  },
  {
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80',
    title: 'Automation',
    subtitle: 'Operational flows that help teams act smarter and move faster.'
  }
]

function ParallaxPanel({ image, title, subtitle, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.3, 1, 0.7])
  const contentY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <motion.section
      ref={ref}
      className="relative h-[55svh] min-h-[320px] max-h-[560px] overflow-hidden border-b border-slate-700/80"
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ zIndex: 1 + index }}
    >
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/60 to-slate-950/45" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex h-full items-end px-6 py-12 md:px-12 lg:px-20"
      >
        <div className="max-w-xl">
          <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm">
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="text-3xl font-black tracking-normal text-white md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-300 md:text-lg">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default function ParallaxScrollSection() {
  return (
    <div className="w-full">
      {sections.map((item, index) => (
        <ParallaxPanel key={item.title} {...item} index={index} />
      ))}
    </div>
  )
}
