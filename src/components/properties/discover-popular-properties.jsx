import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import "./discover-popular-properties.scss";

const discoverData = [
  {
    id: 1,
    title: "Luxury villa in Central Park",
    desc: "Pendik, İstanbul",
    image: "banner.png",
    price: "$1500,00",
  },
  {
    id: 2,
    title: "Luxury villa in Central Park",
    desc: "Pendik, İstanbul",
    image: "banner.png",
    price: "$1500,00",
  },
  {
    id: 3,
    title: "Luxury villa in Central Park",
    desc: "Pendik, İstanbul",
    image: "banner.png",
    price: "$1500,00",
  },
  {
    id: 4,
    title: "Luxury villa in Central Park",
    desc: "Pendik, İstanbul",
    image: "banner.png",
    price: "$1500,00",
  },
  {
    id: 5,
    title: "Luxury villa in Central Park",
    desc: "Pendik, İstanbul",
    image: "banner.png",
    price: "$1500,00",
  },
  {
    id: 6,
    title: "Luxury villa in Central Park",
    desc: "Pendik, İstanbul",
    image: "banner.png",
    price: "$1500,00",
  },
];

const DiscoverPopularProperties = ({ id, title, desc, image }) => {
  return (
    <div className="discover-properties">
      <Container>
        <h2>Discover Popular Properties</h2>
        <p style={{ color: "orange", fontWeight: "bold" }}>
          Featured Properties
        </p>
        <Row className="g-5" xs={1} sm={1} md={2} lg={3} xl={3}>
          {discoverData.map((card, index) => (
            <Col>
              <Card key={index} className="card">
                <Card.Body>
                  {" "}
                  <div className="text-end icon">
                    <IoMdHeartEmpty />
                  </div>
                  <Card.Img src={`/images/discoverproperties/${card.image}`} />
                  <div className="title-subtitle">
                    <Card.Title>
                      <div>{card.title}</div>
                      <div>{card.desc}</div>
                    </Card.Title>
                    <Card.Subtitle>
                      <div className="price">{card.price}</div>
                    </Card.Subtitle>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverPopularProperties;
