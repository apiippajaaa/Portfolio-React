const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern online store with payment integration.",
    image: "images/project-preview.jpg",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Company Profile",
    description: "Corporate website with CMS integration.",
    image: "images/project-preview.jpg",
    tech: ["Next.js", "Framer Motion"],
  },
  {
    title: "Dashboard Analytics",
    description: "Interactive admin dashboard with charts.",
    image: "images/project-preview.jpg",
    tech: ["React", "Chart.js"],
  },
  {
    title: "Portfolio Website",
    description: "Minimalist personal portfolio design.",
    image: "images/project-preview.jpg",
    tech: ["Vite", "GSAP"],
  },
  {
    title: "Landing Page SaaS",
    description: "High-converting SaaS landing page.",
    image: "images/project-preview.jpg",
    tech: ["Next.js", "Tailwind"],
  },
  {
    title: "Booking App UI",
    description: "Mobile-first booking application UI.",
    image: "images/project-preview.jpg",
    tech: ["React", "Firebase"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-28 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* SECTION TITLE */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-white">
            Featured Projects
          </h2>
          <p className="text-white/60 mt-3">
            Selected works showcasing modern development approach.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-neutral-900 rounded-2xl overflow-hidden
                           border border-white/5
                           hover:border-cyan-400/40
                           transition duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover
                               transition duration-500
                               group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm">{project.description}</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full
                                   bg-white/5 text-white/70
                                   border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
