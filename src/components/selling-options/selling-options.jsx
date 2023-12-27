import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaRecycle, FaSalesforce } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import "./selling-options.scss";

const SellingOptions = () => {
  return (
    <div className="selling-options">
      <Container>
        <Row>
          <Col md={12} lg={6} className="selling">
            <h2>Let’s Find The Right Selling Option For You</h2>
            <div className="d-flex mt-3">
              <div className="icon-1">
                <FaSalesforce />
              </div>
              <div>
                <h5>Tech-Driven Marketing </h5>
                <p>
                  Real estate is embracing technology with virtual tours, 3D
                  models, and blockchain transactions.
                </p>
              </div>
            </div>
            <div className="d-flex  mt-3">
              <div className="icon-2">
                <FaRecycle />
              </div>
              <div>
                <h5>Sustainability Matters</h5>
                <p>
                  Green building practices and eco-friendly features are gaining
                  popularity for environmentally conscious buyers
                </p>
              </div>
            </div>
            <div className="d-flex  mt-3">
              <div className="icon-3">
                <GrSecure />
              </div>
              <div>
                <h5>Remote Work Impact</h5>
                <p>
                  Changing work patterns are reshaping housing preferences,
                  favoring suburban and urban mixed use developments.
                </p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <Image src="./images/kitchen.jpg" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SellingOptions;
