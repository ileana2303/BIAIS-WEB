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
    image: "/projects/oval-searchparts.png",
    images: [
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
    images: [
      "/projects/laniakea.png",
      "/projects/laniakea-2.png",
      "/projects/laniakea-3.png",
    ],
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

function ProjectCard({ project, onOpen, featured = false }) {
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
      return;
    }

    onOpen({ ...project, featured });
  };

  return (
    <div
      ref={cardRef}
      data-cursor-interactive="true"
      data-cursor-theme="dark"
      onMouseEnter={handleEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`group relative cursor-pointer overflow-hidden rounded-[28px]  bg-neutral-950 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out transform-gpu will-change-transform hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)] ${featured ? "md:col-span-2 xl:col-span-4" : ""
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

function FeaturedProjectImage({ project }) {
  const images = project.images?.length ? project.images : [project.image];
  const [imageIndex, setImageIndex] = useState(0);

  const showImage = (direction) => {
    setImageIndex((current) =>
      (current + direction + images.length) % images.length
    );
  };

  return (
    <div className="group/preview relative">
      <img
        src={images[imageIndex]}
        alt={`${project.title} preview ${imageIndex + 1} of ${images.length}`}
        className="aspect-[16/7] w-full object-cover object-top"
      />

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label={`Show previous ${project.title} image`}
            onClick={() => showImage(-1)}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-black/85 sm:left-5"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label={`Show next ${project.title} image`}
            onClick={() => showImage(1)}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition hover:scale-105 hover:bg-black/85 sm:right-5"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/60 px-3 py-2 backdrop-blur-md">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show ${project.title} image ${index + 1}`}
                onClick={() => setImageIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === imageIndex ? "w-5 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isFeatured = Boolean(project.featured);

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6"
      data-cursor-theme="dark"
      onClick={onClose}
    >
      <div
        className={`relative w-full overflow-hidden border border-white/10 bg-black shadow-2xl ${isFeatured
          ? "max-w-[96rem] rounded-[32px]"
          : "max-w-sm rounded-[36px] sm:max-w-md"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          data-cursor-theme="dark"
          className="absolute right-4 top-4 z-20 text-white/70 hover:text-white sm:right-5 sm:top-5"
        >
          Close
        </button>

        {isFeatured ? (
          <div className="p-4 pt-14 sm:p-5 sm:pt-16">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <div className="ml-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Web Preview
                </div>
              </div>

              <FeaturedProjectImage project={project} />
            </div>
          </div>
        ) : (
          <div className="px-3 pb-3 pt-12 sm:px-4 sm:pb-4 sm:pt-14">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[9/19.5] object-cover object-top"
              />
            </div>
          </div>
        )}

        <div className={`text-white ${isFeatured ? "p-6 pt-2 sm:p-8 sm:pt-3" : "p-6 pt-4 sm:p-8 sm:pt-5"
          }`}>
          <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">{project.title}</h3>

          <p className="mb-6 leading-relaxed text-white/70">
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
