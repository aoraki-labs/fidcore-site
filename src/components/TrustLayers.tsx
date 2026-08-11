'use client'

import { motion } from 'framer-motion'
import { Cpu, KeyRound, ReceiptText } from 'lucide-react'
import { cn } from '@/lib/utils'

const layers = [
  {
    eyebrow: 'Where it ran',
    title: 'Attested execution',
    description:
      "Hardware remote attestation (Intel TDX / Confidential Space) proves the agent's exact, open-source, no-log code ran inside a sealed enclave — not a tampered or logging build. You check the measurement before you trust it.",
    icon: Cpu,
    accent: 'cyan' as const,
  },
  {
    eyebrow: 'What it may do',
    title: 'Bounded behavior',
    description:
      'With Psy Software-Defined Keys, an out-of-policy transaction is mathematically unable to produce a valid signature. The policy is the identity — no key to steal, no admin to override, no prompt injection that gets past it.',
    icon: KeyRound,
    accent: 'electric' as const,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const accents = {
  cyan: {
    border: 'border-cyan-glow/30',
    bg: 'bg-cyan-glow/10',
    text: 'text-cyan-glow',
    glow: 'hover:shadow-[0_0_40px_rgba(0,240,255,0.12)]',
  },
  electric: {
    border: 'border-electric-blue/30',
    bg: 'bg-electric-blue/10',
    text: 'text-electric-blue',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]',
  },
}

export default function TrustLayers() {
  return (
    <section id="trust" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
        <div className="absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-glow">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Two proofs behind every agent
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Trust isn&apos;t a promise here — it&apos;s two independent guarantees,
            each one you can check yourself.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {layers.map((layer, index) => {
            const Icon = layer.icon
            const a = accents[layer.accent]
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={cn(
                  'rounded-2xl border bg-background-card/60 p-8 backdrop-blur-xl transition-all duration-300',
                  a.border,
                  a.glow
                )}
              >
                <div className={cn('inline-flex items-center justify-center rounded-xl p-3', a.bg)}>
                  <Icon className={cn('h-6 w-6', a.text)} />
                </div>
                <div className={cn('mt-5 font-mono text-xs uppercase tracking-[0.18em]', a.text)}>
                  {layer.eyebrow}
                </div>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  {layer.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-400">
                  {layer.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Receipts caption strip */}
        <motion.div
          {...fadeInUp}
          className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-3 rounded-xl border border-border-subtle bg-background/40 px-5 py-4 text-center text-sm text-gray-400"
        >
          <ReceiptText className="h-4 w-4 flex-none text-cyan-glow" />
          <span>
            Every action emits a signed, content-free{' '}
            <span className="text-white">receipt</span> anyone can re-verify against a
            neutral registry.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
