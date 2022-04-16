import React from "react";
import { useState } from "react";
import { Button } from "../../Common/Button/Button.jsx";
import "./form.css";

export const Form = ({ english }) => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = () => {
    window.location = `mailto:agladinop@gmail.com?subject=${info.name} - ${info.subject} &body= ${info.message}`;
    setInfo({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <form className="contact-form">
      <h3 className="form__title title2">
        {english ? "Send me an email" : "Envíame un correo"}
      </h3>
      <label for="name">
        {english ? "Name" : "Nombre"}
        <input
          required
          type="text"
          placeholder={english ? "Name" : "Nombre"}
          id="name"
          className="form__input form__input--name"
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
      </label>
      <label for="email">
        {english ? "Email" : "Correo"}
        <input
          required
          type="email"
          id="email"
          placeholder={english ? "Email" : "Correo"}
          className="form__input form__input--email"
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
        />
      </label>
      <label for="subject">
        {english ? "Subject" : "Asunto"}
        <input
          required
          type="text"
          id="subject"
          placeholder={english ? "Subject" : "Asunto"}
          onChange={(e) => setInfo({ ...info, subject: e.target.value })}
          className="form__input form__input--subject"
        />
      </label>
      <label for="message">
        {english ? "Message" : "Mensaje"}
        <textarea
          required
          id="message"
          cols="30"
          rows="10"
          maxLength="500"
          placeholder={english ? "Message" : "Mensaje"}
          onChange={(e) => setInfo({ ...info, message: e.target.value })}
          className="form__input form__input--message"
        ></textarea>
      </label>

      <Button
        name={english ? "Send message" : "Enviar mensaje"}
        buttonAction={handleSubmit}
        styleButton="button--big"
        type="submit"
      />
    </form>
  );
};
