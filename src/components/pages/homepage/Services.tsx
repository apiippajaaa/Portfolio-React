import { services } from "../../../config/pages/services";
import ServiceCard from "../../ui/CardServices";

export default function Services() {
  return (
    <section
      id="services"
      className="snap-section flex items-center py-24 md:py-0"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* ================= HEADER ================= */}
        <div className="mb-14">
          <p className="relative inline-block mb-4">
            <span className="tracking-[0.45em] uppercase text-xs font-semibold text-white/70">
              What I Do
            </span>
            <span className="absolute left-0 -bottom-2 h-0.5 w-full bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0" />
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl leading-tight">
            High-performance digital products, crafted with care.
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="
                bg-neutral-900/70
                rounded-2xl
                transition-all duration-300
                hover:-translate-y-2
                hover:bg-neutral-800
              "
            >
              <ServiceCard service={service} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
