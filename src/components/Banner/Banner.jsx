import React from "react";
import "./banner.css";

export const Banner = ({ english }) => {
  return (
    <section className="banner" id="home">
      <div className="banner__text">
        {english ? (
          <h2 className="banner__title">
            Hi, my name is <br />
            Angie Ladino
          </h2>
        ) : (
          <h2 className="banner__title">
            Hola, soy
            <br />
            Angie Ladino
          </h2>
        )}
      </div>
    </section>
  );
};
