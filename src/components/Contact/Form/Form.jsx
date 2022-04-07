import React from "react";
import { useState } from "react";
import { Button } from "../../Common/Button/Button.jsx";
import "./form.css";

export const Form = () => {
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
      <h3 className="form__title title2">Send me an email</h3>
      <label for="name">
        Name
        <input
          required
          type="text"
          placeholder="Name"
          id="name"
          className="form__input form__input--name"
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
      </label>
      <label for="email">
        Email
        <input
          required
          type="email"
          id="email"
          placeholder="Email"
          className="form__input form__input--email"
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
        />
      </label>
      <label for="subject">
        Subject
        <input
          required
          type="text"
          id="subject"
          placeholder="Subject"
          onChange={(e) => setInfo({ ...info, subject: e.target.value })}
          className="form__input form__input--subject"
        />
      </label>
      <label for="message">
        Message
        <textarea
          required
          id="message"
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="Message"
          onChange={(e) => setInfo({ ...info, message: e.target.value })}
          className="form__input form__input--message"
        ></textarea>
      </label>

      <Button
        name="Send message"
        buttonAction={handleSubmit}
        styleButton="button--big"
        type="submit"
      />
    </form>
  );
};
