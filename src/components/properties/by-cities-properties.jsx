import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./by-cities-properties.scss";

const cardCities = [
  {
    city: "İstanbul",
    content: "820 Properties",
  },
  {
    city: "İzmir",
    content: "320 Properties",
  },
  {
    city: "Antalya",
    content: "80 Properties",
  },
  {
    city: "Bursa",
    content: "78 Properties",
  },
  {
    city: "Ankara",
    content: "410 Properties",
  },
];

const ByCitiesProperties = ({ city, content }) => {
  return (
    

      <Container className="by-cities-properties">
        <div >
      <h2>Explore Properties</h2>
      <p>By Cities</p>
      </div>
        <Row className="g-5" xs={2} sm={2} md={3} lg={5}>
          {cardCities.map((card, index) => (
            <Col>
              <Card key={index}>
                <Card.Body>
                  <Card.Title>{card.city}</Card.Title>
                  <Card.Subtitle>{card.content}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    
  );
};

export default ByCitiesProperties;
