import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/LogoPlaque.webp";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="turquoise"> ME </span>
            </h1>
            <p className="home-about-body">
              Hi there! I’m a recent
              <i>
                <b className="turquoise"> MSc Software Development </b>
              </i> graduate from the <b className="turquoise"> University of Glasgow</b>, where I had the honour of receiving the
              <i>
                <b className="turquoise"> IT+ Project Prize</b>
              </i> for my MSc project. Before that, I studied
              <i>
                <b className="turquoise"> Business Psychology </b>
              </i> at <b className="turquoise"> Loughborough University</b>, so I bring a blend of human understanding and tech skills to everything I do.
              <br />
              <br />
              I’m passionate about building software that genuinely makes a difference, and I enjoy working across a range of languages and tools. 
              From 
              <i>
                <b className="turquoise"> full-stack web development </b>
              </i>
               to 
               <i>
                <b className="turquoise"> mobile apps</b>
              </i>
              , I love turning ideas into practical, user-friendly applications.
              <br />
              <br />
            </p>
            <Techstack />
            <p className="home-about-body">
                Driven by a deep curiosity, I am continually learning more about              <i>
                <b className="turquoise"> Web and Mobile Development, AI,</b> and
                <b className="turquoise"> Augmented Reality</b>.
              </i>
              <br />
              <br />
              I’m excited to bring my skills, curiosity, and a fresh perspective to a team that’s ready to create something amazing!
            </p>
          </Col>
          <Col md={4} className="Logo">
            <Tilt>
              <img src={Logo} className="img-fluid" alt="logo" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
