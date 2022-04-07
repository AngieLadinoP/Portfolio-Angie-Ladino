import React from "react";
import "./skillsCard.css";

export const SkillsCard = (props) => {
  const { section, icon, name, data } = props;
  return (
    <div className={`skills__section skills__${name}`}>
      <h3 className={`skills__section--title title2 ${name}__title`}>
        {section}
      </h3>
      <div className={`skills__icon skills__icon--${name}`}>{icon}</div>
      <ul className={`${name}__items`}>
        {data.map((data, index) => (
          <li key={index} className={`text ${name}__item`}>
            {data.text} {data.level}
          </li>
        ))}
      </ul>
    </div>
  );
};
