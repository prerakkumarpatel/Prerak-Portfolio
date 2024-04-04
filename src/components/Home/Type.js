import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "CX Specialist @ Neo Financial",
          " Software Developer",
          "MERN Stack Specialist",
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
