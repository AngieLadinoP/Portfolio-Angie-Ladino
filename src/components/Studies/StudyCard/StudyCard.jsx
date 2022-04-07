import React from "react";
import "./studyCard.css";
export const StudyCard = (props) => {
  const { name, place, time } = props;
  return (
    <ul className="studies__items">
      <li className="text studies__item--name">{name}</li>
      <li className="text studies__item--place">{place}</li>
      <li className="text studies__item--time">{time}</li>
    </ul>
  );
};
