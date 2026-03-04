import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // kalau pakai react-router
// kalau tidak pakai router, nanti ganti ke <a href="#contact">

export default function GetInTouchCTA() {
  return (
    <section className="snap-section relative min-h-[calc(var(--vh)*100)] flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full relative">
        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
        >
          <div className="w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center space-y-8"
        >
          {/* Small Label */}
          <p className="tracking-[0.4em] uppercase text-xs font-semibold text-white/50">
            Let’s Build Something
          </p>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Have an Idea?
            <br />
            Let’s Bring It to Life.
          </h2>

          {/* Description */}
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let’s create something
            meaningful and impactful together.
          </p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3
                px-8 py-4 rounded-2xl
                text-sm font-semibold tracking-wide
                bg-cyan-500 text-black
                transition-all duration-300
                hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]
                hover:scale-105"
            >
              Get In Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
