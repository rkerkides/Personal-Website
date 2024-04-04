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
        <Row className="justify-content-center position-relative">
          <Col xs={8} sm={6} md={5} lg={4} xl={3}>
          <Button
            variant="primary"
            href={cv}
            target="_blank"
            className="w-100 text-center"
          >
            <span className="d-flex align-items-center justify-content-center gap-1">
              <AiOutlineDownload />
              Download CV
            </span>
          </Button>
        </Col>
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
