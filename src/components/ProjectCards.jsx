import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  // Style object for Card.Img
  const imgStyle = {
    width: '100%', // Width is set to 100% to match the card's width
    height: 'auto', // Adjust height to 'auto' to maintain the aspect ratio
    objectFit: 'contain', // 'contain' will ensure the whole image is visible within the container without being cut off
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={imgStyle} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Card.Title style={{ color: "#6ed0ed" }}>
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "centre", flex: 1, marginBottom: 20}}>
          {props.description}
        </Card.Text>
        <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', justifyContent: 'center' }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <BsGithub />
              GitHub
            </span>
          </Button>
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <CgWebsite />
                Demo
              </span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
