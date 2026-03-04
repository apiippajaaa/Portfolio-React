import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const text =
  "I believe great digital experiences are built at the intersection of performance, motion, and emotion. Every detail matters — from micro-interactions to the overall flow that makes a product feel alive.";

function ElegantReveal({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const words = value.split(" ");

  return (
    <p
      ref={ref}
      className="text-white/70 leading-relaxed text-lg mx-auto  flex flex-wrap justify-center"
    >
      {words.map((word, i) => {
        const highlight =
          word.includes("performance") ||
          word.includes("motion") ||
          word.includes("emotion");

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(8px)" }
            }
            transition={{
              duration: 0.6,
              delay: i * 0.04,
              ease: "easeOut",
            }}
            className={`mr-2 ${highlight ? "text-cyan-400" : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function Philosophy() {
  return (
    <section className="snap-section relative min-h-[calc(var(--vh)*100)] flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full text-center relative">
        {/* Glow Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
        >
          <div className="w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 space-y-8"
        >
          <p className="tracking-[0.4em] uppercase text-xs font-semibold text-white/50">
            Core Principle
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            My Philosophy
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
          />

          {/* ✨ Elegant Animated Description */}
          <ElegantReveal value={text} />
        </motion.div>
      </div>
    </section>
  );
}
