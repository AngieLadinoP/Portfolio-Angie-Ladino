import React from "react";
import "./button.css";

export const Button = (props) => {
  const { name, buttonAction, styleButton, type } = props;
  const handleOnClick = (e) => {
    e.preventDefault();
    buttonAction();
  };
  return (
    <button
      type={type}
      className={
        styleButton === "button--small"
          ? "button--animated button--small"
          : styleButton === "button--big"
          ? "button--animated button--big"
          : "button--animated"
      }
      onClick={handleOnClick}
    >
      {name}
    </button>
  );
};
