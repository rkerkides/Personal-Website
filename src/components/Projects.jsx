import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Duelyst from "../assets/ProjectImages/DuelystClone.webp";
import LearnHub from "../assets/ProjectImages/LearnHub.webp";
import ParallelP from "../assets/ProjectImages/ParallelProcessing.webp";
import SwiftFolder from "../assets/ProjectImages/SwiftFolder.webp";
import NewFolio from "../assets/ProjectImages/Portfolio.webp";
import MindfulProgress from "../assets/ProjectImages/MindfulProgress.webp";

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
              imgPath={MindfulProgress}
              title="MindfulProgress"
              description={
                <span >
                  Awarded the <em>IT+ Project Prize</em> at the University of Glasgow for the top MSc project of the year, this closed-source platform elevates traditional therapy with ongoing, personalized mental health support. Developed using Django, ReactJS, React Native, PostgreSQL, Celery, and Redis.
                </span>
              }
              demoLink="https://mindfulprogress.netlify.app/login/"
              disableGithub={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Duelyst}
              title="Duelyst II Clone"
              description={
                <span >
                  The aim of this project was to recreate the charm of the original 
                  game on Steam. With the frontend design and necessary assets already available, 
                  my mission was to build a backend system that works perfectly with what's already 
                  been set up, including the development of a competent AI player!
                </span>
              }
              ghLink="https://github.com/rkerkides/Duelyst-II-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnHub}
              title="Learnhub"
              description={
                <span >
                  A web application meant to serve as a social-media with diverse topics, 
                  where you can share your information, learn things, and engage in lively conversations.
                  Built with Django.
                </span>
              }
              ghLink="https://github.com/zzoltan-glasgow/learnhub"
              demoLink="https://learnhub.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SwiftFolder}
              title="SwiftFolder"
              description={
                <span >
                  Born from my own personal frustration of navigating through multiple folders for specific projects, 
                  SwiftFolder is a streamlined desktop application designed for effortlessly creating, organizing, and accessing 
                  collections of regularly utilized directories. Built with Python and Tkinter.
                </span>
              }
              ghLink="https://github.com/rkerkides/SwiftFolder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ParallelP}
              title="Parallel-Processing Calculator"
              description={
                <span >
                  Designed to manage and execute long-running computational tasks asynchronously, this was my first attempt at
                  multi-threading techniques for concurrency. Utilizing an ExecutorService, it efficiently handles task execution across multiple threads, 
                  maximizing resource utilization and improving performance for computation-intensive operations.
                </span>
              }
              ghLink="https://github.com/rkerkides/Parallel-Processing-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewFolio}
              title="This Personal Website!"
              description={
                <span >
                  Serves as a dynamic portfolio of my projects, charting my evolution as a developer. What began as a 
                  simple exercise to hone my skills with React has now transformed into a long-term commitment, with plans for 
                  ongoing enhancement and expansion!
                </span>
              }
              ghLink="https://github.com/rkerkides/Personal-Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
