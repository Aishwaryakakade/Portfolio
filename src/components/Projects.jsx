import React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../data";
import SectionTitle from "./SectionTitle";
function Projects() {
  return (
    <section className="p-8 align-items" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
