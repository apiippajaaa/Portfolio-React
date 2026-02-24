import Home from "../components/pages/homepage/Hero";
import { useScrollSpy } from "../hooks/useScrollSpy";
import Services from "../components/pages/homepage/Services";

export default function Homepage() {
  useScrollSpy();
  return (
    <main className="snap-container">
      <Home />
      <Services />
      {/* <Projects />
        <Contact /> */}
    </main>
  );
}
