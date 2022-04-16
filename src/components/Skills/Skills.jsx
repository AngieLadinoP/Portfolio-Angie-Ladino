import React from "react";
import { HiOutlineGlobe } from "react-icons/hi";
import { FaDesktop } from "react-icons/fa";
import "./skills.css";
import { languagesEnglish, languagesSpanish, skills } from "./dataSkills";
import { SkillsCard } from "./SkillsCard/SkillsCard";

export const Skills = ({ english }) => {
  const languages = english ? languagesEnglish : languagesSpanish;
  return (
    <section className="skills" id="skills">
      <h2 className="title skills__title">
        {english ? "Skills" : "Habilidades"}
      </h2>
      <SkillsCard
        section={english ? "Languages" : "Idiomas"}
        name="languages"
        icon={<HiOutlineGlobe className="rotate" />}
        data={languages}
      />
      <SkillsCard
        section={english ? "Web development" : "Desarrollo web"}
        name="web"
        icon={<FaDesktop />}
        data={skills}
      />
    </section>
  );
};
