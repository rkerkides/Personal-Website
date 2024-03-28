import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/Profile-removebg.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillFacebook,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Homepage2() {
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
                (INSERT ICONS OF LANGUAGES AND FRAMEWORKS HERE)
              <br />
              <br />
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
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="turquoise">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <Link to={"https://github.com/rkerkides"}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.facebook.com/Renosker/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                    <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/renos-kerkides-05b4891b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/renosker/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Homepage2;
