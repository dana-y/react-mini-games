"use client";
import React from "react";

const TetrisBox: React.FC = () => {
  const [playing, setPlaying] = React.useState(false);
  return (
    <>
      {/* button */}
      <button onClick={() => setPlaying(true)}>start</button>
      <button onClick={() => setPlaying(false)}>end</button>
      <div
        style={{
          width: "300px",
          height: "600px",
          border: `1px solid ${playing ? "tomato" : "black"}`,
          borderRadius: "8px",
        }}
      ></div>
    </>
  );
};

export default TetrisBox;
