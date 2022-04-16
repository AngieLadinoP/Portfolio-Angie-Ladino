import React from "react";
import "./about.css";
import { Button } from "../Common/Button/Button.jsx";
import { profilePicture } from "../../data.js";
import { drive } from "../../data.js";

export const About = ({ english }) => {
  const viewCV = () => {
    window.open(drive, "_blank");
  };
  return (
    <section className="about" id="about">
      <h2 className="title about__title">
        {english ? "About me" : "Sobre mi"}
      </h2>
      <img src={profilePicture} className="about__img" alt="" />
      <div>
        {english ? (
          <p className="about__text text">
            My name is Angie Ladino, I studied business administration and I am
            a fullstack web developer. My interest in web development started
            when I decided to try to materialize my business ideas and create
            applications to enhance the value of companies. <br />
            Currently based in Bogota, Colombia. When I'm not coding, I'm
            geeking about soccer, films and exploring different ways to create
            content.
          </p>
        ) : (
          <p className="about__text text">
            Mi nombre es Angie Ladino, soy egresada de administración de
            empresas y desarrolladora web full stack. Mi interés en el
            desarrollo web comenzó cuando decidí tratar de materializar mis
            ideas de negocio y crear aplicacones que agregaran valor a las
            compañías.
            <br />
            Actualmente me encuentro en Bogotá, Colombia. Cuando no estoy
            escribiendo código, soy una apasionada por el fútbol, las películas
            y las soluciones tecnológicas.
          </p>
        )}

        <div className="button--download">
          <Button
            name={english ? "View CV" : "Ver hoja de vida"}
            buttonAction={viewCV}
            styleButton="button--big"
            type="button"
          />
        </div>
      </div>
    </section>
  );
};
