import React from "react";
import "./projects.css";
import { projectsEnglish, projectsSpanish } from "../../data.js";
import { ProjectCard } from "./ProjectCard/ProjectCard";
export const Projects = ({ english }) => {
  const projects = english ? projectsEnglish : projectsSpanish;
  return (
    <section className="projects" id="projects">
      <h2 className="title projects__title">
        {english ? "Projects" : "Proyectos"}
      </h2>
      <div className="projects__cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            demo={project.demo}
            code={project.code}
            english={english}
          />
        ))}
      </div>
    </section>
  );
};
