const services = [
  { title: "Backend Engineering", desc: "Scalable infrastructure and APIs." },
  { title: "Frontend Development", desc: "Modern interfaces with React." },
  { title: "Mobile Applications", desc: "Cross-platform mobile apps." },
  { title: "Artificial Intelligence", desc: "AI powered products." },
  { title: "Product Design", desc: "User-focused digital experiences." }
]

export default function Services() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 text-center">Services</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div key={service.title} className="p-8 border rounded-2xl hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}