import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Duelyst from "../assets/ProjectImages/DuelystClone.webp";
import LearnHub from "../assets/ProjectImages/LearnHub.webp";
import ParallelP from "../assets/ProjectImages/ParallelProcessing.webp";
import OldFolio from "../assets/ProjectImages/PortfolioOld.webp";
import SwiftFolder from "../assets/ProjectImages/SwiftFolder.webp";
import NewFolio from "../assets/ProjectImages/Portfolio.webp";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="turquoise">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Have a look at some of my most recent work!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Duelyst}
              title="Duelyst II Clone"
              description="The aim of this project was to recreate the charm of the original 
              game on Steam. With the frontend design and necessary assets already available, 
              my mission was to build a backend system that works perfectly with what's already 
              been set up, including the development of a competent AI player!"
              ghLink="https://github.com/rkerkides/Duelyst-II-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnHub}
              title="Learnhub"
              description="A web application meant to serve as a social-media with diverse topics, 
              where you can share your information, learn things, and engage in lively conversations.
              Built with Django."
              ghLink="https://github.com/zzoltan-glasgow/learnhub"
              demoLink="https://learnhub.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SwiftFolder}
              title="SwiftFolder"
              description="Born from my own personal frustration of navigating through multiple folders for specific projects, 
              SwiftFolder is a streamlined desktop application designed for effortlessly creating, organizing, and accessing 
              collections of regularly utilized directories. Built with Python and Tkinter."
              ghLink="https://github.com/rkerkides/SwiftFolder"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ParallelP}
              title="Parallel-Processing Calculator"
              description="Designed to manage and execute long-running computational tasks asynchronously, this was my first attempt at
              multi-threading techniques for concurrency. Utilizing an ExecutorService, it efficiently handles task execution across multiple threads, 
              maximizing resource utilization and improving performance for computation-intensive operations."
              ghLink="https://github.com/rkerkides/Parallel-Processing-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewFolio}
              title="This Personal Website!"
              description="Serves as a dynamic portfolio of my projects, charting my evolution as a developer. What began as a 
              simple exercise to hone my skills with React has now transformed into a long-term commitment, with plans for 
              ongoing enhancement and expansion!              "
              ghLink="https://github.com/rkerkides/Personal-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OldFolio}
              title="My Original Portfolio-site"
              description="My original portfolio before this one, developed primarily as a means to practice my skills with Django, with less of a focus on design."
              ghLink="https://github.com/rkerkides/MyPortfolioSite"
              demoLink="https://rkerkides.pythonanywhere.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
