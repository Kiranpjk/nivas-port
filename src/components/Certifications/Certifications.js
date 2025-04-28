import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCard from "./CerticationsCards";
import Particle from "../Particle";
import CipherSchools from "../../Assets/Certifications/CipherSchools.png";
import PHP from "../../Assets/Certifications/PHP.png";
import SQL from "../../Assets/Certifications/SQL.png";

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
              title="Building Web Applications in PHP"
              description="Offered by the University of Michigan via Coursera, this certification demonstrates proficiency in building dynamic web applications using PHP. Covered topics include forms, sessions, MySQL integration, and security practices."
              certLink="/Certifications/PHP.png"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={SQL}
              isBlog={false}
              title="SQL for Data Science"
              description="Completed on Coursera through the University of California, this course covered SQL basics, JOIN operations, filtering, aggregations, and data analysis techniques essential for data-driven roles."
              certLink="/Certifications/SQL.png"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationsCard
              imgPath={CipherSchools}
              isBlog={false}
              title="Data Structures & Algorithms using C++"
              description="Certified by CipherSchools, this course focused on fundamental and advanced Data Structures and Algorithms in C++. Covered topics include arrays, linked lists, stacks, queues, trees, and complexity analysis."
              certLink="/Certifications/CipherSchools.png"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
