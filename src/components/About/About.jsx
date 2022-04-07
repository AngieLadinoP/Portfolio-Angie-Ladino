import React from "react";
import "./about.css";
import { Button } from "../Common/Button/Button.jsx";
import { profilePicture } from "../../data.js";
import { drive } from "../../data.js";

export const About = () => {
  const viewCV = () => {
    window.open(drive, "_blank");
  };
  return (
    <section className="about" id="about">
      <h2 className="title about__title">About me</h2>
      <img src={profilePicture} className="about__img" alt="" />
      <div>
        <p className="about__text text">
          My name is Angie Ladino, I studied business administration and I am a
          fullstack web developer. My interest in web development started when I
          decided to try to materialize my business ideas and create
          applications to enhance the value of companies. <br />
          Currently based in Bogota, Colombia. When I'm not coding, I'm geeking
          about soccer, films and exploring different ways to create content.
        </p>
        <div className="button--download">
          <Button
            name="View CV"
            buttonAction={viewCV}
            styleButton="button--big"
            type="button"
          />
        </div>
      </div>
    </section>
  );
};
