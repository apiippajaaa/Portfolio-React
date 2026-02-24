import { useEffect } from "react";

export function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;

        history.replaceState(null, "", `#${visible.target.id}`);
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}