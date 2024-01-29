import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { GiWatchtower } from "react-icons/gi";
import visit from "../../helpers/data/contact-visit.json";
import "./visit-our-office.scss";

const VisitOurOffice = () => {
  return (
    <div>
        
    
    <div className="text-center mb-5" >
       <h2>Visit Our Office</h2>
        <p>Realton has more than 9,000 offices of all sizes and all potential of session</p>
       </div>
    <Container className="visit" >
       
      {visit.map((visits) => (
        <Row xs={1}>
          <Col className="card-visit"  >
            <Card >
              <Col>
              <Card.Body>
                <GiWatchtower style={{ fontSize: "90px" }} />

                
               
              </Card.Body>
              </Col>
            </Card>
            <Col className="mt-5" >
            <Card.Title >{visits.name}</Card.Title>
            </Col>
            
            <Col >
            {visits.address}
            </Col>
                 <Col >
                 {visits.phone}
                 </Col>
          </Col>
        </Row>
      ))}
    </Container>
    </div>
  );
};

export default VisitOurOffice;