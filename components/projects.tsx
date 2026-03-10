const projects = [
  { title: "AI Analytics Platform", desc: "Machine learning dashboards." },
  { title: "Global Commerce Platform", desc: "Scalable e-commerce system." },
  { title: "Fintech Mobile App", desc: "Secure mobile financial services." }
]

export default function Projects() {
  return (
    <section className="bg-gray-50 py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="p-8 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}