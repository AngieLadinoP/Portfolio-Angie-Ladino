import React from "react";
import "./projects.css";
import { projects } from "../../data.js";
import { ProjectCard } from "./ProjectCard/ProjectCard";
export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title projects__title">Projects</h2>
      <div className="projects__cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            demo={project.demo}
            code={project.code}
          />
        ))}
      </div>
    </section>
  );
};
