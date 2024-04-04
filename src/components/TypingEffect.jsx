import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

function TypingEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const typingEffectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (typingEffectRef.current) {
      observer.observe(typingEffectRef.current);
    }

    return () => {
      if (typingEffectRef && typingEffectRef.current) {
        observer.unobserve(typingEffectRef.current);
      }
    };
  }, [typingEffectRef]);


  return (
    <div ref={typingEffectRef} className="typewriter-container">
      {isVisible && (
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "From Nicosia, Cyprus",
              "Business Psychology BSc",
              "Software Development MSc",
              "University of Glasgow",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 20,
          }}
        />
      )}
    </div>
  );
}

export default TypingEffect;

