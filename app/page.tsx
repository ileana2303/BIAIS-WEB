import Hero from "@/components/hero"
import AnimatedGrid from "@/components/animated-grid"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Process from "@/components/process"
import CTA from "@/components/cta"
import TrustedBy from "@/components/trusted-by"
import TechOrbit from "./tech-orbit/page"

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <AnimatedGrid />
        <div className="relative z-10">
          <Hero />
          <TechOrbit />
        </div>
      </div>
      <Services />
      <Projects />
      <CTA />
    </main>
  )
}
