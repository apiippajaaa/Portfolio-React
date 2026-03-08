import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GetInTouchCTA() {
  return (
    <section className="snap-section min-h-[calc(var(--vh)*100)] flex items-center justify-center">
      <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto px-6">
        {/* CENTER PLANET (CTA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-xl"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Have an Idea?
            <br />
            <span className="text-blue-400">Let's Build It Together</span>
          </h2>

          <p className="text-white/60 mt-6">
            I'm open to discussing new projects, creative ideas, or
            opportunities to build something meaningful together.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="
              group
              inline-flex items-center gap-2
              px-7 py-3
              text-sm font-semibold
              border border-white/20
              rounded-lg
              hover:border-blue-400
              hover:text-blue-400
              transition-all duration-300
              "
            >
              Get In Touch
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
