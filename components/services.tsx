import Container from "./layout/container"

const services = [
  { title: "Backend Engineering", desc: "Scalable infrastructure and APIs." },
  { title: "Frontend Development", desc: "Modern interfaces with React." },
  { title: "Mobile Applications", desc: "Cross-platform mobile apps." },
  { title: "Artificial Intelligence", desc: "AI powered products." },
  { title: "Product Design", desc: "User-focused digital experiences." },
]

export default function Services() {
  return (
    <section id="services" className="py-28">
      <Container>
        <h2 className="mb-16 text-center text-4xl md:text-6xl font-semibold">Services</h2>

        <div className="grid gap-10 md:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              data-cursor-theme="dark"
              className="flex aspect-square flex-col items-center justify-start rounded-2xl border border-black bg-black p-8 text-center text-[#FFFAF0] transition duration-300 hover:-translate-y-2 hover:border-[#FFFAF0] hover:shadow-2xl"
            >
              <h3 className="mb-4 text-4xl font-semibold">{service.title}</h3>
              <p className="text-gray-200">{service.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
