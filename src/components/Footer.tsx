'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-[#0c0e0d]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Brand */}
          <a href="/" className="inline-block">
            <div className="relative h-[115px] w-[432px]">
              <Image
                src="/logos/fidcore-landscape.png"
                alt="FidCore"
                fill
                className="object-contain"
              />
            </div>
          </a>

          {/* Description */}
          <p className="max-w-md text-center text-sm leading-6 text-gray-400">
            The premier infrastructure for verifiable computing.
          </p>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            FidCore &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
