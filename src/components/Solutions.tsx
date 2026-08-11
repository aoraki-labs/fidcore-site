'use client'

import { motion } from 'framer-motion'
import { Radio, Cpu, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Status = { label: string; tone: 'live' | 'dev' }

const products = [
  {
    tag: 'The inference layer',
    title: 'fidrouter',
    description:
      'A verifiable, no-log LLM relay. Prove every model call ran inside the exact published, no-log code — before you send a prompt. Keep your OpenAI client; just point base_url.',
    icon: Radio,
    specs: ['TEE remote attestation', 'Operator-blind BYOK', 'Signed, content-free receipts'],
    status: { label: 'Live', tone: 'live' } as Status,
    cta: { label: 'Verify a live relay', href: 'https://app.fidcore.xyz' },
    gradient: 'from-cyan-glow/20 to-electric-blue/20',
    borderColor: 'border-cyan-glow/30',
    iconBg: 'bg-cyan-glow/10',
    iconColor: 'text-cyan-glow',
  },
  {
    tag: 'The action layer',
    title: 'FidCore AgentBox',
    description:
      'A general platform for running autonomous agents you can trust. Our software — agent runtime, secure-execution engine, and a non-bypassable policy harness — governs what the agent may do; hardware and zero-knowledge plug in as vendor layers, not lock-in.',
    icon: Cpu,
    specs: [
      'Our secure-execution engine + policy harness',
      'On-device agent runtime',
      'Pluggable ZK backend — Psy today',
      'Pluggable secure hardware / ASIC — Intchains',
    ],
    status: { label: 'In development', tone: 'dev' } as Status,
    cta: { label: 'Talk to us', href: 'mailto:hello@aoraki-labs.io?subject=FidCore%20AgentBox' },
    gradient: 'from-electric-blue/20 to-purple-500/20',
    borderColor: 'border-electric-blue/30',
    iconBg: 'bg-electric-blue/10',
    iconColor: 'text-electric-blue',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function StatusPill({ status }: { status: Status }) {
  const tone =
    status.tone === 'live'
      ? 'bg-green-500/10 border-green-500/30 text-green-400'
      : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider',
        tone
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          status.tone === 'live' ? 'bg-green-400' : 'bg-yellow-400'
        )}
      />
      {status.label}
    </span>
  )
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  const Icon = product.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative flex flex-col rounded-2xl p-8',
        'border border-border-subtle',
        'bg-background-card/60 backdrop-blur-xl',
        'transition-all duration-300 hover:border-opacity-50',
        product.borderColor
      )}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300',
          'bg-gradient-to-br',
          product.gradient,
          'group-hover:opacity-100'
        )}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Tag + status */}
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full border border-border-subtle bg-background/50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-gray-400">
            {product.tag}
          </span>
          <StatusPill status={product.status} />
        </div>

        {/* Icon */}
        <div className={cn('mt-6 inline-flex w-fit items-center justify-center rounded-xl p-3', product.iconBg)}>
          <Icon className={cn('h-6 w-6', product.iconColor)} />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-base leading-7 text-gray-400">
          {product.description}
        </p>

        {/* Specs */}
        <div className="mt-6 space-y-2">
          {product.specs.map((spec, i) => (
            <div key={i} className="flex items-center space-x-3 font-mono text-sm">
              <div className={cn('h-1 w-1 rounded-full', product.iconColor)} />
              <span className="uppercase tracking-wider text-gray-300">{spec}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 pt-2">
          <a
            href={product.cta.href}
            {...(product.cta.href.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className={cn(
              'inline-flex items-center gap-2 font-semibold transition-colors',
              product.iconColor,
              'hover:opacity-80'
            )}
          >
            {product.cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Solutions() {
  return (
    <section id="products" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-glow">
            Products
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Two layers of verifiable agents
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Verify the reasoning, and verify the action.
          </p>
        </motion.div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
