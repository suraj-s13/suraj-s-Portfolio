import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import csilogo from "../../Assets/Projects/csilogo.png";
import iotlogo from "../../Assets/Projects/iotlogo.png";
import gcplogo from "../../Assets/Projects/gcplogo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Internships and Personal Project </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotlogo}
              title="IOT DEVELOPER INTERN"
              description="Creating and Training CNN models from scratch and with transfer learning, tuning hypermeters, trying hypermeters, trying multiple methods in order get good accuracy."
              ghLink="https://iotiot.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcplogo}
              isBlog={false}
              title="Google Cloud Training"
              description="Google Cloud Facilitator - I got a hands-on practice of various interesting google cloud concepts like BigQuery, Kubernetes, Google Assistant, Blockchain, Machine learning, Application development and many more."
              ghLink="https://lnkd.in/gyJ7mgim"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csilogo}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://csiindia.org/"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
