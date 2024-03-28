import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/NoBG.png";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";
import Socials from "./Socials";

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
              With both a 
              <i>
                <b className="turquoise"> BSc in Business Psychology from Loughborough University </b>
              </i>, as well as an 
              <i>
                <b className="turquoise"> MSc in Software Development from the University of Glasgow </b>
              </i>
              , I try to bring a unique perspective to tech, blending human insights 
              with cutting-edge programming!
              <br />
              <br />I feel most at home when programming in
              <i>
                <b className="turquoise"> Java </b>
              </i>
              but I am comfortable with a wide range of languages and frameworks:
              <br />
              <br />
            </p>
            <Techstack />
            <p className="home-about-body">
              I'm naturally curious and always looking to learn more about stuff; tech-related or otherwise!
              <br />
              <br />
              Currently fascinated by, and trying to learn more about
              <i>
                <b className="turquoise"> Web Development, Artificial Intelligence </b> and
                {" "}
                <b className="turquoise">
                  Augmented Reality.
                </b>
              </i>
              <br />
              <br />
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
