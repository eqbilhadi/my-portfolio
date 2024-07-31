import Nav from "@/components/navbar/Nav";
import { Hero } from "@/components/hero/Hero";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Nav />
      <main data-scroll-container>
        <Hero />
        <About />
      </main>
    </>
  );
}
