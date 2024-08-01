import { projects } from "@/lib/projectData";
import ProjectTitleAnimate from "./ProjectTitleAnimate";
import { ProjectsCardMeteor } from "./ProjectsCardMeteor";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-[20] pt-24"
    >
      <ProjectTitleAnimate />
      <div className="mb-24 grid w-full grid-cols-1 grid-rows-2 gap-x-6 gap-y-6 lg:max-w-[1200px] lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectsCardMeteor 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              repo={project.repo}
              projectLink={project.linkProject}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
