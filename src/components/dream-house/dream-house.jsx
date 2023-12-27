import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./dream-house.scss";

const DreamHouse = () => {
  return (
    <div className="dream-house">
      <Container>
        <Row className="d-flex">
          <Col md={12} lg={6} className="comment">
            <div >
            <h2>Get your dream house</h2>
            <p>
              Turn your aspirations into reality with 'Get Your Dream House
              where your perfect home becomes a possibility.
            </p>
            </div>
            <Button className="btn btn-info outline text-white" >Register Now <MdOutlineArrowOutward style={{fontSize: "45px"}} /></Button>
          </Col>
          <Col md={12} lg={6} className="text-end">
            <Image src="./images/highlight.png" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DreamHouse;
