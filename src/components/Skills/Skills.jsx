import React from "react";
import { HiOutlineGlobe } from "react-icons/hi";
import { FaDesktop } from "react-icons/fa";
import "./skills.css";
import { languages, skills } from "./dataSkills";
import { SkillsCard } from "./SkillsCard/SkillsCard";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="title skills__title">Skills</h2>
      <SkillsCard
        section="Languages"
        name="languages"
        icon={<HiOutlineGlobe className="rotate" />}
        data={languages}
      />
      <SkillsCard
        section="Web development"
        name="web"
        icon={<FaDesktop />}
        data={skills}
      />
    </section>
  );
};
