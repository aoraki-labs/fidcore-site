'use client'

import { motion } from 'framer-motion'
import { Cpu, Award, Handshake, Server } from 'lucide-react'
import { cn } from '@/lib/utils'

const advantages = [
  {
    icon: Cpu,
    title: 'High Performance GPU Capacity',
    description: 'Thousands of GPU machines with RTX 5090/4090, delivering high performance and cost-effective computing power.',
    color: 'cyan',
  },
  {
    icon: Award,
    title: 'ZPrize Award-Winning Team',
    description: 'ZK-optimized computing capabilities from a team recognized with ZPrize awards for cryptographic acceleration.',
    color: 'electric',
  },
  {
    icon: Handshake,
    title: 'ASIC Customization Capability',
    description: 'Custom ASIC computing power through strategic partnership with advanced ASIC vendors for specialized workloads.',
    color: 'purple',
  },
  {
    icon: Server,
    title: 'Proven Operations Experience',
    description: 'Professional and extensive experience in operating large-scale computing clusters at production level.',
    color: 'green',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function AdvantageCard({
  advantage,
  index,
}: {
  advantage: (typeof advantages)[0]
  index: number
}) {
  const Icon = advantage.icon
  const colorClasses = {
    cyan: {
      border: 'border-cyan-glow/40',
      bg: 'bg-cyan-glow/10',
      text: 'text-cyan-glow',
      glow: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
    },
    electric: {
      border: 'border-electric-blue/40',
      bg: 'bg-electric-blue/10',
      text: 'text-electric-blue',
      glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    },
    purple: {
      border: 'border-purple-500/40',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    },
    green: {
      border: 'border-green-500/40',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
    },
  }

  const colors = colorClasses[advantage.color as keyof typeof colorClasses]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        'relative rounded-xl p-6 lg:p-8',
        'border bg-background-card/60 backdrop-blur-xl',
        'transition-all duration-300 hover:scale-[1.02]',
        colors.border,
        colors.glow
      )}
    >
      <div className="flex flex-col">
        {/* Icon */}
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
            colors.bg
          )}
        >
          <Icon className={cn('h-6 w-6', colors.text)} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {advantage.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="technology" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 -translate-x-1/2 rounded-full bg-cyan-glow/5 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-electric-blue/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-glow">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Advantages
          </h2>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={advantage.title} advantage={advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
