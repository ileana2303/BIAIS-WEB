import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Process from "@/components/process"
import CTA from "@/components/cta"
import TrustedBy from "@/components/trusted-by"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      {/* <TrustedBy /> */}
      <CTA />
    </main>
  )
}