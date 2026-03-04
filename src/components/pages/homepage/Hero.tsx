export default function Hero() {
  return (
    <section
      id="Hero"
      className="snap-section relative min-h-[calc(var(--vh)*100)] flex items-center justify-center z-10 text-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div
          className="
            max-w-3xl
            mx-auto
            space-y-6 md:space-y-8
            flex flex-col
            items-center
            text-center
          "
        >
          <p className="text-xs md:text-sm tracking-[0.25em] text-blue-400 uppercase">
            Creative Engineer
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Nur Afif Misbahuddin
          </h1>

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
            Fullstack engineer crafting scalable systems and visual experiences
            in web, illustration, and video.
          </p>

          <div className="flex gap-3 md:gap-4 pt-2 md:pt-4 flex-wrap justify-center">
            <a
              href="#portfolio"
              className="
                px-5 py-2.5 md:px-6 md:py-3
                rounded-xl
                bg-blue-500 hover:bg-blue-400
                transition font-medium
                shadow-lg shadow-blue-500/20
                text-sm md:text-base
              "
            >
              Portfolio
            </a>

            <a
              href="/resume.pdf"
              className="
                px-5 py-2.5 md:px-6 md:py-3
                rounded-xl
                border border-neutral-700
                hover:border-blue-400 hover:text-blue-400
                transition font-medium
                text-sm md:text-base
              "
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
