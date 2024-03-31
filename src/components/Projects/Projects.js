import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DivvyUp"
              description="It designed to simplify and elevate your money management experience"
              ghLink="https://github.com/VikashSingh0007/DivvyUP"
              demoLink="https://youtu.be/AMyt_wwuDxI?si=FLYCIgat2F0YWbOh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MiracleBox"
              description="An event manager app with data tracking for communities to register it’s upcoming /past events"
              ghLink="https://github.com/VikashSingh0007/MiracleBox"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Club-Connect"
              description="Gathering of all intracollege students."
              ghLink="https://github.com/VikashSingh0007/Club-Connect"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="College_Diaries"
              description="An open blogging web app where we create and update blogs . We can use filters on blogs according to different
              colleges ."
              ghLink="https://github.com/VikashSingh0007/College_Diaries"
                          
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
