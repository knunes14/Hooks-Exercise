import React, { useState } from "react";
import backOfCard from "./back.png";
import useFlip from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, setIsFlipped] = useFlip(true);
  const flipCard = () => {
    setIsFlipped(isFlipped => !isFlipped);
  };
  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
