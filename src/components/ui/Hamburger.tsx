import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/about" },
    { label: "PROJECTS", to: "/projects" },
    { label: "GET IN TOUCH", to: "/get-in-touch" },
  ];

  return (
    <>
      {/* ================= BUTTON ================= */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="relative z-50 w-10 h-10 flex items-center justify-center"
      >
        {/* ================= HAMBURGER SVG ================= */}
        <svg
          viewBox="0 0 640 640"
          className={`absolute inset-0 w-full h-full transition-all duration-500 
          ${
            open
              ? "opacity-0 scale-75 rotate-90"
              : "opacity-100 scale-100 rotate-0"
          }`}
          fill="white"
        >
          <g transform="translate(20,0)">
            <path d="M112 448C103.2 448 96 455.2 96 464C96 508.2 131.8 544 176 544L464 544C508.2 544 544 508.2 544 464C544 455.2 536.8 448 528 448L112 448zM96 266C96 278.2 105.9 288 118 288L522 288C534.2 288 544 278.1 544 266C544 248.8 541.4 231.6 533.2 216.5C511 175.7 450.9 96 320 96C189.1 96 129 175.6 106.8 216.5C98.6 231.6 96 248.8 96 266zM64 368C64 385.7 78.3 400 96 400L544 400C561.7 400 576 385.7 576 368C576 350.3 561.7 336 544 336L96 336C78.3 336 64 350.3 64 368z" />
          </g>
        </svg>

        {/* ================= ANIMATED X ================= */}
        <div
          className={`absolute inset-0 flex items-center justify-end pr-2 transition-all duration-500
          ${
            open
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-75 -rotate-90"
          }`}
        >
          <span className="absolute w-6 h-0.5 bg-white rotate-45" />
          <span className="absolute w-6 h-0.5 bg-white -rotate-45" />
        </div>
      </button>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* ===== BACKDROP ===== */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/95 z-40
          transition-[clip-path] duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? "clip-path-open" : "clip-path-close"}`}
        />

        {/* ===== MENU ===== */}
        <nav
          className={`absolute inset-0 flex items-center justify-center z-50
          transition-opacity duration-500
          ${open ? "opacity-100 delay-300" : "opacity-0 pointer-events-none"}`}
        >
          <ul className="space-y-12 text-center">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                className={`text-2xl md:text-3xl font-light tracking-[0.35em]
              transition-all duration-300 ease-out
              ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-center gap-6 text-white/60 hover:text-white transition-all duration-300"
                >
                  {/* divider */}
                  {/* <span className="w-10 h-px bg-white/20 group-hover:bg-white transition" /> */}

                  {/* text */}
                  <span
                    className="tracking-[0.35em]
                  group-hover:tracking-[0.45em]
                  transition-all duration-300
                  group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  >
                    {item.label}
                  </span>

                  {/* divider */}
                  {/* <span className="w-10 h-px bg-white/20 group-hover:bg-white transition" /> */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
