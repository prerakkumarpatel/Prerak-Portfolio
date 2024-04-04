import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer  @ Neo Financial",
          "System Analyst",
          "MERN Developer",
          "Enthusiastic Learner",
          "Ex Navodayan",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
