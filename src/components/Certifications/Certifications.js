import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCard from "./CerticationsCards";
import Particle from "../Particle";
import CipherSchools from "../../Certifications/CipherSchools.png";
import PHP from "../../Certifications/PHP.png";
import DSA from "../../Certifications/DSA JPG.jpg";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are a few certifications I’ve completed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={PHP}
              isBlog={false}
              title="Pythhon for Beginners"
              description="Offered by SkillUP, this certification demonstrates proficiency in building dynamic web applications using python. Covered topics include forms, sessions, MySQL integration, and security practices."
              certLink={PHP}
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

        
          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={CipherSchools}
              isBlog={false}
              title="Java and Data Structures & Algorithms "
              description="Certified by CipherSchools, this course focused on fundamental and advanced Data Structures and Algorithms in Java. Covered topics include arrays, linked lists, stacks, queues, trees, and complexity analysis."
              certLink={CipherSchools}
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={DSA}
              isBlog={false}
              title="Mastering Data Structures & Algorithms using C and C++"
              description="Certified by Udmey, this course focused on fundamental and advanced Data Structures and Algorithms in C++. Covered topics include arrays, linked lists, stacks, queues, trees, and complexity analysis."
              certLink={DSA}
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
