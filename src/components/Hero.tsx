'use client'

import { motion } from 'framer-motion'

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-glow/5 via-transparent to-transparent" />

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-glow/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-electric-blue/10 blur-3xl"
      />

      {/* Floating Chip Architecture Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal Lines */}
        {[200, 300, 400].map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={y}
            x2="1000"
            y2={y}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: i * 0.3 }}
          />
        ))}

        {/* Vertical Lines */}
        {[300, 500, 700].map((x, i) => (
          <motion.line
            key={`v-${i}`}
            x1={x}
            y1="100"
            x2={x}
            y2="500"
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: i * 0.3 + 0.5 }}
          />
        ))}

        {/* Connection Nodes */}
        {[
          { cx: 300, cy: 200 },
          { cx: 500, cy: 300 },
          { cx: 700, cy: 200 },
          { cx: 300, cy: 400 },
          { cx: 700, cy: 400 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="#00F0FF"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: [0.5, 1, 0.5] }}
            transition={{
              scale: { duration: 0.5, delay: 1 + i * 0.1 },
              opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 },
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="vision" className="relative overflow-hidden pt-24">
      <GridBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl whitespace-nowrap"
          >
            Scaling Trust.{' '}
            <span className="bg-gradient-to-r from-cyan-glow to-electric-blue bg-clip-text text-transparent">
              Securing Privacy.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-400 sm:text-xl"
          >
            <p>
              The premier infrastructure for{' '}
              <span className="font-semibold text-white">
                Verifiable Confidential Computing (VCC)
              </span>.
            </p>
            <p className="mt-2">
              Powering ZK protocols and Private AI agents with specialized silicon.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
