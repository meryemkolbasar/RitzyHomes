import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Map from "./map";
import ContactForm from "./contact-form";
import "./contact.scss";
import ContactText from "./contact-text";

const Contact = () => {
  return (
    <div  >
      <Map />
      <Container className="contact">
        

        <Card className="formx">
          <Card.Body>
            <Row>
              <Col>
                <ContactForm />
              </Col>
              
            </Row>
          </Card.Body>
        </Card>
        <Card className="text" >
          <Card.Body>
            <Row>
            <Col>
              <ContactText />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        
      </Container>
    </div>
  );
};

export default Contact;