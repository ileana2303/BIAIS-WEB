import Hero from "@/components/hero"
import AnimatedGrid from "@/components/animated-grid"
import Services from "@/components/services"
import Projects from "@/components/projects"
import InteractiveLearning from "@/components/interactive-learning"
import CTA from "@/components/cta"
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
      <InteractiveLearning />
      <Projects />
      <Services />
      <CTA />
    </main>
  )
}
