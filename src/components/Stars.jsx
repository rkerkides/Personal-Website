import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function Stars() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Pass the engine instance to loadSlim
      setInit(true); // Set init to true once the particles library is loaded
    });
  }, []);

  const options = {
    // Particles configuration
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: false,
        opacity: 0.03,
      },     
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Adds a particle on click
        },
      },
      modes: {
        push: {
          particles_nb: 4, // Number of particles to add on click
        },
        repulse: {
          distance: 100, // Distance from cursor repulse effect is detected
          duration: 0.4, // Speed of the effect
        },
      },
    },    
    retina_detect: true,
  };

  return init ? <Particles id="tsparticles" options={options} /> : null;
}

export default Stars;