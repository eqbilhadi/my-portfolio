import Nav from "@/components/navbar/Nav";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main data-scroll-container>
        <Hero />
      </main>
    </>
  );
}
