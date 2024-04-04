import React from 'react';
import TypingEffect from './TypingEffect';
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePic from '../assets/Profile.webp';
import About from './About';
import Projects from './Projects';
import Socials from './Socials';
import { Button } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import cv from '../assets/RenosKerkidesCV.pdf';
import { px } from 'framer-motion';

const Homepage = () => {
  return (
    <Container fluid className="home-section" id="home">
    <Container className="home-content">
      <Row>
        <Col md={7} className="home-header">
          <h1 className="heading-name">
            HI, MY NAME IS<strong className="main-name"> RENOS!</strong>
          </h1>
          <div style={{ padding: 50, textAlign: "left", whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            <TypingEffect />
          </div>
        </Col>
        <Row>
          <Col md={10} style={{ paddingBottom: 20 }}>
            <div className="image-container">
              <img
                src={ProfilePic}
                alt="Profile Picture"
                className="img-fluid profile-picture"
              />
              {/* Line below the image */}
              <hr className="image-divider" />
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
    <div className='background-shade'>
      <Row>
        <Col>
        {/* About Section */}
        <About />
        </Col>
      </Row>
      <Row>
        <Col>
        {/* Projects Section */}
        <Projects />
        </Col>
      </Row>
      <Row>
        <Col>
        {/* Socials Section */}
        <Socials />
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <div className='resume'>
        {/* Download CV Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={cv}
            target="_blank"
            style={{ maxWidth: "300px" }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AiOutlineDownload />
            &nbsp;Download CV
            </span>
          </Button>
        </Row>
      </div>
      
        <br/>
        <br/>
        <br/>
    </div>
  </Container>
  
      
  );
};

export default Homepage;
