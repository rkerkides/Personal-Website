import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TypingEffect from './TypingEffect'
import ProfilePic from '../assets/Profile.webp';

const Intro = () => {
  return (
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
  )
}

export default Intro
