export default function Hero() {
  return (
    <>
      {/* ================= MOBILE HERO ================= */}
      <section className="relative h-screen lg:hidden overflow-hidden">
        {/* IMAGE FULL */}
        <img
          src="/images/project-preview.jpg"
          alt="Project Preview"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />

        {/* OVERLAY SO TEXT CLEAR */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TEXT CENTER */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            My Portfolio
          </h1>

          <p className="text-white/80 mt-3 text-sm max-w-xs">
            Selected projects crafted with modern technology.
          </p>
        </div>
      </section>

      {/* ================= DESKTOP HERO ================= */}
      <section className="hidden lg:flex min-h-screen overflow-hidden relative">
        {/* LEFT TEXT */}
        <div className="w-1/2 flex items-center px-16">
          <div className="max-w-xl space-y-6">
            <h1 className="text-7xl font-semibold text-white tracking-tight">
              My <span className="text-cyan-400">Portfolio</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed">
              A collection of selected projects focused on building modern,
              immersive digital experiences.
            </p>

            <button
              className="px-7 py-3 bg-cyan-400 text-black font-medium rounded-full 
                           hover:scale-105 transition duration-300"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE MIRING */}
        <div className="relative w-1/2">
          <div className="[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] h-full relative">
            <img
              src="images/project-preview.jpg"
              alt="Project Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
