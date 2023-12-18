import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import Menu from "./menu";
import "./footer.scss";
import ContactMenu from "./contact-menu";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-5">
          <Col sm={6} md={4} lg={4}>
            {" "}
            <Link to="/">
              <Image src="/images/logo-white2.png" alt={config.project.name} />
            </Link>
            <p> {config.project.description} </p>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <h3>Quick Links</h3>

            <Menu className="flex-column" />
          </Col>
          <Col sm={6} md={4} lg={4}>
          <h3>Contact Us</h3>
           <ContactMenu/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
