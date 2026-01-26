'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, MessageCircle, BookOpen, Mail } from 'lucide-react'
import Image from 'next/image'

// Custom X icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const navLinks = [
  { name: 'Vision', href: '#vision' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Technology', href: '#technology' },
  { name: 'Company', href: '#company' },
]

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/aoraki-labs', external: true },
  { name: 'X', icon: XIcon, href: 'https://x.com/zk_pool', external: true },
  { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/PUkc9BhfcT', external: true },
  { name: 'Paragraph', icon: BookOpen, href: 'https://paragraph.com/@aoraki-labs', external: true },
  { name: 'Contact', icon: Mail, href: 'mailto:hello@aoraki-labs.io', external: false },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleMailClick = (email: string) => {
    navigator.clipboard.writeText(email.replace('mailto:', ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-36 items-center justify-between">
          {/* Logo - Left */}
          <div className="w-[432px]">
            <a href="/" className="flex items-center">
              <div className="relative h-[115px] w-[432px]">
                <Image
                  src="/logos/fidcore-landscape.png"
                  alt="FidCore"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links - Right */}
          <div className="w-[432px] hidden md:flex md:items-center md:justify-end md:space-x-4">
            {socialLinks.map((social) => (
              <div key={social.name} className="relative">
                <a
                  href={social.href}
                  {...(social.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  onClick={social.href.startsWith('mailto:') ? () => handleMailClick(social.href) : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-cyan-glow"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
                {social.href.startsWith('mailto:') && copied && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white">
                    已复制邮箱
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm font-medium text-gray-400 transition-colors hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <div key={social.name} className="relative">
                  <a
                    href={social.href}
                    {...(social.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    onClick={social.href.startsWith('mailto:') ? () => handleMailClick(social.href) : undefined}
                    className="text-gray-400 hover:text-cyan-glow"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                  {social.href.startsWith('mailto:') && copied && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white">
                      已复制邮箱
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
