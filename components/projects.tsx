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

function ProjectCard({ project, onOpen }) {
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
      className="group cursor-pointer relative rounded-[28px] overflow-hidden bg-black shadow-xl hover:shadow-2xl transition-all duration-300 transform-gpu will-change-transform hover:scale-[1.02]"
    >
      <div className="relative aspect-[9/16] w-full">

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
            }`}
        />

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"
            }`}
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(180px_180px_at_var(--x)_var(--y),rgba(255,255,255,0.18),transparent_60%)]" />

      </div>

      <div className="absolute bottom-0 p-6 text-white w-full">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        <p className="text-sm opacity-80 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10"
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

    <section id="projects" className="bg-black py-36" data-cursor-theme="dark">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-[#FFFAF0] text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
            Selected Projects
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
        </div>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </Container>
    </section>
  );
}
