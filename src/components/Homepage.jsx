import React from 'react';
import TypingEffect from './TypingEffect';
import Stars from './Stars';
import { WavyBackground } from './ui/wavy-background';
import { AuroraBackground } from './ui/aurora-background';

const Homepage = () => {
  return (
      <AuroraBackground className="aurora-background" showRadialGradient={true} style={{ padding: '0 4rem' }}>
        {/* Adding padding to the AuroraBackground */}
        <div className='home-content' style={{ margin: '0 auto', maxWidth: '1200px' }}>
          {/* Profile Section */}
          <section className="profile-section">
            <TypingEffect />
          </section>

          {/*}
          <div>
              <WavyBackground
                className="enhanced-inner-content"
                containerClassName="enhanced-container"
                colors={['#f472b6', '#fb923c', '#facc15', '#a3e635', '#2dd4bf']}
                waveWidth={70}
                backgroundFill="transparent"
                blur={20}
                speed="very slow"
                waveOpacity={0.5}
              ></WavyBackground>
          </div>
          */}
          

          {/* Intro Section */}
          <section id="intro" style={{ padding: '2rem 0' }}>
            {/* Added padding to the intro section */}
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
      </AuroraBackground>
  );
};

export default Homepage;
