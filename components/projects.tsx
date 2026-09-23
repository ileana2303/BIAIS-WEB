"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./layout/container";

const projects = [
  {
    title: "ColAI — AI-Powered Healthcare Operations",
    description:
      "A cross-platform iOS and Android healthcare operations app that transforms prescriptions into guided EOPYY orders, combining AI-assisted data capture with customer workflows, sales analytics, discount approvals and delivery tracking.",
    tech: ["Next.js", "TypeScript", "Capacitor", "Redux Toolkit", "Power BI"],
    image: "/projects/colai.jpg",
    video: "/projects/colai-preview.mp4",
  },
  {
    title: "E-Order — B2B Procurement Platform",
    description:
      "A B2B procurement app available across web, iOS and Android, connecting retailers with suppliers through searchable catalogs, smart baskets, delivery scheduling, repeat ordering and team administration.",
    tech: ["Next.js", "TypeScript", "PWA", "TanStack Query", "Zustand"],
    image: "/projects/e-order-demo.jpg",
    video: "/projects/e-order-demo.mp4",
    darkText: true,
  },
  {
    title: "Casestudy B2B Marketplace",
    description:
      "Scalable B2B marketplace with advanced search, payments and analytics.",
    tech: ["Next.js", "Node", "PostgreSQL"],
    image: "/projects/eorder.jpg",
    video: "/projects/eorder-preview.mp4",
  },
  {
    title: "Expenses Tracker App",
    description:
      "A responsive expense tracker for field teams that digitizes daily travel logs and automatically calculates mileage reimbursement and monthly totals across parking, tolls, meals and other costs.",
    tech: ["Next.js", "TypeScript", "TanStack Query", "React Hook Form", "Zod"],
    image: "/projects/colai-expenses.png",
    darkText: true,
  },

];

const featuredProjects = [
  {
    title: "Oval Parts",
    description:
      "A unified automotive parts platform for product search, customer orders, pricing requests and inter-branch stock workflows.",
    tech: ["Next.js", "TypeScript", "SoftOne ERP", "SQL Server"],
    image: "/projects/oval.png",
    images: [
      "/projects/oval.png",
      "/projects/oval-searchparts.png",
      "/projects/oval-reqprice.png",
      "/projects/oval-endorequest.png",
      "/projects/oval-anatrofrequest.png",
      "/projects/oval-anatrof.png",
    ],
  },

  {
    title: "Laniakea — Developer Teams Website",
    description:
      "A premium B2B website positioning Laniakea's dedicated developers, team augmentation and project squads through a clear service structure and distinctive editorial design.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/laniakea.png",
    href: "https://www.laniakea.gr/",
  },
  {
    title: "Application Online Guide",
    description:
      "A responsive, step-by-step guide that helps Colai users navigate the app, complete AI-assisted orders and master everyday workflows.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/application-online-guide.png",
  },
  {
    title: "Architectural Studio Website",
    description:
      "Design portfolio for ILARQ Studio, showcasing residential, hospitality and international architecture through immersive project galleries and on-site media.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/ilarq.jpg",
    href: "https://www.ilarq.studio/",
  },

  {
    title: "Vector Dev — Software Company Website",
    description:
      "A modern, responsive company website for Vector Dev, showcasing tailored software, web platforms, system integrations and automation services through a clear, high-performance experience.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/vector-dev.png",
    href: "https://www.vectordev.gr/",
  },
];

function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const projectImages = project.images?.length ? project.images : [project.image];

  const changeImage = (event, direction) => {
    event.stopPropagation();
    setImageIndex((current) =>
      (current + direction + projectImages.length) % projectImages.length
    );
  };

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

  const handleClick = () => {
    if (project.href) {
      window.location.assign(project.href);
    }
  };

  return (
    <div
      ref={cardRef}
      data-cursor-interactive={project.href ? "true" : undefined}
      data-cursor-theme="dark"
      onMouseEnter={handleEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onClick={project.href ? handleClick : undefined}
      className={`group relative overflow-hidden rounded-[28px] bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out transform-gpu will-change-transform hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)] ${project.href ? "cursor-pointer" : ""} ${featured ? "md:col-span-2 xl:col-span-4" : ""
        }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(255,255,255,0.04))] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`relative w-full ${featured ? "aspect-[4/5] md:aspect-[16/7]" : "aspect-[9/18]"
          }`}
      >
        <img
          src={projectImages[imageIndex]}
          alt={`${project.title}${projectImages.length > 1 ? ` preview ${imageIndex + 1}` : ""}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:saturate-[1.08] ${featured
            ? "object-top group-hover:scale-[1.02]"
            : "object-top group-hover:scale-[1.015]"
            }`}
        />

        {projectImages.length > 1 ? (
          <div className="absolute inset-x-4 top-1/2 z-20 flex -translate-y-1/2 items-center justify-between opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
            <button
              type="button"
              aria-label={`Show previous ${project.title} image`}
              data-cursor-theme="dark"
              onClick={(event) => changeImage(event, -1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/80"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={`Show next ${project.title} image`}
              data-cursor-theme="dark"
              onClick={(event) => changeImage(event, 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black/80"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        ) : null}

        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${featured ? "group-hover:scale-[1.03]" : "object-top group-hover:scale-[1.015]"} ${hovered ? "scale-100 opacity-100" : "scale-[1.005] opacity-0"
              }`}
          />
        ) : null}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%)] opacity-35 transition-opacity duration-200 group-hover:opacity-55" />

        <div
          className={`absolute inset-0 transition-opacity duration-200 ${featured
            ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 group-hover:from-black/50"
            : project.darkText
              ? "bg-gradient-to-t from-white/95 via-white/35 to-transparent opacity-100 group-hover:from-white/90"
              : "bg-gradient-to-t from-black/22 via-black/8 to-transparent opacity-0 group-hover:opacity-100"
            }`}
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(220px_220px_at_var(--x)_var(--y),rgba(255,255,255,0.16),transparent_60%)]" />
      </div>

      <div
        className={`absolute bottom-0 w-full transition-transform duration-500 ease-out group-hover:-translate-y-1 ${project.darkText ? "text-black" : "text-white"} ${featured ? "p-6 md:p-10" : "p-6"
          }`}
      >

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
              className={`rounded-full px-3 py-1 text-xs backdrop-blur-md transition-colors duration-500 ${project.darkText
                ? "border border-black/15 bg-white/60 text-black group-hover:border-black/25 group-hover:bg-white/75"
                : "border border-white/10 bg-white/8 group-hover:border-white/20 group-hover:bg-white/12"
                }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (

    <section id="projects" className="py-32" data-cursor-theme="light">
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
            />
          ))}

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={true}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
