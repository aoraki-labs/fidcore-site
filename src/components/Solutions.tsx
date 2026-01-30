'use client'

import { motion } from 'framer-motion'
import { Server, Cloud } from 'lucide-react'
import { cn } from '@/lib/utils'

const solutions = [
  {
    tag: 'For Protocols',
    title: 'Genesis Compute Provider',
    description:
      'High performance and cost effective computing capacity for ZK and FHE networks.',
    icon: Server,
    specs: ['Hybrid GPU & ASIC Acceleration', 'Elastic Scale'],
    gradient: 'from-cyan-glow/20 to-electric-blue/20',
    borderColor: 'border-cyan-glow/30',
    iconBg: 'bg-cyan-glow/10',
    iconColor: 'text-cyan-glow',
    comingSoon: false,
  },
  {
    tag: 'For Developers',
    title: 'Verifiable Computing Cloud Platform',
    description:
      'A unified acceleration API. Submit requests easily and get proofs fast.',
    icon: Cloud,
    specs: ['Zero-DevOps', 'Smart Orchestration'],
    gradient: 'from-electric-blue/20 to-purple-500/20',
    borderColor: 'border-electric-blue/30',
    iconBg: 'bg-electric-blue/10',
    iconColor: 'text-electric-blue',
    comingSoon: true,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof solutions)[0]
  index: number
}) {
  const Icon = solution.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative rounded-2xl p-8',
        'border border-border-subtle',
        'bg-background-card/60 backdrop-blur-xl',
        'transition-all duration-300',
        'hover:border-opacity-50',
        solution.borderColor
      )}
    >
      {/* Gradient Background */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300',
          'bg-gradient-to-br',
          solution.gradient,
          'group-hover:opacity-100'
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Tag */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full border border-border-subtle bg-background/50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gray-400">
            {solution.tag}
          </span>
          {solution.comingSoon && (
            <span className="inline-flex items-center rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 font-mono text-xs uppercase tracking-wider text-yellow-400">
              Coming Soon
            </span>
          )}
        </div>

        {/* Icon */}
        <div
          className={cn(
            'mt-6 inline-flex items-center justify-center rounded-xl p-3',
            solution.iconBg
          )}
        >
          <Icon className={cn('h-6 w-6', solution.iconColor)} />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-base leading-7 text-gray-400">
          {solution.description}
        </p>

        {/* Specs */}
        <div className="mt-6 space-y-2">
          {solution.specs.map((spec, specIndex) => (
            <div
              key={specIndex}
              className="flex items-center space-x-3 font-mono text-sm"
            >
              <div className={cn('h-1 w-1 rounded-full', solution.iconColor)} />
              <span className="uppercase tracking-wider text-gray-300">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-12 sm:py-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-glow">
            Infrastructure
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Solutions
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
