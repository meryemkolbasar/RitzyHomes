import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./error401.scss";

const Error401 = () => {
  return (
    <Container>
      <Row className="g-5">
        <div className="page-content">
          <Col md={6} className="text-start">
            <Image
              src="images/errors/401.png"
              alt="401"
              className="error401-image"
            />
          </Col>
          <Col md={6}>
            <Card className="text-center error401 border-0">
              <h1 className="error401-title">
                Sorry you are not authorized to access.
              </h1>
              <p className="error-message">
                Please check your login credentials or contact the administrator
              </p>
              <br />
              <Col md={7}>
                <Link
                  to="/login"
                  className="text-center error401-button"
                  style={{ textDecoration: "none" }}
                >
                  LOGOUT
                </Link>
              </Col>
            </Card>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Error401;
