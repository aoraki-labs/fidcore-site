'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Trust primitives we build on
const builtWith = [
  { name: 'Psy', role: 'Zero-knowledge', logo: '/logos/psy.jpeg' },
  { name: 'Intchains', role: 'Secure hardware / ASIC', logo: null },
]

// Verifiable-compute networks we power
const powering = [
  { name: 'Boundless', logo: '/logos/boundless.jpeg' },
  { name: 'SP1', logo: '/logos/sp1.png' },
  { name: 'Brevis', logo: '/logos/brevis.jpeg' },
  { name: 'Taiko', logo: '/logos/taiko.png' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function SocialProof() {
  return (
    <section
      id="partners"
      className="relative py-16 border-y border-border-subtle bg-background-secondary/50"
    >
      <motion.div {...fadeInUp} className="text-center mb-12">
        <span className="text-sm uppercase tracking-[0.2em] text-gray-300 font-medium">
          Built with, and powering
        </span>
      </motion.div>

      <div className="mx-auto max-w-5xl px-6 space-y-12">
        {/* Built with */}
        <div className="flex flex-col items-center">
          <span className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-cyan-glow">
            Built with
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {builtWith.map((p, index) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 rounded-xl border border-border-subtle bg-background/40 px-5 py-3"
              >
                {p.logo ? (
                  <div className="relative h-9 w-24 flex-shrink-0 opacity-90">
                    <Image src={p.logo} alt={p.name} fill className="object-contain" />
                  </div>
                ) : (
                  <span className="font-display text-lg font-bold text-white">
                    {p.name}
                  </span>
                )}
                <span className="border-l border-border-subtle pl-3 font-mono text-xs uppercase tracking-wider text-gray-400">
                  {p.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Powering */}
        <div className="flex flex-col items-center">
          <span className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-gray-400">
            Powering verifiable compute
          </span>
          <div className="flex flex-nowrap items-center justify-center gap-8 lg:gap-12 overflow-x-auto">
            {powering.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative h-14 w-32 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
                <span className="mt-3 text-sm font-medium text-gray-400">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
