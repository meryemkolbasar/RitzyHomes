import React from "react";
import { Container, Image, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { config } from "../../helpers/config";
import { CiUser } from "react-icons/ci";
import { FaArrowRightToBracket } from "react-icons/fa6";
import Menu from "./menu";

const Menubar = () => {
  return (
    <Navbar expand="lg">
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
              <Menu className="justify-content-center flex-grow-1 pe-3"/>
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
