const steps = ["Discovery", "Strategy", "Design", "Engineering", "Launch"]

export default function Process() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-16">
        Our Process
      </h2>

      <div className="grid md:grid-cols-5 gap-8 text-center">
        {steps.map((step, i) => (
          <div key={step}>
            <div className="text-4xl font-bold mb-4">{i + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>

    </section>
  )
}