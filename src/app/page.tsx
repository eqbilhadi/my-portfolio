import Nav from "@/components/navbar/Nav";
import { Hero } from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main data-scroll-container>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
