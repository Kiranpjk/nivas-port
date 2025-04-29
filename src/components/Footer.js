import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Teja Nivas</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Teja Nivas</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/tejanivasmanda"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:mandatejanivas475@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/teja-nivas-manda-038271257"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+91 9392137198"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
