import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* CONTAINER */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.25,
    },
  },
};

/* TEXT ANIMATION */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: {
        duration: 1.2,
        ease: "easeOut",
      },
      y: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
      scale: {
        type: "spring",
        stiffness: 140,
        damping: 20,
      },
    },
  },
};

export default function Hero() {
  return (
    <section
      id="Hero"
      className="snap-section relative min-h-[calc(var(--vh)*100)] flex items-center justify-center z-10 text-center"
    >
      <motion.div
        className="max-w-6xl w-full mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.45 }}
        style={{ willChange: "transform, opacity" }}
      >
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
          <motion.p
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="text-xs md:text-sm tracking-[0.25em] text-blue-400 uppercase"
          >
            Creative Engineer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            Nur Afif Misbahuddin
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl"
          >
            Fullstack engineer crafting scalable systems and visual experiences
            in web, illustration, and video.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="flex gap-3 md:gap-4 pt-2 md:pt-4 flex-wrap justify-center"
          >
            <motion.a
              href="#portfolio"
              whileHover={{
                scale: 1.06,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                px-5 py-2.5 md:px-6 md:py-3
                rounded-xl
                bg-blue-500 hover:bg-blue-400
                transition font-medium
                shadow-lg shadow-blue-500/20
                text-sm md:text-base
                transform-gpu
              "
            >
              Portfolio
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{
                scale: 1.06,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                px-5 py-2.5 md:px-6 md:py-3
                rounded-xl
                border border-neutral-700
                hover:border-blue-400 hover:text-blue-400
                transition font-medium
                text-sm md:text-base
                transform-gpu
              "
            >
              Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
