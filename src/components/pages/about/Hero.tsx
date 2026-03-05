import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageAnim: Variants = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div key={location.key}>
      {/* ================= MOBILE HERO ================= */}
      <section className="relative h-screen lg:hidden overflow-hidden">
        <motion.img
          variants={imageAnim}
          initial="hidden"
          animate="visible"
          src="/images/project-preview.jpg"
          alt="About Preview"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold text-white tracking-tight"
          >
            About Me
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/80 mt-3 text-sm max-w-xs"
          >
            Crafting immersive digital experiences with modern technology and
            thoughtful design.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= DESKTOP HERO ================= */}
      <section className="hidden lg:flex min-h-screen overflow-hidden relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-1/2 flex items-center px-16"
        >
          <div className="max-w-xl space-y-6">
            <motion.h1
              variants={fadeUp}
              className="text-7xl font-semibold text-white tracking-tight"
            >
              About <span className="text-cyan-400">Me</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/70 text-lg leading-relaxed"
            >
              I'm a front-end developer focused on building immersive,
              high-performance digital experiences with modern web technologies.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4">
              <button className="px-7 py-3 bg-cyan-400 text-black font-medium rounded-full hover:scale-105 transition duration-300">
                Download CV
              </button>

              <button className="px-7 py-3 border border-white/40 text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                Contact Me
              </button>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative w-1/2">
          <motion.div
            variants={imageAnim}
            initial="hidden"
            animate="visible"
            className="[clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)] h-full relative"
          >
            <img
              src="/images/project-preview.jpg"
              alt="About Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
