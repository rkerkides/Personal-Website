import React from "react";
import Typewriter from "typewriter-effect";

function TypingEffect() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Inspiring",
            "Aspiring<span style='color: white;'>*</span> software dev",
            "From Nicosia, Cyprus",
            "Software Development MSc",
            "University of Glasgow",
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
