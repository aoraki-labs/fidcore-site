'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Boundless', logo: '/logos/boundless.jpeg' },
  { name: 'SP1', logo: '/logos/sp1.png' },
  { name: 'Brevis', logo: '/logos/brevis.jpeg' },
  { name: 'Taiko', logo: '/logos/taiko.png' },
  { name: 'PSY', logo: '/logos/psy.jpeg' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function SocialProof() {
  return (
    <section className="relative py-16 border-y border-border-subtle bg-background-secondary/50">
      {/* Label */}
      <motion.div {...fadeInUp} className="text-center mb-12">
        <span className="text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">
          Trusted by Industry Leaders
        </span>
      </motion.div>

      {/* Static Logo Grid */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-nowrap items-center justify-center gap-8 lg:gap-12 overflow-x-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative h-16 w-36 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-400">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
