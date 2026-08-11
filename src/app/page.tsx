import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import TrustLayers from '@/components/TrustLayers'
import TechStack from '@/components/TechStack'
import SocialProof from '@/components/SocialProof'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero — the thesis */}
      <Hero />

      {/* Products — fidrouter + FidCore AgentBox */}
      <Solutions />

      {/* How it works — the two proofs (TEE + ZK) */}
      <TrustLayers />

      {/* Why FidCore — pillars incl. compute foundation */}
      <TechStack />

      {/* Partners — built with / powering */}
      <SocialProof />

      {/* Company */}
      <Team />

      {/* Footer */}
      <Footer />
    </main>
  )
}
