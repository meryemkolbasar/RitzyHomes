import React from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import "./about-us.scss"


const AboutUs = () => {
  return (
    <div className='container'>
      <Container>
        <Row>
          <div className="about-us">
            <Col>About Us</Col>
          </div>
          <Col lg={6}>
            <Image src="./images/home.png" className="img-fluid" />
          </Col>
          <Col lg={6} className='mt-3'>
            <h2>We're on a Mission to Change View of Real Estate Field</h2>
            <p style={{ fontWeight: "bold" }}>
              At the heart of our vision lies a resolute commitment to transform
              the landscape of the real estate industry. We're not just a
              company; we're on a mission to change the very essence of how real
              estate is perceived and experienced. Our journey is defined by
              innovation, transparency, and a relentless pursuit of excellence.
              With a bold and forward-thinking approach, we seek to
              revolutionize the traditional norms of the real estate field,
              making it more accessible, efficient, and customer-centric. Our
              aspiration is to shape a future where buying, selling, or
              investing in real estate is a seamless and empowering experience
              for all. Join us on this transformative journey as we rewrite the
              narrative of real estate.
            </p>
           <div className="d-flex mt-4 text-center ms-5">
           <div>
              <FaRegCircle style={{fontSize:"60px", marginBottom:"10px",color:"gray",borderRadius:"30px", backgroundColor:"gray"}} />
              <br />
             <p> Modern Architect</p>
            </div>
            <div className="ms-5">
              <FaRegCircle style={{fontSize:"60px",marginBottom:"10px",color:"gray", borderRadius:"30px", backgroundColor:"gray"}} />
              <br />
             <p> Green Building</p>
            </div>
           </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs