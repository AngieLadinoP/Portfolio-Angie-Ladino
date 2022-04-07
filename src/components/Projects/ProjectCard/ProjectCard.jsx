import React from "react";
import { Button } from "../../Common/Button/Button.jsx";
import "./projectCard.css";

export const ProjectCard = (props) => {
  const { title, image, description, demo, code } = props;
  const goToLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="project-card animated">
      <h4 className="project-card__title title3">{title}</h4>
      <div className="project-card__img">
        <img src={image} alt={title} />
      </div>
      <p className="project-card__description text">{description}</p>
      <div className="project-card__buttons">
        <Button
          name="Demo"
          buttonAction={() => goToLink(demo)}
          styleButton="button--small"
          type="button"
        />
        <Button
          name="Code"
          buttonAction={() => goToLink(code)}
          styleButton="button--small"
          type="button"
        />
      </div>
    </div>
  );
};
