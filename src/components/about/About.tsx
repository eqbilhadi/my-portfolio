import AnimateParagraph from "./AnimateParagraph";
import AnimateTitle from "./AnimateTitle";
import { Clients } from "./Clients";
import { Skills } from "./Skills";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex w-full items-center justify-center overflow-hidden mt-10"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
            <AnimateParagraph
              paragraph="Since 2022, when I was still studying in college, I have been diving into the world of web development professionally. On this journey, I explored aspects of website development, including project management and system integration. I was involved in the planning and execution of various web projects, from data-driven applications to e-commerce websites, ensuring that every component functions smoothly and is well integrated."
              delay={1}
              className="subtitle"
            />
            <AnimateParagraph
              paragraph="Currently, I am actively involved in various web development projects, always striving to provide an optimal user experience through innovative design and technical solutions. I am always open to new opportunities and collaborations, so feel free to reach out to me!"
              delay={1}
              className="subtitle -mt-7"
            />
          </div>
        </div>

        <h3 className="font-bold text-2xl">Skills</h3>
        <Skills />
        <h3 className="font-bold text-2xl">Clients</h3>
        <Clients />
      </div>
    </section>
  );
}
