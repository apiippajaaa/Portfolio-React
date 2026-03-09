import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ================= ANIMATION ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
    },
  },
};

const textVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Project = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  /* ================= PARALLAX ================= */

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 10;
      const rotateX = (y / rect.height - 0.5) * -10;

      el.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const reset = () => {
      el.style.transform = `
        perspective(900px)
        rotateX(0deg)
        rotateY(0deg)
      `;
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      id="Projects"
      className="snap-section relative min-h-[calc(var(--vh)*100)] flex items-center z-10"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-16">
          {/* ================= TEXT ================= */}

          <motion.div
            variants={textVariant}
            style={{ willChange: "transform, opacity" }}
            className="text-center lg:text-left flex flex-col gap-8 max-w-xl order-2 lg:order-1"
          >
            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="tracking-[0.45em] uppercase text-xs font-semibold text-white/70">
                Selected Work
              </span>

              <div className="h-0.5 w-full max-w-[140px] bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              Systems and experiences I've designed and developed.
            </h2>

            <div className="flex justify-center md:justify-start">
              <Link
                to="/projects"
                className="
                relative group
                inline-flex items-center gap-3
                px-8 py-3.5
                rounded-full
                backdrop-blur-xl
                bg-white/5
                border border-white/15
                text-white/90
                transition-all duration-500
                hover:-translate-y-1
                hover:border-blue-400/40
                hover:bg-white/10
                overflow-hidden
              "
              >
                {/* glow */}

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 blur-xl" />

                <span className="relative z-10 tracking-wide">
                  View All Projects
                </span>

                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-12">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ================= IMAGE ================= */}

          <motion.div
            variants={imageVariant}
            style={{ willChange: "transform, opacity" }}
            className="relative flex justify-center lg:justify-end w-full order-1 lg:order-2"
          >
            <div className="absolute -inset-6 bg-linear-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 blur-3xl opacity-40 animate-pulse rounded-3xl" />

            <div
              ref={imageRef}
              className="
              relative
              w-full
              max-w-xl
              rounded-3xl
              overflow-hidden
              border border-white/10
              transition-transform duration-300
              will-change-transform
              transform-gpu
            "
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src="/images/project-preview.jpg"
                alt="Project Preview"
                className="
                w-full
                h-72 sm:h-80 lg:h-96
                object-cover
                transition-transform duration-700
                hover:scale-105
              "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
