import { Outlet } from "react-router";
import Hamburger from "../components/ui/Hamburger";
import Background from "../components/ui/background/Background";
import CustomCursor from "../components/ui/CustomCursor";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CustomCursor />

      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-6 sm:px-0 h-20 flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <span
            className="
              relative
              inline-flex items-center
              pl-6 sm:pl-6
              text-white
              font-semibold
              uppercase
              tracking-[0.35em]
              sm:text-sm md:text-[13px]
              select-none
            "
          >
            {/* ===== ORBIT AREA ===== */}
            <span
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                w-2.5 h-2.5 sm:w-3 sm:h-3
                flex items-center justify-center
              "
            >
              {/* CORE DOT */}
              <span
                className="
                  w-1 h-1 sm:w-1.5 sm:h-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_6px_1px_rgba(34,211,238,0.6)]
                  sm:shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]
                "
              />

              {/* PULSE RING */}
              <span
                className="
                  absolute inset-0
                  rounded-full
                  bg-cyan-400
                  opacity-40
                  animate-[space-pulse_1.4s_ease-out_infinite]
                  sm:animate-[space-pulse_1.8s_ease-out_infinite]
                "
              />
            </span>
            {/* TEXT */}
            AFIF
          </span>

          {/* ================= HAMBURGER ================= */}
          <Hamburger />
        </div>
      </header>

      <Background />
      <Outlet />
    </div>
  );
}
