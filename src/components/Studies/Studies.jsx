import React from "react";
import { StudyCard } from "./StudyCard/StudyCard.jsx";
import { FaAward } from "react-icons/fa";
import { studiesEnglish, studiesSpanish } from "./dataStudies.js";
import "./studies.css";

export const Studies = ({ english }) => {
  const studies = english ? studiesEnglish : studiesSpanish;
  return (
    <section className="studies" id="studies">
      <h2 className="title studies__title">
        {english ? "Studies" : "Estudios"}
      </h2>
      <div className="studies__icon">
        <FaAward />
      </div>
      <ul className="studies__items">
        {studies.map((study, index) => (
          <StudyCard
            key={index}
            name={study.title}
            place={study.place}
            time={study.status}
          />
        ))}
      </ul>
    </section>
  );
};
