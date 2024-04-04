import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <div>
      <Row>
          <Col md={12} className="home-about-social">
            <h4>
              <span className="turquoise">Connect </span>with me!
            </h4>
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
    </div>
  )
}

export default Socials
