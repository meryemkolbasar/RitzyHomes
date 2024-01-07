import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./error404.scss";

const Error404 = () => {
  return (
    <Container>
      <Row className="g-5">
        <div className="page-content">
          <Col md={6} className="text-start">
            <Image
              src="images/errors/404.png"
              alt="404"
              className="error404-image"
            />
          </Col>
          <Col md={6}>
            <Card className="text-center error404 border-0">
              <h1 className="error404-title">
                Oops! It looks like you're lost.
              </h1>
              <p className="error-message">
                The page you're looking for isn't available.Try to search again
                or use the go to:
              </p>
              <br />
              <Col md={3}>
                <Link to="/" className="text-center error404-button" style={{textDecoration: 'none'}}>
                  Go to Home Page
                </Link>
              </Col>
            </Card>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Error404;
