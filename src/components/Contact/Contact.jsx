import React from "react";
import "./contact.css";
import { Form } from "./Form/Form.jsx";
import { socialNetworks } from "./dataContact.js";

export const Contact = ({ english }) => {
  return (
    <div className="contact" id="contact">
      <h2 className="title contact__title">
        {english ? "Get in touch" : "Contáctame"}
      </h2>
      <div className="contact__form">
        <Form english={english} />
      </div>
      <div className="social-media">
        <h3 className="social-media__title title2">
          {english ? "Social media" : "Redes sociales"}
        </h3>
        <div className="social-media__icons">
          {socialNetworks.map((item, index) => (
            <a
              key={index}
              href={item.path}
              target="_blank"
              className={`icon__link icon__link${index}`}
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
