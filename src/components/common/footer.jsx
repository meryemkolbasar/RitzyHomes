import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import Menu from "./menu";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            {" "}
            <Link to="/">
              <Image src="/images/logo.png" alt={config.project.name} />
            </Link>
            <p> {config.project.description} </p>
          </Col>
          <Col>
            <h3>Quick Links</h3>
      
              <Menu  className="flex-column"/>

          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
