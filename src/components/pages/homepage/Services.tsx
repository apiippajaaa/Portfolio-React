import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { services } from "../../../config/pages/services";
import ServiceCard from "../../ui/CardServices";
import { useServicesCarousel } from "../../../hooks/useServicesCarousel";

/* CONTAINER */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/* HEADER */
const headerVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -90,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: {
        duration: 1.4,
        ease: "easeOut",
      },
      x: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.8,
      },
    },
  },
};

/* CARD */
const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: {
        duration: 1.4,
        ease: "easeOut",
      },
      y: {
        type: "spring",
        stiffness: 110,
        damping: 18,
        mass: 0.9,
      },
      scale: {
        type: "spring",
        stiffness: 140,
        damping: 16,
      },
    },
  },
};

export default function Services() {
  const { index, next, prev } = useServicesCarousel(services.length);

  return (
    <section
      id="Services"
      className="snap-section relative min-h-[calc(var(--vh)*100)] flex items-center z-10"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
      >
        {/* HEADER */}
        <motion.div
          variants={headerVariant}
          style={{ willChange: "transform, opacity" }}
          className="mb-14 flex flex-col gap-6 items-center md:items-start text-center md:text-left"
        >
          <p className="relative inline-block">
            <span className="tracking-[0.45em] uppercase text-xs font-semibold text-white/70 inline-block">
              What I Do
            </span>

            <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0" />
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl">
            High-performance digital products, crafted with care.
          </h2>
        </motion.div>

        {/* MOBILE CAROUSEL */}
        <div className="relative md:hidden">
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 h-12 w-12 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-white shadow-[0_0_30px_rgba(0,0,0,0.6)] disabled:opacity-20 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={index === services.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 h-12 w-12 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-white shadow-[0_0_30px_rgba(0,0,0,0.6)] disabled:opacity-20 transition"
          >
            →
          </button>

          <div className="overflow-hidden">
            <div
              className="flex will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {services.map((service, i) => {
                const active = i === index;

                return (
                  <article
                    key={service.title}
                    className="flex-[0_0_100%] px-[6vw] py-4 flex justify-center"
                  >
                    <motion.div
                      variants={cardVariant}
                      style={{ willChange: "transform, opacity" }}
                      className={`
                        w-full
                        max-w-[420px]
                        transform-gpu
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          active
                            ? "scale-[1.08] opacity-100 z-10"
                            : "scale-[0.9] opacity-55"
                        }
                      `}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* DESKTOP GRID */}
        <motion.div
          variants={container}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariant}
              style={{ willChange: "transform, opacity" }}
            >
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
