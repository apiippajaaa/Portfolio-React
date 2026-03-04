import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experiences() {
  const [showAll, setShowAll] = useState(false);

  const data = [
    {
      year: "2024 - Present",
      role: "Front-End Developer",
      desc: "Building immersive web interfaces using React, TypeScript, and advanced animation systems.",
    },
    {
      year: "2023 - 2024",
      role: "UI Developer",
      desc: "Crafted high-performance responsive layouts with interactive micro-animations.",
    },
    {
      year: "2022 - 2023",
      role: "Freelance Developer",
      desc: "Developed custom websites and landing pages for startups.",
    },
    {
      year: "2021 - 2022",
      role: "Web Designer",
      desc: "Designed user-centered interfaces with modern visual systems.",
    },
    {
      year: "2020 - 2021",
      role: "Frontend Intern",
      desc: "Assisted in developing scalable UI components.",
    },
    {
      year: "2019 - 2020",
      role: "Junior Web Developer",
      desc: "Built responsive layouts and improved UI performance.",
    },
    {
      year: "2018 - 2019",
      role: "UI Enthusiast",
      desc: "Explored animation systems and micro-interactions.",
    },
    {
      year: "2017 - 2018",
      role: "Learning Phase",
      desc: "Deep diving into HTML, CSS, and JavaScript fundamentals.",
    },
  ];

  const visibleData = showAll ? data : data.slice(0, 4);

  return (
    <section className="relative py-32 px-6 lg:px-20 text-white">
      <div className="max-w-5xl mx-auto">
        {/* ===== Title Animation ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.4, once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight">
            Experience
          </h2>
          <p className="text-white/40 mt-4">
            A journey through building modern digital systems.
          </p>
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 h-full w-px 
            bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
          />

          <motion.div layout className="space-y-20">
            <AnimatePresence mode="popLayout">
              {visibleData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year + item.role}
                    layout
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ amount: 0.3, once: false }}
                    className="relative flex flex-col lg:flex-row items-center"
                  >
                    {/* Dot Animation */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      viewport={{ amount: 0.3, once: false }}
                      className="hidden lg:block absolute left-1/2 -translate-x-1/2 
                        w-3 h-3 rounded-full bg-cyan-400 
                        shadow-[0_0_15px_#22d3ee]"
                    />

                    {/* Card */}
                    <div
                      className={`
                        w-full lg:w-1/2
                        ${
                          isLeft
                            ? "lg:pr-16 lg:text-right"
                            : "lg:pl-16 lg:ml-auto"
                        }
                      `}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="
                          bg-white/5
                          border border-white/10
                          rounded-2xl
                          p-8
                          backdrop-blur-sm
                          hover:border-cyan-400/50
                          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                        "
                      >
                        <p className="text-cyan-400 text-xs tracking-[0.3em] mb-3">
                          {item.year}
                        </p>

                        <h3 className="text-2xl font-semibold mb-3">
                          {item.role}
                        </h3>

                        <p className="text-white/60 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* ===== Button Animation ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.5, once: false }}
            className="flex justify-center mt-20"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-3
                border border-cyan-400/50
                rounded-full
                text-cyan-400
                tracking-widest
                text-sm
                transition duration-300
                hover:bg-cyan-400
                hover:text-black
                hover:shadow-[0_0_20px_#22d3ee]
              "
            >
              {showAll ? "SHOW LESS" : "SHOW MORE"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
