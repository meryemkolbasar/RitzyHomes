import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <Nav {...props}>
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
    </Nav>
  );
};

export default Menu;
