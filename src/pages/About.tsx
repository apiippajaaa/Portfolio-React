import Experiences from "../components/pages/about/Experience";
import Hero from "../components/pages/about/Hero";
import Philosophy from "../components/pages/about/Philosophy";
import Skills from "../components/pages/about/Skills";
import GetInTouchCTA from "../components/pages/GetInTouchCTA";

export default function About() {
  return (
    <>
      <Hero />
      <section className=" text-white px-6 lg:px-20 ">
        <Experiences />
        <Skills />
        <Philosophy />
        <GetInTouchCTA />
      </section>
    </>
  );
}
