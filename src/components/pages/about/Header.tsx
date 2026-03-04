import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="max-w-6xl mx-auto py-32 px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* ================= TEXT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.4, once: false }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Who <span className="text-cyan-400">I Am</span>
            </h2>

            <div className="h-px w-20 bg-cyan-400/50" />

            <p className="text-white/70 leading-relaxed text-lg">
              I'm a front-end developer passionate about building immersive,
              interactive, and high-performance web applications.
            </p>

            <p className="text-white/50 leading-relaxed">
              I combine modern technologies with thoughtful design to craft
              digital experiences that feel smooth, meaningful, and visually
              engaging — not just functional.
            </p>
          </div>
        </motion.div>

        {/* ================= IMAGE SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ amount: 0.4, once: false }}
          className="relative group"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl 
            bg-cyan-500/10 blur-2xl 
            opacity-0 group-hover:opacity-100 
            transition duration-700 pointer-events-none"
          />

          {/* Image Card */}
          <div
            className="relative aspect-square rounded-3xl overflow-hidden 
            border border-white/10
            backdrop-blur-sm
            transition duration-500
            group-hover:border-cyan-400/50
            group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
          >
            <img
              src="/images/about-preview.jpg"
              alt="About Image"
              className="w-full h-full object-cover 
                grayscale group-hover:grayscale-0 
                scale-105 group-hover:scale-100
                transition duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
