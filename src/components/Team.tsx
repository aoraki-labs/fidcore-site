'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function DataCenterVisual() {
  return (
    <div className="relative w-full h-80 lg:h-[450px] rounded-2xl overflow-hidden">
      {/* Placeholder Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-secondary to-background">
        {/* Server Rack Grid */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-3 p-8">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative"
              >
                {/* Server Unit */}
                <div className="w-12 h-20 lg:w-16 lg:h-28 rounded-md bg-gray-900 border border-gray-800 flex flex-col items-center justify-between p-1.5 lg:p-2">
                  {/* Status LEDs */}
                  <div className="flex space-x-1">
                    <motion.div
                      animate={{
                        backgroundColor: ['#00F0FF', '#00A8B3', '#00F0FF'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                      className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full"
                    />
                    <motion.div
                      animate={{
                        backgroundColor: ['#22C55E', '#16A34A', '#22C55E'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full"
                    />
                  </div>
                  {/* Vent Lines */}
                  <div className="w-full space-y-0.5 lg:space-y-1">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div
                        key={j}
                        className="w-full h-px bg-gray-700 rounded"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ambient Light Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-cyan-glow/20 via-transparent to-transparent"
          />
        </div>

        {/* Scanline Effect */}
        <motion.div
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Label */}
      <div className="absolute bottom-4 left-4 right-4">
        <span className="font-mono text-xs uppercase tracking-wider text-gray-600">
          Global Infrastructure
        </span>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="company" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div {...fadeInUp}>
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-glow">
              Company
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered by Experts
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              A team of cryptography experts, hardware engineers, and distributed
              systems architects. Building the physical infrastructure for
              verifiable confidential computing with world-class partners.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DataCenterVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
