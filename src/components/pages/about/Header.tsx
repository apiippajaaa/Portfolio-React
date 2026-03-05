import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Header() {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const title: Variants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const subtitle: Variants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible" // animasi saat pertama load
      whileInView="visible" // animasi saat masuk viewport
      viewport={{ once: false, margin: "-100px" }}
      className="text-center max-w-3xl mx-auto space-y-6"
    >
      <motion.h1
        variants={title}
        className="text-4xl lg:text-6xl font-semibold tracking-tight"
      >
        About Me
      </motion.h1>

      <motion.p
        variants={subtitle}
        className="text-white/70 leading-relaxed text-lg"
      >
        I’m a developer who enjoys crafting modern digital experiences. My focus
        is on performance, smooth interaction, and visually engaging interfaces.
      </motion.p>
    </motion.div>
  );
}
