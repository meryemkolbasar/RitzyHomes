import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { PiPhoneCall } from "react-icons/pi";
import "./need-help.scss"

const NeddHelp = () => {
  return (
    <div className="need-help">
      <Container>
        <Row>
          <Col md={12} lg={6} className="text-center">
            <h2>Need help? Talk to our expert .</h2>
            <h6>
            Talk to our experts or Browse through more properties.
            </h6>
            
          </Col>
          <Col sm={6} md={12} lg={6} className='button d-flex'>
          <Button className="btn btn-light outline text-black" style={{borderRadius:"30px", fontSize:"20px", height:"50px", border:"1px solid black", width:"200px"}} >Contact Us <MdOutlineArrowOutward style={{fontSize: "35px"}} /></Button>
          <Button className='btn btn-danger outline text-white' style={{marginLeft:"30px", borderRadius:"30px", fontSize:"20px", height:"50px", width:"200px"}}> <PiPhoneCall style={{fontSize: "35px"}} /> Contact Us</Button>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NeddHelp