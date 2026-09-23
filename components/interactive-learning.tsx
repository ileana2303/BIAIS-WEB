import {
  BookOpen,
  Check,
  ChevronRight,
  CirclePlay,
  MousePointer2,
  Route,
  Sparkles,
} from "lucide-react"
import Container from "./layout/container"

const technologies = [
  "Moodle LMS 4.5",
  "H5P",
  "HTML5",
  "JavaScript",
  "Open Educational Resources",
]

const lessons = [
  { label: "Introduction", complete: true },
  { label: "Core concepts", complete: true },
  { label: "Interactive lesson", active: true },
  { label: "Knowledge check" },
]

export default function InteractiveLearning() {
  return (
    <section
      id="interactive-learning"
      className="pb-24 pt-10 sm:pb-28 sm:pt-12 lg:pb-32"
    >
      <Container>
        <h2 className="mb-12 flex items-center justify-center gap-3 text-center text-sm font-bold tracking-wide text-black">
          <span className="h-2 w-2 rounded-full bg-black" />
          INTERACTIVE LEARNING
          <span className="h-2 w-2 rounded-full bg-black" />
        </h2>
      </Container>

      <div
        className="mx-4 overflow-hidden rounded-[2rem] bg-black py-14 text-[#FFFAF0] sm:mx-6 sm:rounded-[3rem] sm:py-16 md:mx-10 lg:py-20 xl:mx-16 2xl:mx-auto 2xl:max-w-[1792px]"
        data-cursor-theme="dark"
      >
        <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FFFAF0]/60">
              <span className="h-2 w-2 rounded-full bg-[#b6f06c]" />
              Digital learning experiences
            </div>

            <h2 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl xl:text-7xl">
              Interactive
              <span className="block text-[#b6f06c]">Learning</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              <p>
                We design and develop interactive digital learning experiences
                using Moodle LMS and the H5P multimedia framework.
              </p>
              <p>
                Our solutions combine structured educational content with
                interactive videos, presentations, quizzes, knowledge checks,
                branching scenarios and reusable learning activities to create
                engaging, accessible and responsive learning experiences.
              </p>
              <p>
                Built on Moodle 4.5 and open-source H5P technologies, our
                educational solutions can be integrated directly into LMS
                courses, managed through reusable content libraries and adapted
                to different learning requirements.
              </p>
            </div>

            <div className="mt-9 border-t border-white/15 pt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Technology
              </p>
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#FFFAF0] bg-[#FFFAF0] px-4 py-2 text-sm text-black"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-3xl lg:mx-0">
            <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-[#b6f06c]/15 blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#151515] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.5)] sm:p-3">
              <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#f5f2ea] text-black">
                <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff685f]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd45]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#5ac466]" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:px-4">
                    <Sparkles className="h-3 w-3 text-[#b6f06c]" />
                    Learning studio
                  </div>
                </div>

                <div className="grid min-h-[470px] md:grid-cols-[11rem_1fr]">
                  <aside className="hidden border-r border-black/10 bg-[#ebe7de] p-4 md:block">
                    <div className="mb-6 flex items-center gap-2 text-sm font-bold">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                        <BookOpen className="h-4 w-4" />
                      </span>
                      Course 01
                    </div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                      Your progress
                    </p>
                    <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-black/10">
                      <div className="h-full w-[62%] rounded-full bg-black" />
                    </div>
                    <div className="space-y-1.5">
                      {lessons.map((lesson, index) => (
                        <div
                          key={lesson.label}
                          className={`flex items-center gap-2 rounded-xl px-2.5 py-2.5 text-xs ${
                            lesson.active
                              ? "bg-black font-semibold text-white"
                              : "text-black/55"
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] ${
                              lesson.complete
                                ? "bg-[#b6f06c] text-black"
                                : lesson.active
                                  ? "bg-white/15 text-white"
                                  : "border border-black/15"
                            }`}
                          >
                            {lesson.complete ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              index + 1
                            )}
                          </span>
                          {lesson.label}
                        </div>
                      ))}
                    </div>
                  </aside>

                  <div className="p-4 sm:p-6 lg:p-7">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                          Module 03 · Interactive lesson
                        </p>
                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                          Choose your learning path
                        </h3>
                      </div>
                      <span className="hidden rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/50 sm:block">
                        12 min
                      </span>
                    </div>

                    <div className="relative mb-4 overflow-hidden rounded-2xl bg-[#232323] p-5 text-white sm:p-6">
                      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#b6f06c]/20 blur-3xl" />
                      <div className="relative flex min-h-40 flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60">
                            Interactive video
                          </span>
                          <CirclePlay className="h-7 w-7 text-[#b6f06c]" />
                        </div>
                        <div>
                          <div className="mb-3 h-1 overflow-hidden rounded-full bg-white/15">
                            <div className="h-full w-2/3 rounded-full bg-[#b6f06c]" />
                          </div>
                          <div className="flex justify-between text-[10px] text-white/45">
                            <span>04:18</span>
                            <span>06:42</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-black/30 hover:shadow-lg"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f7d2]">
                          <MousePointer2 className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10px] uppercase tracking-[0.14em] text-black/40">
                            Activity
                          </span>
                          <span className="text-sm font-semibold">Knowledge check</span>
                        </span>
                        <ChevronRight className="h-4 w-4 text-black/30 transition group-hover:translate-x-0.5 group-hover:text-black" />
                      </button>

                      <button
                        type="button"
                        className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-black/30 hover:shadow-lg"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                          <Route className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10px] uppercase tracking-[0.14em] text-black/40">
                            Scenario
                          </span>
                          <span className="text-sm font-semibold">Explore a path</span>
                        </span>
                        <ChevronRight className="h-4 w-4 text-black/30 transition group-hover:translate-x-0.5 group-hover:text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#202020]/95 px-4 py-3 shadow-2xl backdrop-blur md:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b6f06c] text-black">
                <Check className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-white/40">
                  Accessible by design
                </span>
                <span className="text-sm font-medium text-white">Responsive learning</span>
              </span>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </section>
  )
}
