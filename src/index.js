import { render } from "react-dom";
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { Card } from "./card";
import "./styles.css";

const pages = [
  ({ style }) => (
    <Card
      string="Sixth String"
      fret="5th Fret"
      note="A"
      style={style}
      backgroundColor="lightpink"
    />
  ),
  ({ style }) => (
    <Card
      string="Sixth String"
      fret="7th Fret"
      note="B"
      style={style}
      backgroundColor="lightblue"
    />
  ),
  ({ style }) => (
    <Card
      string="Sixth String"
      fret="8th Fret"
      note="C"
      style={style}
      backgroundColor="lightgreen"
    />
  ),
  ({ style }) => (
    <Card
      string="Sixth String"
      fret="10th Fret"
      note="D"
      style={style}
      backgroundColor="#1ACCCF"
    />
  ),
  ({ style }) => (
    <Card
      string="Sixth String"
      fret="12th Fret"
      note="E"
      style={style}
      backgroundColor="lightyellow"
    />
  ),
  ({ style }) => (
    <Card
      string="Sixth String"
      fret="1st Fret"
      note="F"
      style={style}
      backgroundColor="#CBC3E3"
    />
  ),
  ({ style }) => (
    <Card
      string="Sixth String"
      fret="3rd Fret"
      note="G"
      style={style}
      backgroundColor="#FFD580"
    />
  ),
];

export default function App() {
  const [index, set] = useState(0);

  const onClick = useCallback(() => set((state) => (state + 1) % 7), []);

  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return (
          <>
            <Page key={key} style={props} />
          </>
        );
      })}
    </div>
  );
}

render(<App />, document.getElementById("root"));
