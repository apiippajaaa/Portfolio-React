export default function Content() {
  return (
    <section className="bg-black text-white px-6 lg:px-20 py-28">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* ================= WHO I AM ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
              Who I Am
            </h2>

            <p className="text-white/70 leading-relaxed text-lg">
              I'm a front-end developer passionate about building immersive,
              interactive, and high-performance web applications. I focus on
              combining modern technologies with thoughtful design.
            </p>

            <p className="text-white/60 leading-relaxed">
              My goal is to craft digital experiences that feel smooth,
              meaningful, and visually engaging — not just functional.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/about-preview.jpg"
                alt="About Image"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="space-y-10">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
            Experience
          </h2>

          <div className="space-y-8">
            {[
              {
                year: "2024 - Present",
                role: "Front-End Developer",
                desc: "Building modern web interfaces using React, TypeScript, and animation libraries.",
              },
              {
                year: "2023 - 2024",
                role: "UI Developer",
                desc: "Focused on crafting responsive and interactive layouts with performance optimization.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-l border-cyan-400 pl-6 space-y-2"
              >
                <p className="text-cyan-400 text-sm tracking-wider">
                  {item.year}
                </p>
                <h3 className="text-xl font-medium">{item.role}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div className="space-y-10">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
            Core Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "TypeScript",
              "Tailwind",
              "GSAP",
              "Framer Motion",
              "Next.js",
              "Node.js",
              "UI / UX",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-white/10 rounded-2xl p-8 text-center
                  hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* ================= PHILOSOPHY ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
            My Philosophy
          </h2>

          <p className="text-white/70 leading-relaxed text-lg">
            I believe great digital experiences are built at the intersection of
            performance, motion, and emotion. Every detail matters — from
            micro-interactions to overall flow.
          </p>
        </div>
      </div>
    </section>
  );
}
