import React from "react";
import Typewriter from "typewriter-effect";

function TypingEffect() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "I am an aspiring software developer from Nicosia, Cyprus",
            "Working towards a Software Development MSc at the University of Glasgow",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
}

export default TypingEffect;
