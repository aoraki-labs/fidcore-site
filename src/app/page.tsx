import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Solutions from '@/components/Solutions'
import TechStack from '@/components/TechStack'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Solutions / Products */}
      <Solutions />

      {/* Social Proof / Partners */}
      <SocialProof />

      {/* Technology Stack / Advantages */}
      <TechStack />

      {/* Team / Company */}
      <Team />

      {/* Footer */}
      <Footer />
    </main>
  )
}
