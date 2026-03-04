import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "../../../config/pages/skills";

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="skills"
      className="snap-section relative min-h-screen flex items-center"
    >
      <div className=" mx-auto w-full px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="tracking-[0.35em] uppercase text-[10px] font-semibold text-white/60 mb-3">
            Tech Stack
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Technologies I Work With
          </h2>
        </motion.div>

        {/* ================= TABS ================= */}
        <div className="relative mb-8 flex gap-2 overflow-x-auto no-scrollbar">
          {skillGroups.map((group, index) => (
            <motion.button
              key={group.title}
              onClick={() => setActive(index)}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-1.5 rounded-full text-xs whitespace-nowrap
                transition-colors duration-300
                ${
                  active === index
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }
              `}
            >
              {active === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{group.title}</span>
            </motion.button>
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              {/* Description */}
              <p className="text-white/50 text-sm max-w-xl">
                {skillGroups[active].description}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-6">
                {skillGroups[active].skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.08 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl 
                      bg-white/5 border border-white/10 
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:border-cyan-400/60
                      group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                    >
                      <i className={`${skill.icon} text-xl text-white/80`} />
                    </div>

                    <span className="text-[10px] mt-2 text-white/60 group-hover:text-white transition">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ================= CTA ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mt-6 flex justify-end"
          >
            <a
              href="/projects"
              className="group inline-flex items-center gap-2
                px-4 py-2 rounded-lg
                text-xs font-medium
                border border-cyan-400/40
                text-cyan-400
                hover:bg-cyan-400
                hover:text-black
                transition-all duration-300
                hover:shadow-[0_0_20px_#22d3ee]"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
