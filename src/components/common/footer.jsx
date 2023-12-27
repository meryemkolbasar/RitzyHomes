import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import Menu from "./menu";
import "./footer.scss";
import ContactMenu from "./contact-menu";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-5">
          <Col md={12} lg={6} xl={6}>
            {" "}
            <Link to="/">
              <Image src="/images/logo-white2.png" alt={config.project.name} />
            </Link>
            <p> {config.project.description} </p>
            <div className="button" lg={4}>
            <Button className="btn btn-light outline text-black" style={{borderRadius:"15px", fontSize:"20px", height:"50px", border:"1px solid black", width:"170px"}}>App Store <FaAppStoreIos style={{fontSize:"30px", backgroundColor:"white"}}/> </Button>
            <Button className="btn btn-light outline text-black" style={{marginLeft:"10px" ,borderRadius:"15px", fontSize:"20px", height:"50px", border:"1px solid black", width:"170px"}}>Google Play <FaGooglePlay style={{fontSize:"30px"}} /> </Button>
            </div>
          </Col>
          <Col  sm={12} md={4}  lg={3}>
            <h3>Quick Links</h3>

            <Menu className="flex-column" />
          </Col>
          <Col  sm={12} md={4}  lg={3}>
          <h3>Contact Us</h3>
           <ContactMenu/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
