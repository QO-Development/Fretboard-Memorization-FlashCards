import React from "react";
import { animated } from "react-spring";

export const Card = ({ string, fret, note, backgroundColor, style }) => {
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <animated.div
      style={{ ...style, background: backgroundColor, ...cardStyles }}
    >
      <h1 style={{ fontSize: 48 }}>{string}</h1>
      {note}
      <h1 style={{ fontSize: 48 }} className="fade-in-text" id="fade-in-text">
        {fret}
      </h1>
    </animated.div>
  );
};
