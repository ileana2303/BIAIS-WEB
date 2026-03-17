import Container from "./layout/container"

const steps = ["Discovery", "Strategy", "Design", "Engineering", "Launch"]

export default function Process() {
  return (
    <section className="py-28">
      <Container>
        <h2 className="mb-16 text-center text-4xl font-bold">Our Process</h2>

        <div className="grid gap-8 text-center md:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step}>
              <div className="mb-4 text-4xl font-bold">{i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
