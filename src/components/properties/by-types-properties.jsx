import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa';
import { MdApartment } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { GiVillage } from "react-icons/gi";
import { MdOutlineBungalow } from "react-icons/md";
import "./by-types-properties.scss";


const cardData = [
  {
    title: 'Houses',
    content: '33 Properties',
    icon: <FaHome />
  },
  {
    title: 'Apartments',
    content: '21 Properties',
    icon: <MdApartment />
  },
  {
    title: 'Offices',
    content: '85 Properties',
    icon: <RiHomeOfficeLine />
  },
  {
    title: 'Villas',
    content: '15 Properties',
    icon: <GiVillage />
  },
  {
    title: 'Bungalows',
    content: '21 Properties',
    icon: <MdOutlineBungalow />
  }
];

const ByTypesProperties = ({ title, content, icon }) => {
  return (
    

        <Container className='by-types-properties '>
          <div >
        <h2>Explore Properties</h2>
        <p>By Types</p>
        </div>
            <Row className='g-5' xs={2} sm={2} md={3} lg={5} >
                {cardData.map((card, index) =>(
                    <Col>
                    <Card key={index}>
                       <Card.Body className='icon'> {card.icon}
                       
                       </Card.Body>
                       <Card.Body>
                       <Card.Title>{card.title}</Card.Title>
                        <Card.Subtitle>{card.content}</Card.Subtitle>
                       </Card.Body>
                    </Card>
                </Col>
                ))}
                
            </Row>
        </Container>
   
  )
}

export default ByTypesProperties