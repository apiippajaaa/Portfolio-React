import Home from "../components/pages/homepage/Hero";
import { useScrollSpy } from "../hooks/useScrollSpy";
import Services from "../components/pages/homepage/Services";
// import Skills from "../components/pages/homepage/Skills";
import Project from "../components/pages/homepage/Project";

export default function Homepage() {
  useScrollSpy();
  return (
    <main className="snap-container px-6">
      <Home />
      <Services />
      {/* <Skills /> */}
      <Project />
    </main>
  );
}
