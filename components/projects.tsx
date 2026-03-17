"use client";

import { useState, useRef } from "react";
import Container from "./layout/container";

const projects = [
  {
    title: "AI Document Intelligence",
    description:
      "Automated document processing platform using machine learning pipelines.",
    tech: ["React", "Python", "AWS", "OpenAI"],
    image: "/projects/colai.jpg",
    video: "/projects/colai-preview.mp4",
  },
  {
    title: "Marketplace Platform",
    description:
      "Scalable B2B marketplace with advanced search, payments and analytics.",
    tech: ["Next.js", "Node", "PostgreSQL"],
    image: "/projects/eorder.jpg",
    video: "/projects/eorder-preview.mp4",
  },
  {
    title: "Mobile SaaS Dashboard",
    description:
      "Real-time analytics dashboard powering cross-platform mobile applications.",
    tech: ["React Native", "GraphQL", "AWS"],
    image: "/projects/test.jpg",
    video: "/projects/test2.mp4",
  },
  {
    title: "Mobile SaaS",
    description:
      "Real-time analytics dashboard powering cross-platform mobile applications.",
    tech: ["React Native", "GraphQL", "AWS"],
    image: "/projects/colai.jpg",
    video: "/projects/colai-preview.mp4",
  },
];

const featuredProjects = [
  {
    title: "Enterprise Transformation Program",
    description:
      "A flagship delivery unifying product, automation and AI systems into one scalable platform.",
    tech: ["Next.js", "OpenAI", "Automation", "Cloud"],
    image: "/projects/featured.jpg",
  },
  {
    title: "Connected Commerce Ecosystem",
    description:
      "A major multi-surface platform aligning customer journeys, operational data and AI-assisted workflows across the business.",
    tech: ["React", "Node", "AI Workflows", "Analytics"],
    image: "/projects/featured2.jpg",
  },
];

function ProjectCard({ project, onOpen, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const handleEnter = () => {
    setHovered(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  const handleLeave = () => {
    setHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={cardRef}
      data-cursor-interactive="true"
      data-cursor-theme="dark"
      onMouseEnter={handleEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(project)}
      className={`group relative cursor-pointer overflow-hidden rounded-[28px] border-[1.5px] border-white/10 bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out transform-gpu will-change-transform hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)] ${featured ? "md:col-span-2 xl:col-span-4" : ""
        }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(255,255,255,0.04))] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative w-full ${featured ? "aspect-[4/5] md:aspect-[16/7]" : "aspect-[9/16]"
          }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-[1.08]"
        />

        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] ${hovered ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
              }`}
          />
        ) : null}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%)] opacity-35 transition-opacity duration-200 group-hover:opacity-55" />

        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${featured
            ? "bg-gradient-to-t from-black/28 via-black/10 to-transparent"
            : "bg-gradient-to-t from-black/22 via-black/8 to-transparent"
            }`}
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(220px_220px_at_var(--x)_var(--y),rgba(255,255,255,0.16),transparent_60%)]" />
      </div>

      <div
        className={`absolute bottom-0 w-full text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 ${featured ? "p-6 md:p-10" : "p-6"
          }`}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
            Case Study
          </span>
          <span className="text-xs text-white/45 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white/80">
            View Project
          </span>
        </div>

        <h3 className={`mb-2 font-semibold ${featured ? "text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>

        <p
          className={`mb-4 leading-relaxed opacity-80 ${featured ? "max-w-3xl text-base" : "text-sm"
            }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs backdrop-blur-md transition-colors duration-500 group-hover:border-white/20 group-hover:bg-white/12"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6"
      data-cursor-theme="dark"
    >
      <div className="relative max-w-5xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          data-cursor-theme="dark"
          className="absolute top-6 right-6 text-white/70 hover:text-white"
        >
          Close
        </button>

        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-video object-cover"
        />

        <div className="p-10 text-white">
          <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>

          <p className="text-white/70 mb-6 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-1 rounded-full bg-white/10 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (

    <section id="projects" className="py-32" data-cursor-theme="dark">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-6 flex items-center justify-center gap-3 text-center text-sm font-bold tracking-wide text-black">
            <span className="w-2 h-2 bg-black rounded-full" />
            SELECTED WORKS
            <span className="w-2 h-2 bg-black rounded-full" />
          </h2>

          <p className="text-lg text-gray-500 mx-auto leading-relaxed">
            Platforms, AI systems and applications engineered for scalability,
            performance and real-world impact.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={setActiveProject}
            />
          ))}

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={setActiveProject}
              featured={true}
            />
          ))}
        </div>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </Container>
    </section>
  );
}
