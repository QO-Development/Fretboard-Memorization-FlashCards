import { render } from "react-dom";
import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>
      <h1 style={{ fontSize: 24 }}>Sixth String</h1>
      <h1 style={{ fontSize: 24 }}>5th Fret</h1>A
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      C
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "#FFCCCB" }}>D</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightyellow" }}>
      E
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "#CBC3E3" }}>F</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "#FFD580" }}>G</animated.div>
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
