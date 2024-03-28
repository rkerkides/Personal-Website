import React from 'react';
import TypingEffect from './TypingEffect';
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePic from '../assets/Profile-removebg.png';
import About from './About';

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
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
    </div>
  </Container>
  
      
  );
};

export default Homepage;
