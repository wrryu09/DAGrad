import React from "react";
import "./card.css";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className="w-10/12 relative my-40 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" />
        <div className="flip-card-back" />
      </div>
    </div>
  );
};

export default Card;
