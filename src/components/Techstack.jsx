import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,
  DiBootstrap,
  DiSqllite,
} from "react-icons/di";
import { SiPostgresql, SiTypescript, SiRedis, SiExpo } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

function Techstack() {
  const techs = [
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "ReactJS and React Native" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiDjango />, name: "Django" },
    { icon: <BiLogoSpringBoot />, name: "Spring Boot" },
    { icon: <DiBootstrap />, name: "Bootstrap" },
    { icon: <DiSqllite />, name: "SQLite" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiExpo />, name: "Expo" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>}
        >
          <Col xs={4} md={2} className="tech-icons">
            <div className="icon-container">{tech.icon}</div>
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Techstack;
