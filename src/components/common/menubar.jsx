import React from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import { CiUser } from "react-icons/ci";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Menubar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="bg-white ">
      <Container>
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
              <Image src="/images/logo.png" alt={config.project.name} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
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
            <div className="mt-2 me-2">
              <CiUser /> Login/Register
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
