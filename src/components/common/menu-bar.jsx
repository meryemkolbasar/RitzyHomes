import React from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { config } from "../../helpers/config";
import { CiUser } from "react-icons/ci";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Menubar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="bg-white ">
      <Container style={{minWidth: "97%"}}>
        <Navbar.Brand as={Link} to="/">
          <Image src="/images/logo.png" alt={config.project.name} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainMenu" />
        <Navbar.Offcanvas
          id="mainMenu"
          aria-labelledby="offcanvas"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas">
              <Image src="/images/logo.png" alt={config.project.name} style={{width: "60px"}}/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-left flex-grow-1 pe-3" style={{fontWeight:"bold"}}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/properties">
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Privacy Policy
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
            <div className="me-1" >
              <NavLink to="/login" style={{ textDecoration: 'none' , color: 'black'}}>
                <CiUser /> Login
              </NavLink>
            </div>
            <div className="me-3">
              <NavLink to="/register" style={{ textDecoration: 'none', color: 'black' }}>
              / Register
              </NavLink>
            </div>
          </div>

            <div className="btn btn-outline-primary">
              Add Property <FaArrowRightToBracket />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      
      </Container> 
    </Navbar>
  );
};

export default Menubar;
