import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Socials from './Socials';
import { Button } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import cv from '../assets/RenosKerkidesCV.pdf';

const Homepage = () => {
  return (
    <Container fluid className="home-section" id="home">
    {/* Intro Section */}
    <Intro />
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
