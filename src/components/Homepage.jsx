import React, { useEffect, useState } from 'react';
import profileImage from '../assets/Profile.webp';
import TypingEffect from './TypingEffect';
import Stars from './Stars';
import { WavyBackground } from './ui/wavy-background';
import { AuroraBackground } from './ui/aurora-background';

const Homepage = () => {

  return (
      <div className='home-content'>
        {/* Profile Section */}
        <section className="profile-section" style={{ margin: '0 auto', maxWidth: '1200px' }}>
          <TypingEffect />
        </section>

        <div>
            <WavyBackground
              className="enhanced-inner-content" // More descriptive class name for inner content styling
              containerClassName="enhanced-container" // Descriptive class name for the container for better styling
              colors={['#f472b6', '#fb923c', '#facc15', '#a3e635', '#2dd4bf']} // Colors reminiscent of the aurora
              waveWidth={70} // A bold appearance
              backgroundFill="transparent" // To let underlying content show through
              blur={20} // A soft, ethereal look
              speed="very slow" // A calm, gentle motion
              waveOpacity={0.5} // A noticeable yet subtle effect
            ></WavyBackground>
        </div>

        

      {/* Intro Section */}
      <section id="intro">
        <div className="inner">
          <header className="major">
            <h2>My background</h2>
          </header>
          <p>
          With a background in Business Psychology from Loughborough University, 
            I try to bring a unique perspective to tech, blending human insights with cutting-edge 
            programming. I specialise in Java, but have also worked with Python, JavaScript, C#, Kotlin,
             and C, and I'm always eager to tackle problems with a multidisciplinary approach. 
             Whether it's developing web applications with Spring Boot/Django and React or diving deep into 
            algorithms and data structures, I love creating solutions that are as intuitive as they 
            are effective. I'm always on the lookout for opportunities to grow and collaborate, aiming to make software 
            that doesn't just work well but also makes life a bit easier and more enjoyable for everyone!
          </p>

          <div className="center-content">
            <a href="/contact/" className="connect-button"><b>Let's connect and see what we can build together!</b></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
