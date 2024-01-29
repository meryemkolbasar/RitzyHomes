import React from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const RegisterForm = () => {
  return (
    <Container>
        
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow border-0 border-top border-5 border-primary">
            <Card.Body>
              

              <Form>
                <Form.Group className="mb-3" controlId="first-name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="last-name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="last-name">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="last-name">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="last-name">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button className="w-100" type="submit">
                  Register
                </Button>
              </Form>
              <div className="mb-4 mt-4 justify-content-center text-muted fst-italic d-flex">
                If you don’t have an account.
                <Nav.Link
                  style={{ textDecoration: "underline" }}
                  as={Link}
                  to="/login"
                >
                  Login now!
                </Nav.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;